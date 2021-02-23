import React, {Component} from 'react';
import './Homepage.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const photos = [
    {
        name: 'Photo 1',
        url: "imgCarousel/photo1.jpg",
        alt: "parking with truck",
        text: "Explorez toutes nos solutions"
    },
    {
        name: 'Photo 2',
        url: "imgCarousel/photo2.jpg",
        alt: "truck on a moutain road",
        text: "Changez la logistique de votre entreprise"
    },
    {
        name: 'Photo 3',
        url: "imgCarousel/photo3.jpg",
        alt: "truck on a highway",
        text: "Pensez à d'autres moyens de transports"
    },
    {
        name: 'Photo 4',
        url: "imgCarousel/photo4.jpg",
        alt: "truck by night",
        text: "Différents programmes écologiques"
    },
    {
        name: 'Photo 5',
        url: "imgCarousel/photo5.jpg",
        alt: "truck in black and white",
        text: "Tournez vous vers les innovations"
    }
]

function Arrow(props) {
    const {className,to, onClick, style} = props;
    return (
        <div className={className}
        style={{...style, display: "block", fontSize: "40px"}}
        onClick={onClick}/>
    );
}

class Carousel extends Component {
    
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            autoplay: false,
            autoplaySpeed: 1500,
            pauseOnHover: true,
            accessibility: true,
            arrows: true,
            prevArrow: <Arrow to="prev" />,
            nextArrow: <Arrow to="next" />,
            slidesToScroll: 1,
            className: "slides"
        };
        return (
            <div className="carouselHead">
                <Slider {...settings}>
                {photos.map((photo) => {
                    return (
                        <div className="carouselTest">
                            <img width="100%" height="440px" src={photo.url} alt={photo.alt}/>
                                <div><h1 className="carouselText">{photo.text}</h1></div>
                        </div>
                    )
                })}
                </Slider>
            </div>
        )
    }
}

export default Carousel;