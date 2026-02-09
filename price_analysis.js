/*
🧠 JavaScript Problem: Product Price Analyzer
🔹 Given
You are given an array of product objects.
Each product has:
name (string)
price (number)
discount (number – percentage)
🎯 Your Task
Write a function called calculateFinalPrice(products) that:
Calculates the discount amount
Calculates the final price
Decides the price category
Returns a new array of objects

| Final Price | Category  |
| ----------- | --------- |
| ≥ 5000      | Expensive |
| ≥ 2000      | Medium    |
| < 2000      | Cheap     |
*/
function calculateFinalPrice(products){
    return products.map(product => {
        const discountAmount = product.price * product.discount / 100;
        const finalPrice = product.price - discountAmount;
        let category;
        if(finalPrice >= 5000){
            category = "Expensive";
        }
        else if(finalPrice >= 2000){
            category = "Medium";
        }
        else{
            category = "Cheap";
        }
        return{
            name:product.name,
            finalPrice:finalPrice,
            category:category
        }
    })
}

const products = [
  { name: "Laptop", price: 6000, discount: 10 },
  { name: "Phone", price: 3000, discount: 5 },
  { name: "Headphone", price: 1500, discount: 10 }
];
console.log(calculateFinalPrice(products));