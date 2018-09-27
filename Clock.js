class Clock {
    constructor(width, height) {

        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        // this.ctx.fillStyle = '333333';
        // this.ctx.fillRect(0,0, width, height);
        // this.ctx.stroke();
        this.ctx.lineCap = 'round';



        this.width = width;
        this.height = height;
        this.xpos = width / 2;
        this.ypos = height / 2;
        
        this.radius = (this.height / 2) - 20;

        this.canvas.width = width;
        this.canvas.height = height;

        this.draw = () => {

            this.ctx.clearRect(0, 0, this.width, this.height);
            this.date = new Date();
            this.seconds = this.date.getSeconds();
            this.minutes = this.date.getMinutes();
            this.hours = this.date.getHours();

            this.ctx.beginPath();
            this.ctx.strokeStyle = 'black';
            this.ctx.lineWidth = 4;
            this.ctx.arc(this.xpos, this.ypos, this.radius, 0, 2 * Math.PI);
            this.ctx.stroke();

           
            
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.strokeStyle = '#D4AF37';
            this.ctx.lineWidth = 4;
            this.ctx.arc(this.xpos, this.ypos, (this.radius + 4), 0, 2 * Math.PI);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.strokeStyle = 'black';
            this.ctx.lineWidth = 4;
            this.ctx.arc(this.xpos, this.ypos, (this.radius + 6), 0, 2 * Math.PI);
            this.ctx.stroke();

            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            let angle = Math.PI * 2 * (this.seconds / 60 ) - (Math.PI /2);
            this.ctx.moveTo(this.xpos, this.ypos);
            console.log(this.xpos, this.ypos);
            let posx = 99 * (Math.cos(angle));
            let posy = 99 * (Math.sin(angle));
            this.ctx.lineTo(posx + this.xpos, posy + this.xpos);
            this.ctx.stroke();

            this.ctx.lineWidth = 4;
            this.ctx.beginPath();
            angle = Math.PI * 2 * ((this.minutes / 60) - (Math.PI * 2));
            this.ctx.moveTo(this.xpos, this.ypos);
            
            posx = 75 * (Math.cos(angle));
            posy = 75 * (Math.sin(angle));
            this.ctx.lineTo(posx + this.xpos, posy + this.xpos);
            this.ctx.stroke();

            this.ctx.lineWidth = 5;
            this.ctx.beginPath();
            angle = Math.PI * 2 * ((this.hours / 12) - (Math.PI * 2));
            this.ctx.moveTo(this.xpos, this.ypos);
            posx = 60 * (Math.cos(angle));
            posy = 60 * (Math.sin(angle));
            this.ctx.lineTo(posx + this.xpos, posy + this.xpos);
            this.ctx.stroke();
        }

        this.timer = window.setInterval(() => {
            this.draw();
        }, 1000 / 60);



    }
}