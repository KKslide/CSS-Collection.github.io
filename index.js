window.onload = function () {
    var wechat = document.querySelector('#wechat');
    var wxBtn = document.querySelector('.weixin');
    wxBtn.onmouseenter = function () {
        wechat.style.display = 'block';
    }
    wxBtn.onmouseout = function () {
        wechat.style.display = 'none';
    }
}