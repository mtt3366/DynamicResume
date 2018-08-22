! function () {
    var str = ` 
/* 
    这是我的动态简历
*/
/* 背景太单调了,加个背景颜色 */
.code {
    background-color: #23241f;
}
/* 加边框和内边距 */
.code {
    border: 1px solid white;
    padding: 16px;
}
/* 修改大小和位置 */
.code{
    width:50%;
    height:85%;
}

/* 做点3D变换 */
.code{
    transform: perspective(600px) 
    rotateY(10deg)
    translate(10%,10%);
}

/* 字体太难看了,改变一下代码的字体并高亮代码 */

#codeText {
    font-family: 
    Consolas, 
    "Courier New";
    font-size: 13px;
}

.token.selector {
    color: #f92672;
}

.token.punctuation {
    color: #c999ce;
}

.token.property {
    color: #a6e22e;
}

    `

    writeCode(createPaper);

    function writeCode(callBack) { //往左边的框里写代码
        var n = 0;
        var stringSit = setInterval(() => {
            n += 1;
            var newStr = str.substring(0, n);
            $('#styleText').html(newStr); //不能用text,得用html,innerHtml

            $('.code')[0].scrollTop  = '10000';//Element.scrollTop 属性可以获取或设置一个元素的内容垂直滚动的像素数。
            var hightLightCssStr = Prism.highlight(newStr, Prism.languages.css, 'css'); //使用Prism库
            $('#codeText').html(hightLightCssStr);
            if (n === str.length) {
                window.clearInterval(stringSit);
                callBack();
            }
        }, 100);

    }

    function createPaper(callBack) {
        
    }


}()