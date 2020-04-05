const patchVideoUrl = "https://patchyvideo.com/be/getvideo_url.do"

const updateBadge = (status) => {
  if (status) {
    chrome.browserAction.setBadgeText({ text: '有了' });
    chrome.browserAction.setBadgeBackgroundColor({ color: [0, 255, 0, 255] });
  } else {
    chrome.browserAction.setBadgeText({ text: '没有' });
    chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
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
              updateBadge(true)
              sendResponse(true)
            } else {
              updateBadge(false)
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

