export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  category: 'Starters' | 'Main Course' | 'Desserts' | 'Drinks';
  image: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Wild Mushroom Arancini',
    price: '$24',
    description: 'Truffle-scented risotto balls, saffron aioli, and micro-greens.',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Roasted Beetroot Tartare',
    price: '$22',
    description: 'Salt-crusted beets, goat cheese mousse, and balsamic pearls.',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1546793665-c74683c3f38d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '9',
    name: 'Asparagus Velouté',
    price: '$21',
    description: 'Creamy asparagus soup, parmesan foam, and toasted almond flakes.',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '10',
    name: 'Burrata & Heirloom Tomato',
    price: '$21',
    description: 'Fresh burrata, balsamic glaze, and basil oil.',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '17',
    name: 'Crispy Cauliflower Wings',
    price: '$19',
    description: 'Honey-soy glaze, sesame seeds, and spring onions.',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1625938140722-26159539958a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '18',
    name: 'Vegetable Tempura',
    price: '$23',
    description: 'Seasonal garden vegetables with a light ginger soy dip.',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Truffle Tagliatelle',
    price: '$45',
    description: 'Handmade pasta, fresh black truffles, and aged parmesan cream.',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '11',
    name: 'Butternut Squash Steak',
    price: '$38',
    description: 'Sage butter, pomegranate seeds, and crispy kale chips.',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '12',
    name: 'Eggplant Parmigiana Royale',
    price: '$42',
    description: 'Stacked aubergine, buffalo mozzarella, and rich San Marzano sauce.',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1625860511213-3561664cdaca?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Wild Mushroom Risotto',
    price: '$38',
    description: 'Arborio rice, seasonal mushrooms, and 24-month aged Grana Padano.',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '19',
    name: 'Sweet Potato Gnocchi',
    price: '$36',
    description: 'Brown butter, fried sage, and toasted honeyed hazelnuts.',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '20',
    name: 'Cauliflower Steak',
    price: '$34',
    description: 'Pan-roasted with artisan chimichurri and cauliflower purée.',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    name: 'Gold Leaf Chocolate Dome',
    price: '$22',
    description: 'Dark chocolate mousse, raspberry coulis, and edible 24k gold leaf.',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '13',
    name: 'Creme Brûlée',
    price: '$16',
    description: 'Classic vanilla bean custard with caramelized sugar crust.',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '14',
    name: 'Tiramisu Royale',
    price: '$19',
    description: 'Espresso-soaked ladyfingers with mascarpone cream and gold dust.',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    name: 'Saffron Poached Pear',
    price: '$18',
    description: 'Wine-poached pear with vanilla bean mascarpone.',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '21',
    name: 'Lemon Yuzu Tart',
    price: '$17',
    description: 'Tangy yuzu curd with toasted meringue and shortcrust pastry.',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '22',
    name: 'Artisanal Cheese Board',
    price: '$25',
    description: 'Selection of five European cheeses with honeycomb and nuts.',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '7',
    name: 'Midnight Velvet',
    price: '$16',
    description: 'Signature cocktail with blackberry, gin, and elderflower.',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '15',
    name: 'Emerald Fizz',
    price: '$15',
    description: 'Refreshing cucumber, mint, and lime sparkling mocktail.',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '16',
    name: 'Golden Hour Martini',
    price: '$18',
    description: 'Premium vodka, passionfruit, and a splash of champagne.',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '8',
    name: 'Vintage Reserve Cabernet',
    price: '$120',
    description: '2015 Napa Valley Cabernet Sauvignon.',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '23',
    name: 'Smoked Old Fashioned',
    price: '$20',
    description: 'Bourbon, maple syrup, and bitters, smoked with cherry wood.',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '24',
    name: 'Sparkling Rosé',
    price: '$14',
    description: 'Elegant French rosé with notes of strawberry and cream.',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1558001239-5262ad893932?auto=format&fit=crop&q=80&w=800'
  }
];


export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1550966842-28c2e202ec91?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800'
];
