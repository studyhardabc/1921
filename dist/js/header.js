define(["jquery"],function ($){
    function nav(){
        $('.nav ul').mouseenter(function (){
            $('.main').stop(true).slideDown(200);
        })
        $('.nav ul').mouseleave(function (){
            $('.main').stop(true).slideUp(200);
        })
        $('.box .b').mouseenter(function (){
          $('.b1').stop(true).slideDown(200);
        })
        $('.box .b').mouseleave(function (){
          $('.b1').stop(true).slideUp(200);
        })
        $('.box .c').mouseenter(function (){
          $('.aaa').stop(true).slideDown(200);
        })
        $('.box .c').mouseleave(function (){
          $('.aaa').stop(true).slideUp(200);
        })
    }



    (function (){
    function Banner(node,nums){
        this.timer1 = null;
        this.timer2 = null;
        this.timer3 = null;
        this.imgIndex = 1;
        this.numIndex = 0;
        this.Now = 0;
        this.node = document.querySelector(node);
        this.num = document.querySelector(nums);
        this.imgs = this.node.children;
        this.nums = this.num.children;
        this.nums[0].className = 'active';

    }
                    //滚动条轮播模式
                    Banner.prototype.autoMove1 = function (){
                        this.wrap = this.node.parentNode;//获取父元素
                        this.imgWidth = this.node.children[0].offsetWidth;//获取一张图片的宽度
                        this.main = document.createElement('div');//创建一个div，这个div是滚动条
                        this.main.className = 'main1';//给创建的div起个类名
                        this.main.style.cssText="width:this.wrap.offsetWidth ; height: this.wrap.offsetHeight ; overflow: hidden;";
                        this.main.appendChild(this.node);
                        this.wrap.insertBefore(this.main,this.num);//插入div
                        this.main.scrollLeft = this.imgIndex * this.imgWidth;//进入页面滚动条初始位置
                        this.first = this.node.children[0].cloneNode(true);//复制第一个子元素
                        this.last = this.node.children[this.imgs.length-1].cloneNode(true);//复制最后一个子元素
                        this.node.appendChild(this.first);//末尾添加复制的图片
                        this.node.insertBefore(this.last,this.node.children[0]);//第一个子元素前面添加复制的图片
        
                        this.autoMove();
                        this.clicknum();
                    }
        
                    //滚动条自动轮播
                    Banner.prototype.autoMove = function (){
                        var _this = this;
                        this.timer2 = setInterval(function (){
                            _this.imgIndex++;//图片索引自增
                            if(_this.imgIndex >= _this.imgs.length){
                                _this.imgIndex = 2;//到达最后一张之后，下一张的索引
                                _this.main.scrollLeft = _this.imgWidth;//滚动条回到前面第一张图片的位置
                            }
                            _this.move();
        
                            _this.nums[_this.numIndex].className = '';//清除数字样式
                            _this.numIndex++;//数字索引自增
                            if(_this.numIndex >= _this.nums.length){
                                _this.numIndex = 0;
                            }
                            _this.nums[_this.numIndex].className = 'active';//添加数字样式
                        },2000)
                    }
        
                    //滚动条点击数字切换图片
                    Banner.prototype.clicknum = function (){
                        var _this = this;
                        for(let i = 0 ; i < this.nums.length ; i++){
                            this.nums[i].index = i;//存储下标
                            this.nums[i].onmouseenter = function (){
                                clearInterval(_this.timer2);//停止自动播放
                                _this.nums[_this.numIndex].className = '';//清除数字样式
                                _this.numIndex = this.index;//同步数字的下标
                                _this.nums[_this.numIndex].className = 'active';//添加数字样式
                                _this.imgIndex = this.index + 1;//同步图片下标
                                _this.move();
                                _this.autoMove();//自动播放
                            }
                        }
                    }
        
        
                    //滚动条计算步数
                    Banner.prototype.move = function (){
        
                        var minStep = 0;//起始步数
                        var mixStep = 20;//最大步数
                        var start = this.main.scrollLeft;//运动的起始位置
                        var end = this.imgIndex * this.imgWidth;//运动结束位置
                        var everyStep = (end - start) / mixStep;//每步所走的距离
                        var _this = this;
                        clearInterval(this.timer1);
                        this.timer1 = setInterval(function (){
                            minStep++;
                            if(minStep >= mixStep){//步数走完，停止
                                clearInterval(_this.timer1);
                            }
                            start += everyStep;
                            _this.main.scrollLeft = start;//赋值给滚动条
                        },20)
                    }
    
                    function factory(i,n){
                        return new Banner(i,n);
                    }
                    window.factory = factory;

                })();

    function ajax1(){
        $.ajax({
            type:'get',
            url:'data/tab.json',
            success: function (data){
                for(var i = 0 ; i < data.length ; i++){
                 var node = $(`<ul class="content3">
                    <li>${data[i].title}</li>
                    <li>
                        <p>${data[i].title1}</p>
                        <span>${data[i].title2}</span>
                        <a href="#">${data[i].title3}</a>
                    </li>
                    <li>
                        <p style="color: #6388c5 ;border: 1px solid #6388c5">${data[i].title4}</p>
                        <span>${data[i].title2}</span>
                        <a href="#">${data[i].title3}</a>
                    </li>
                    <li>
                        <p style="color: #6388c5 ;border: 1px solid #6388c5">${data[i].title4}</p>
                        <span>${data[i].title2}</span>
                        <a href="#">${data[i].title3}</a>
                    </li>
                    <li>
                        <p style="color: #69c5d2 ;border: 1px solid #69c5d2">${data[i].title8}</p>
                        <span>${data[i].title2}</span>
                        <a href="#">${data[i].title3}</a>
                    </li>
                    <li>
                        <p style="color: #6388c5 ;border: 1px solid #6388c5">${data[i].title4}</p>
                        <span>${data[i].title2}</span>
                        <a href="#">${data[i].title3}</a>
                    </li>
                    <li>
                        <p style="color: #e9852d ;border: 1px solid #e9852d">${data[i].title7}</p>
                        <span>${data[i].title2}</span>
                        <a href="#">${data[i].title3}</a>
                    </li>
                </ul>`);
                        
                    if(i == 0){
                        node.addClass('show');
                    }
                    $('.content2').append(node);
                    

                }
                
            },
            error: function (msg){
                alert(msg);
            }
            
        });
    }

    function tab(){
        $('.content1').find('li').mouseenter(function (){
            $('.content3').eq($(this).index()).addClass('show').siblings().removeClass('show');
        })
    }

    function ajax2(){
        $.ajax({
            type:'get',
            url:'data/tab1.json',
            success: function (json){
                for(var i = 0 ; i < json.length ; i++){
                    var node = $(`<div class="tab10">
                    <div class="tab4">
                    <img src="${json[i].img}" alt="">
                    <div class="tab5">${json[i].title}</div>
                    <div class="tab6">${json[i].title1}</div>
                </div>
                <div class="tab4">
                    <img src="${json[i].title3}" alt="">
                    <div class="tab5">${json[i].title}</div>
                    <div class="tab6">${json[i].title1}</div>
                </div>
                <div class="tab4">
                    <img src="${json[i].title5}" alt="">
                    <div class="tab5">${json[i].title}</div>
                    <div class="tab6">${json[i].title1}</div>
                </div>
                <div class="tab4">
                    <img src="${json[i].title7}" alt="">
                    <div class="tab5">${json[i].title}</div>
                    <div class="tab6">${json[i].title1}</div>
                    </div>
                    </div>
                        `)
                    if(i == 0){
                        node.addClass('show1');
                    }
                    $('.tab3').append(node);
                }
            },
            error: function (msg){
                alert(msg);
            }
        })
    }

    function tab1(){
        $('.tab1 ul li').mouseenter(function (){
            $('.tab10').eq($(this).index()).addClass('show1').siblings().removeClass('show1');
        })
    }

    function introduce(){
        $('.introduce2 img').mouseenter(function (){
            $('.video5').show();
            $('.video2').stop(true).slideDown(200)
        })
        $('.video5').mouseleave(function (){
            $('.video5').hide();
            $('.video2').stop(true).slideUp(200)
        })
        $('.video2').mouseleave(function (){
            $('.video5').hide();
            $('.video2').stop(true).slideUp(200)
        })
    }

    function introduce1(){
        $('.introduce4').mouseenter(function (){
            $('.introduce8').show();
        })
        $('.introduce4').mouseleave(function (){
            $('.introduce8').hide();
        })
        $('.introduce6').mouseenter(function (){
            $('.introduce10').show();
        })
        $('.introduce6').mouseleave(function (){
            $('.introduce10').hide();
        })
        $('.introduce5').mouseenter(function (){
            $('.introduce9').show();
        })
        $('.introduce5').mouseleave(function (){
            $('.introduce9').hide();
        })
        $('.introduce7').mouseenter(function (){
            $('.introduce11').show();
        })
        $('.introduce7').mouseleave(function (){
            $('.introduce11').hide();
        })
        $('.introduce1 img').mouseenter(function (){
            $('.introduce12').show();
        })
        $('.introduce1 img').mouseleave(function (){
            $('.introduce12').hide();
        })
    }

    function ajax3(){
        $.ajax({
            type:'get',
            url:'data/tab2.json',
            success: function (json){
                for(var i = 0 ; i < json.length ; i++){
                    var node = $(`<ul class="video-content4">
                    <li>
                        <img src="${json[i].img}" alt="">
                        <a href="#">${json[i].title1}</a><br>
                        <span style="margin-right: 45px;">${json[i].title}</span>
                        <span>${json[i].title2}</span>
                    </li>
                    <li>
                        <img src="${json[i].img1}" alt="">
                        <a href="#">${json[i].title1}</a><br>
                        <span style="margin-right: 45px;">${json[i].title}</span>
                        <span>${json[i].title2}</span>
                    </li>
                    <li>
                        <img src="${json[i].img2}" alt="">
                        <a href="#">${json[i].title1}</a><br>
                        <span style="margin-right: 45px;">${json[i].title}</span>
                        <span>${json[i].title2}</span>
                    </li>
                    <li>
                        <img src="${json[i].img3}" alt="">
                        <a href="#">${json[i].title1}</a><br>
                        <span style="margin-right: 45px;">${json[i].title}</span>
                        <span>${json[i].title2}</span>
                    </li>
                    <li>
                        <img src="${json[i].img4}" alt="">
                        <a href="#">${json[i].title1}</a><br>
                        <span style="margin-right: 45px;">${json[i].title}</span>
                        <span>${json[i].title2}</span>
                    </li>
                    <li>
                        <img src="${json[i].img5}" alt="">
                        <a href="#">${json[i].title1}</a><br>
                        <span style="margin-right: 45px;">${json[i].title}</span>
                        <span>${json[i].title2}</span>
                    </li>
                    <li>
                        <img src="${json[i].img6}" alt="">
                        <a href="#">${json[i].title1}</a><br>
                        <span style="margin-right: 45px;">${json[i].title}</span>
                        <span>${json[i].title2}</span>
                    </li>
                    <li>
                        <img src="${json[i].img7}" alt="">
                        <a href="#">${json[i].title1}</a><br>
                        <span style="margin-right: 45px;">${json[i].title}</span>
                        <span>${json[i].title2}</span>
                    </li>
                </ul>
                    `)
                    if(i == 0){
                        node.addClass('show2');
                        $('.video-content2 ul li').eq(0).addClass('active');
                    }
                    $('.video-content3').append(node);
                }
            },
            error: function (msg){
                alert(msg);
            }
        })
    }

    function tab2(){
        $('.video-content2 ul li').mouseenter(function (){
            $(this).addClass('active').siblings().removeClass('active');
            $('.video-content4').eq($(this).index()).addClass('show2').siblings().removeClass('show2');
        })
    }

    function ajax4(){
        $.ajax({
            type:'get',
            url:'data/banner1.json',
            success: function (json){
                for(var i = 0 ; i < json.length ; i++){
                    var node = $(`<div class="banner-img3">
                    <a class="banner-img5">
                    <div>
                        <img src="${json[i].img}" alt=""><br>
                        <span>${json[i].title}</span><br>
                        <span class="iconfont icon-wangzhanxinxi" style="color: #1da6ba;"><i style="color: #999;">${json[i].title1}</i> </span>
                    </div>
                    <div>
                        <img src="${json[i].img1}" alt=""><br>
                        <span>${json[i].title}</span><br>
                        <span class="iconfont icon-wangzhanxinxi" style="color: #1da6ba;"><i style="color: #999;">${json[i].title1}</i> </span>
                    </div>
                    <div>
                        <img src="${json[i].img2}" alt=""><br>
                        <span>${json[i].title}</span><br>
                        <span class="iconfont icon-wangzhanxinxi" style="color: #1da6ba;"><i style="color: #999;">${json[i].title1}</i> </span>
                    </div>
                    </a>
                    <a class="banner-img5">
                    <div>
                        <img src="${json[i].img3}" alt=""><br>
                        <span>${json[i].title}</span><br>
                        <span class="iconfont icon-wangzhanxinxi" style="color: #1da6ba;"><i style="color: #999;">${json[i].title1}</i> </span>
                    </div>
                    <div>
                        <img src="${json[i].img4}" alt=""><br>
                        <span>${json[i].title}</span><br>
                        <span class="iconfont icon-wangzhanxinxi" style="color: #1da6ba;"><i style="color: #999;">${json[i].title1}</i> </span>
                    </div>
                    <div>
                        <img src="${json[i].img5}" alt=""><br>
                        <span>${json[i].title}</span><br>
                        <span class="iconfont icon-wangzhanxinxi" style="color: #1da6ba;"><i style="color: #999;">${json[i].title1}</i> </span>
                    </div>
                    </a>
                </div>
                    `)
                    if(i == 0){
                        node.addClass('show3');
                        $('.banner-img1 ul li').eq(0).addClass('active1');
                    }
                    $('.banner-img2').append(node);
                }



                var mainScrollLeft = document.querySelector('.banner-img2');
                var left = document.querySelector('.left');
                var right = document.querySelector('.right');
                var imgs = document.querySelectorAll('.banner-img3');
                var first = imgs[0].children[0].cloneNode(true);//复制第一个子元素
                var last = imgs[0].children[imgs[0].children.length-1].cloneNode(true);
                imgs[0].appendChild(first);//末尾添加复制的图片
                imgs[0].insertBefore(last,imgs[0].children[0]);
                var imgIndex = 1;//图片的初始下标
                var imgWidth = imgs[0].children[0].offsetWidth;//一张图片的宽度
                
                var timer1,timer2;
                var img = 4;
                //滚动条初始位置
                mainScrollLeft.scrollLeft = imgIndex * imgWidth;


            
                autoMove();
                
                function autoMove (){
                    timer2 = setInterval(() => {
                        imgIndex++;//图片索引自增
                        if(imgIndex >= img){
                            imgIndex = 2;//到达最后一张之后，下一张的索引
                            mainScrollLeft.scrollLeft = imgWidth;//滚动条回到前面第一张图片的位置
                        }
                        move();
                    },3000);
                }
            
                
                
                function move(){
                    var minStep = 0;//起始步数
                    var maxStep = 20;//最大步数
                    var start = mainScrollLeft.scrollLeft;//运动的起始位置
                    var end = imgIndex * imgWidth;//运动结束位置
                    var everyStep = (end - start)/maxStep;//每步所走的距离
                    clearInterval(timer1);
                    timer1 = setInterval(() => {
                        minStep++;
                        if(minStep >= maxStep){//步数走完，停止
                            clearInterval(timer1);
                        }
                        start += everyStep;
                        mainScrollLeft.scrollLeft = start;//赋值给滚动条
                    }, 20);
                }
            

                var num = document.querySelectorAll('.banner-img1 ul li');

                for(var i = 0,len = num.length; i < len; i++){
                    num[i].ind = i;//存储下标
                    num[i].onmouseenter = function (){
                        clearInterval(timer2);//停止自动播放
                        var first = imgs[this.ind].children[0].cloneNode(true);//复制第一个子元素
                        var last = imgs[this.ind].children[imgs[this.ind].children.length-1].cloneNode(true);
                        imgs[this.ind].appendChild(first);//末尾添加复制的图片
                        imgs[this.ind].insertBefore(last,imgs[this.ind].children[0]);
                        $(this).addClass('active1').siblings().removeClass('active1');
                        $('.banner-img3').eq($(this).index()).addClass('show3').siblings().removeClass('show3');

                        move();
                        autoMove();//自动播放
                    }
                }
            




                right.onclick = function (){
                    clearInterval(timer2);//停止自动播放
                    imgIndex++;//图片索引递增
                    if(imgIndex >= img){
                        imgIndex = 2;//到达最后一张之后，下一张的索引
                        mainScrollLeft.scrollLeft = imgWidth;//滚动条回到前面第一张图片的位置
                    }
                    move();
                    autoMove();//自动播放
                }
            


                left.onclick = function (){
                    clearInterval(timer2);//停止自动播放
                    imgIndex--;//图片索引递减
                    if(imgIndex < 0){
                        imgIndex = img -3;//到达最后一张之后，下一张的索引
                        mainScrollLeft.scrollLeft = (imgIndex+1) * imgWidth;//滚动条回到最后一张图片的位置
                    }
                    move();
                    autoMove();//自动播放
                }
            },
            error: function (msg){
                alert(msg);
            }
        })
    }


    function ajax5(){
        $.ajax({
            type:'get',
            url:'data/banner2.json',
            success: function (json){
                for(var i = 0 ; i < json.length ; i++){
                    var node = $(`<img src="${json[i].img}" alt="">`);

                    $('.competition2').append(node);
                }


                var mainScrollLeft1 = document.querySelector('.competition1');
                var left1 = document.querySelector('.left1');
                var right1 = document.querySelector('.right1');
                var imgs1 = document.querySelector('.competition2');
                var first1 = imgs1.children[0].cloneNode(true);//复制第一个子元素
                var last1 = imgs1.children[imgs1.children.length-1].cloneNode(true);
                imgs1.appendChild(first1);//末尾添加复制的图片
                imgs1.insertBefore(last1,imgs1.children[0]);
                var imgIndex1 = 1;//图片的初始下标
                var imgWidth1 = imgs1.children[0].offsetWidth;//一张图片的宽度
                
                var timer3,timer4;
                var img1 = document.querySelectorAll('.competition2 img');
                
                //滚动条初始位置
                mainScrollLeft1.scrollLeft = imgIndex1 * imgWidth1;
                


                autoMove123();


                function autoMove123(){
                    timer4 = setInterval(() => {
                        imgIndex1++;//图片索引自增
                        if(imgIndex1 >= img1.length){
                            imgIndex1 = 2;//到达最后一张之后，下一张的索引
                            mainScrollLeft1.scrollLeft = imgWidth1;//滚动条回到前面第一张图片的位置
                        }
                        move123();
                    },3000);
                }




                function move123(){
                    var minStep1 = 0;//起始步数
                    var maxStep1 = 20;//最大步数
                    var start1 = mainScrollLeft1.scrollLeft;//运动的起始位置
                    var end1 = imgIndex1 * imgWidth1;//运动结束位置
                    var everyStep1 = (end1 - start1)/maxStep1;//每步所走的距离
                    clearInterval(timer3);
                    timer3 = setInterval(() => {
                        minStep1++;
                        if(minStep1 >= maxStep1){//步数走完，停止
                            clearInterval(timer3);
                        }
                        start1 += everyStep1;
                        mainScrollLeft1.scrollLeft = start1;//赋值给滚动条
                    }, 20);
                }


                right1.onclick = function (){
                    clearInterval(timer4);//停止自动播放
                    imgIndex1++;//图片索引递增
                    if(imgIndex1 >= img1.length){
                        imgIndex1 = 2;//到达最后一张之后，下一张的索引
                        mainScrollLeft1.scrollLeft = imgWidth1;//滚动条回到前面第一张图片的位置
                    }
                    move123();
                    autoMove123();//自动播放
                }
            


                left1.onclick = function (){
                    clearInterval(timer4);//停止自动播放
                    imgIndex1--;//图片索引递减
                    if(imgIndex1 < 0){
                        imgIndex1 = img1.length -3;//到达最后一张之后，下一张的索引
                        mainScrollLeft1.scrollLeft = (imgIndex1+1) * imgWidth1;//滚动条回到最后一张图片的位置
                    }
                    move123();
                    autoMove123();//自动播放
                }







            },
            error: function (msg){
                alert(msg);
            }
        })
    }


    function ajax6(){
        $.ajax({
            type:'get',
            url:'data/tab3.json',
            success: function (json){
                for(var i = 0 ; i < json.title.length ; i++){
                    var node = $(`<div class="column5" ind="${json.id[0]}">
                    <img src="${json.title[i]}" alt="">
                    <span class="iconfont icon-sousuo"></span>
                    <p>战争女神</p>
                </div>
                    `)
                    var ind = node.attr('ind');
                    if(ind == 0){
                        node.addClass('show5');
                        $('.column1 ul li').eq(0).addClass('active2');
                    }
                    $('.column3').append(node);
                }

                for(var i = 0 ; i < json.title1.length ; i++){
                    var node = $(`<div class="column7"">
                    <img src="${json.title1[i]}" alt="">
                    <span class="iconfont icon-sousuo"></span>
                    <p>战争女神</p>
                </div>
                    `)
                    $('.column3').append(node);
                }

                for(var i = 0 ; i < json.title2.length ; i++){
                    var node = $(`<div class="column8"">
                    <img src="${json.title2[i]}" alt="">
                    <span class="iconfont icon-sousuo"></span>
                    <p>战争女神</p>
                </div>
                    `)
                    $('.column3').append(node);
                }

                
                for(var i = 0 ; i < json.title3.length ; i++){
                    var node = $(`<div class="column9"">
                    <img src="${json.title3[i]}" alt="">
                    <span class="iconfont icon-sousuo"></span>
                    <p>战争女神</p>
                </div>
                    `)
                    $('.column3').append(node);
                }


                for(var i = 0 ; i < json.title4.length ; i++){
                    var node = $(`<div class="column10"">
                    <img src="${json.title4[i]}" alt="">
                    <span class="iconfont icon-sousuo"></span>
                    <p>战争女神</p>
                </div>
                    `)
                    $('.column3').append(node);
                }


                for(var i = 0 ; i < json.title5.length ; i++){
                    var node = $(`<div class="column11"">
                    <img src="${json.title5[i]}" alt="">
                    <span class="iconfont icon-sousuo"></span>
                    <p>战争女神</p>
                </div>
                    `)
                    $('.column3').append(node);
                }


                for(var i = 0 ; i < json.title6.length ; i++){
                    var node = $(`<div class="column12"">
                    <img src="${json.title6[i]}" alt="">
                    <span class="iconfont icon-sousuo"></span>
                    <p>战争女神</p>
                </div>
                    `)
                    $('.column3').append(node);
                }


                
            },
            error: function (msg){
                alert(msg);
            }
        })
    }



    function tab3(){
        $('.column1 ul li').click(function (){
            if($(this).index() == 0){
              $('.column3').find('div').removeClass('show5');
              $('.column5').addClass('show5');
            }else if($(this).index() == 1){
              $('.column3').find('div').removeClass('show5');
              $('.column7').addClass('show5');
            }else if($(this).index() == 2){
              $('.column3').find('div').removeClass('show5');
              $('.column8').addClass('show5');
            }else if($(this).index() == 3){
              $('.column3').find('div').removeClass('show5');
              $('.column9').addClass('show5');
            }else if($(this).index() == 4){
              $('.column3').find('div').removeClass('show5');
              $('.column10').addClass('show5');
            }else if($(this).index() == 5){
              $('.column3').find('div').removeClass('show5');
              $('.column11').addClass('show5');
            }else if($(this).index() == 6){
              $('.column3').find('div').removeClass('show5');
              $('.column12').addClass('show5');
            }
      })
    }


    function tab4(){
        $('.column1 ul li').mouseenter(function (){
            $(this).addClass('active2').siblings().removeClass('active2');
        })
    }

    function tab5(){
        $('.column3').on('mouseenter','.column5,.column7,.column8,.column9,.column10,.column11,.column12',function(){
            $(this).find('span').show();
        })
        $('.column3').on('mouseleave','.column5,.column7,.column8,.column9,.column10,.column11,.column12',function(){
            $(this).find('span').hide();
        })

    }

    function hot(){
        $('.hot1 div').mouseenter(function (){
            $(this).find('span').stop().animate({bottom:0},300)
        })
        $('.hot1 div').mouseleave(function (){
            $(this).find('span').stop().animate({bottom:-60},300)
        })
    }

    function hot1(){
        $('.hot4').mouseenter(function (){
            $(this).animate({top:-20},300)
        })
        $('.hot4').mouseleave(function (){
            $(this).animate({top:0},300)
        })
    }

    function lis(){
        $('.lis').click(function (){
            location.assign("productList.html");
        })
    }

    function btn2(){
        $('.btn2').click(function (){
            location.assign("login.html");
        })
    }


    $('.c').click(function (){
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


    // var loginArr = localStorage.getItem('login');
    // if(loginArr){
    //     var loginArr1 = JSON.parse(loginArr);
    //     for(var i = 0 ; i < loginArr1.length ; i++){
    //         var name1 = loginArr1[i].name;
    //     }
    //     $('.username').html(name1);
    // }


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
            $('.username1').css('display','block');
        }else if(loginArr2){
            var loginArr1 = JSON.parse(loginArr2);
            for(var i = 0 ; i < loginArr1.length ; i++){
                var name1 = loginArr1[i].name;
            }
            $('.username').html(name1);
            $('.username1').css('display','block');
        }else if(register){
            var loginArr1 = JSON.parse(register);
            for(var i = 0 ; i < loginArr1.length ; i++){
                var name1 = loginArr1[i].name;
            }
            $('.username').html(name1);
            $('.username1').css('display','block');
        }
    }




    $('.username1').click(function (){
        var codeArr2 = localStorage.getItem('login2');
        if(codeArr2){
            var Arr2 = JSON.parse(codeArr2);
            localStorage.setItem('register',JSON.stringify(Arr2));
        }




        var username1 = '亲爱召唤师';
        localStorage.setItem('username1',JSON.stringify(username1));
        var str =   localStorage.getItem('username1');
        var str1 = JSON.parse(str);
        $('.username').html(str1);
        $('.username1').css('display','none');
        localStorage.removeItem('login2');
        $('.shopping1').html(0);
        location.reload(true);
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



    

    return{
        ajax1:ajax1,
        nav:nav,
        factory:factory,
        tab:tab,
        ajax2:ajax2,
        tab1:tab1,
        introduce:introduce,
        introduce1:introduce1,
        ajax3:ajax3,
        tab2:tab2,
        ajax4:ajax4,
        ajax5:ajax5,
        ajax6:ajax6,
        tab3:tab3,
        tab4:tab4,
        tab5:tab5,
        hot:hot,
        hot1:hot1,
        lis:lis,
        btn2:btn2
    }
})