import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Article.css'

const Card = ({ card }) => {
  return (
    <div className='card-content'>
      <img src={card.image} alt={card.title} />
      <h1>{card.title}</h1>
      <p>{card.description}</p>

      <button>Read More</button>
    </div>
  );
};

const CardPage = ({ cards }) => {
  return (
    <div className='wrapper'>
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};


export const CardList = ({ cards }) => {
  const [page, setPage] = useState(0);
  const cardPages = [];
  for (let i = 0; i < cards.length; i += 3) {
    cardPages.push(cards.slice(i, i + 3));
  }

  return (
    <div>
      <h1 className='articles'>Latest Articles</h1>
      <CardPage cards={cardPages[page]} />
      <div className='arrow' style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button
          onClick={() => setPage(page - 1)}
          style={{
            cursor: 'pointer',
            opacity: page === 0 ? 0.5 : 1,
            pointerEvents: page === 0 ? 'none' : 'auto'
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="arrow1" />
        </button>
        <div className='page'>{`${page + 1}/${cardPages.length}`}</div>
        <button
          onClick={() => setPage(page + 1)}
          style={{
            cursor: 'pointer',
            opacity: page === cardPages.length - 1 ? 0.5 : 1,
            pointerEvents: page === cardPages.length - 1 ? 'none' : 'auto'
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} className="arrow1" />
        </button>
      </div>
    </div>
  );
};

export const cards = [
  { id: 1, title: 'Grilled  Tomatoes at Home', description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",image:'./img1.png' },
  { id: 2, title: 'Snacks for Travel', description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",image:"./img2.png" },
  { id: 3, title: 'Post-workout Recipes', description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",image:"./img3.png" },
  { id: 4, title: 'How To Grill Corn', description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",image:"./img4.png" },
  { id: 5, title: 'Crunchwrap Supreme', description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",image:"./img5.png" },
  { id: 6, title: 'Broccoli Cheese Soup', description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",image:"./img6.png" },
  
  
];
