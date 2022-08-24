import { Component } from 'react';
import Slider from 'react-slick';
import './styles.css';

import img1 from '../sliderImages/thomas-ae-XrxpaLBekU8-unsplash.jpg';
import img2 from '../sliderImages/sid-ramirez-j_UHrIaV-8M-unsplash.jpg';
import img3 from '../sliderImages/nikita-kachanovsky-mwytIca3qNA-unsplash.jpg';
import img4 from '../sliderImages/omid-armin-gSZCLsE7ysc-unsplash.jpg';

type imagesProps = {
  id: string;
  alt: string;
  url: string;
  href: string;
};
//把四張圖片放入一個陣列 並依序給予個別屬性
const images: imagesProps[] = [
  {
    id: '1',
    alt: 'Cannon Camera',
    url: img1, //對應到上面 引入的 img1
    href: '/product/62d92f019c3ffd27c0d74213',
  },
  {
    id: '2',
    alt: 'Airpods ',
    url: img2, //對應到上面 引入的 img2
    href: '/product/62d92f019c3ffd27c0d74211',
  },
  {
    id: '3',
    alt: 'Playstation 4 PRO',
    url: img3, //對應到上面 引入的 img3
    href: '/product/62d92f019c3ffd27c0d74214',
  },
  {
    id: '4',
    alt: 'Airpods',
    url: img4, //對應到上面 引入的 img4
    href: '/product/62d92f019c3ffd27c0d74211',
  },
];

export default class Carousel extends Component {
  render() {
    const settings = {
      //對應到下面的 settings 參數 給予從 react-slick 引入的 Slider 使用
      dots: true,
      fade: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4750,
      className: 'slides',
      pauseOnHover: false,
      arrows: false,
    };

    return (
      <Slider {...settings}>
        {/* 從 react-slick 引入的 Slider */}
        {images.map((image) => {
          return (
            <div className='wrapper' key={image.id}>
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
