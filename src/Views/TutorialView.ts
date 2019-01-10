class TutorialView extends BaseView {
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
this.canvas.drawButtonToCanvas("./Assets/Icons/ButtonsFREE/ReturnHome.png",
                               this.canvas.getWidth()*0.075,
                               this.canvas.getHeight()*0.075,
                               50,
                               50,()=>{this.player.setLocation("StartView")
                               this.mouseListener.setHasBeenClicked()})
this.canvas.drawTextToCanvas("left",
                            35,
                            "KenneyPixel",
                            "white",
                            "Om het poppetje naar boven te bewegen gebruik je W of ^",
                            this.canvas.getWidth()*0.05,
                            this.canvas.getHeight()*0.45);
this.canvas.drawTextToCanvas("left",
                            35,
                            "KenneyPixel",
                            "white",
                            "Om het poppetje naar links te bewegen gebruik je A of <",
                            this.canvas.getWidth()*0.05,
                            this.canvas.getHeight()*0.5);
this.canvas.drawTextToCanvas("left",
                            35,
                            "KenneyPixel",
                            "white",
                            "Om het poppetje naar onder te bewegen gebruik je S of ∨",
                            this.canvas.getWidth()*0.05,
                            this.canvas.getHeight()*0.55);
this.canvas.drawTextToCanvas("left",
                            35,
                            "KenneyPixel",
                            "white",
                            "Om het poppetje naar rechts te bewegen gebruik je D of >",
                            this.canvas.getWidth()*0.05,
                            this.canvas.getHeight()*0.6);
this.canvas.drawTextToCanvas("left",
                            35,
                            "KenneyPixel",
                            "white",
                            "Klik op de locaties om de mogelijkheden te ontdekken!",
                            this.canvas.getWidth()*0.5,
                            this.canvas.getHeight()*0.45)
this.canvas.drawTextToCanvas("left",
                            35,
                            "KenneyPixel",
                            "white",
                            "Voltooi je dagelijkse taken!",
                            this.canvas.getWidth()*0.5,
                            this.canvas.getHeight()*0.5); 
this.canvas.drawTextToCanvas("left",
                            35,
                            "KenneyPixel",
                            "white",
                            "En vergeet niet je behoeftes in de gaten te houden!",
                            this.canvas.getWidth()*0.5,
                            this.canvas.getHeight()*0.55); 
this.canvas.drawTextToCanvas("center",
                            70,
                            "KenneyPixel",
                            "white",
                            "Tips",
                            this.canvas.getWidth()*0.57,
                            this.canvas.getHeight()*0.2); 
this.canvas.drawTextToCanvas("center",
                            70,
                            "KenneyPixel",
                            "white",
                            "Controls",
                            this.canvas.getWidth()*0.2,
                            this.canvas.getHeight()*0.2);                                                    
};                                                                                
};