import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class MainMenuButton extends Actor{

    xpos
    ypos

    constructor(xpos, ypos){
        super({width: Resources.MainMenuButton.width, height: Resources.MainMenuButton.height})
        this.xpos = xpos
        this.ypos = ypos
    }

    onInitialize(engine){
        this.graphics.use(Resources.MainMenuButton.toSprite())
        this.pos = new Vector(this.xpos,this.ypos)
        this.on('pointerup', (event) => {
            engine.goToScene('mainmenu')
        })
    }
}