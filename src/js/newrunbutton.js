import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class NewRunButton extends Actor{

    xpos
    ypos

    constructor(xpos, ypos){
        super({width: Resources.NewRunButton.width, height: Resources.NewRunButton.height})
        this.xpos = xpos
        this.ypos = ypos
    }

    onInitialize(engine){
        this.graphics.use(Resources.NewRunButton.toSprite())
        this.pos = new Vector(this.xpos,this.ypos)
        this.on('pointerup', (event) => {
            engine.goToScene('level1')
        })
    }
}