// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-03-13
// @description  try to take over the world!
// @author       You
// @match        https://www.zhihu.com/*
// @icon         https://www.zhihu.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 获取广告窗口
    const adView = document.querySelector('.css-11h6utu');
    
    // console.log(adView, adView.parentElement.parentElement);
    // adView.style.display = 'none';
    
    // 获取关闭按钮
    const closeBtn = document.querySelector('.css-1p094v5');
    if (closeBtn) {
        let event = new Event('click', {"bubbles":true, "cancelable":true});
        closeBtn.dispatchEvent(event);
    }

})();