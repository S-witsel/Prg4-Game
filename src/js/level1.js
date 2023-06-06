import { Timer, Scene, Vector, RotationType} from "excalibur"
import { Terrain } from './terrain'
import { playercharacter } from './playercharacter.js'
import { projectile} from "./projectile.js";
import { Healthbar } from './healthbar'
import { CurrentScore } from "./currentscore.js";
import { Enemy } from "./enemy";

export class Level1 extends Scene {

    playerCharacter
    score
    healthbar
    currentscore

    enemycounter
    engine

    enemyBulletTimer
    enemySpawnTimer
    spawncounter

    constructor() {
        super({ width: 1300, height: 600 })
    }

    onInitialize(engine){
        this.engine = engine
    }

    startLevel(engine){
        this.enemycounter = 0
        this.currentscore = 0

        this.spawncounter = 2000
        this.enemyBulletTimer = new Timer({
            fcn: () => this.spawnEnemy(),
            repeats: true,
            interval: this.spawncounter
        })
        
        this.enemySpawnTimer = new Timer({
            fcn: () => this.spawnEnemyUnit(),
            repeats: true,
            interval: 1000
        })

        this.add(this.enemyBulletTimer)
        this.add(this.enemySpawnTimer)

        this.enemyBulletTimer.start()
        this.enemySpawnTimer.start()

        const ground = new Terrain()
        this.add(ground)

        this.playerCharacter = new playercharacter()
        this.add(this.playerCharacter)

        this.healthbar = new Healthbar(0)
        this.add(this.healthbar)
                
        this.score = new CurrentScore(this.currentscore)
        this.add(this.score)
    }

    onActivate(ctx, engine){
        this.startLevel(this.engine)
        console.log('start level')
    }

    onDeactivate(){
        this.clear()
        console.log("clear level")
    }

    onPreUpdate(engine){

        this.spawncounter = this.spawncounter -0.5
        this.enemyBulletTimer.interval = this.spawncounter

        if(this.spawncounter < 150){
            this.spawncounter = 150
        }
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

    spawnEnemyUnit(){
        if(this.enemycounter < 5){
            let enemy = new Enemy(200)
            this.add(enemy)
            this.enemycounter = this.enemycounter + 1
        }
    }
}