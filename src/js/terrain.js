import { Actor, Vector } from 'excalibur';
import { Resources, ResourceLoader } from './resources.js'

export class Terrain extends Actor{

    constructor(){
        super()
    }

    onInitialize(){
        this.graphics.use(Resources.Terrain.toSprite())
        this.pos = new Vector(500,550)
        this.vel = new Vector(-500,0)
    }

    onPreUpdate(){
        if(this.pos.x <= 300){
            this.pos = new Vector(500,550)
        }
    }
}