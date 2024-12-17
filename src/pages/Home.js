import "./../styles/Home.css"
import bottleImage from "./../img/depositphotos_287401130-stock-photo-tapioca-pearl-ball-bubble-milk.jpg";
import bubbleTea1 from "./../img/Снимок экрана 2024-12-17 в 09.05.20.png"; 
import bubbleTea2 from "./../img/Снимок экрана 2024-12-17 в 09.06.53.png";
import bubbleTea3 from "./../img/Снимок экрана 2024-12-17 в 09.07.34.png";



function Home() {
    return (
      <>
    <div className="modern-drink-container">
      <div className="image-section">
        <div className="drink-image">
          <img src={bottleImage} alt="Pouring drink" />
        </div>
      </div>
      <div className="text-section">
        <h1 className="home-h1">BubbleTea — это нечто большее, чем просто чай с тапиокой.</h1>
        <p>
        Это целая палитра, где каждый напиток раскрывает новые <br /> оттенки и эмоции. Мы предлагаем широкий выбор вкусов,<br /> которые подойдут для любой компании и настроения.
        </p>
        <button className="shop-button">Заказать</button>
      </div>
    </div>
    <div className="bubbletea-container">
      <h1>Сделано из натуральных ингредиентов, ничего лишнего</h1>
      <p className="flavors-title">Заказать</p>

      <div className="flavors-grid">
      
        <div className="flavor-item">
          <img src={bubbleTea1} alt="Bubble Tea Sampler" className="flavor-image" />
          <h3>The Sampler Kit</h3>
          <p>
            Попробуйте несколько вкусов бабл-ти с нашим набором из четырех напитков. 
            Каждый напиток — настоящий взрыв вкуса.
          </p>
          <button>Заказать</button>
        </div>

        <div className="flavor-item">
          <img src={bubbleTea2} alt="Mango Passion" className="flavor-image" />
          <div className="best-seller-badge">BEST SELLER</div>
          <h3>Mango Passion</h3>
          <p>
            Освежающий микс манго и маракуйи с нежным вкусом чая — идеальный летний напиток.
          </p>
          <button>Заказать</button>
        </div>

        <div className="flavor-item">
          <img src={bubbleTea3} alt="Classic Taro" className="flavor-image" />
          <div className="best-seller-badge">BEST SELLER</div>
          <h3>Classic Taro</h3>
          <p>
            Классический вкус таро с мягким сливочным послевкусием, идеально для любителей бабл-ти.
          </p>
          <button>Заказать</button>
        </div>
      </div>
    </div>
      </>
    );
    
  }
  
  export default Home;