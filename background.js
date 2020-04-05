import { PATCHVIDEO_URL } from 'config'

let checkUrl = (url) => {
  return fetch(PATCHVIDEO_URL, {
    body: JSON.stringify({
      url: url
    }),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST'
  })
    .then(response => response.json())
  //.then(data => console.log(data))
  //.catch(error => console.error(error))
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.url && request.msgType == "checkUrl") sendResponse(checkUrl(request.url))
});