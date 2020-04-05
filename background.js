const patchVideoUrl = "https://patchyvideo.com/be/getvideo_url.do"

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.url && request.msgType == "checkUrl") {
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

});