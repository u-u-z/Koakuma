chrome.runtime.sendMessage({ msgType: 'checkUrl', url: document.URL }, (result) => {
  console.log(`小恶魔说：`, result)
  if (result) {
    chrome.browserAction.setBadgeText({ text: 'new' });
    chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });Î
  }
});