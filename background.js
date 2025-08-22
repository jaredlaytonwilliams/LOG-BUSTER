chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "prettifyLogs",
    title: "Prettify Logs",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "prettifyLogs" && info.selectionText) {
    try {
      const parsed = JSON.parse(info.selectionText);
      const pretty = JSON.stringify(parsed, null, 2);

      // Store it so popup can read it
      chrome.storage.local.set({ lastLogs: pretty });

      // Optionally notify user
      chrome.action.openPopup();
    } catch (e) {
      chrome.storage.local.set({ lastLogs: "Could not parse JSON: " + e.message });
      chrome.action.openPopup();
    }
  }
});
