class SelectPlayer extends BaseView {

    public constructor (src : string,
                        canvas : Canvas,
                        player : Player,
                        mouseListener : MouseHelper,
                        soundcontroller : SoundController) {
        super(src, canvas, player, mouseListener, soundcontroller);
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
        this.canvas.drawTextToCanvas(   "center",
                                        100,
                                        "Minecraft",
                                        "orange",
                                        "Ludos Mundi",
                                        this.canvas.getWidth() * 0.5,
                                        this.canvas.getHeight() * 0.25);
        this.canvas.drawTextToCanvas(   "center",
                                        50,
                                        "Minecraft",
                                        "white",
                                        "Kies je karakter",
                                        this.canvas.getWidth() * 0.5,
                                        this.canvas.getHeight() * 0.5);
        this.canvas.drawButtonToCanvas( "./Assets/Player/Female/Poses/female_idle.png",
                                        this.canvas.getWidth() * 0.35,
                                        this.canvas.getHeight() * 0.55,
                                        this.canvas.getWidth() * 0.1,
                                        this.canvas.getHeight() * 0.2,
                                        () => {
                                            this.player.setSrc("./Assets/Player/Female/Poses/female_idle.png")
                                            this.player.setLocation("Map")
                                            this.mouseListener.setHasBeenClicked()})
        this.canvas.drawButtonToCanvas( "./Assets/Player/Male/Poses/player_idle.png",
                                        this.canvas.getWidth() * 0.55,
                                        this.canvas.getHeight() * 0.55,
                                        this.canvas.getWidth() * 0.1,
                                        this.canvas.getHeight() * 0.2,
                                        () => {
                                            this.player.setSrc("./Assets/Player/Male/Poses/player_idle.png")
                                            this.player.setLocation("Map")
                                            this.mouseListener.setHasBeenClicked()});
    };
};