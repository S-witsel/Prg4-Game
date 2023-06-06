import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class projectile extends Actor{
    
    xpos
    ypos
    xvel
    yvel
    type
    speedFactor

    constructor(xpos, ypos, xvel, yvel, type, speedFactor){
        super({width: Resources.PlayerProjectile.width, height:Resources.PlayerProjectile.height})
        this.xpos = xpos
        this.ypos = ypos
        this.xvel = xvel
        this.yvel = yvel
        this.type = type
        this.speedFactor = speedFactor
    }

    onInitialize(engine){
        if(this.type === 0){
            this.graphics.use(Resources.EnemyProjectile.toSprite())
            this.on("collisionstart", (event) =>{
                if(event.other.type === 1){
                    event.other.kill()
                    this.kill()
                }
            })
            
        }else{
            this.graphics.use(Resources.PlayerProjectile.toSprite())
            this.on("collisionstart", (event) =>{
                if(event.other.type === 0){
                    event.other.kill()
                    this.kill()
                    engine.currentScene.currentscore = engine.currentScene.currentscore + 1
                    engine.currentScene.score.updateScore(engine.currentScene.currentscore, engine)
                }
            })
            this.scale = new Vector(2,2)
        }
        this.pos = new Vector(this.xpos, this.ypos)

        let normalvelocity = new Vector(this.xvel, this.yvel)
        this.vel = normalvelocity.normalize().scale(this.speedFactor)
    }

    onPreUpdate(){
        this.on('exitviewport', (event) => {
            this.kill()
        })
    }
}