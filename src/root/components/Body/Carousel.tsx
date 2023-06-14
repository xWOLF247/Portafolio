import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
    proyects: any[];
  }
  
  const Carousel: React.FC<CarouselProps> = ({ proyects }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
          {proyects.map((proyect) => (
            <div key={proyect.id}>
              <h2>
                <a href={proyect.html_url} target="_blank" rel="noreferrer">
                  {proyect.name}
                </a>
              </h2>
            </div>
          ))}
        </Slider>
      );
    };


export default Carousel;