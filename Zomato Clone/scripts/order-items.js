import { foodItems } from "./data/allcitiesdata.js";




document.addEventListener('DOMContentLoaded', () => {
  
 
 let generateOrderHtml = '';

const orderGrid = document.querySelector('.order-grid');

foodItems.forEach((productObject) => {
  generateOrderHtml += `
  <div class="order-div">
  <div class="order-image-div">
  <img src="images/order-images/order${productObject.orderId}.avif" class="order-image">
  <span class="offer-div">${productObject.offer}</span>
  </div>
 
  <p class="itemName">${productObject.name} <span class="rating-span">${productObject.rating} &#x2605;</span></p>
  <p class="price-and-time" > &#x20B9;${productObject.price} for one <span class="time">${productObject.time} min</span></p>

 </div>
  `
  orderGrid.innerHTML = generateOrderHtml ;
  
});

});




// not working (wanted to load order.html by clicking on a particular div , so wrapped that div with anchor tag)

// document.getElementById('container-1').addEventListener('click' , () => {
//    window.location.href = 'C:\Users\ASUS\OneDrive\Documents\Desktop\Zomato Clone\order.html';
// })



