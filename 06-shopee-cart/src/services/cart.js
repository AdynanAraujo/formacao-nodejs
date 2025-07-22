async function addItem(userCart,item) {
    userCart.push(item)
}

async function deleteItem(userCart, name) {
    
}

async function removeItem(userCart, index) {
   
  // if (index >= 0 && index < userCart.length  ){
    //     user.splice(index, 1);
    // }

const indexFound = userCart.findIndex((p) => p.name === item.name);


  if (indexFound == -1) {
    console.log("item não encontrado");
    return;
  }


  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }


  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}


async function calculateTotal(userCart) {
    const result = userCart.reduce((total,item) => total + item.subtotal(), 0);
    console.log("Shopee cart total is:")
    console.log(`Total: ${result}`)
}

async function displayCart(userCart) {
    console.log(" \nShopee Cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} x | Subtotal R$ ${item.subtotal() }`)      
        
    });
    
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart
}
