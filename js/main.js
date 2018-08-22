! function () {
    var str = ` 
/* 
    这是我的动态简历
*/

/* 先给所有样式加个过渡 */

* {
    transition: all 1s;
}

/* 背景太单调了,加个背景颜色 */

body {
    background-color: #23241f;
}
/* 加边框和内边距 */
#codeText{
    border:1px solid red;
    padding: 16px;
}
/* 改变一下代码的字体并高亮代码 */

#codeText {
    font-family: Consolas, "Courier New", Courier, FreeMono, monospace;
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
    var n = 0;
    var stringSit = setInterval(() => {
        n += 1;
        var newStr = str.substring(0, n);
        $('#styleText').html(newStr); //不能用text,得用html,innerHtml

        var hightLightCssStr = Prism.highlight(newStr, Prism.languages.css, 'css'); //使用Prism库
        $('#codeText').html(hightLightCssStr);
        if (n === str.length) {
            window.clearInterval(stringSit);
        }
    }, 10);

    

    var $paper = $('<div></div>');
    $paper.addClass('paper');
    var $paperContent = $('<pre></pre>');
    $paperContent.attr('id', 'paperText');
    $paper.append($paperContent);
    $('.main').append($paper);

}()