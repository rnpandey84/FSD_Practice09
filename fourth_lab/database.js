const items = [

  {id:"1", Item_name:"Butter Chicken", category:"North Indian", price:320, stock:25, rating:4.7, Veg:"Non-Veg", prep_time:25, Year:2024},

  {id:"2", Item_name:"Paneer Butter Masala", category:"North Indian", price:260, stock:30, rating:4.6, Veg:"Veg", prep_time:20, Year:2024},

  {id:"3", Item_name:"Masala Dosa", category:"South Indian", price:140, stock:40, rating:4.8, Veg:"Veg", prep_time:15, Year:2023},

  {id:"4", Item_name:"Chicken Biryani", category:"Biryani", price:280, stock:35, rating:4.9, Veg:"Non-Veg", prep_time:30, Year:2024},

  {id:"5", Item_name:"Veg Biryani", category:"Biryani", price:200, stock:28, rating:4.5, Veg:"Veg", prep_time:25, Year:2023},

  {id:"6", Item_name:"Chole Bhature", category:"North Indian", price:160, stock:35, rating:4.6, Veg:"Veg", prep_time:20, Year:2024},

  {id:"7", Item_name:"Rajma Chawal", category:"North Indian", price:150, stock:32, rating:4.5, Veg:"Veg", prep_time:18, Year:2023},

  {id:"8", Item_name:"Dal Makhani", category:"Punjabi", price:190, stock:25, rating:4.7, Veg:"Veg", prep_time:20, Year:2024},

  {id:"9", Item_name:"Tandoori Chicken", category:"Mughlai", price:300, stock:20, rating:4.8, Veg:"Non-Veg", prep_time:30, Year:2024},

  {id:"10", Item_name:"Samosa", category:"Snacks", price:30, stock:80, rating:4.4, Veg:"Veg", prep_time:10, Year:2023},

  {id:"11", Item_name:"Pav Bhaji", category:"Street Food", price:120, stock:45, rating:4.6, Veg:"Veg", prep_time:15, Year:2023},

  {id:"12", Item_name:"Pani Puri", category:"Street Food", price:60, stock:60, rating:4.5, Veg:"Veg", prep_time:10, Year:2024},

  {id:"13", Item_name:"Momos", category:"Street Food", price:100, stock:50, rating:4.4, Veg:"Veg", prep_time:15, Year:2024},

  {id:"14", Item_name:"Palak Paneer", category:"North Indian", price:220, stock:27, rating:4.6, Veg:"Veg", prep_time:20, Year:2023},

  {id:"15", Item_name:"Gulab Jamun", category:"Dessert", price:80, stock:50, rating:4.7, Veg:"Veg", prep_time:5, Year:2024},

  {id:"16", Item_name:"Rasgulla", category:"Dessert", price:70, stock:45, rating:4.5, Veg:"Veg", prep_time:5, Year:2023},

  {id:"17", Item_name:"Idli Sambar", category:"South Indian", price:100, stock:40, rating:4.7, Veg:"Veg", prep_time:12, Year:2024},

  {id:"18", Item_name:"Aloo Paratha", category:"Punjabi", price:110, stock:35, rating:4.6, Veg:"Veg", prep_time:15, Year:2023},

  {id:"19", Item_name:"Fish Curry", category:"Bengali", price:290, stock:18, rating:4.8, Veg:"Non-Veg", prep_time:30, Year:2024}

];

// console.log("Q2:", items[0].Item_name)

// console.log("Q3:", items[3].Item_name)

// console.log("Q19:", items[18].Item_name)


// a = items.Item_name

// console.log(a)

// log("q8:", itmes.findIndex(i => i.name === "momos")). //nhi hua



    // if (items.Item_name === "Momos"){
    //     console.log("Index:", id);     //nhi hua
    // }



    // !                  filtering method

    //!   query10: now i want to know "how many vegetarian items are there?"

    // console.log("Q10:", items.filter(i => i.veg = true).length);


    //! want to know which items costs rupees less than 30


    // console.log("q12:", items.filter(i => i.price < 100).)


    //! Query 29 : veg itmes ka count chahiye uske basis pe avilable or not avilable

    //! Query 30 : non veg item , 50-60 pricing, category spicy , check avl or not avl 




console.log(
    "Q30:",
    items.some(i =>
        i.Veg === "Non-Veg" &&
        i.price >= 50 &&
        i.price <= 100 &&
        i.category === "Spicy"
    )
    ? "Available"
    : "Not Available"
);
