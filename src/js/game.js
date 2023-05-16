import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Terrain } from './terrain'
import { playercharacter } from './playercharacter'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        const ground = new Terrain()
        this.add(ground)
        const player = new playercharacter()
        this.add(player)
    }
}

new Game()
