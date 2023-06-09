import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class RetryButton extends Actor{

    xpos
    ypos

    constructor(xpos, ypos){
        super({width: Resources.RetryButton.width, height: Resources.RetryButton.height})
        this.xpos = xpos
        this.ypos = ypos
    }

    onInitialize(engine){
        this.graphics.use(Resources.RetryButton.toSprite())
        this.pos = new Vector(this.xpos,this.ypos)
        this.on('pointerup', (event) => {
            engine.goToScene('level1')
        })
    }
}