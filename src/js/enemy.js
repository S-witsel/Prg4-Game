import { Actor, Vector } from "excalibur";

export class Enemy extends Actor{

    health

    flyspeed

    startxpos
    startypos

    shootdirectionx
    shootdirectiony

    direction

    isShooting
    canshoot
    shootcooldown

    shootinterval
    deathjump

    constructor(flyspeed){
        super({radius: 50})
        this.flyspeed = flyspeed
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
        this.shootcooldown = 0
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