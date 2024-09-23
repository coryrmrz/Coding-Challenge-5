//Task 1: Create an Inventory Array of Product Objects

const inventory = [
    { name: 'Espresso', price: 3, quantity: 10 }, //Espresso data set
    { name: 'Latte', price: 4, quantity: 5 }, //Latte data set
    { name: 'Cappuccino', price: 4, quantity: 6 }, //Cappuccino data set
    { name: 'Mocha', price: 5, quantity: 4 } //Mocha data set
];

console.log(inventory); //Inventory Output

//Task 2: Create an Orders Array of Order Objects

const orders = []; //empty array to store customer orders

console.log(orders); //Orders output displaying customerName, items, and status

//Task 3: Create a function to Place an Order

function placeOrder(customerName, orderedItems) { //function to place an order
    for (let orderedItem of orderedItems) {
        const product = inventory.find(item => item.name === orderedItem.name); //find product and item names
        if (product.quantity < orderedItem.quantity) { //check for sufficient inventory
            console.log(`${orderItem.name} - Insufficient Stock`); //error message for insufficient items in stock
            return;
        };
    };
    orderedItems.forEach (orderedItem => {
        const product = inventory.find(item => item.name === orderedItem.name) //find products and items searched
        product.quantity -= orderedItem.quantity; //subtract product selected from inventory
    });
    let newOrder = [
        { customerName: customerName, items: orderedItems, status: `Pending`}; //New order, to be added to orders array
    ];
    orders.push(newOrder); //New order added to orders array
    console.log("Successful Order:", newOrder); //Orders output
};