// js轮播图插件说明文档：
// 布局 :
        // <div>
            // <div></div>  这个父元素是放图片的     这个div宽度设置建议width: 6000px;
            // <div></div>  这个父元素是放数字的
        // </div>
// 参数按顺序传：
//         1.图片的父元素
//         2.数字的父元素
//         3.右按钮 不需要按钮可以不传
//         4.左按钮 不需要按钮可以不传
            
// 调用方式：
        // 滚动条模式图片要设置浮动，透明度切换模式图片要设置定位，透明度设置0.1
//         1.$(参数).autoMove1(); 滚动条轮播模式
//         2.$(参数).tab1(); 透明度轮播切换模式
// 数字样式类名：
            //  用class来设置：'active' 
            // 不需要在标签里设置，在css里把想要的样式写好就可以


            (function (){
                function Banner(node,nums,right,left){
                    this.timer1 = null;
                    this.timer2 = null;
                    this.timer3 = null;
                    this.imgIndex = 1;
                    this.numIndex = 0;
                    this.Now = 0;
                    this.node = document.querySelector(node);
                    this.num = document.querySelector(nums);
                    this.left = document.querySelector(left);
                    this.right = document.querySelector(right);
                    this.imgs = this.node.children;
                    this.nums = this.num.children;
                    this.nums[0].className = 'active';
    
                }
                //透明度切换模式
                Banner.prototype.tab1 = function (){
                    this.move1();
                    this.tab();
                    this.tabnum();
                    this.left2();
                    this.right2();
                }
    
                //滚动条轮播模式
                Banner.prototype.autoMove1 = function (){
                    this.wrap = this.node.parentNode;//获取父元素
                    this.imgWidth = this.node.children[0].offsetWidth;//获取一张图片的宽度
                    this.main = document.createElement('div');//创建一个div，这个div是滚动条
                    this.main.className = 'main';//给创建的div起个类名
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
                    this.right1();
                    this.left1();
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
                        this.nums[i].onclick = function (){
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
    
                //滚动条点击右边按钮切换
                Banner.prototype.right1 = function (){
                    var _this = this;
                    this.right.onclick = function (){
                        clearInterval(_this.timer2);//停止自动播放
                        _this.imgIndex++;//图片索引递增
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
                        _this.autoMove();//自动播放
                    }
                }
    
                //滚动条点击左边按钮切换
                Banner.prototype.left1 = function (){
                    var _this = this;
                    this.left.onclick = function (){
                        clearInterval(_this.timer2);//停止自动播放
                        _this.imgIndex--;//图片索引递减
                        if(_this.imgIndex < 0){
                            _this.imgIndex = _this.imgs.length -3;//到达最后一张之后，下一张的索引
                            _this.main.scrollLeft = (_this.imgIndex + 1) * _this.imgWidth;//滚动条回到最后一张图片的位置
                        }
                        _this.move();
    
                        _this.nums[_this.numIndex].className = '';//清除数字样式
                        _this.numIndex--;//数字索引递减
                        if(_this.numIndex < 0){
                            _this.numIndex = _this.nums.length -1;
                        }
                        _this.nums[_this.numIndex].className = 'active';//添加数字样式
                        _this.autoMove();//自动播放
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
    
                //透明度轮播自动切换
                Banner.prototype.tab = function (){
                    var _this = this;
                    this.timer3 = setInterval(function (){
                    _this.imgs[_this.Now].style.opacity = 0.1//透明度恢复初始状态
                    _this.imgs[_this.Now].style.zIndex = 1//层级恢复初始状态
                    _this.nums[_this.Now].className = '';//去掉数字样式
                    _this.Now++;
                    if(_this.Now >= _this.imgs.length){
                        _this.Now = 0;
                    }
                    // _this.imgs[_this.Now].style.opacity = 1//透明度恢复初始状态
                    _this.imgs[_this.Now].style.zIndex = 10//提高当前显示图片的层级
                    _this.nums[_this.Now].className = 'active';//添加数字样式
                    _this.move1();
                    },2000)
                }
    
                //透明度点击数字切换
                Banner.prototype.tabnum = function (){
                    var _this = this;
                    for(var i = 0, len = this.nums.length; i < len; i++){
                        this.nums[i].ind = i;//给每一个元素添加一个属性，保存自己的下标
                        this.nums[i].onclick = function (){
                        clearInterval(_this.timer3);//停止转动播放
                        _this.imgs[_this.Now].style.opacity = 0.1//透明度恢复初始状态
                        _this.imgs[_this.Now].style.zIndex = 1//层级恢复初始状态
                        _this.nums[_this.Now].className = '';//去掉数字样式
                        _this.Now = this.ind;//同步下标
                        _this.imgs[_this.Now].style.zIndex = 10//提高当前显示图片的层级
                        _this.nums[_this.Now].className = 'active';//添加数字样式
                        _this.move1();
                        _this.tab();//自动播放
                    }
                }
            }
    
                //透明度
                Banner.prototype.move1 = function (){
                    var _this = this;
                    function move1(dom,target){
                    dom.opa = 10;//进入页面第一张图片先显示
                    clearInterval(dom.timer3);
                    dom.timer3 = setInterval(function (){
                        if(target > dom.opa){
                        var speed = 4;//透明度递增
                        }else{
                            var speed = -4;//透明度递减
                        }
                        //剩余可运动量 <= 每次所走的量
                        if(Math.abs(target - dom.opa) <= Math.abs(speed)){
                            clearInterval(dom.timer3);//结束运动
                            dom.style.opacity = target/100;//到达终点
                            dom.style.filter = 'alpha(opacity:'+target+')'//IE678
                        }else{
                            dom.opa += speed;
                            dom.style.opacity = dom.opa/100;
                            dom.style.filter = 'alpha(opacity:'+dom.opa+')'//IE678
                        }
                    },30)
                }
                move1(_this.imgs[_this.Now],100);
            }
    
                //透明度点击左边按钮切换
                Banner.prototype.left2 = function (){
                    var _this = this;
                    this.left.onclick = function (){
                    clearInterval(_this.timer3);//停止转动播放
                    _this.imgs[_this.Now].style.opacity = 0.1//透明度恢复初始状态
                    _this.imgs[_this.Now].style.zIndex = 1//层级恢复初始状态
                    _this.nums[_this.Now].className = '';//去掉数字样式
                    _this.Now--;
                    if(_this.Now < 0){
                        _this.Now = _this.imgs.length-1;//最后一张
                    }
                    // img[index].style.opacity = 1//透明度恢复初始状态
                    _this.imgs[_this.Now].style.zIndex = 10//提高当前显示图片的层级
                    _this.nums[_this.Now].className = 'active';//添加数字样式
                    _this.move1();
                    _this.tab();//自动播放
                }
            }
    
                //透明度点击右边按钮切换
                Banner.prototype.right2 = function (){
                    var _this = this;
                    this.right.onclick = function (){
                    clearInterval(_this.timer3);//停止转动播放
                    _this.imgs[_this.Now].style.opacity = 0.1//透明度恢复初始状态
                    _this.imgs[_this.Now].style.zIndex = 1//层级恢复初始状态
                    _this.nums[_this.Now].className = '';//去掉数字样式
                    _this.Now++;
                    if(_this.Now >= _this.imgs.length){
                        _this.Now = 0;//最后一张
                    }
                    // img[index].style.opacity = 1//透明度恢复初始状态
                    _this.imgs[_this.Now].style.zIndex = 10//提高当前显示图片的层级
                    _this.nums[_this.Now].className = 'active';//添加数字样式
                    _this.move1();
                    _this.tab();//自动播放
    
                }
            }
    
            function factory(i,n,r,l){
                return new Banner(i,n,r,l);
            }
    
            window.abc = factory;
    
        })();
    