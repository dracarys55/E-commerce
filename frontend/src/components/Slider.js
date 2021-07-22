import { Component } from 'react';
import Slider from 'react-slick';
import './styles.css';

import img1 from '../sliderImages/thomas-ae-XrxpaLBekU8-unsplash.jpg';
import img2 from '../sliderImages/sid-ramirez-j_UHrIaV-8M-unsplash.jpg';
import img3 from '../sliderImages/nikita-kachanovsky-mwytIca3qNA-unsplash.jpg';
import img4 from '../sliderImages/omid-armin-gSZCLsE7ysc-unsplash.jpg';

//把四張圖片放入一個陣列 並依序給予個別屬性
const images = [
  {
    id: '1',
    alt: 'Cannon Camera',
    url: img1, //對應到上面 引入的 img1
    href: '/product/60f5568c6ffa744eb4d2d690',
  },
  {
    id: '2',
    alt: 'Airpods ',
    url: img2, //對應到上面 引入的 img2
    href: '/product/60f5568b6ffa744eb4d2d68e',
  },
  {
    id: '3',
    alt: 'Playstation 4 PRO',
    url: img3, //對應到上面 引入的 img3
    href: '/product/60f5568c6ffa744eb4d2d691',
  },
  {
    id: '4',
    alt: 'Airpods',
    url: img4, //對應到上面 引入的 img4
    href: '/product/60f5568b6ffa744eb4d2d68e',
  },
];

export default class Carousel extends Component {
  render() {
    const settings = {
      //對應到下面的 settings 參數 給予從 react-slick 引入的 Slider 使用
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      className: 'slides',
      pauseOnHover: false,
    };

    return (
      <Slider {...settings}>
        {/* 從 react-slick 引入的 Slider */}
        {images.map((image) => {
          //對每一個 images進行以下動作
          return (
            <div className='wrapper' key={image.id}>
              {/*連結另開新視窗*/}
              <a href={image.href} rel='noreferrer' target='_blank'>
                <img className='sliderImg' src={image.url} alt={image.alt} />
              </a>
            </div>
          );
        })}
      </Slider>
    );
  }
}
