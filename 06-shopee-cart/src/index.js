import createItem from "./services/item.js"; 
import * as cartService from "./services/cart.js"

const myCart = [];

console.log("Welcome to your Shopee Cart 🛒")

const item1 = await createItem("MiniaturaFuscaClassico", 24.5, 2);
const item2 = await createItem("MiniaturaChevroletCorvette1957", 46.90, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// console.log(item1.subtotal());
// await cartService.removeItem(myCart, 1)

await cartService.displayCart(myCart)
await cartService.calculateTotal(myCart);
