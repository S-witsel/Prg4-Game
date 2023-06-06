import { Actor, SpriteSheet, Vector } from "excalibur";
import { Resources } from "./resources";

export class ScoreNumber extends Actor{

    amount
    spritesheet

    xpos
    ypos

    constructor(xpos, ypos, num){
        super()
        this.xpos = xpos
        this.ypos = ypos
        this.amount = num
    }

    onInitialize(){
        this.pos = new Vector(this.xpos, this.ypos)

        this.spritesheet = SpriteSheet.fromImageSource({
            image: Resources.ScoreNumbers,
            grid: {
                rows: 1,
                columns: 10,
                spriteWidth: 50,
                spriteHeight: 50
            }
        })
        this.graphics.use(this.spritesheet.getSprite(this.amount, 0))
    }
}