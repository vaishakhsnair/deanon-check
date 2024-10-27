# 🌐 deanon-check

**deanon-check** is a Firefox extension tailored for the Tor Browser, designed to monitor for potential deanonymization. By dynamically checking the browser’s current exit node against known exit node behavior and expected network patterns, deanon-check provides users with a real-time warning if any unexpected changes suggest deanonymization risks.

## ✨ Features

- 🔍 **Real-Time Deanonymization Check**  
  Continuously verifies Tor Browser’s exit node and alerts users of potential threats to their anonymity.

- 🔒 **Exit Node Comparison**  
  Monitors for discrepancies between the expected Tor exit node and the current node, flagging possible risks.

- ⚠️ **Immediate Pop-Up Alerts**  
  Displays an informative pop-up window if anomalies are detected, providing details on the current exit node and potential deanonymization issues.

## 🛠️ How It Works

1. **Exit Node Monitoring**  
   deanon-check retrieves and analyzes the exit node being used by the Tor Browser session, comparing it against known patterns and expected node lists.

2. **Dynamic IP Matching**  
   As users browse, the extension periodically rechecks the exit node to ensure it aligns with expected Tor network configurations.

3. **User Alerts**  
   If the exit node or IP behavior deviates from the expected norms, an informative pop-up appears to warn the user and provide details for further investigation.

## 🚀 Installation

1. Clone or download the repository:
   ```bash
   git clone https://github.com/yourusername/deanon-check.git
   cd deanon-check
   ```
2. Open Firefox and navigate to `about:debugging` > `This Firefox`.
3. Click on "Load Temporary Add-on" and select the `manifest.json` file in the `deanon-check` directory.

## 🖱️ Usage

1. Launch Tor Browser and install the deanon-check extension as above.
2. The extension runs in the background, and any anomalies will prompt a pop-up notification with relevant details, allowing you to take immediate action.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues, suggest features, or submit pull requests.
