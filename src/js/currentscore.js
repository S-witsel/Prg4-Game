import { Actor, Engine } from "excalibur";
import { ScoreNumber } from "./scorenumber";
import { NumberToArray } from "./numbertoarray";

export class CurrentScore extends Actor{

    number1
    number2
    number3
    number4
    number5
    number6

    scorenumber1
    scorenumber2
    scorenumber3
    scorenumber4
    scorenumber5
    scorenumber6

    score
    numberarray
    scorearray

    constructor(score){
        super()
        this.score = score
    }

    onInitialize(engine){

        this.scorearray = []
        this.numberarray = []

        this.score = 0

        this.formatScore(this.score)

        this.scorenumber1 = this.scorearray[0]
        this.scorenumber2 = this.scorearray[1]
        this.scorenumber3 = this.scorearray[2]
        this.scorenumber4 = this.scorearray[3]
        this.scorenumber5 = this.scorearray[4]
        this.scorenumber6 = this.scorearray[5]

        this.number1 = new ScoreNumber(550,40, this.scorenumber1)
        engine.currentScene.add(this.number1)

        this.number2 = new ScoreNumber(620,40, this.scorenumber2)
        engine.currentScene.add(this.number2)

        this.number3 = new ScoreNumber(690,40, this.scorenumber3)
        engine.currentScene.add(this.number3)

        this.number4 = new ScoreNumber(760,40, this.scorenumber4)
        engine.currentScene.add(this.number4)

        this.number5 = new ScoreNumber(830,40, this.scorenumber5)
        engine.currentScene.add(this.number5)

        this.number6 = new ScoreNumber(900,40, this.scorenumber6)
        engine.currentScene.add(this.number6)

        this.numberarray.push(this.number1)
        this.numberarray.push(this.number2)
        this.numberarray.push(this.number3)
        this.numberarray.push(this.number4)
        this.numberarray.push(this.number5)
        this.numberarray.push(this.number6)
    }

    updateScore(num, engine){
        this.formatScore(num)

        console.log(this.scorearray)

        if(this.numberarray[0].number != this.scorearray[0]){
            this.number1.kill()
            this.number1 = new ScoreNumber(550,40, this.scorearray[0])
            engine.currentScene.add(this.number1)
        }
        if(this.numberarray[1].number != this.scorearray[1]){
            this.number2.kill()
            this.number2 = new ScoreNumber(620,40, this.scorearray[1])
            engine.currentScene.add(this.number2)
        }
        if(this.numberarray[2].number != this.scorearray[2]){
            this.number3.kill()
            this.number3 = new ScoreNumber(690,40, this.scorearray[2])
            engine.currentScene.add(this.number3)
        }
        if(this.numberarray[3].number != this.scorearray[3]){
            this.number4.kill()
            this.number4 = new ScoreNumber(760,40, this.scorearray[3])
            engine.currentScene.add(this.number4)
        }
        if(this.numberarray[4].number != this.scorearray[4]){
            this.number5.kill()
            this.number5 = new ScoreNumber(830,40, this.scorearray[4])
            engine.currentScene.add(this.number5)
        }
        if(this.numberarray[5].number != this.scorearray[5]){
            this.number6.kill()
            this.number6 = new ScoreNumber(900,40, this.scorearray[5])
            engine.currentScene.add(this.number6)
        }

        console.log(this.numberarray)
}

    formatScore(num){
        let scrarray = new NumberToArray(num).output
        this.scorearray = scrarray
        while(this.scorearray.length < 6){
            this.scorearray.unshift(0)
        }
    }
}