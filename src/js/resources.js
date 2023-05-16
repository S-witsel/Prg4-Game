import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import terrainImage from '../images/TestTerrain.png'
import playerImage from '../images/AlienUfo.png'

const Resources = {
    Terrain: new ImageSource(terrainImage),
    Player: new ImageSource(playerImage)
}
const ResourceLoader = new Loader([Resources.Terrain, Resources.Player])

export { Resources, ResourceLoader }