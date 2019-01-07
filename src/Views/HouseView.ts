class HouseView extends BaseView {

    public constructor (src : string,
                        canvas : Canvas,
                        player : Player,
                        mouseListener : MouseHelper) {
        super(src, canvas, player, mouseListener);
    };

    /**
     * @access public
     * @method
     * Required method to draw canvas
     */
    public draw = () => {
        
        this.canvas.drawImageToCanvas(  this.src,
                                        0,
                                        0,
                                        this.canvas.getWidth(),
                                        this.canvas.getHeight());
        this.canvas.drawButtonToCanvas( "./assets/Icons/ButtonsFREE/Home.png",
                                        this.canvas.getWidth() * 0.05,
                                        this.canvas.getHeight() * 0.05,
                                        this.canvas.getWidth() * 0.025,
                                        this.canvas.getHeight() * 0.05,
                                        () => {
                                            this.player.setLocation("Map");
                                            this.mouseListener.setHasBeenClicked()
                                        });
        this.canvas.drawCoinToCanvas(   this.canvas.getWidth()/2,
                                        this.canvas.getHeight() * 0.04,
                                        this.player.getCoin());
        this.canvas.drawBarstoCanvas(   this.canvas.getWidth()*0.9,
                                        this.canvas.getHeight()*0.05,
                                        this.player.getHunger(),
                                        this.player.getEnergy(),
                                        this.player.getMood(),
                                        this.player.getHealth()); 
this.canvas.drawTextButtonToCanvas( "./assets/Icons/ButtonsFREE/PlayBlank.png",
                                        "Sleep",
                                        this.canvas.getWidth()*0.5 - (this.canvas.getWidth() * 0.1)/2,
                                        this.canvas.getHeight()*0.9 - (this.canvas.getHeight() * 0.1)/2,
                                        this.canvas.getWidth() * 0.1,
                                        this.canvas.getHeight() * 0.1,
                                        () => {
                                            if (this.player.getHunger() >= 15&& 
                                                this.player.getEnergy() < 80 ) {
                                                this.player.setHunger(this.player.getHunger() - 3)
                                                this.player.setEnergy(this.player.getEnergy() + 20)
                                            }
                                            else if (   this.player.getHunger()>= 15&&
                                                        this.player.getEnergy()< 100) {
                                                        this.player.setHunger(this.player.getHunger() - 3)
                                                        this.player.setEnergy(100)
                                            };
                                            this.mouseListener.setHasBeenClicked()
                                        });       
    };
};
