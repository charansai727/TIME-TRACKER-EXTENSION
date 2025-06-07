function getDomain(url) {
  try {
    return new URL(url).hostname.replace('www.', '');
  } catch (e) {
    console.error("Invalid URL:", url);
    return null;
  }
}

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension Installed");
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    const domain = getDomain(tab.url);
    if (!domain) return;

    chrome.storage.local.get("siteTime", (data) => {
      let siteTime = data.siteTime || {};

      if (!siteTime[domain]) {
        siteTime[domain] = 0;
      }

      siteTime[domain] += 5; // simulate 5 seconds

      chrome.storage.local.set({ siteTime }, () => {
        console.log("Updated time for", domain, siteTime[domain]);
      });
    });
  }
});
