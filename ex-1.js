let orders = [
  {
    id: 1,
    customerName: "Brenn Hugk",
    productName: "Chocolate - Milk, Callets",
    productPrice: 94690,
    productQuantity: 35,
    creditCardType: "solo",
  },
  {
    id: 2,
    customerName: "Celia Dary",
    productName: "Bread - Pumpernickle, Rounds",
    productPrice: 10746,
    productQuantity: 87,
    creditCardType: "jcb",
  },
  {
    id: 3,
    customerName: "Toinette Blindermann",
    productName: "Bar - Granola Trail Mix Fruit Nut",
    productPrice: 94191,
    productQuantity: 31,
    creditCardType: "switch",
  },
  {
    id: 4,
    customerName: "Anjela Joannet",
    productName: "Cheese - Parmesan Cubes",
    productPrice: 5131,
    productQuantity: 96,
    creditCardType: "diners-club-carte-blanche",
  },
  {
    id: 5,
    customerName: "Kennith Bussons",
    productName: "Wine - White, Pinot Grigio",
    productPrice: 94432,
    productQuantity: 75,
    creditCardType: "jcb",
  },
  {
    id: 6,
    customerName: "Birdie Shepland",
    productName: "Tomato Paste",
    productPrice: 5845,
    productQuantity: 65,
    creditCardType: "visa-electron",
  },
  {
    id: 7,
    customerName: "Willyt Helks",
    productName: "Asparagus - Green, Fresh",
    productPrice: 89253,
    productQuantity: 26,
    creditCardType: "laser",
  },
  {
    id: 8,
    customerName: "Bill Champion",
    productName: "Wine - Red, Harrow Estates, Cab",
    productPrice: 922100,
    productQuantity: 40,
    creditCardType: "china-unionpay",
  },
  {
    id: 9,
    customerName: "Cris Druce",
    productName: "Bar Mix - Lemon",
    productPrice: 83104,
    productQuantity: 6,
    creditCardType: "jcb",
  },
  {
    id: 10,
    customerName: "Darnell O'Currine",
    productName: "Lime Cordial - Roses",
    productPrice: 99041,
    productQuantity: 75,
    creditCardType: "visa-electron",
  },
];

// Start coding here

/*find the most sell products
1. create function -- If wanna use it later
2. access each object using loop -- using for-in loop to access object
3. using condition to help finding the most sell proeuct = productPrice * productQuantity
  3.1 find the value -> start with 0 (min) then compare and replace with the higher sales
  3.2 compare the current value and save value
4. return result of function as log*/

/* for (let i in orders) {
  let sales = 0;
  if (sales < orders[i].productPrice * orders[i].productQuantity) {
    sales = orders[i].productPrice * orders[i].productQuantity;
    console.log(sales);
  };
}; */

//console.log(orders[1].productPrice * orders[1].productQuantity)

function calculateSale(arrayObject) {
  let sales = 0; 
  let salesObject = null; //object

  for (let i of arrayObject) {
    if (sales <= i.productPrice * i.productQuantity) {
      sales = i.productPrice * i.productQuantity; // re-assign highest value for each iteration
      salesObject = i; //assign the highest iteration to use for point out the object 
    };
  }
  return console.log(salesObject);
}

calculateSale(orders);