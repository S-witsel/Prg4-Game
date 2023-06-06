import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import terrainImage from '../images/TestTerrain.png'
import playerImage from '../images/AlienUfo.png'
import playerProjectile from '../images/TestProjectilev2.png'
import enemyProjectile from '../images/TestProjectileEnemyv2.png'
import healthbars from '../images/HealthBarSpriteSheet.png'
import retrybutton from '../images/retrybutton.png'
import scorenumbers from '../images/numbers.png'
import newrunbutton from '../images/newrunbutton.png'
import mainmenubutton from '../images/mainmenubutton.png'
import enemy1 from '../images/enemy1.png'

const Resources = {
    Terrain: new ImageSource(terrainImage),
    Player: new ImageSource(playerImage),
    PlayerProjectile: new ImageSource(playerProjectile),
    EnemyProjectile: new ImageSource(enemyProjectile),
    HealthBars: new ImageSource(healthbars),
    RetryButton : new ImageSource(retrybutton),
    ScoreNumbers : new ImageSource(scorenumbers),
    NewRunButton : new ImageSource(newrunbutton),
    MainMenuButton : new ImageSource(mainmenubutton),
    Enemy1 : new ImageSource(enemy1)
}
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}
const ResourceLoader = new Loader(resourceArray)
export { Resources, ResourceLoader }