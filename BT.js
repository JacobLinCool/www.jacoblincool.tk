function detectBrowser(){
    var isIE = navigator.userAgent.search("MSIE") > -1;
    var isIE7 = navigator.userAgent.search("MSIE 7") > -1;
    var isFirefox = navigator.userAgent.search("Firefox") > -1;
    var isOpera = navigator.userAgent.search("Opera") > -1;
    var isSafari = navigator.userAgent.search("Safari") > -1;//Google瀏覽器是用這核心
    
   
    if (isIE7) {
        browser = '您正在使用 IE7 瀏覽器';
        browser = '請使用 Chrome 瀏覽器以獲取更好的使用體驗';
    }
    if (isIE) {
        browser = '您正在使用 IE 瀏覽器';
        browser = '請使用 Chrome 瀏覽器以獲取更好的使用體驗';
    }
    if (isFirefox) {
        browser = '您正在使用 Firefox 瀏覽器';
        browser = '請使用 Chrome 瀏覽器以獲取更好的使用體驗';
    }
    if (isOpera) {
        browser = '您正在使用 Opera 瀏覽器';
        browser = '請使用 Chrome 瀏覽器以獲取更好的使用體驗';
    }
    if (isSafari) {
        browser = '您正在使用 Safari/Chrome 瀏覽器';
        browser = '太棒了! 您正在使用 Chrome 瀏覽器';
    }
    return browser;
}
// ===== 根據瀏覽器動態改變元素大小 ====== //
var browser = detectBrowser();
alert(browser);       