chrome.runtime.sendMessage({ msgType: 'checkUrl', url: document.URL }, (result) => {
  console.log(`小恶魔说：`,result)
  if(result){
    
  }
});