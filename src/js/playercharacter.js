import { Actor, Engine, Vector, Input } from "excalibur";
import { Resources, ResourceLoader } from './resources.js'

export class playercharacter extends Actor{

    constructor(){
        super({width:Resources.Player.width, height:Resources.Player.height})
    }

    onInitialize(){
        this.graphics.use(Resources.Player.toSprite())
        this.pos = new Vector(400, 300)
    }

    onPreUpdate(engine){
        let x = 0
        let y = 0

        if(engine.input.keyboard.isHeld(Input.Keys.W)){
            if(this.pos.y > 50){
                y = -200
            }
        }
        if(engine.input.keyboard.isHeld(Input.Keys.A)){
            if(this.pos.x > 50){
                x = -200
            }
        }
        if(engine.input.keyboard.isHeld(Input.Keys.D)){
            if(this.pos.x < 750){
                x = 200
            }
        }
        if(engine.input.keyboard.isHeld(Input.Keys.S)){
            if(this.pos.y < 550){
                y = 200
            }
        }
        this.vel = new Vector(x,y)
        
    }
}