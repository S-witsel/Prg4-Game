import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import terrainImage from '../images/TestTerrain.png'
import playerImage from '../images/AlienUfo.png'
import playerProjectile from '../images/TestProjectilev2.png'
import enemyProjectile from '../images/TestProjectileEnemyv2.png'
import healthbars from '../images/HealthBarSpriteSheet.png'
import retrybutton from '../images/retrybutton.png'

const Resources = {
    Terrain: new ImageSource(terrainImage),
    Player: new ImageSource(playerImage),
    PlayerProjectile: new ImageSource(playerProjectile),
    EnemyProjectile: new ImageSource(enemyProjectile),
    HealthBars: new ImageSource(healthbars),
    RetryButton : new ImageSource(retrybutton)
}
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}
const ResourceLoader = new Loader(resourceArray)
export { Resources, ResourceLoader }