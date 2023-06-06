import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";
import { projectile } from "./projectile";
import { Enemy } from "./enemy";

export class BigEnemy extends Enemy{

    constructor(){
        super({radius: 100})
    }

    onInitialize(){
        
    }

    onInitialize(engine){
        this.onSpawn()
        this.graphics.use(Resources.Enemy1.toSprite())
        this.health = 15
        this.shootinterval = 500
        this.flyspeed = 100
        this.deathjump = 200
        this.scale = new Vector(2,2)

        this.on('collisionstart', (event) =>{
            if(event.other instanceof projectile){
                if(event.other.type === 1){
                    this.health = this.health - 1
                    event.other.kill()
                }
            }
        })
    }

    onPreUpdate(engine, delta){

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

        if(this.isShooting && this.health > 0){
            if(this.shootcooldown > this.shootinterval){

                this.shootdirectionx = (engine.currentScene.playerCharacter.pos.x) - (this.pos.x)
                this.shootdirectiony = (engine.currentScene.playerCharacter.pos.y) - (this.pos.y)

                engine.currentScene.add(new projectile(this.pos.x, this.pos.y, this.shootdirectionx, this.shootdirectiony, 0, 200))
                this.shootcooldown = 0
            } else {
                this.shootcooldown = this.shootcooldown + delta
            }
        }

        if(this.health < 1){
            this.vel = new Vector(this.direction, this.deathjump * -1)
            this.deathjump = this.deathjump -10
            this.angularVelocity = this. angularVelocity + 0.1
        }

        if(this.pos.y > 750){
            console.log('een enemy is dood')
            this.kill()
            engine.currentScene.enemycounter--
            console.log(engine.currentScene.enemycounter)
        }
    }
}