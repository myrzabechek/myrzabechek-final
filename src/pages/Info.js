import React from 'react';
import shop from "./../img2/COFFEE _ MINIMALISM.jpeg"
import shop2 from "./../img2/二俣公一デザインの〈ブルーボトル〉が九州上陸。場所は福岡・天神エリアです。.jpeg"
import "./../styles/Info.css"

function Info() {
  return (
    <div className="page-container">
      <section className="intro-section">
        <div className="intro-text">
          <h2>Добро пожаловать в NURBAEV</h2>
          <p >
          место, где каждый напиток превращается в настоящее произведение искусства.
          </p>         
        </div>
        <div className="intro-image">
          <img src={shop} alt="Product Display" />
        </div>
      </section>

      <section className="reviews-section">
        <div className="review">
          <p>“Жизнь слишком коротка, чтобы пить 3в1!”</p>
          <span>Шрек</span>
          <span>Verified Buyer</span>
        </div>
        <div className="review">
          <p>“Мой кофе — мои правила.  я всегда прав.”</p>
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
          <img src={shop2} alt="Ingredients" />
        </div>
        <div className="details-text">
          <h2>Целая сеть кофеен</h2>
          <p>
           Мы с трепетом следим за качеством каждого филиала нашей кофейни.
          </p>
          <a href="#learn-more" className="learn-more-btn">Подробнее про второй филиал</a>
        </div>
      </section>
    </div>
  );
}

export default Info;
