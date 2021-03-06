class Timer {
    constructor(public counter = 60) {

        let intervalId = setInterval(() => {
            this.counter = this.counter - 1;
            if(this.counter === 0) clearInterval(intervalId)
        }, 1000)
    }

    public getTime () {
        return this.counter;
    }
}