import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const images = [
    {
      url: 'https://media.istockphoto.com/id/175018694/photo/uss-wisconsin.jpg?s=612x612&w=0&k=20&c=tkS8aC-4p11H-BqdmukisWwmFVBPYIF8y1-XrbUinOE=',
      title: 'Naval Base',
      description: 'Panoramic views of the city and Bay of Bengal'
    },
    {
      url: 'https://media.istockphoto.com/id/1073219556/photo/visakhapatnam.jpg?s=612x612&w=0&k=20&c=9AwuIKvqhxgmI61ozvwoPN-xmsWgrEISHcjS3xKZGk8=',
      title: 'RK Beach',
      description: 'Popular beach known for its pristine shoreline'
    },
    {
      url: 'https://media.istockphoto.com/id/1140510027/photo/rabindra-sarovar-lake-kolkata-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=ajGpgNWdKJuU0y4KPlkWm2lCpPbUD1zJ_nIQ1HN_2Sc=',
      title: 'Tenneti Park Beach',
      description: 'Perfect spot for water sports and scenic beauty'
    },
    {
      url: 'https://media.istockphoto.com/id/1351966272/photo/araku-valley-visakhapatnam-andhra-pradesh.webp?a=1&b=1&s=612x612&w=0&k=20&c=qCeVH1WCrViAs0xx6OLSKgV79czfCfI36QTQgkOX8R0=',
      title: 'Araku Valley',
      description: 'Scenic hill station with coffee plantations'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: true
  };

  return (
    <div className="w-[100%] mx-auto my-8 px-4">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative h-[600px]">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-8 rounded-b-xl">
              <h3 className="text-3xl font-bold mb-2">{image.title}</h3>
              <p className="text-lg">{image.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
