import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class Enemy extends Actor{

    flyspeed

    startxpos
    startypos

    direction
    isShooting

    constructor(flyspeed){
        super()
        this.flyspeed = flyspeed
    }

    onInitialize(){
        this.onSpawn()
        this.graphics.use(Resources.Enemy1.toSprite())
    }

    onPreUpdate(){
        if(this.direction < 0 && this.pos.x < 1150){
            this.bobAndWeave(this.flyspeed)
            this.pos.x = this.pos.x + 1
        }
        if(this.direction > 0 && this.pos.x > 150){
            this.bobAndWeave(this.flyspeed)
            this.pos.x = this.pos.x - 1
        }
        if(this.pos.y < 125 || this.pos.y > 475){
            this.vel = new Vector(this.vel.x, this.vel.y * -1)
        }
    }

    onSpawn(){
        this.isShooting = false
        if(Math.random() < 0.5){
            this.startxpos = -100
            this.direction = 100
        } else {
            this.startxpos = 1400
            this.direction = -100
        }

        this.startypos = (Math.random() * 380) + 80
        this.pos = new Vector(this.startxpos, this.startypos)
        this.vel = new Vector(this.direction, 0)
    }

    bobAndWeave(flyspeed){
        this.isShooting = true
        let startdirection = (Math.random()*2)-1
        if(startdirection < 0){
            this.vel = new Vector(0, flyspeed)
        }
        if(startdirection > 0){
            this.vel = new Vector(0, flyspeed * -1)
        }
    }
}