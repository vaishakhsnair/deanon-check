document.addEventListener("DOMContentLoaded", function() {
    updateStatus();
  });
  
  function updateStatus() {
    chrome.storage.local.get("status", function(data) {
      const statusElement = document.getElementById("status");
      const detailsElement = document.getElementById("details");
      
      statusElement.textContent = data.status || "Monitoring for deanonymization...";
      
      // Add further details if necessary
      if (data.status && data.status.includes("Suspicious IP detected")) {
        detailsElement.innerHTML = `<strong>Warning!</strong> Your Tor exit node may be compromised.<br>
                                     <strong>Action Required:</strong> Consider restarting Tor or using a new circuit.`;
      } else if (data.status && data.status.includes("Unencrypted HTTP traffic detected")) {
        detailsElement.innerHTML = `<strong>Alert!</strong> You are accessing an unencrypted HTTP site.<br>
                                     <strong>Suggestion:</strong> Avoid sharing sensitive information.`;
      } else {
        detailsElement.innerHTML = `<strong>Status:</strong> All checks are normal.`;
      }
    });
  }
  