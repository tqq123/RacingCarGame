/**
 * Created by casillas on 2016/10/18.
 */
function Mission(fun){
    this.fun=fun;
    this.$bg= $("<div></div>");
    this.$bgm=$("<div></div>");
    this.$mainBody=$("<div></div>");
    this.$mission=$("<div></div>");
    this.$back=$("<input type='button'>");
    this.$misson_one=$("<div></div>");
    this.$misson_two=$("<div></div>");
    this.$misson_three=$("<div></div>");
    this.$misson_four=$("<div></div>");

    var pause=false;
    var self = this;

    this.createUI=function(){
        this.$bg.css({
            'width':'100%',
            'height':'100%',
            'backgroundImage':"url('img/1.jpg')",
            'z-index':'-1',
            'position':'absolute',
            'background-repeat':'no-repeat',
            'background-size':'cover'
        })
        this.$mainBody.append(this.$bg);
        //返回
        this.$back.css({
            'width':'95px',
            'height':'95px',
            'backgroundImage':"url('img/backbtn.png')",
            'position':'absolute',
            'left':'6%',
            'bottom':'4%',
            'border-radius':'50px'
        })
        this.$mainBody.append(this.$back);
        //背景音乐
        this.$bgm.css({
            'width':'50px',
            'height':'50px',
            'backgroundImage':"url('img/audio/1.png')",
            'position':'absolute',
            'right':'7%',
            'top':'3%'
        })
        this.$bgm.click(function(){
            if(!pause){
                $("#bgm")[0].pause();
                pause=true;
                self.$bgm.css({
                    'backgroundImage':"url('img/audio/2.png')"
                })
            }
            else{
                $("#bgm")[0].play();
                pause=false;
                self.$bgm.css({
                    'backgroundImage':"url('img/audio/1.png')"
                })
            }
        })
        this.$mainBody.append(this.$bgm);
        //关卡
        this.$mission.css({
            'width':'710px',
            'height':'500px',
            'backgroundImage':"url('img/19.png')",
            'position':'absolute',
            'left':'50%',
            'top':'50%',
            'margin':'-250px 0 0 -355px'
        })
        this.$misson_one.css({
            'width':'82px',
            'height':'82px',
            'backgroundImage':"url('img/chickp/1.png')",
            'position':'absolute',
            'left':'20%',
            'top':'73%',
            'cursor':'pointer'
        })
        this.$mission.append(this.$misson_one);
        this.$misson_two.css({
            'width':'82px',
            'height':'82px',
            'backgroundImage':"url('img/chickp/5.png')",
            'position':'absolute',
            'left':'9%',
            'top':'33%',
            'cursor':'pointer'
        })
        this.$mission.append(this.$misson_two);
        this.$misson_three.css({
            'width':'82px',
            'height':'82px',
            'backgroundImage':"url('img/chickp/5.png')",
            'position':'absolute',
            'left':'61%',
            'top':'7%',
            'cursor':'pointer'
        })
        this.$mission.append(this.$misson_three);
        this.$misson_four.css({
            'width':'82px',
            'height':'82px',
            'backgroundImage':"url('img/chickp/5.png')",
            'position':'absolute',
            'left':'71%',
            'top':'77%',
            'cursor':'pointer'
        })
        this.$mission.append(this.$misson_four);
        this.$mainBody.append(this.$mission);
    }
    this.createUI();

    //返回按钮
    this.$back.click(function(){
        self.fun("map");
    })

    this.$misson_one.click(function(){
        if(localStorage.player=="null"||localStorage.motor=="null"||localStorage.wheel=="null"){
            alert("请先在个人仓库穿戴装备");
        }
        else{
            window.location.href="game/index.html";
        }
    })
    this.$misson_two.click(function(){
        alert("请充值解锁其他难度");
    })
    this.$misson_three.click(function(){
        alert("请充值解锁其他难度");
    })
    this.$misson_four.click(function(){
        alert("请充值解锁其他难度");
    })
}