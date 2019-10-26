class Snake {
    constructor(width, height, headImg, bodyImg) {
        this.width = width;
        this.height = height;
        this.headImg = headImg;
        this.bodyImg = bodyImg;
        this.bodies = [
            {x: 3, y: 1, type: 1},
            {x: 2, y: 1, type: 0},
            {x: 1, y: 1, type: 0},
            {x: 0, y: 1, type: 0},
        ];
        document.body.onkeydown = (e) => {
            this.key = e.key;
        }
    }
    //头和身体的移动
    move() {
        this.timer=setInterval(()=>{
            for (let i = this.bodies.length - 1; i > 0; i--) {
                //把移动前倒数第二个身体位置给移动后的第一个
                this.bodies[i].x = this.bodies[i - 1].x;
                this.bodies[i].y = this.bodies[i - 1].y;
            }
            //蛇头的处理
            let head = this.bodies[0];
            //判断按键
            switch (this.key) {
                case 'ArrowRight':
                    head.x+=1;
                    break;
                case 'ArrowLeft':
                    head.x-=1;
                    break;
                case 'ArrowDown':
                    head.y+=1;
                    break;
                case 'ArrowUp':
                    head.y-=1;
                    break;
                default:
                    head.x+=1;
                    break;
            }
            //判断蛇头出界
            if (head.x<0||head.x>10||head.y<0||head.y>8){
                alert('你输了');
                clearInterval(this.timer);
                return;
            }
            if (head.x==snakeFood.x&&head.y==snakeFood.y){
                snakeFood.remove();
                snakeFood.render(oMap);
               let lastBody=this.bodies[this.bodies.length-1];
               let newBody={x:lastBody.x, y:lastBody.y, type:0};
                switch (this.key) {
                    case 'ArrowRight':
                        newBody.x-=1;
                        break;
                    case 'ArrowLeft':
                        newBody.x+=1;
                        break;
                    case 'ArrowDown':
                        newBody.y-=1;
                        break;
                    case 'ArrowUp':
                        newBody.y+=1;
                        break;
                    default:
                        newBody.x-=1;
                        break;
                }

               this.bodies.push(newBody);

            }
                this.render(oMap);

        },500);



    }
    //在地图上将头和身体渲染出来
    render(oMap){
        let oSnake=document.getElementsByClassName('snake');
        for (let i=oSnake.length-1;i>=0;i--){
            oSnake[i].parentNode.removeChild(oSnake[i]);
        }
        for (let value of this.bodies){
            let oDiv=document.createElement('div');
            oDiv.style.width = this.width+'px';
            oDiv.style.height = this.height+'px';
            oDiv.className='snake';
            if (value.type==1){
                oDiv.style.background=`url(${this.headImg})`;
            }
            else {
                oDiv.style.background=`url(${this.bodyImg})`;
            }
            oDiv.style.position='absolute';
            oDiv.style.left=value.x*this.width+'px';
            oDiv.style.top=value.y*this.height+'px';
            oMap.appendChild(oDiv);
        }
    }
}

