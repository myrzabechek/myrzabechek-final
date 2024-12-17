import { Link } from "react-router-dom";  
import './../styles/header.css';

function Header() {
  return (
    <header>
      <h1>WhyTea</h1>
      <nav className="nav-links">
        <Link to="/" style={{ margin: "0 10px" }}>Главная</Link>
        <Link to="/about" style={{ margin: "0 10px" }}>Меню</Link>
        <Link to="/Info" style={{ margin: "0 10px" }}>О нас</Link>
      </nav>
      <div className="header-bottom">
        Мы за мир во всем мире, поэтому попробуйте наши BubbleTea.
      </div>
      <button 
        onClick={() => window.location.href = 'https://eats.yandex.com/ru-kg/Bishkek/r/ajlend_babl_ti?placeSlug=ajlend_babl_ti_'}
        className="delivery-button">
        Доставка Яндекс Еда
      </button>
    </header>
  );
}

export default Header;