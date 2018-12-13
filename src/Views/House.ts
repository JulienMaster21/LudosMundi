class House extends BaseView {

    public constructor (src : string,
                        canvas : Canvas,
                        player : Player) {
        super(src, canvas, player);
    };

    public draw = () => {
        
        this.canvas.drawImageToCanvas(  this.src,
                                        0,
                                        0,
                                        this.canvas.getWidth(),
                                        this.canvas.getHeight());
        this.canvas.drawImageToCanvas(  "./assets/Icons/ButtonsFREE/Home.png",
                                        this.canvas.getWidth() * 0.9,
                                        this.canvas.getHeight() * 0.05,
                                        50,50);
        this.canvas.drawBarToCanvas(this.canvas.getWidth()*0.05,
                                    this.canvas.getHeight()*0.05,
                                    100,
                                    this.player.getHealth(),
                                    20, "black", "green");
        this.canvas.drawBarToCanvas(this.canvas.getWidth()*0.05,
                                    this.canvas.getHeight()*0.1,
                                    100,
                                    this.player.getHealth(),
                                    20, "black", "red");
        this.canvas.drawBarToCanvas(this.canvas.getWidth()*0.05,
                                    this.canvas.getHeight()*0.15,
                                    100,
                                    this.player.getHealth(),
                                    20, "black", "orange");
        this.canvas.drawBarToCanvas(this.canvas.getWidth()*0.05,
                                    this.canvas.getHeight()*0.2,
                                    100,
                                    this.player.getHealth(),
                                    20, "black", "red");
        this.player.move();
        this.canvas.drawImageToCanvas("./Assets/Female/Poses/female_walk1.png",
                                        this.player.getX(),
                                        this.player.getY(),
                                        this.player.getWidth(),
                                        this.player.getHeight());
                                                                
    };
};