define(["jquery"],function ($){
    // function ajax(){
    //     $.ajax({
    //         type:'get',
    //         url:"data/goods.json",
    //         success: function (json){
    //             var arr = localStorage.getItem('goods');
    //             if(arr){
    //                 var codeArr = JSON.parse(arr);
    //                 var newArr = [];
    //                 for(var i = 0 ; i < json.length ; i++){
    //                     for(var n = 0 ; n < codeArr.length ; n++){
    //                         if(json[i].id == codeArr[n].id){
    //                             json[i].num = codeArr[n].num;
    //                             json[i].price = codeArr[n].price;
    //                             newArr.push(json[i]);
    //                         }
    //                     }
    //                 }
    //                 for(var j = 0 ; j < newArr.length; j++){
    //                     var node = $(`<div class="main7">
    //                     <ul>
    //                         <li><input type="checkbox" class="inp1"></li>
    //                         <li><img src="${newArr[j].img}" alt=""></li>
    //                         <li>${newArr[j].title}</li>
    //                         <li>道具包</li>
    //                         <li>${newArr[j].title1}</li>
    //                         <li>永久</li>
    //                         <li class="left">-</li>
    //                         <li class="inp2">${newArr[j].num}</li>
    //                         <li class="right">+</li>
    //                         <li>无优惠</li>
    //                         <li class="price">${newArr[j].price}</li>
    //                         <li>关注</li>
    //                         <li id="${newArr[j].id}" class="rovmer">删除</li>
    //                     </ul>
    //                 </div>
    //                     `)
    //                     $('.main5').append(node);
    
    //                 }
    //             }
    //         },
    //         error: function (msg){
    //             alert(msg);
    //         }
    //     })
    // }

    


    function ajax(){
        var str3 = localStorage.getItem('username1');
        if(str3){
            $('.register').css('display','block');
            $('.shopping1').html('0');
        }else if(!str3){
            $.ajax({
                type:'get',
                url:"data/goods.json",
                success: function (json){
                    var arr = localStorage.getItem('goods');
    
                    if(arr){
                        var codeArr = JSON.parse(arr);
                        var username = localStorage.getItem('login') || localStorage.getItem('login2') || localStorage.getItem('register');
                        var username1 = JSON.parse(username);
                        var name =  username1[0].name;           
    
                        var newArr = [];
                        for(var i = 0 ; i < json.length ; i++){
                            for(var n = 0 ; n < codeArr.length ; n++){
                                if(json[i].id == codeArr[n].id && name == codeArr[n].name){
                                    json[i].num = codeArr[n].num;
                                    json[i].price = codeArr[n].price;
                                    newArr.push(json[i]);
                                }
                            }
                        }
                        for(var j = 0 ; j < newArr.length; j++){
                            var node = $(`<div class="main7">
                            <ul>
                                <li><input type="checkbox" class="inp1"></li>
                                <li><img src="${newArr[j].img}" alt=""></li>
                                <li>${newArr[j].title}</li>
                                <li>道具包</li>
                                <li>${newArr[j].title1}</li>
                                <li>永久</li>
                                <li class="left">-</li>
                                <li class="inp2">${newArr[j].num}</li>
                                <li class="right">+</li>
                                <li>无优惠</li>
                                <li class="price">${newArr[j].price}</li>
                                <li>关注</li>
                                <li id="${newArr[j].id}" class="rovmer">删除</li>
                            </ul>
                        </div>
                            `)
                            $('.main5').append(node);
        
                        }
                    }
                },
                error: function (msg){
                    alert(msg);
                }
            })
        }

    }






















    function productList(){
        $('.lis').click(function (){
            location.assign("productList.html");
        })
    }



    function left(){
        $('.main5').on('click','.main7 .left',function (){
            var id = $(this).siblings('.rovmer').attr('id');
            var code = localStorage.getItem('goods');
            var arr = JSON.parse(code);
            var username = localStorage.getItem('login') || localStorage.getItem('login2') || localStorage.getItem('register');
            var username1 = JSON.parse(username);
            var name =  username1[0].name;        
    
            for(var i = 0 ; i < arr.length ; i++){
                if(id == arr[i].id && name == arr[i].name){
                    arr[i].num--;
                    var a = arr[i].price1;
                    var b = arr[i].price;
                    var abc = b - a;
                    arr[i].price = abc;
                    if(arr[i].num == 0){
                        arr[i].num = 1;
                        arr[i].price = a;
                        alert('该商品数量为1，不能减少');
                    }
                    break;
                }
            }
            $(this).siblings('.inp2').html(arr[i].num);
            $(this).siblings('.price').html(arr[i].price);
            localStorage.setItem('goods',JSON.stringify(arr));
            sc_num();
            inp4();
        })
    }

    function right(){
        $('.main5').on('click','.main7 .right',function (){
            var id = $(this).siblings('.rovmer').attr('id');
            var code = localStorage.getItem('goods');
            var arr = JSON.parse(code);
            var username = localStorage.getItem('login') || localStorage.getItem('login2') || localStorage.getItem('register');
            var username1 = JSON.parse(username);
            var name =  username1[0].name;        
    
            for(var i = 0 ; i < arr.length ; i++){
                if(id == arr[i].id && name == arr[i].name){
                    arr[i].num++;
                    var a = arr[i].price1;
                    var b = arr[i].price;
                    var abc = b + a;
                    arr[i].price = abc;
                    break;
                }
            }
            $(this).siblings('.inp2').html(arr[i].num);
            $(this).siblings('.price').html(arr[i].price);
            localStorage.setItem('goods',JSON.stringify(arr));
            sc_num();
            inp4();
        })
    }

    function sc_num(){
        var arr = localStorage.getItem('goods');
        var sum = 0;

        if(arr){
            var code = JSON.parse(arr);
            var username = localStorage.getItem('login') || localStorage.getItem('login2') || localStorage.getItem('register');
            var username1 = JSON.parse(username);
            var name =  username1[0].name;        
    
            for(var i = 0 ; i < code.length ; i++){
                if(name == code[i].name){
                    sum += code[i].num;
                    $('.shopping1').html(sum);
                }
            }
        }
    }

    function rovmer(){
        $('.main5').on('click','.main7 .rovmer',function (){
            $(this).parents('.main7').remove();
            var id = this.id;
            var code = localStorage.getItem('goods');
            var arr = JSON.parse(code);
            var username = localStorage.getItem('login') || localStorage.getItem('login2') || localStorage.getItem('register');
            var username1 = JSON.parse(username);
            var name =  username1[0].name;
            var index = arr.findIndex(item => item.id == id && item.name == name);
            arr.splice(index,1);

            
        // arr.length == 0 ? localStorage.removeItem('goods') : localStorage.setItem('goods',JSON.stringify(arr));

            var abc = [];
            for(var i = 0 ; i < arr.length ; i++){
                if(arr[i].name == name){
                    abc.push('a');
                }
            }
            
            if(abc.length == 0){
                // localStorage.removeItem('goods');
                $('.sum').hide();
                $('.shopping1').html(0);
                $('.box1').show();
                $('.main5').css('height','70');
                box1();
            }
            localStorage.setItem('goods',JSON.stringify(arr));
            if(arr.length == 0){
                localStorage.removeItem('goods');
                $('.box1').show();
                $('.main5').css('height','70');
            }
            sc_num();
            inp4();
        })
    }

    function inp(){
        $('.main6 .add').click(function (){
            if($(this).prop('checked')){
                $('.main7 ul li').find('.inp1').prop('checked',true);
                $('.sum').show();
                sum();
            }else{
                $('.main7 ul li').find('.inp1').prop('checked',false);
                $('.sum').hide();
                $('.main10').find('.span3').html('0.00');

            }
        })
    }


    function sum(){ //计算被点击的复选框的价格
        var code = localStorage.getItem('goods');
        var sum1 = 0;
        var sum2 = 0;
        if(code){
            var arr = JSON.parse(code);
            var username = localStorage.getItem('login') || localStorage.getItem('login2') || localStorage.getItem('register');
            var username1 = JSON.parse(username);
            var name =  username1[0].name;
        
            for(var i = 0 ; i < arr.length ; i++){
                if(name == arr[i].name){
                    sum1 += arr[i].price;
                    sum2 += arr[i].num;
    
                }
            }
            $('.sum').find('.span1').html(sum2);
            $('.sum').find('.span2').html(sum1);
            $('.main10').find('.span3').html(sum1);
        }
    }

    function inp1(){ //判断复选框的全选，如果全部被选 了，全选那里就要勾上
        $('.main5').on('click','.main7 .inp1',function (){
            var selectArr = [];
            $('.main7 .inp1').each(function (index,dom){
                if($(dom).prop('checked')){ //只要被选了就push一个a进去
                    selectArr.push('a');
                    // $('.sum').show();
                }else{
                    selectArr.push('b'); //没被选就push一个b
                }
            });
            if(selectArr.indexOf('b') == -1){ //判断数组里如果没有b就表示全部被选上了
                $('.main6 .add').prop('checked',true);
            }else{
                $('.main6 .add').prop('checked',false);
            }
        })
    }

    function li1(){
        $('.li1').click(function (){
            location.assign("index.html");
        })
    }



    function inp3(){  //找出被点击的复选框，计算他们的价格
        $('.main5').on('click','.main7 .inp1',function (){
            var arr = [];
            var arr1 = [];
            var sum = 0;
            var sum1 = 0;
            $(".inp1:checked").each(function(i){
                var abc = $(this).parent().siblings('.price').html();
                var abc1 = $(this).parent().siblings('.inp2').html();
                var a = Number(abc);
                var a1 = Number(abc1);
                arr[i] = a;
                arr1[i] = a1;
                $('.sum').show();
            });
            for(var i = 0 ; i < arr.length ; i++){
                sum += arr[i];
                sum1 += arr1[i];
            }
            $('.main10').find('.span3').html(sum);
            $('.sum').find('.span2').html(sum);
            $('.sum').find('.span1').html(sum1);

            if(arr.length == 0){
                $('.sum').hide();
            }
        });
    }

    function inp4(){  //复选框发生改变时，下面的价格要跟着改变
        var arr = [];
        var arr1 = [];
        var sum = 0;
        var sum1 = 0;
        $(".inp1:checked").each(function(i){
            var abc = $(this).parent().siblings('.price').html();
            var abc1 = $(this).parent().siblings('.inp2').html();
            var a = Number(abc);
            var a1 = Number(abc1);
            arr[i] = a;
            arr1[i] = a1;
            $('.sum').show();
        });
        for(var i = 0 ; i < arr.length ; i++){
            sum += arr[i];
            sum1 += arr1[i];
        }
        $('.main10').find('.span3').html(sum);
        $('.sum').find('.span2').html(sum);
        $('.sum').find('.span1').html(sum1);
    }


    function box1(){
        var code = localStorage.getItem('goods');
        if(code){
            var arr = JSON.parse(code);
            var username = localStorage.getItem('login') || localStorage.getItem('login2') || localStorage.getItem('register');
            var username1 = JSON.parse(username);
            var name =  username1[0].name;
        // arr.length == 0 ? localStorage.removeItem('goods') : localStorage.setItem('goods',JSON.stringify(arr));

            var abc = [];
            for(var i = 0 ; i < arr.length ; i++){
                if(arr[i].name == name){
                    abc.push('a');
                }
            }
            
            if(abc.length == 0){
                // localStorage.removeItem('goods');
                $('.box1').show();
                $('.main5').css('height','70');
    
            }

        }else{
            $('.box1').show();
            $('.main5').css('height','70');
        }
    }

    function box2(){
        $('.box1 i').click(function (){
            location.assign("productList.html");
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
                $('.username1').html('退出');
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
                $('.username1').html('退出')
            }
        }
    
    
    
    
        $('.username1').click(function (){ //点击退出登录
            var codeArr2 = localStorage.getItem('login2');
            if(codeArr2){ //点击退出登录之后再存一个跟上次登录的账号密码一样的localStorage
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
            location.reload(true);
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
            // $('.shopping1').html(0);
        })

        $('.register2').click(function (){
            location.assign("http://localhost/test/day15/dist/register.html");
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
    
        var timer = null; //因为点击关闭支付窗口的时候要停止计时器，所以把变量放外面，方便获取
        // 点击支付框确定按钮
        $('.order2').click(function (){
            var code1 = localStorage.getItem('login');
            var code2 = localStorage.getItem('register');
            var code3 = localStorage.getItem('login2');
            var str = true;
            var num = 10;
            if(code1){ //判断密码是否和账号密码一样
                var arr = JSON.parse(code1);
                for(var i = 0 ; i < arr.length ; i++){
                    var passwork = arr[i].pass;
                }
                if($('.order4').val() == passwork){
                    var span3 = $('.span3').html();
                    $('.order3').show()
                    $('.order6').html('元支付成功')
                    $('.order1').html(span3);
                    str = false;
                }else{
                    $('.order3').show()
                    $('.order6').html('请输入正确的账号密码');
                    $('.order1').html('');
                }
            }else if(code2){
                var arr = JSON.parse(code2);
                for(var i = 0 ; i < arr.length ; i++){
                    var passwork = arr[i].pass;
                }
                if($('.order4').val() == passwork){
                    var span3 = $('.span3').html();
                    $('.order3').show()
                    $('.order6').html('元支付成功')
                    $('.order1').html(span3);
                    str = false;
                }else{
                    $('.order3').show()
                    $('.order6').html('请输入正确的账号密码');
                    $('.order1').html('');
                }
            }else if(code3){
                var arr = JSON.parse(code3);
                for(var i = 0 ; i < arr.length ; i++){
                    var passwork = arr[i].pass;
                }
                if($('.order4').val() == passwork){
                    var span3 = $('.span3').html();
                    $('.order3').show()
                    $('.order6').html('元支付成功')
                    $('.order1').html(span3);
                    str = false;
                }else{
                    $('.order3').show()
                    $('.order6').html('请输入正确的账号密码');
                    $('.order1').html('');
                }
            }

            if(!str){ //支付成功后倒计时跳转页面
                $('.order8').show();
                var codeArr = localStorage.getItem('goods');
                var arr = JSON.parse(codeArr);
                var username = localStorage.getItem('login') || localStorage.getItem('login2') || localStorage.getItem('register');
                var username1 = JSON.parse(username);
                var name =  username1[0].name;        
        
                $(".inp1:checked").each(function(i){ //循环找出被点击的复选框
                    var id = $(this).parent().siblings('.rovmer').attr('id'); //这里this指向当前被选上的复选框
                    for(var i = 0 ; i < arr.length ; i++){ //循环判断当前被点击的id和goods的id是否相同然后删除
                        if(id == arr[i].id && name == arr[i].name){
                            arr.splice(i,1);
                            $(this).parents('.main7').remove();
                        }
                    }
                })

                var abc = [];
                for(var i = 0 ; i < arr.length ; i++){
                    if(arr[i].name == name){
                        abc.push('a');
                    }
                }
                
                if(abc.length == 0){
                    // localStorage.removeItem('goods');
                    $('.sum').hide();
                    $('.shopping1').html(0);
                    $('.box1').show();
                    $('.main5').css('height','70');
        
                }
                localStorage.setItem('goods',JSON.stringify(arr));

                if(arr.length == 0){
                    localStorage.removeItem('goods');
                    $('.sum').hide();
                    $('.shopping1').html(0);
                    $('.box1').show(); //购物车为空的时候显示
                    $('.main5').css('height','70');
                }
                
                sc_num();
                $('.sum').hide();
                inp4();
                // localStorage.setItem('goods',JSON.stringify(arr)); //删除完后存回去
                timer = setInterval(function (){
                    num--;
                    if(num == 0){
                        location.assign("productList.html");
                    }
                    $('.order7').html(num);
                },1000)
            }



        })


        //点击提交订单
        $('.submit').click(function (){
            var display =$('.sum').css('display');
            if(display == 'none'){ //判断sum元素是否隐藏，如果是隐藏订单页面不显示
                alert('请先选择购物车内商品信息!');
            }else{
                $('.order3').hide();
                $('.order1').html('');
                $('.order4').val('');
                $('.order').show();
                $('.order8').hide();
            }
        })
        





        //点击关闭订单按钮
        $('.order5').click(function (){
            $('.order').hide();
            clearInterval(timer);
            $('.order7').html(10);
        })









    return{
        ajax:ajax,
        productList:productList,
        left:left,
        right:right,
        rovmer:rovmer,
        inp:inp,
        inp1:inp1,
        sum:sum,
        li1:li1,
        inp3:inp3,
        box1:box1,
        box2:box2,
        sc_num:sc_num
    }
})