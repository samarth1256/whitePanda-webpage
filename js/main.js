
  const data = [
    {'title': 'Blog/Article',
      'price': 1000,
      'imgUrl': '../assets/dummy-user.png',
      'isSelected': false,
      'description': 'Typically 450-400 words, an e-book is perfect for your target audience ranging from perpective customers to users.'
    },
    {'title': 'Blog/Article',
      'price': 1000,
      'imgUrl': '',
      'isSelected': false,
      'description': 'Typically 450-400 words, an e-book is perfect for your target audience ranging from perpective customers to users.'
    },
    {'title': 'Blog/Article',
      'price': 1000,
      'imgUrl': '',
      'isSelected': false,
      'description': 'Typically 450-400 words, an e-book is perfect for your target audience ranging from perpective customers to users.'
    },
    {'title': 'Blog/Article',
      'price': 1000,
      'imgUrl': '',
      'isSelected': true,
      'description': 'Typically 450-400 words, an e-book is perfect for your target audience ranging from perpective customers to users.'
    },
    {'title': 'Blog/Article',
      'price': 1000,
      'imgUrl': '',
      'isSelected': false,
      'description': 'Typically 450-400 words, an e-book is perfect for your target audience ranging from perpective customers to users.'
    },
    {'title': 'Blog/Article',
      'price': 1000,
      'imgUrl': '',
      'isSelected': false,
      'description': 'Typically 450-400 words, an e-book is perfect for your target audience ranging from perpective customers to users.'
    },
    {'title': 'Blog/Article',
      'price': 1000,
      'imgUrl': '',
      'isSelected': false,
      'description': 'Typically 450-400 words, an e-book is perfect for your target audience ranging from perpective customers to users.'
    },
    {'title': 'Blog/Article',
      'price': 1000,
      'imgUrl': '',
      'isSelected': false,
      'description': 'Typically 450-400 words, an e-book is perfect for your target audience ranging from perpective customers to users.'
    },
    {'title': 'Blog/Article',
      'price': 1000,
      'imgUrl': '',
      'isSelected': false,
      'description': 'Typically 450-400 words, an e-book is perfect for your target audience ranging from perpective customers to users.'
    },
    {'title': 'Blog/Article',
      'price': 1000,
      'imgUrl': '',
      'isSelected': false,
      'description': 'Typically 450-400 words, an e-book is perfect for your target audience ranging from perpective customers to users.'
    },
  ]


function renderCards() {
  data.map(videoObject => {    
    document.getElementById('main-content').innerHTML += `
  <div class="box">
      <div class="thumbnail">
        <img class="user-img"src="https://image.flaticon.com/icons/svg/219/219969.svg"/>
        
        <h4 class="title">${videoObject.title}</h4>
      </div>
    <p class="description">${videoObject.description}</p>
    <span class="order-btn">Order</span>
  </div>
`;
  });
}

renderCards();
