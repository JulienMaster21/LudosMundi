class Canvas {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
    }
    ;
    drawTextToCanvas(fontsize, color, text, x, y) {
        this.ctx.font = `${fontsize}px Arial`;
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, x, y);
    }
    ;
    drawImageToCanvas(src, x, y, width, height) {
        let image = new Image();
        image.src = src;
        this.ctx.drawImage(image, x, y, width, height);
    }
    ;
    drawBarToCanvas(X, Y, maxWidth, minWidth, height, maxColor, minColor) {
        this.ctx.fillStyle = maxColor;
        this.ctx.fillRect(X, Y, maxWidth, height);
        this.ctx.fillStyle = minColor;
        this.ctx.fillRect(X, Y, minWidth, height);
    }
    ;
    getCenter() {
        return { X: this.getWidth() / 2, Y: this.getHeight() / 2 };
    }
    ;
    getHeight() {
        return this.canvas.height;
    }
    ;
    getWidth() {
        return this.canvas.width;
    }
    ;
    clear() {
        this.ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
    }
    ;
}
;
class Game {
    constructor(canvas, player) {
        this.draw = () => {
            this.canvas.drawImageToCanvas("./Assets/Icons/ButtonsFREE/Setting.png", this.canvas.getWidth() - 10, this.canvas.getHeight() - 10, 10, 10);
            this.canvas.clear();
            this.park.draw();
            window.requestAnimationFrame(this.draw);
        };
        this.canvas = canvas;
        this.player = player;
        this.park = new Park("./assets/images/park.png", this.canvas, this.player);
    }
    ;
}
;
window.addEventListener("load", init);
function init() {
    const LudosMundi = new Game(new Canvas(document.getElementById("canvas")), new Player(5, 100, 100, 100, 100));
    window.requestAnimationFrame(LudosMundi.draw);
}
class Progress {
    constructor(current, increment) {
        this.current = current;
        this.increment = increment;
    }
    update() {
    }
    countUp() {
        if ((this.current + this.increment) < 100) {
            this.current += this.increment;
        }
        else {
            this.current = 100;
            this.update();
        }
        ;
    }
    countDown() {
        if (0 < (this.current - this.increment)) {
            this.current -= this.increment;
            this.update();
        }
        else {
            this.current = 0;
            this.update();
        }
    }
}
let healthbar = new Progress(30, 10);
let hungerbar = new Progress(30, 10);
let energybar = new Progress(30, 10);
let moodbar = new Progress(30, 10);
class LocationEntity extends Progress {
    constructor(current, increment) {
        super(current, increment);
    }
    draw() {
    }
}
class Hospital extends LocationEntity {
    constructor(current, increment) {
        super(current, increment);
    }
}
class House extends LocationEntity {
    constructor(current, increment) {
        super(current, increment);
    }
}
class Parc extends LocationEntity {
    constructor(current, increment) {
        super(current, increment);
    }
}
class Player {
    constructor(speed, health, hunger, energy, mood) {
        this.keyboardListener = new KeyboardHelper(false, false, false, false);
        this.speed = speed;
        this.health = health;
        this.hunger = hunger;
        this.energy = energy;
        this.mood = mood;
    }
    ;
    move() {
    }
    ;
    isColliding() {
    }
    ;
    getHealth() {
        return this.health;
    }
    ;
    getHunger() {
        return this.hunger;
    }
    ;
    getEnergy() {
        return this.energy;
    }
    ;
    getMood() {
        return this.mood;
    }
    ;
}
;
class School extends LocationEntity {
    constructor(current, increment) {
        super(current, increment);
    }
}
class Store extends LocationEntity {
    constructor(current, increment) {
        super(current, increment);
    }
}
class KeyboardHelper {
    constructor(leftPressed, rightPressed, upPressed, downPressed) {
        this.leftPressed = leftPressed;
        this.rightPressed = rightPressed;
        this.upPressed = upPressed;
        this.downPressed = downPressed;
    }
    ;
    keydownHandler(event) {
        switch (event.keyCode) {
            case 37:
            case 65:
            case 74:
                this.leftPressed = true;
                break;
            case 38:
            case 87:
            case 73:
                this.upPressed = true;
                break;
            case 40:
            case 83:
            case 75:
                this.downPressed = true;
                break;
            case 39:
            case 68:
            case 76:
                this.rightPressed = true;
                break;
        }
        ;
    }
    ;
    keyUpHandler(event) {
        switch (event.keyCode) {
            case 37:
            case 65:
            case 74:
                this.leftPressed = false;
                break;
            case 38:
            case 87:
            case 73:
                this.upPressed = false;
                break;
            case 40:
            case 83:
            case 75:
                this.downPressed = false;
                break;
            case 39:
            case 68:
            case 76:
                this.rightPressed = false;
                break;
        }
        ;
    }
    ;
}
;
class MathHelper {
    randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    ;
}
;
class MouseHelper {
    constructor() {
    }
    ;
}
;
class BaseView {
    constructor(src, canvas, player) {
        this.src = src;
        this.canvas = canvas;
        this.player = player;
    }
    ;
}
;
class Park extends BaseView {
    constructor(src, canvas, player) {
        super(src, canvas, player);
        this.draw = () => {
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.05, 100, this.player.getHealth(), 20, "black", "red");
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.1, 100, this.player.getHealth(), 20, "black", "red");
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.15, 100, this.player.getHealth(), 20, "black", "red");
            this.canvas.drawBarToCanvas(this.canvas.getWidth() * 0.05, this.canvas.getHeight() * 0.2, 100, this.player.getHealth(), 20, "black", "red");
        };
    }
    ;
}
;
//# sourceMappingURL=app.js.map