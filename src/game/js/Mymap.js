/**
 * Created by casillas on 2016/10/12.
 */
function mymap($parent,mapx){
    this.distan=0;
    this.$parent=$parent;
    this.mapx=(mapx==undefined)?0:mapx;
    this.$rank=$("<div></div>");
    this.$rank1=$("<div></div>");
    this.$timer=$("<div><span style='font-size: 40px;position: absolute;top: 20px;left: 68px'>0:0:0</span></div>");
    this.$timer1=$("<div></div>");
    this.$pause=$("<div></div>");
    this.$money=$("<div></div>");
    this.$coin=$("<div>0</div>");
    this.$speed=$("<div></div>");
    this.$speed1=$("<div></div>");
    this.$me=$("<div></div>");

    var self=this;


    this.createUI=function(){

        this.$me.css({
            'width':'14800px',
            'height':'660px',
            'backgroundImage':"url('imgs/map3.jpg')",
            'z-index':'-1',
            'position':'relative',
            'background-repeat':'no-repeat',
            'background-size':'contain'
        })
        this.$me.appendTo(this.$parent);
        this.$timer1.css({
            'width':'141px',
            'height':'133px',
            'backgroundImage':"url('play/mc3.png')",
            'position':'absolute',
            'left':'45%',
            'top':'36%'
        })
        this.$parent.append(this.$timer1);
        //��ʱ��
        this.$timer.css({
            'width':'230px',
            'height':'68px',
            'backgroundImage':"url('play/time.png')",
            'position':'absolute',
            'left':'20%',
            'top':'4%'
        })
        this.$parent.append(this.$timer);
        //��ͣ
        this.$pause.css({
            'width':'64px',
            'height':'62px',
            'backgroundImage':"url('play/pause.png')",
            'position':'absolute',
            'left':'85%',
            'top':'6%'
        })
        this.$parent.append(this.$pause);
        //���
        this.$money.css({
            'width':'240px',
            'height':'68px',
            'backgroundImage':"url('play/goldwindown.png')",
            'position':'absolute',
            'left':'42%',
            'top':'5%'
        })
        //�������
        this.$coin.css({
            'font-size':'35px',
            'font-weight':'bold',
            'font-family':'΢���ź�',
            'position':'absolute',
            'left':'122px',
            'top':'20px'
        })
        this.$money.append(this.$coin);
        this.$parent.append(this.$money);

        //����
        this.$rank.css({
            'width':'141px',
            'height':'133px',
            'backgroundImage':"url('play/mc.png')",
            'position':'absolute',
            'left':'5%',
            'top':'3%'
        })
        this.$rank1.css({
            'width':'141px',
            'height':'133px',
            'backgroundImage':"url('play/mc3.png')",
            'position':'absolute'
        })
        this.$rank.append(this.$rank1);
        this.$parent.append(this.$rank);

        //�ٶ���
        this.$speed.css({
            'width':'218px',
            'height':'50px',
            'backgroundImage':"url('play/load_wai.png')",
            'position':'absolute',
            'left':'65%',
            'top':'7%'
        })
        this.$speed1.css({
            'width':'0px',
            'height':'23px',
            'backgroundImage':"url('play/load.png')",
            'position':'absolute',
            'left':'5%',
            'top':'25%'
        })
        this.$speed.append(this.$speed1);
        this.$parent.append(this.$speed);


        //�������
        this.arr1=[];       //����һ
        this.arr2=[];       //������
        this.arr3=[];       //������
        this.arr4=[];       //������
        for(var i=0;i<10;i++){
            var gold1=new mygold(this.$me,325,Math.random()*12000+500);
            gold1.index=i;
            this.arr1.push(gold1);
            var gold2=new mygold(this.$me,395,Math.random()*12000+500);
            gold2.index=i;
            this.arr2.push(gold2);
            var gold3=new mygold(this.$me,465,Math.random()*12000+500);
            gold3.index=i;
            this.arr3.push(gold3);
            var gold4=new mygold(this.$me,535,Math.random()*12000+500);
            gold4.index=i;
            this.arr4.push(gold4);
        }
    }
    this.setPosition=function(){
        this.$me.css({
            'left':this.mapx+'px'
        })
    }
    this.setPosition();

    this.move=function(mapmovex){
        this.distan-=mapmovex;
        this.$me.css({
            'left': this.distan+'px'
        })
    }
    this.createUI();


    //��ʱ��

    var min=0;
    var second=0;
    var msecond=0;

    function showTime(){
        if(msecond>=1000){
            second+=1;
            msecond=0;
        }
        if(second>=60){
            min+=1;
            second=0;
        }
        $("span").text(min+":"+second+":"+msecond);
    }
    this.time=function(){
        msecond += 10;
        showTime();
    }

    setTimeout(function(){
        self.timer=window.setInterval(self.time,10);
    },3000)

    //����ʱ
    var timer1;
    var arr=["play/mc3.png","play/mc2.png","play/mc1.png"];
    var i=0;
    timer1=window.setInterval(function(){
        i++;
        if(i==3){
            window.clearInterval(timer1);
            self.$timer1.css({
                'display':'none'
            })
            return;
        }
        self.$timer1.css({
            'backgroundImage':"url('"+arr[i]+"')"
        })
    },1000)
}