const products = [
  {
    key: 1,
    category: "Cereals",
    name: "Wheat",
    package: [5, 10, 40],
    price: 25,
    unit: "kg",
    details: "Best quatity Wheat!!",
    image:
      "https://media.istockphoto.com/id/625149164/photo/wheat-bran-in-a-small-wooden-bowl.jpg?s=612x612&w=0&k=20&c=oUnpG-kihd2vlAjdFBlRuqBneC2NwyNSieHwUCIRzH4=",
  },
  {
    key: 2,
    category: "Cereals",
    name: "Rice",
    package: [5, 10, 25],
    price: 40,
    unit: "kg",
    details: "Best quatity Wheat!!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKaX8JU-FT6VodjMfi6z6t9lcq6KL2ElvXzg&usqp=CAU",
  },
  {
    key: 3,
    category: "Cereals",
    name: "Bajra",
    package: [5, 10, 25],
    price: 30,
    unit: "kg",
    details: "Best quatity Bajra!!",
    image:
      "https://t3.ftcdn.net/jpg/00/93/74/14/240_F_93741475_dEtFLAT4zMLC3yVcJ0UpV50LCiflgyCA.jpg",
  },
  {
    key: 4,
    category: "Cereals",
    name: "Maize",
    package: [5, 10, 25],
    price: 30,
    unit: "kg",
    details: "Best quatity Bajra!!",
    image: "https://3.imimg.com/data3/GI/KA/MY-2115221/maize-bran-250x250.jpg",
  },
  {
    key: 5,
    category: "Dry Fruit",
    name: "Almond",
    package: [200, 500],
    price: 100,
    unit: "g",
    details: "Best quatity Almond!!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxaXt6TTS62dVXIOD2OC4eRxVqRaIhxaLEulpxkPS_&s",
  },
  {
    key: 6,
    category: "Dry Fruit",
    name: "Cashew",
    package: [200, 500],
    price: 125,
    unit: "g",
    details: "Best quatity Cashew!!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs7lI1AVJ_qMk0A2ItVi1o2unhARJok0zfI3gpzSp5kQ&s",
  },
  {
    key: 7,
    category: "Dry Fruit",
    name: "Pistachios",
    package: [200, 500],
    price: 150,
    unit: "g",
    details: "Best quatity Wheat!!",
    image:
      "https://previews.123rf.com/images/lanasweet/lanasweet1901/lanasweet190100207/115147287-pistachios-nuts-in-bowl-pistachio-background-healthy-food-snacks-vegetarian-food-copy-space.jpg",
  },
  {
    key: 8,
    category: "Dry Fruit",
    name: "Raisin",
    package: [200, 500],
    price: 135,
    unit: "g",
    details: "Best quatity Raisin!!",
    image:
      "https://post.healthline.com/wp-content/uploads/2020/09/raisins-732x549-thumbnail.jpg",
  },
  {
    key: 9,
    category: "Oil",
    name: "GroundNut",
    package: [1, 5, 15],
    price: 80,
    unit: "lit",
    details: "Best quatity Ground Nut!!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ooNXXjKjX9rshDfF3WauorCvAE7VE_L1AA&usqp=CAU",
  },
  {
    key: 10,
    category: "Oil",
    name: "Soyabean",
    package: [1, 5, 15],
    price: 60,
    unit: "lit",
    details: "Best quatity Soyabean!!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXvuetDJffa1G53fBS1tyhJzMJ37unBDJeA&usqp=CAU",
  },
  {
    key: 11,
    category: "Oil",
    name: "Seseame",
    package: [1, 5, 15],
    price: 80,
    unit: "lit",
    details: "Best quatity Sesame!!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzp16Flz6RFB9QOIRsfx50UIaKxDfefvE20g&usqp=CAU",
  },
  {
    key: 12,
    category: "Oil",
    name: "Mustard",
    package: [1, 5, 15],
    price: 100,
    unit: "lit",
    details: "Best quatity Musturd!!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1VZstzWe25pBwHFcRjb_HpoMhKgNQ_4h_Q&usqp=CAU",
  },
  {
    key: 13,
    category: "Pulses",
    name: "Red Gram",
    package: [1, 5, 10],
    price: 120,
    unit: "g",
    details: "Best quatity RedGram!!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX_E-Fbfplymt8n1fCyiMLgLBui7y6vRrY9w&usqp=CAU",
  },
  {
    key: 14,
    category: "Pulses",
    name: "Beans",
    package: [1, 5, 10],
    price: 100,
    unit: "g",
    details: "Best quatity Beans!!",
    image:
      "https://media.istockphoto.com/id/969582980/photo/close-up-of-baked-beans-in-a-pan.jpg?s=612x612&w=is&k=20&c=jF31IVQUESwuR3dzMnD1HvVqpRoC2tn2xdCB8IryH8k=",
  },
  {
    key: 15,
    category: "Pulses",
    name: "Bengal Gram",
    package: [1, 5, 10],
    price: 110,
    unit: "g",
    details: "Best quatity Bengal Gram!!",
    image:
      "https://5.imimg.com/data5/NG/SF/MY-12683566/bengal-gram-dal-500x500.jpg",
  },
  {
    key: 16,
    category: "Pulses",
    name: "Black Gram",
    package: [1, 5, 10],
    price: 114,
    unit: "g",
    details: "Best quatity Black Gram!!",
    image:
      "https://cdn2.stylecraze.com/wp-content/uploads/2022/02/7-Benefits-Of-Including-Black-Gram-In-Your-Diet-Banner.jpg.webp",
  },
  {
    key: 17,
    category: "Pulses",
    name: "Green Peas",
    package: [1, 5, 10],
    price: 124,
    unit: "g",
    details: "Best quatity Green Peas!!",
    image:
      "https://www.jiomart.com/images/product/600x600/491168389/best-farms-masoor-dal-500-g-product-images-o491168389-p491168389-2-202203150231.jpg",
  },
  {
    key: 18,
    category: "Pulses",
    name: "Green Peas",
    package: [1, 5, 10],
    price: 105,
    unit: "g",
    details: "Best quatity Green Peas!!",
    image:
      "https://nurserynisarga.in/wp-content/uploads/2021/10/textures-1938301.jpg",
  },
  {
    key: 19,
    category: "Pulses",
    name: "Masur Dal",
    package: [1, 5, 10],
    price: 112,
    unit: "g",
    details: "Best quatity Masur Dal!!",
    image:
      "https://www.jiomart.com/images/product/600x600/491168389/best-farms-masoor-dal-500-g-product-images-o491168389-p491168389-2-202203150231.jpg",
  },
];
export default products;
