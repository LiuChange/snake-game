class SnakeFood {
    constructor(width,height,img){
        this.width=width;
        this.height=height;
        this.img=img;
    }
    render(oMap){
        let oDiv=document.createElement('div');
        oDiv.style.width = this.width+'px';
        oDiv.style.height = this.height+'px';
        oDiv.style.background=`url(${this.img})`;
        oDiv.style.position='absolute';
        //随机生成x,y用于设置食物的位置
        let x=Math.floor(Math.random()*10);
        let y=Math.floor(Math.random()*8);
        this.x=x;
        this.y=y;
        oDiv.style.left=x*this.width+'px';
        oDiv.style.top=y*this.height+'px';
        oMap.appendChild(oDiv);
        this.oFood=oDiv;
    }
    remove(){
    this.oFood.parentNode.removeChild(this.oFood);
    }
}