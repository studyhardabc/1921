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

    function ajax1(){
        $.ajax({
            type:'get',
            url:'data/productList1.json',
            success: function (json){
                for(var i = 0 ; i < json.img.length ; i++){
                    var node = $(`<div class="goods5">
                    <img src="${json.img[i]}" alt="">
                    <p>黯晶巨兽 雷克塞 炫彩礼包</p>
                    <p>Q币价：<span style="color: red; font-weight: bold;">176.71Q币</span></p>
                    <p class="price">微信价：<span style="color: red; font-weight: bold;">￥${json.num[i]}</span></p>
                    <span class="span1" id="${json.id[i]}">加入购物车</span>
                </div>
                    `)
                    $('.goods4').append(node);
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

    // function goods(){
    //     $('.goods4').on('click','.span1',function (){
    //             var username = localStorage.getItem('login');
    //             var username1 = JSON.parse(username);
    //             var name =  username1[0].name;           
    //             var id = this.id;
    //             var price = $(this).siblings('.price').find('span').html();
    //             price = price.substring(1)
    //             price = Number(price);
    //             var first = localStorage.getItem('goods') == null ? true : false;
    //             if(first){
    //                 var codeArr = [{name:name,id:id,num:1,price:price,price1:price}];
    //                 localStorage.setItem('goods',JSON.stringify(codeArr));
    //                 alert('成功加入购物车');
    //             }else{
    //                 var arr = localStorage.getItem('goods');
    //                 var code = JSON.parse(arr);
    //                 var same = false;
    //                 for(var i = 0 ; i < code.length ; i++){
    //                     if(id == code[i].id){
    //                         code[i].num++;
    //                         var a = Number(code[i].price);
    //                         var b = a + price;
    //                         code[i].price = b;
    //                         same = true;
    //                         break;
    //                     }
    //                 }
    //                 if(!same){
    //                     var obj = {id:id,num:1,price:price,price1:price};
    //                     code.push(obj);
    //                 }
    //                 localStorage.setItem('goods',JSON.stringify(code));
    //                 alert('成功加入购物车');
    //             }
    //             sc_num();
    //     })
    // }





    function goods(){
        $('.goods4').on('click','.span1',function (){
            var username3 = localStorage.getItem('login');
            var username4 = localStorage.getItem('login2');
            var register = localStorage.getItem('register');
            var str2 =  localStorage.getItem('username1');
            if(str2){
                alert('请先登录账号');
            }else if(username3 || username4 || register){
                var username = localStorage.getItem('login') || localStorage.getItem('login2') || localStorage.getItem('register');
                var username1 = JSON.parse(username);
                var name =  username1[0].name;           

                var id = this.id;
                var price = $(this).siblings('.price').find('span').html();
                price = price.substring(1)
                price = Number(price);
                var first = localStorage.getItem('goods') == null ? true : false;
                if(first){
                    var codeArr = [{name:name,id:id,num:1,price:price,price1:price}];
                    localStorage.setItem('goods',JSON.stringify(codeArr));
                    alert('成功加入购物车');
                }else{
                    var arr = localStorage.getItem('goods');
                    var code = JSON.parse(arr);
                    var same = false;
                    var username = localStorage.getItem('login') || localStorage.getItem('login2') || localStorage.getItem('register');
                    var username1 = JSON.parse(username);
                    var name =  username1[0].name;           
    
                    for(var i = 0 ; i < code.length ; i++){
                        if(id == code[i].id && name == code[i].name){
                            code[i].num++;
                            var a = Number(code[i].price);
                            var b = a + price;
                            code[i].price = b;
                            same = true;
                            break;
                        }
                    }
                    if(!same){
                        var obj = {name:name,id:id,num:1,price:price,price1:price};
                        code.push(obj);
                    }
                    localStorage.setItem('goods',JSON.stringify(code));
                    alert('成功加入购物车');
                }
                sc_num();

            }else{
                alert('请先登录账号');
            }

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


    $('.img1').on('click','.img2',function (){
        var img2 = $('.img2').size();
        for(var i = 0 ; i < img2 ; i++){
            if(this){
                var src = $(this).find('img').attr('src');
                localStorage.setItem('img',JSON.stringify(src));
                location.assign("productList2.html");
            }
        }
    })
















    return{
        ajax:ajax,
        ajax1:ajax1,
        ajax2:ajax2,
        goods:goods,
        sc_num:sc_num,
        Mygoods:Mygoods,
        lis:lis
    }
})