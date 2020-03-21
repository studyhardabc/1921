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
                url:'js/register.php',
                dataType:'json',
                data:{
                    username: $('.inp1').val(),
                    passwork: $('.inp2').val(),
                },
                success: function (result){
                    if(result.message == '登陆成功'){
                        $('.div2').css('color','blue');
                        localStorage.removeItem('username1');
                        if($('.inp5').prop('checked')){
                            var name = $('.inp1').val();
                            var pass = $('.inp2').val();
                            var login = [{name:name,pass:pass}];
                            localStorage.setItem('login',JSON.stringify(login));
                            
                    
                        }else{
                            localStorage.removeItem('login');
                            var name = $('.inp1').val();
                            var pass = $('.inp2').val();
                            var login = [{name:name,pass:pass}];
                            localStorage.setItem('login2',JSON.stringify(login));

                        }
    
                    }

                
                    if(!result.code){
                        setInterval(function(){
                            location.assign("index.html");
                        } ,500)
                    }
                    $('.div2').html(result.message);
                    $('.div3').html(result.message1);
                    
                },
                error: function (msg){
                    alert(msg);
                }
            })
        })
    }

    loginAjax();


    $('.div6').prop('checked',true);

    $('.div5').click(function (){
        location.assign("login.html");
    })




    var loginArr = localStorage.getItem('login');
    if(loginArr){
        var loginArr1 = JSON.parse(loginArr);
        for(var i = 0 ; i < loginArr1.length ; i++){
            var name1 = loginArr1[i].name;
            var pass1 = loginArr1[i].pass;
        }
        $('.inp1').val(name1);
        $('.inp2').val(pass1);
        $('.inp5').prop('checked',true);
    }






    return {
        banner:banner
    }
})