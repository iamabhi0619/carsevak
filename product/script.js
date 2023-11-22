let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});
   document.addEventListener('DOMContentLoaded', function () {
   const products = document.querySelectorAll('.product');
   const previews = document.querySelectorAll('.preview');

   products.forEach(product => {
      const productName = product.getAttribute('data-name');
      const productPrice = product.querySelector('.price').textContent;
      const productImage = product.querySelector('img').src;

      const preview = document.querySelector(`.preview[data-target="${productName}"]`);
      if (preview) {
         const previewPrice = preview.querySelector('.price');
         const previewImage = preview.querySelector('img');

         if (previewPrice) {
            previewPrice.textContent = productPrice;
         }

         if (previewImage) {
            previewImage.src = productImage;
            previewImage.alt = product.querySelector('img').alt;
         }

         // Add a click event listener to each product for showing the modal
         product.addEventListener('click', function () {
            showCheckoutModal(productName, productPrice, productImage);
         });
      }
   });
});

// Show the checkout modal with updated product details
function showCheckoutModal(name, price, image) {
    const modal = document.getElementById('checkoutModal');
    const modalContent = modal.querySelector('.modal-content');
    const productName = modalContent.querySelector('h3');
    const productPrice = modalContent.querySelector('.price');
    const productImage = modalContent.querySelector('img');
    const rentNowButton = modalContent.querySelector('.buy'); // Add this line
 
    productName.textContent = name;
    productPrice.textContent = `Price: ${price}`;
    productImage.src = image;
    productImage.alt = name;
 
    // Add a click event listener to the "Rent Now" button
    rentNowButton.addEventListener('click', function () {
       placeOrder();
    });
 
    modal.style.display = 'flex';
 } 

// Hide the checkout modal
function hideCheckoutModal() {
   document.getElementById('checkoutModal').style.display = 'none';
}

// Function to be called when placing the order
function placeOrder() {
   // Implement order placement logic here
   // You may want to send data to the server for processing
   alert('Order placed successfully!');
   hideCheckoutModal();
}
