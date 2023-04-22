// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="container" data-testid="planets">
      <h1 className="main-heading">PLANETS</h1>
      <ul className="list">
        <Slider {...settings}>
          {planetsList.map(eachItem => (
            <PlanetItem eachItem={eachItem} key={eachItem.id} />
          ))}
        </Slider>
      </ul>
    </div>
  )
}

export default PlanetsSlider
