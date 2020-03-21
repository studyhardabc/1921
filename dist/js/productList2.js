define(["jquery"],function ($){
    function ajax(){
        $.ajax({
            type:'get',
            url:'data/productList.json',
            success: function (json){
                for(var i = 0 ; i < json.img.length ; i++){
                    var node = $(`<div class="img2">
                    <img src="${json.img[i]}" alt="">
                    <p style="padding-top: 4px;font-weight: bold; display: inline-block;">腥红之月 烬</p>
                    <p style="padding-top: 4px;">Q币价：79.00 Q币</p>
                    <p>微信价：￥76.63</p>
                </div>
                    `)
                    $('.img1').append(node);
                }
            },
            error: function (msg){
                alert(msg);
            }
        })
    }


    function ajax2(){
        $.ajax({
            type:'get',
            url:'data/productList2.json',
            success: function (json){
                for(var i = 0 ; i < json.img.length ; i++){
                    var node = $(`<div class="goods9">
                    <img src="${json.img[i]}" alt="">
                    <p>${json.title[i]}</p>
                    <p>${json.title1[i]}</p>
                </div>
                    `)
                    $('.goods8').append(node);
                }
            },
            error: function (msg){
                alert(msg);
            }
        })
    }









    function sc_num(){
        var arr = localStorage.getItem('goods');
        var sum = 0;
        if(arr){
            var code = JSON.parse(arr);
            for(var i = 0 ; i < code.length ; i++){
                sum += code[i].num;
                $('.shopping1').html(sum);
            }
        }
    }

    function Mygoods(){
        $('.shopping ').click(function (){
            location.assign("goods.html");
        })
    }

    function lis(){
        $('.lis').click(function (){
            location.assign("index.html");
        })
    }







    // 进入页面判断用户账号
    var str2 =  localStorage.getItem('username1');
    if(!str2){
        var loginArr = localStorage.getItem('login');
        var loginArr2 = localStorage.getItem('login2');
        var register = localStorage.getItem('register');
        if(loginArr){
            var loginArr1 = JSON.parse(loginArr);
            for(var i = 0 ; i < loginArr1.length ; i++){
                var name1 = loginArr1[i].name;
            }
            $('.username').html(name1);
            $('.username1').html('退出')
        }else if(loginArr2){
            var loginArr1 = JSON.parse(loginArr2);
            for(var i = 0 ; i < loginArr1.length ; i++){
                var name1 = loginArr1[i].name;
            }
            $('.username').html(name1);
            $('.username1').html('退出')
        }else if(register){
            var loginArr1 = JSON.parse(register);
            for(var i = 0 ; i < loginArr1.length ; i++){
                var name1 = loginArr1[i].name;
            }
            $('.username').html(name1);
            $('.username1').html('退出');
        }
    }




    $('.username1').click(function (){
        var codeArr2 = localStorage.getItem('login2');
        if(codeArr2){
            var Arr2 = JSON.parse(codeArr2);
            localStorage.setItem('register',JSON.stringify(Arr2));
        }




        var username1 = '您还未登录,';
        localStorage.setItem('username1',JSON.stringify(username1));
        var str =   localStorage.getItem('username1');
        var str1 = JSON.parse(str);
        $('.username').html(str1);
        $('.username1').html('请登录');
        localStorage.removeItem('login2');
        $('.shopping1').html(0);
        // location.reload(true);
    })


    $('.username').click(function (){
        $('.register').css('display','block');
        var loginArr = localStorage.getItem('login');
        var register = localStorage.getItem('register');
        if(loginArr){
            var arr = JSON.parse(loginArr);
            for(var i = 0 ; i < arr.length ; i++){
                var name = arr[i].name;
            }
            $('.box7').html(name);
        }else if(register){
            var arr = JSON.parse(register);
            for(var i = 0 ; i < arr.length ; i++){
                var name = arr[i].name;
            }
            $('.box7').html(name);
        }
    })

    $('.register1').click(function (){
        $('.register').css('display','none');
    })

    $('.register2').click(function (){
        location.assign("http://localhost/test/day14/dist/register.html");
    })


    $('.register3').click(function (){
        var code1 = localStorage.getItem('login');
        var code2 = localStorage.getItem('register');
        if(code1){
            var arr = JSON.parse(code1);
            for(var i = 0 ; i < arr.length ; i++){
                var name = arr[i].name;
            }
            $('.username').html(name);
            $('.username1').html('退出');
            $('.register').css('display','none');
            localStorage.removeItem('username1');
            location.reload(true);
        }else if(code2){
            var arr = JSON.parse(code2);
            for(var i = 0 ; i < arr.length ; i++){
                var name = arr[i].name;
            }
            $('.username').html(name);
            $('.username1').html('退出');
            $('.register').css('display','none');
            localStorage.removeItem('username1');
            location.reload(true);
        }
    })

    var str8 =  localStorage.getItem('username1');
    if(str8){
        $('.shopping1').html(0);
    }else{
        sc_num();
    }


    var wrap11 = document.querySelector('.wrap11');
    var wrap33 = document.querySelector('.wrap33');
    var mark = document.querySelector('.mark');
    var img2 = document.querySelector('.wrap33 img');

    wrap11.onmouseenter = function (){
        mark.style.display = 'block';
        wrap33.style.display = 'block';
    }
    wrap11.onmouseleave = function (){
        mark.style.display = 'none';
        wrap33.style.display = 'none';
    }
    wrap11.onmousemove = function (ev){
        var e = ev || window.event;
        var num1 = e.clientX - wrap11.offsetLeft - 72.5;
        var num2 = e.clientY - wrap11.offsetTop - 44.5;
        if(num1 <= 0){
            num1 = 0;
        }
        if(num1 >= 103){
            num1 = 103;
        }
        if(num2 <= 0){
            num2 = 0;
        }
        if(num2 >= 61){
            num2 = 61;
        }
        mark.style.left = num1 + 'px';
        mark.style.top = num2 + 'px';

        img2.style.left = -2 * num1 + 'px'
        img2.style.top = -2 * num2 + 'px'
    }


    var src = localStorage.getItem('img');
    if(src){
        var Arr = JSON.parse(src);
         $('.wrap11').find('img').attr('src',Arr);
        $('.wrap33').find('img').attr('src',Arr);
    }


    $('.li3').click(function (){
        location.assign("productList.html");
    })






    return{
        ajax:ajax,
        ajax2:ajax2,
        sc_num:sc_num,
        Mygoods:Mygoods,
        lis:lis
    }
})