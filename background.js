const patchVideoUrl = "https://patchyvideo.com/be/getvideo_url.do"

const updateBadge = (status, tabId) => {
  if (status) {
    chrome.browserAction.setBadgeText({ text: '有了', tabId: tabId });
    chrome.browserAction.setBadgeBackgroundColor({ color: [0, 255, 0, 255], tabId: tabId });
  } else {
    chrome.browserAction.setBadgeText({ text: '没有', tabId: tabId });
    chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255], tabId: tabId });
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

  switch (request.msgType) {
    case "checkUrl":
      if (request.url) {
        fetch(patchVideoUrl, {
          body: JSON.stringify({
            url: request.url
          }),
          headers: {
            'content-type': 'application/json'
          },
          method: 'POST'
        })
          .then(response => response.json())
          .then(data => {
            if (data.status == "SUCCEED") {
              updateBadge(true, sender.tab.id)
              sendResponse(true)
            } else {
              updateBadge(false, sender.tab.id)
              sendResponse(false)
            }
          })
        return true
      } else {
        sendResponse(false)
      }
      break;
    case "updateBadge":

      break;
    default:
      sendResponse(false)
      break;
  }
});

