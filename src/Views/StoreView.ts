class StoreView extends BaseView {

    public constructor (src : string,
                        canvas : Canvas,
                        player : Player,
                        mouseListener : MouseHelper,
                        soundcontroller : SoundController) {
        super(  src,
                canvas,
                player,
                mouseListener,
                soundcontroller);
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
        this.canvas.drawButtonToCanvas(  "./Assets/Icons/ButtonsFREE/Home.png",
                                        this.canvas.getWidth() * 0.05,
                                        this.canvas.getHeight() * 0.05,
                                        this.canvas.getWidth() * 0.025,
                                        this.canvas.getHeight() * 0.05,
                                        () => {
                                            this.soundcontroller.playBackgroundMusic();
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
                                        this.player.getHealth())
        this.canvas.drawTextButtonToCanvas( "./Assets/Icons/ButtonsFREE/PlayBlank.png",
                                        "Werken",
                                        this.canvas.getWidth()*0.5 - (this.canvas.getWidth() * 0.1)/2,
                                        this.canvas.getHeight()*0.9 - (this.canvas.getHeight() * 0.1)/2,
                                        this.canvas.getWidth() * 0.1,
                                        this.canvas.getHeight() * 0.1,
                                        () => {
                                            this.player.setGoneToWork(true);
                                            this.player.setCoin(this.player.getCoin() + 5);
                                            this.player.setEnergy(this.player.getEnergy() - 5);
                                            this.mouseListener.setHasBeenClicked()
                                        });
        };
    };