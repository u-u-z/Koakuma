const patchVideoUrl = "https://patchyvideo.com/be/getvideo_url.do"

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
              sendResponse(true)
            } else {
              sendResponse(false)
            }
          })
        return true
      } else {
        sendResponse(false)
      }
      break;

    default:
      sendResponse(false)
      break;
  }
});