import './App.css'; 
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import img5 from './5.jpg'
import img6 from './6.jpg'
import img7 from './7.jpg'
import img8 from './8.jpg'
import img9 from './9.jpg'
import img10 from './10.jpg'
import menu from './menu.png'
import logo from './logo.png'
import b1 from './b1.png'
import b2 from './b2.jpg'
import b3 from './b3.jpg'
import b4 from './b4.jpg'
import b5 from './b5.jpg'
import { Children } from 'react';
function Header(){
  return(
    <div className='header'>
      <img className='header__menu' src={menu} alt='menu'/>
      <p className='header__item'>Книги</p>
      <p className='header__item'>Статьи</p>
      <p className='header__item'>Обзоры книг</p>
      <img className='header__logo' src={logo} alt='logo'/>
    </div>
  )
}
function Blog_main(){
  return(
    
      <div className='blog__main'>
        <img className='blog__main_img' src={b1} alt='blog1'/>
        <div className='blog__main_texts'>
          <h3 className='blog__main_title'>В чем главный вопрос?</h3>
          <p className='blog__main_text'>Попробуй поучавствовать в викторине!</p>
          <button className='blog__btn'>Попробовать</button>
        </div>
      </div>
    
  )
}
const Blog_liltle = ({img, text}) => {
  return(
   
      <div className='blog__li'>
        <img className='blog__li_img' src={img} alt='blog1'/>
        <p className='blog__main_text'>{text}</p>
      </div>
    
  )
}
function Blog(){
  const t1 = 'Последняя теория Стивена'
  const t2 = 'Самые опасные вершины мира'
  const t3 = 'Коктейль молодости'
  const t4 = 'Подкасты про маньяков'
  return(
    <div className='blog'>
      <h2 className='blog__title'>Блог</h2>
      <Blog_main/>
      <div className='blog__n'>
      <Blog_liltle img={b2} text={t1}/>
      <Blog_liltle img={b3} text={t2}/>
      <Blog_liltle img={b4} text={t3}/>
      <Blog_liltle img={b5} text={t4}/>
      </div>
    </div>
  )
}
const Book = ({ image, title, price, pricealt }) => {
  return (
    <div className='book'>
      <img className='book__img' src={image} alt={title} />
      <h3 className='book__title'>{title}</h3>
      <div className='price'>
      <p className='book__price'>{price} </p>
      <p className='book__pricealt'>{pricealt}</p>
      </div>
      <button className='book__btn'>В корзину</button>
    </div>
  );
};

const Books = () => {
  const books = [
    {
      image: img1,
      title: 'Джейн Эир',
      price: '456р',
      pricealt: '9̶0̶0̶р̶',
    },
    {
      image: img2,
      title: 'Гарри Поттер',
      price: '689р',
      pricealt: '9̶0̶0̶р̶',
    },
    {
      image: img3,
      title: 'Проклятое дитя',
      price: '967р',
      pricealt: ' ̶9̶0̶0̶р̶',
    },
    {
      image: img4,
      title: 'Хроники Нарнии',
      price: '768р',
      pricealt: ' ̶9̶0̶0̶р̶',
    },
    {
      image: img5,
      title: 'Граф Монтэ-Кристо',
      price: '560р',
      pricealt: ' ̶9̶0̶0̶р̶',
    },
   
  ];

  return (
    <div className='books'>
      
      {books.map((book, index) => (
        <Book
          key={index}
          {...book}
        />
      ))}
    </div>
  );
};

const Books2 = () => {
  const books2 = [
    {
      image: img6,
      title: 'Гордость и предубеждение',
      price: '456р',
      pricealt: '9̶0̶0̶р̶',
    },
    {
      image: img7,
      title: 'Наваждения',
      price: '689р',
      pricealt: '9̶0̶0̶р̶',
    },
    {
      image: img8,
      title: 'Великий Гетсби',
      price: '967р',
      pricealt: ' ̶9̶0̶0̶р̶',
    },
    {
      image: img9,
      title: 'Хоббит',
      price: '768р',
      pricealt: ' ̶9̶0̶0̶р̶',
    },
    {
      image: img10,
      title: 'Лолита',
      price: '560р',
      pricealt: ' ̶9̶0̶0̶р̶',
    },
   
  ];

  return (
    <div className='books'>
      
      {books2.map((book, index) => (
        <Book
          key={index}
          {...book}
        />
      ))}
    </div>
  );
};
function App(){
  return(
    <>
    <Header/>
    <h2 className='books__title'>ТОП-6: что сейчас читают</h2>
    <Books/>
    <Blog/>
    <h2 className='books__title'>Бестселлеры</h2>
    <Books2/>
    </>
  )
}

export default App;



