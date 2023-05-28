
// import { Actor, Engine, Vector, Input, Timer, Rectangle, Color} from "excalibur"
// import { Resources, ResourceLoader } from './resources.js'
// import { Terrain } from './terrain'
// import { playercharacter } from './playercharacter.js'
// import { projectile} from "./projectile.js";
// import { healthbar } from './healthbar'

// export class Game extends Engine {

//     playerCharacter
//     score
//     healthbar

//     constructor() {
//         super({ width: 1300, height: 600 })
//         this.start(ResourceLoader).then(() => this.startGame())
//     }

//     onInitialize(){
//         const enemyBulletTimer = new Timer({
//             fcn: () => this.spawnEnemy(),
//             repeats: true,
//             interval: 500
//         })
//         this.add(enemyBulletTimer)
//         enemyBulletTimer.start()
        
//     }

//     startGame() {
//         const ground = new Terrain()
//         this.add(ground)

//         this.playerCharacter = new playercharacter()
//         this.add(this.playerCharacter)

//         this.healthbar = new healthbar(0)
//         this.add(this.healthbar)
//     }

//     onPreUpdate(engine){
        
//     }

//     spawnEnemy(){
//         let direction = 1
//         let startpoint = 0
//         if(Math.random() < 0.5){
//             direction = -1
//             startpoint = 1300
//         }
//         let enemyProjectile = new projectile(0 + startpoint ,(Math.random() * 400) + 75, 300 * direction, 0, 0, 200)
//         this.add(enemyProjectile)
//     }
// }
import { Engine } from 'excalibur'
import '../css/style.css'
import { Level1 } from './level1'
import { GameOver } from './gameover'
import { ResourceLoader } from './resources'


export class Game extends Engine{

    level1
    gameover
    tutorial
    mainmenu

    constructor() {
        super({ width: 1300, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame(){
        this.addScene('level1', new Level1())
        this.addScene('gameover', new GameOver())

        this.goToScene('level1')
    }
}

new Game()
