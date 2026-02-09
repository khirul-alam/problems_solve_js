
const numbers = [45,65,25,96,50];

// for (let i=0; i<numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }
// for(number of numbers){
//     console.log(number);
// }

const products = [
    {id:1, name:'nokia',price:15000},
    {id:2, name:'samsang phone',price:25000},
    {id:3, name:'realme phone',price:5000},
    {id:4, name:'apple x-200',price:12000},
    {id:5, name:'apple-phone',price:13000},
    {id:6, name:"opp Phone",price:18000}
]
// for(const product of products){
//     console.log(product);
// }

function matchProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase()
)){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchProducts(products, "phone");
console.log(result);