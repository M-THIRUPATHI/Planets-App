// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachItem} = props
  const {name, imageUrl, description} = eachItem

  return (
    <li className="list-items">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </li>
  )
}

export default PlanetItem
