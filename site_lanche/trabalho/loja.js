
let total = 0;
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

function addItem(name, price) {
    // Criar um novo elemento para o item do carrinho
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `<span>${name}</span><span>R$${price.toFixed(2)}</span>`;
    
    // Adicionar o item ao carrinho
    cartItemsContainer.appendChild(cartItem);

    // Atualizar o total
    total += price;
    totalPriceElement.textContent = total.toFixed(2);
      // Abre o modal
     
}
