import { Scene } from "excalibur";
import { NewRunButton } from "./newrunbutton";

export class MainMenu extends Scene{

    newrunbutton

    constructor() {
        super({ width: 1300, height: 600 })
    }

    onInitialize(){
        console.log('main menu screen is gemaakt')
        this.newrunbutton = new NewRunButton(650,300)
        this.newrunbutton.enableCapturePointer = true
        this.add(this.newrunbutton)
    }

    onActivate(ctx){
        console.log('main menu screen is geactiveerd')
    }
}