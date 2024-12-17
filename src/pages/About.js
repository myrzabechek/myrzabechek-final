import React from 'react';
import './../styles/About.css';
import bubbleTea1 from './../img/Снимок экрана 2024-12-17 в 10.03.13.png'
import bubbleTea2 from './../img/Снимок экрана 2024-12-17 в 09.45.12.png'
import bubbleTea3 from './../img/Снимок экрана 2024-12-17 в 09.43.52.png'
import bubbleTea4 from './../img/Снимок экрана 2024-12-17 в 09.43.28.png'
import bubbleTea5 from './../img/Снимок экрана 2024-12-17 в 09.07.34.png'
import bubbleTea6 from './../img/Снимок экрана 2024-12-17 в 09.06.53.png'
import bubbleTea7 from './../img/Снимок экрана 2024-12-17 в 09.05.20.png'
import bubbleTea8 from  './../img/Снимок экрана 2024-12-17 в 10.03.13.png'
import bubbleTea9 from './../img/Снимок экрана 2024-12-17 в 09.44.18.png'
import bubbleTea10 from './../img/Снимок экрана 2024-12-17 в 10.03.31.png'


const bubbleTeaFlavors = [
  { id: 1, name: 'Классический молочный чай', image: bubbleTea1, description: 'Насыщенный чёрный чай с добавлением молока.' },
  { id: 2, name: 'Таро молочный чай', image: bubbleTea2, description: 'Нежный и сладкий вкус таро с молоком.' },
  { id: 3, name: 'Матча латте', image: bubbleTea3, description: 'Освежающий зелёный чай матча с молоком.' },
  { id: 4, name: 'Браун шугар боба', image: bubbleTea4, description: 'Сладкий коричневый сахар с жевательными шариками.' },
  { id: 5, name: 'Клубничный молочный чай', image: bubbleTea5, description: 'Сладкая клубника с кремовым молоком.' },
  { id: 6, name: 'Манговый зелёный чай', image: bubbleTea6, description: 'Фруктовый манго, смешанный с зелёным чаем.' },
  { id: 7, name: 'Тайский чай', image: bubbleTea7, description: 'Яркий тайский чай с добавлением сгущённого молока.' },
  { id: 8, name: 'Кокосовый молочный чай', image:bubbleTea8, description: 'Нежный кокосовый вкус с молоком.' },
  { id: 9, name: 'Личи зелёный чай', image: bubbleTea9, description: 'Свежий вкус личи с зелёным чаем.' },
  { id: 10, name: 'Молочный чай с дыней', image: bubbleTea10, description: 'Сладкий аромат дыни с добавлением молока.' },
];


function Menu() {
  return (
    <section className="menu-container">
      <h1>Bubble Tea меню</h1>
      <div className="menu-grid">
        {bubbleTeaFlavors.map((flavor) => (
          <div key={flavor.id} className="menu-item">
            <img src={flavor.image} alt={flavor.name} className="menu-image" />
            <h3>{flavor.name}</h3>
            <p>{flavor.description}</p>
            <a href="p" className="menu-button">Заказать</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
