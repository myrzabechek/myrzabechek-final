import React from 'react';
import bottleImage from './../img/ -6.jpg';
import ingredientsImage from './../img/topi.jpg';
import "./../styles/Info.css"

function Info() {
  return (
    <div className="page-container">
      <section className="intro-section">
        <div className="intro-text">
          <h2>Добро пожаловать в мир Bubble Tea </h2>
          <p>
          место, где каждый напиток превращается в настоящее произведение искусства.
          </p>
          <h2>Наши мастера с любовью готовят каждый заказ</h2>
          <p>
          Именно поэтому мы уделяем внимание каждой детали, <br /> начиная от выбора чая и заканчивая уникальными тапиоками, которые <br /> делают ваш бабл ти по-настоящему неповторимым.
          </p>
          <h2>Приятная атмосфера, свежие ингредиенты и широкий выбор вкусов</h2>
          <p>каждый напиток — это новый опыт. Мы уверены, что каждый найдет <br /> здесь что-то для себя: от классических и проверенных вкусов <br /> до смелых и необычных сочетаний.</p>
        </div>
        <div className="intro-image">
          <img src={bottleImage} alt="Product Display" />
        </div>
      </section>

      <section className="reviews-section">
        <div className="review">
          <p>“Жизнь слишком коротка, чтобы пить скучный чай!”</p>
          <span>Шрек</span>
          <span>Verified Buyer</span>
        </div>
        <div className="review">
          <p>“Мой напиток — мои правила. Бабл ти всегда прав.”</p>
          <span>Осел из шрека</span>
          <span>Verified Buyer</span>
        </div>
        <div className="review">
          <p>“Попробуй один раз — полюби навсегда.”</p>
          <span>Печенье из шрека</span>
          <span>Verified Buyer</span>
        </div>
      </section>

      <section className="details-section">
        <div className="details-image">
          <img src={ingredientsImage} alt="Ingredients" />
        </div>
        <div className="details-text">
          <h2>We do things differently than most producers</h2>
          <p>
            Our flavors are derived from real fruits, herbs, and botanicals, not ingredients from a lab. We leave out the artificial
            ingredients and excess sugar, and tell you whats inside. Its a better way to drink.
          </p>
          <a href="#learn-more" className="learn-more-btn">Learn More</a>
        </div>
      </section>
    </div>
  );
}

export default Info;
