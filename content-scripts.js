setInterval(() => {
    chrome.runtime.sendMessage({ msgType: 'checkUrl', url: document.URL }, (result) => {
        if (result == false) {
            chrome.runtime.sendMessage({ content: 'false' }, (result) => { console.log(false) })
        } else {
            chrome.runtime.sendMessage({ content: 'true' }, (result) => { console.log(true) })
        }

    })
}, "5000");