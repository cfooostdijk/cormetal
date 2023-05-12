import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react'
import { galleryData } from '../../Assets/Data'
import '../styles/Gallery.sass'
import Slider from 'react-slick'

const Gallery = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });

  const toggleLightbox = (slide) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: slide || lightboxController.slide
    })
  }

  const firstImage = galleryData.length > 0 ? galleryData[0].image : null;

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="gallery-container" id='Gallery'>
      <Slider {...settings}>
        {galleryData.map((item, index) => (
          <div key={index} className="gallery-item" onClick={() => toggleLightbox(index + 1)}>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </Slider>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={galleryData.map(item => item.image)}
        slide={lightboxController.slide}
      />
    </div>
  )
}

export default Gallery
