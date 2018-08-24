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
    height:50%;
}
/* 修改大小和位置 */
.code{
    width:100%;
    height:85%;
}

/* 做点3D变换 */
.code{
    transform: perspective(600px) 
    rotateY(10deg)
    translate(6%,10%);
}

/* 字体太难看了,改变一下代码的字体并高亮代码 */

#codeText {
    font-family: Consolas, 
    "Courier New";
    font-size: 13px;
}

.token.function {
    color: #61cbff;
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

/* 接下来写我的markdown简历 */
    `

    var paperStr = `
# 简历
马涛涛|137-xxxx-xxxx | xxxx@qq.com | 南京市
个人技术专栏：https://segmentfault.com/blog/mtt_web_blog | GitHub：github.com/mtt3366
生日：1995/2 | 男
在读 | 求职意向：前端开发 | 期望薪资：xxxx
## 教育经历
软件工程 本科 南京
GPA：3.6 / 4.0 (专业前5%)
## 项目 

 - 使用 Hexo 搭建博客系统（[预览链接](https://mtt3366.github.io/)|源码链接）：基于Hexo的博客
 - xxxxxxxx
 - xxxx
    `
    

    var code2 = `
/* 继续设置一下简历的样式 */
.paper{
    height:50%;
}
.paper{
    overflow: auto;
    border: 1px solid #000;
    background-color: #fff;
    width:100%;
    height:85%;
                   
    transform: perspective(600px) 
    rotateY(-10deg)
    translate(-6%,10%);
    padding:0 25px;
}

/* 接下来使用marked.js库将markdown格式改为html样式 */

    `;

    var code3 = `
/* 
谢谢观看!
谢谢观看!
谢谢观看! 
*/
    `
    var codeSpeed = 40;
    writeCode("",str,()=>{//使用回调函数
        writePaper(()=>{
            writeCode(str,code2,()=>{
                makePaperToMarkDown(()=>{
                        oneLineFadeIn(()=>{
                            writeCode(str+code2,code3);
                        });
                });
            })
        })
    });


    function writeCode(preCode,codeString,callBack) { //往左边的框里写代码,第一个参数是原来就有的代码,第二个参数是要加进去的代码,第三个参数是执行完添加代码后执行的回调函数
        var n = 0;
        var stringSit = setInterval(() => {
            n += 1;
            var newStr =preCode + codeString.substring(0, n);//以前的代码+现在的代码组成新的字符串
            $('#styleText').html(newStr); //不能用text,得用html,innerHtml

            $('.code')[0].scrollTop  = '10000';//Element.scrollTop 属性可以获取或设置一个元素的内容垂直滚动的像素数。
            var hightLightCssStr = Prism.highlight(newStr, Prism.languages.css, 'css'); //使用Prism库
            $('#codeText').html( hightLightCssStr);
            if (n >=  codeString.length) {
                window.clearInterval(stringSit);
                callBack && callBack();//加上`callBack && `防止出错,因为如果传进来的callBack为false(undefined)那么就不会执行后面的函数,就不会报错
            }
        }, codeSpeed);

    }

    function writePaper(callBack) {//写Paper
        var n = 0;
        var paperSit = setInterval(() => {
            n += 1;
            var newStr = paperStr.substring(0, n);

            $('#paperText').html(newStr);
            $('.paper')[0].scrollTop  = '10000';

            if (n >=  paperStr.length) {
                window.clearInterval(paperSit);
                callBack && callBack();
            }
        }, codeSpeed);
    }

    function makePaperToMarkDown(callBack){
        // var lineArray = paperStr.trim().split('\n');

        // // var mdstr = "";
        // var n = 0;
        // var paperSit = setInterval(() => {
        //     var nextLine = lineArray[n]+'\n';
        //     n += 1;

        //     var $nextLine = $(marked(nextLine));
            
        //     $nextLine.appendTo($('#paperText'));
        //     $nextLine.hide().offset();

        //     $nextLine.fadeIn(3000);
        //     $('.paper')[0].scrollTop  = '10000';

        //     if (n >= lineArray.length) {
        //         window.clearInterval(paperSit);
        //         callBack && callBack();
        //     }
        // }, 400);
        $('#paperText').html("");
        var lineArray = paperStr.trim().split('\n');
        for (let index = 0; index < lineArray.length; index++) {
            const element = lineArray[index];
            $oneLine = $(marked(element+'\n'));
            if($oneLine[0]){
                $oneLine[0].style.opacity = "0";
            }
        
            $oneLine.appendTo($('#paperText'));
        }

        callBack && callBack();
    }
    function oneLineFadeIn(callBack){
        var oneLineChildArray = $('#paperText').children();
        var n=0;
        var id = setInterval(() => {
            oneLineChildArray[n].style.opacity = "1";
            n+=1;
            if(n>=oneLineChildArray.length){
                window.clearInterval(id);
                callBack && callBack();
            }
        }, 200);

        
    }
}()