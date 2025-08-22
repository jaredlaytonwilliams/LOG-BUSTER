// Wait until popup is opened, then fetch stored logs
document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get("lastLogs", (data) => {
    const output = document.getElementById("output");
    if (data.lastLogs) {
      output.textContent = data.lastLogs;
    } else {
      output.textContent = "No logs captured yet.";
    }
  });
});