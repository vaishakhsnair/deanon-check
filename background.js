let trustedExitNodes = [];
let isDeanonymized = false;

function fetchCurrentTorExitIP() {
  fetch("https://check.torproject.org/api/ip")
    .then(response => response.json())
    .then(data => {
      const exitIP = data.IP;
      compareExitNodeIP(exitIP);
    })
    .catch(error => console.error("Error fetching exit IP:", error));
}

function compareExitNodeIP(exitIP) {
  if (!isValidExitNode(exitIP)) {
    isDeanonymized = true; // Set flag for deanonymization
    updatePopup("Suspicious IP detected: " + exitIP);
  } else {
    isDeanonymized = false; // Reset flag if IP is valid
    updatePopup("Your exit node is safe: " + exitIP);
  }
}

function isValidExitNode(ip) {
  return trustedExitNodes.includes(ip);
}

function fetchTrustedExitNodes() {
  fetch("https://check.torproject.org/exit-addresses")
    .then(response => response.text())
    .then(data => {
      trustedExitNodes = parseTorExitAddresses(data);
    })
    .catch(error => console.error("Error fetching exit nodes:", error));
}

function parseTorExitAddresses(data) {
  return data.split('\n')
    .filter(line => line.startsWith('ExitAddress'))
    .map(line => line.split(' ')[1]);
}

function checkForDeanonymization(details) {
  const url = new URL(details.url);

  // Detect unencrypted traffic (HTTP)
  if (url.protocol === "http:") {
    isDeanonymized = true; // Set deanonymization flag
    updatePopup("Unencrypted HTTP traffic detected: " + details.url);
  }

  // Additional checks can be added here.
}

// Set up webRequest listeners
chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    checkForDeanonymization(details);
    fetchCurrentTorExitIP();  // Check exit IP dynamically
  },
  {urls: ["<all_urls>"]},
  ["requestHeaders"]
);

// Fetch trusted exit nodes on startup
fetchTrustedExitNodes();

// Update popup content when a deanonymization event occurs
function updatePopup(message) {
  chrome.storage.local.set({status: message}); // Store message to show in popup
  chrome.browserAction.setPopup({popup: "popup.html"}); // Show the popup
}
