import { AppLayout } from '../../layout'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Sports.css'

import image1 from '../../assets/1.jpeg';
import image2 from '../../assets/2.jpg';
// import image3 from '../../assets/3.jpg';
import image4 from '../../assets/4.jpeg';
import image5 from '../../assets/5.jpeg';
import image6 from '../../assets/6.jpeg';
import image7 from '../../assets/7.jpeg';
import image8 from '../../assets/8.jpeg';


const slideImages = [
  {
    url: image1,
    caption: 'Slide 1'
  },
  {
    url: image2,
    caption: 'Slide 2'
  },
  {
    url: image4,
    caption: 'Slide 4'
  },
  {
    url: image5,
    caption: 'Slide 5'
  },
  {
    url: image6,
    caption: 'Slide 6'
  },
  {
    url: image7,
    caption: 'Slide 7'
  },
  {
    url: image8,
    caption: 'Slide 8'
  },
];

const slideOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: false
};

export const Sports = () => {
	return (
		<AppLayout>
        <div className='fadeIn'>
          <div>
            <h1 className='sports__title'>Deporte</h1>
            <p className='sports__info'>
              En cuanto al deporte, mi pasión es el futbol y lo juego desde que tengo 3 años. Gran parte de mi vida jugué al mismo y pude experimentar todo tipo de emociones y experiencias que me dejó el mismo.
              Si bien probé otros deportes como natación, judo y basquet, fue algo de corto plazo que no me terminó de llamar la atención. También complemento futbol con gimnasio, otra actividad que cada día me ayuda a mejorar y saca lo mejor de mí. 
              Uno de los pilares de mi vida es el deporte, no solo porque me guste, sino porque a su vez me ayudo a generar disciplina y es parte de un estilo de vida saludable que en mi opinión todos deberiamos tener.
            </p>
          </div>
          <div className="slide-container">
              <Slide {...slideOutProperties }>
              {slideImages.map((slideImage, index)=> (
                  <div className="each-slide" key={index}>
                    <div style={{'backgroundImage': `url(${slideImage.url})`}} className="each-slide-image">
                      {/* <span>{slideImage.caption}</span> */}
                    </div>
                  </div>
                ))} 
              </Slide>
          </div>
        </div>
		</AppLayout>
	)
}
