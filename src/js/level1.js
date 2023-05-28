import { Timer, Scene, Vector, RotationType} from "excalibur"
import { ResourceLoader } from './resources.js'
import { Terrain } from './terrain'
import { playercharacter } from './playercharacter.js'
import { projectile} from "./projectile.js";
import { healthbar } from './healthbar'
import { Blank } from "./blank.js";

export class Level1 extends Scene {

    playerCharacter
    score
    healthbar

    constructor() {
        super({ width: 1300, height: 600 })
    }

    onInitialize(){
        const enemyBulletTimer = new Timer({
            fcn: () => this.spawnEnemy(),
            repeats: true,
            interval: 500
        })
        this.add(enemyBulletTimer)
        enemyBulletTimer.start()
        const ground = new Terrain()
        this.add(ground)

        this.playerCharacter = new playercharacter()
        this.add(this.playerCharacter)

        this.healthbar = new healthbar(0)
        this.add(this.healthbar)
    }

    onActivate(ctx){
        this.add(new Blank())

        this.playerCharacter.health = 0
        this.playerCharacter.pos = new Vector(650, 300)
        this.playerCharacter.actions.rotateTo(0, 1000, RotationType.Clockwise)
        this.healthbar.onHealthUpdate(this.playerCharacter.health)
        
    }

    onPreUpdate(engine){
        
    }

    spawnEnemy(){
        let direction = 1
        let startpoint = 0
        if(Math.random() < 0.5){
            direction = -1
            startpoint = 1300
        }
        let enemyProjectile = new projectile(0 + startpoint ,(Math.random() * 400) + 75, 300 * direction, 0, 0, 200)
        this.add(enemyProjectile)
    }
}