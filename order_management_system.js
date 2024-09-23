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

//Task 4: Create a function to Calculate Total for an Order

function calculateOrderTotal(order) {
    let total = 0; //start total at 0
    order.items.forEach(orderedItem => { //find price for each individual item
        const product = inventory.find(item => item.name === orderedItem.name);//find product and item names
        if (product) {
            total += product.price * item.quantity; //multiply price by quantity ordered to get total
        }
    });
    return total; //return total price
}
console.log(`Total - $${calculateOrderTotal(order)}`); //Output total of the order

//Task 5: Create a Function to Mark an Order as Completed

function completeOrder(customername) {
    const order = order.find(purchase => purchase.customerName === customerName); //find order for customer
    if(order)
        order.status = "Completed"; //if status is completed then output below will display
    console.log(`${customerName}'s Order Complete`); //complete order output
} else{
    console.log(`${customerName}'s Order Not Found`); //order not found output
};