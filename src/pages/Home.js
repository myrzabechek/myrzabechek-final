import "./../styles/Home.css"

import coffeImg4 from "./../img2/0b573c45-aee8-4263-ba0a-776f8dc19f40.jpeg"
import coffeImg3 from "./../img2/_ (1).jpeg"
import coffeImg2 from "./../img2/_.jpeg"
import coffeImg from "./../img2/creative bubble glasses for coffee aesthetics.jpeg"



function Home() {
    return (
      <>
    <div className="modern-drink-container">
      <div className="image-section">
        <div className="drink-image">
          <img src={coffeImg} alt="Pouring drink" />
        </div>
      </div>
      <div className="text-section">
        <h1 className="home-h1">NURBAEV — это нечто большее, чем просто кофейня.</h1>
        <p>
        Это целая палитра, где каждый напиток раскрывает новые <br /> оттенки и эмоции. Мы предлагаем широкий выбор ощущений,<br /> которые подойдут для любой компании и настроения.
        </p>
        <button className="shop-button">Заказать</button>
      </div>
    </div>
    <div className="bubbletea-container">
      <h1>Сделано из натуральных ингредиентов, ничего лишнего</h1>
      <p className="flavors-title">Заказать</p>

      <div className="flavors-grid">
      
        <div className="flavor-item">
          <img src={coffeImg2} alt="" className="flavor-image" />
          <h3>Классический Фильтр</h3>
          <p>
            Крепкий сорт арабики с корицей.
          </p>
          <button>Заказать</button>
        </div>

        <div className="flavor-item">
          <img src={coffeImg3} alt="" className="flavor-image" />
          <div className="best-seller-badge">BEST SELLER</div>
          <h3>Американо с круасанами</h3>
          <p>
            Невероятный вкус американо со свежей французкой выпечкой что может быть лучше?.
          </p>
          <button>Заказать</button>
        </div>

        <div className="flavor-item">
          <img src={coffeImg4} alt="" className="flavor-image" />
          <div className="best-seller-badge">BEST SELLER</div>
          <h3>Лавандовый раф от Николая Василенко</h3>
          <p>
            Только для мужчин!!!.
          </p>
          <button>Заказать</button>
        </div>
      </div>
    </div>
      </>
    );
    
  }
  
  export default Home;