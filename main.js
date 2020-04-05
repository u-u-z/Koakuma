chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    var MesSet;
    if(content == true){
        MesSet = 1;
        console.log("messet=1")
        window.alert("a");
        document.write("<center><h3>This video is not included, please move it with the permission of the author.</h3></center>");
    }else {
        MesSet = 0;
        console.log("messet=0")
        window.alert("b");
        document.write("<center><h3>TThis video has been included, go to other videos.</h3></center>");
    }
});