import React from 'react';
import './main.css';

const Gallery = () => {
  const categories = [
    { id: 1, title: 'Animais', image: '../img/animais.jpg' },
    { id: 2, title: 'Arquitetura', image: '../img/arquitetura.jpg' },
    { id: 3, title: 'Cidades', image: '../img/cidade.jpg' },
    { id: 4, title: 'Decorações', image: '../img/decoracao.jpg' },
    { id: 5, title: 'Esportes', image: '../img/esportes.jpg' },
    { id: 6, title: 'Natureza', image: '../img/natureza.jpg' },
    { id: 7, title: 'Paisagem', image: '../img/paisagem.jpg' },
    { id: 8, title: 'Pessoas', image: '../img/pessoas.jpg' },
    { id: 9, title: 'Refeições', image: '../img/refeicoes.jpg' }
  ];

  return (
    <main>
      <div className="gallery">
        {categories.map((category) => (
          <div
            key={category.id}
            className="gallery-card"
            data-image={category.title.toLowerCase()} // Passando o nome da categoria como data-image
          >
            <h2 className="gallery-card-title">{category.title}</h2>
            <a href="" className="gallery-card-btn">Mais fotos</a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
