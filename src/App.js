import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";
import './App.css';
import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';
import { MdPlace } from "react-icons/md";
import res from "./assets/resturent.jpg";
import maggy from "./assets/maggy.jpeg";
import edli from "./assets/edli.jpeg";
import logo from "./assets/logo.jpeg";
import { Link } from 'react-router-dom';

// Single array of food items with a 'category' field
const foodItems = [
  { id: 1, name: 'Chow Mein', description: 'Stir-fried noodles with veggies', price: 'Rs 10', img: maggy, category: 'Chinese', img1: maggy, img2: maggy },
  { id: 2, name: 'Spring Rolls', description: 'Crispy rolls with vegetable filling', price: 'Rs 6', img: maggy, category: 'Chinese', img1: maggy, img2: maggy },
  { id: 3, name: 'Indian Dosa', description: 'Crispy rice pancake', price: 'Rs 8', img: edli, category: 'South Indian', img1: edli, img2: edli },
  { id: 4, name: 'Idli Sambar', description: 'Steamed rice cakes', price: 'Rs 5', img: edli, category: 'South Indian', img1: edli, img2: edli },
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('Chinese');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false);
  };

  // Filter food items based on the selected category
  const filteredFoodItems = foodItems.filter((food) => food.category === selectedCategory);

  return (
    <div className="restaurant-page">
      <div className="first">
        <div className="left" data-aos="fade-right">
          <h3>Flame And Fire</h3>
          <p>123 Main Street, Nagpur</p>
          <div className="social-links">
            <Link to="https://wa.me/9284614144"><FaWhatsapp color='green' size={'21px'} /></Link>
            <Link to="https://www.instagram.com"><FaInstagram color='red' size={'21px'} /></Link>
            <Link to="https://www.facebook.com/"><FaFacebook color='blue' size={'21px'} /></Link>
            <Link to="https://www.youtube.com"><FaYoutube color='red' size={'21px'} /></Link>
          </div>
        </div>
        <div className="right" data-aos="zoom-in">
          <img src={res} width={'150px'} alt="Restaurant" className="restaurant-image" />
        </div>
      </div>

      <div className="row second-row">
        <h2>Menu - {selectedCategory} Food</h2>
        <div className="category" onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}>
          <div className="category-item" onClick={() => handleCategoryChange('Chinese')}>
            <p>Chinese</p>
          </div>
          <div className="category-item" onClick={() => handleCategoryChange('South Indian')}>
            <p>South Indian</p>
          </div>
          <div className="category-item">
            <p>Veg</p>
          </div>
          <div className="category-item">
            <p>Non-Veg </p>
          </div>
          <div className="category-item">
            <p>Rice</p>
          </div>
          <div className="category-item">
            <p>Paneer</p>
          </div>
        </div>

        <div className="menu-container">
          {filteredFoodItems.map((food) => (
            <div className="menu-item" key={food.id}>
              <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }} 
                spaceBetween={10}
                className="image-slider"
                modules={[Pagination]}
              >
                <SwiperSlide><img src={food.img} alt={food.name} className="food-image" /></SwiperSlide>
                <SwiperSlide><img src={food.img1} alt={food.name} className="food-image" /></SwiperSlide>
                <SwiperSlide><img src={food.img2} alt={food.name} className="food-image" /></SwiperSlide>
              </Swiper>
              <div className='food-content'>
                <h4>{food.name}</h4>
                <p>{food.description}</p>
                <p className='p'>{food.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="quick-contact">
        <Link to="tel:919284614144" target="_blank"><div className="icontainer"><FaPhone color='#588399' size={'33px'} /></div></Link>
        <Link to="https://g.co/kgs/uTT7h3u" target="_blank"><div className="icontainer"><FaGoogle color='#588399' size={'33px'} /></div></Link>
        <Link to="mailto:abhighushe@gmail.com" target="_blank"><div className="icontainer"><AiTwotoneMail color='#588399' size={'33px'} /></div></Link>
        <Link to="https://maps.app.goo.gl/2ShnbPxuZZ61r6ds6" target="_blank"><div className="icontainer"><MdPlace color='#588399' size={'35px'} /></div></Link>
      </div>

      <footer>
        Powered by : <img src={logo} alt="" width={'110px'} />
      </footer>
    </div>
  );
};

export default App;
