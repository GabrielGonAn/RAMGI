
 const portfolioItems = [
    {
        title: 'Project 1',
        description: 'Instalación de un sistema de videovijilancia en una sala CISCO',
        imageUrl: 'img/T1.jpg' // Cambiado a la imagen T1.jpg
    },
    {
        title: 'Project 2',
        description: 'Instalación de un sistema de videovijilancia en una bodega',
        imageUrl: 'img/T2.jpg' // Cambiado a la imagen T2.jpg
    },
    {
        title: 'Project 3',
        description: 'Instalación de un sistema de videovijilancia en un restaurante',
        imageUrl: 'img/T3.jpg' // Cambiado a la imagen T3.jpg
    }
  ];

  const portfolioContainer = document.getElementById('portfolio-items');

  portfolioItems.forEach(item => {
    const portfolioItem = document.createElement('div');
    portfolioItem.classList.add('portfolio-item');

    const image = document.createElement('img');
    image.src = item.imageUrl;
    image.alt = item.title;

    const title = document.createElement('h3');
    title.textContent = item.title;

    const description = document.createElement('p');
    description.textContent = item.description;

    portfolioItem.appendChild(image);
    portfolioItem.appendChild(title);
    portfolioItem.appendChild(description);

    portfolioContainer.appendChild(portfolioItem);
  });