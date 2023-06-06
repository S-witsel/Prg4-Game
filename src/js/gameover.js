import { Scene } from "excalibur";
import { RetryButton } from "./retrybutton";
import { MainMenuButton } from "./mainmenubutton";

export class GameOver extends Scene{

    retrybutton
    mainmenubutton

    constructor(){
        super()
    }

    onInitialize(){
        console.log('game over screen is gemaakt')

        this.retrybutton = new RetryButton(650, 200)
        this.retrybutton.enableCapturePointer = true
        this.add(this.retrybutton)

        this.mainmenubutton = new MainMenuButton(650, 400)
        this.mainmenubutton.enableCapturePointer = true
        this.add(this.mainmenubutton)
    }

    onActivate(ctx){
        console.log('game over screen is geactiveerd')
    }
}