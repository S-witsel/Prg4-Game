import { Timer, Scene, Vector, RotationType} from "excalibur"
import { Terrain } from './terrain'
import { playercharacter } from './playercharacter.js'
import { Healthbar } from './healthbar'
import { CurrentScore } from "./currentscore.js";
import { SmallEnemy } from "./smallenemy";
import { BigEnemy } from "./bigenemy";

export class Level1 extends Scene {

    playerCharacter
    score
    healthbar
    currentscore

    enemycounter
    engine

    enemySpawnTimer
    spawncounter

    constructor() {
        super({ width: 1300, height: 600 })
    }

    onInitialize(engine){
        this.engine = engine
        console.log("initiliased")
    }

    startLevel(engine){
        console.log("started building level")
        this.enemycounter = 0
        this.currentscore = 0

        this.spawncounter = 2000
        
        console.log(1)
        this.enemySpawnTimer = new Timer({
            fcn: () => this.spawnEnemyUnit(),
            repeats: true,
            interval: this.spawncounter
        })

        console.log(2)
        this.add(this.enemySpawnTimer)

        console.log(3)
        this.enemySpawnTimer.start()

        console.log(4)
        const ground = new Terrain()
        this.add(ground)

        console.log(5)
        this.playerCharacter = new playercharacter()
        this.add(this.playerCharacter)

        console.log(6)
        this.healthbar = new Healthbar(0)
        this.add(this.healthbar)
        
        console.log(7)
        this.score = new CurrentScore(this.currentscore)
        this.add(this.score)

        console.log("finished building level")
    }

    onActivate(ctx){
        this.startLevel(this.engine)
        console.log('start level')
    }

    onDeactivate(){
        this.clear()
        console.log("clear level")
    }

    onPreUpdate(){

        this.spawncounter = this.spawncounter -0.5
        this.enemySpawnTimer.interval = this.spawncounter

        if(this.spawncounter < 150){
            this.spawncounter = 150
        }
    }

    spawnEnemyUnit(){
        console.log(this.enemycounter)
        if(this.enemycounter < 5){
            console.log('een enemy is in leven')
            let enemy
            if(Math.random() < 0.2){
                enemy = new BigEnemy()
            } else {
                enemy = new SmallEnemy()
            }
            this.add(enemy)
            this.enemycounter = this.enemycounter + 1
        }
    }
}