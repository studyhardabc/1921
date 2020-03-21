define(["jquery"],function ($){
    function banner(){
        var timer = null;
        var iNow = 0;
        timer = setInterval(function (){
            iNow++;
            if(iNow >= $('.banner1 img').size()){
                iNow = 0;
            }
            $('.banner1 img').eq(iNow).show().siblings().hide();
        },3000)
    }

    function loginAjax(){
        $('.main3').click(function (){
            $.ajax({
                type:'get',
                url:'js/login.php',
                dataType:'json',
                data:{
                    username: $('.inp1').val(),
                    passwork: $('.inp2').val(),
                    num: $('.inp3').val()
                },
                success: function (result){
                    if(result.message == '用户名注册成功'){
                        $('.div2').css('color','blue');
                    }
                    if(!result.code){
                        setInterval(function(){
                            location.assign("register.html");
                        } ,500)
                    }
                    $('.div2').html(result.message);
                    $('.div3').html(result.message1);
                    $('.num').html(result.message2);
                    
                },
                error: function (msg){
                    alert(msg);
                }
            })
        })
    }

    loginAjax();

    function num(){
        var arr = '';
        for(var i = 0 ; i < 6 ; i++){
            arr += Math.floor(Math.random()*10);
        }
        return arr;
    }

    function btn(){
        $('.btn').click(function (){
            if(!$('.inp3').val()){
                $('.num').html('手机号不能为空').css('color','red');
            }else{
                $('.num').html(num()).css('color','red');;
            }
        })
    }

    btn();

    function div5(){
        $('.div5').blur(function (){
            if(!$('.div5').val()){
                $('.num').html('验证码不能为空').css('color','red');;
            }else if($('.div5').val() != $('.num').html()){
                $('.num').html('验证码不一致').css('color','red');;
            }else{
                $('.num').html('验证码正确').css('color','blue').css('color','blue');
            }
        })
    }

    div5();

    $('.div6').prop('checked',true);

    $('.box2').click(function (){
        location.assign("register.html");
    })

    return {
        banner:banner
    }
})