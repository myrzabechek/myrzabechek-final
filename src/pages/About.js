import React from 'react';
import './../styles/About.css';
import Эспрессо from './../img2/a cup of coffee for miss_ ☕️.jpeg'
import Американо from './../img2/Mood_home_дом_муд_уют_кофе_американо_эстетика.jpeg'
import Капучино from './../img2/кофе 🥐.jpeg'
import Латте from './../img2/Латте.jpeg'
import Макиато from './../img2/7391c322-88d7-4b7a-bfb1-19dd3fd637bb.jpeg'
import Моккачино from './../img2/Moccachino.jpeg'
import Флет_Уайт from './../img2/Латте, кофе латте,.jpeg'
import Раф from  './../img2/0b573c45-aee8-4263-ba0a-776f8dc19f40.jpeg'


const coffeFlavors = [
  { id: 1, name: 'Эспрессо', image: Эспрессо, description: 'крепкий и насыщенный напиток. Подаётся в маленькой чашке, готовится за 25–30 секунд.' },
  { id: 2, name: 'Американо', image: Американо, description: 'эспрессо, разбавленный горячей водой, с мягким вкусом и меньшей крепостью.' },
  { id: 3, name: 'Капучино', image: Капучино, description: ' сочетание эспрессо, молока и пышной молочной пенки.' },
  { id: 4, name: 'Латте', image: Латте, description: 'больше молока, чем в капучино, с минимальным количеством пенки.' },
  { id: 5, name: 'Макиато', image: Макиато, description: 'эспрессо с небольшим количеством молочной пенки.' },
  { id: 6, name: 'Моккачино', image: Моккачино, description: 'вариант макиато, но с добавлением шоколада или карамели.' },
  { id: 7, name: 'Флет Уайт', image: Флет_Уайт, description: 'двойной эспрессо с тонким слоем молочной пенки.' },
  { id: 8, name: 'Раф', image:Раф, description: 'эспрессо, смешанный с жирными сливками и ванильным сахаром.' },
];


function Menu() {
  return (
    <section className="menu-container">
      <h1>NURBAEV меню</h1>
      <div className="menu-grid">
        {coffeFlavors.map((flavor) => (
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
