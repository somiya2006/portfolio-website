let cart=JSON.parse(localStorage.getItem('cart'))||[];
let wishlist=JSON.parse(localStorage.getItem('wishlist'))||[];
const productList=document.getElementById('product-list');
const searchInput=document.getElementById('searchInput');
const slides=[
'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1400',
'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=1400',
'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1400',
'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1400'
];
let currentSlide=0;
function updateCartCount(){document.querySelectorAll('#cart-count').forEach(e=>e.textContent=cart.length)}
function addToCart(product){cart.push({id:product.id,name:product.name,price:`₹${product.price.toLocaleString('en-IN')}`,image:product.image});localStorage.setItem('cart',JSON.stringify(cart));updateCartCount();alert(`${product.name} added to cart! 🛒`)}
function addToWishlist(product){if(wishlist.some(x=>x.id===product.id)){alert('Already in Wishlist ❤️');return}wishlist.push({id:product.id,name:product.name,price:`₹${product.price.toLocaleString('en-IN')}`,image:product.image});localStorage.setItem('wishlist',JSON.stringify(wishlist));alert(`${product.name} added to wishlist ❤️`)}
function displayProducts(data){if(!productList)return;productList.innerHTML='';if(!data.length){productList.innerHTML='<div class="no-products"><h2>No products found 😔</h2><p>Try another search.</p></div>';return}data.forEach(p=>{const el=document.createElement('div');el.className='product';el.innerHTML=`<a href="product.html?id=${p.id}"><img class="product-img" src="${p.image}" alt="${p.name}" loading="lazy"></a><h3>${p.name}</h3><div class="price">₹${p.price.toLocaleString('en-IN')}</div><div class="rating">⭐⭐⭐⭐⭐ ${p.rating} (${p.reviews})</div><span class="badge">${p.badge}</span><div class="stock">🟢 ${p.stock}</div><div class="discount">${p.discount}</div><div class="product-buttons"><button class="cart-btn">🛒 Add to Cart</button><button class="wishlist-btn">❤️ Wishlist</button></div>`;el.querySelector('.cart-btn').onclick=()=>addToCart(p);el.querySelector('.wishlist-btn').onclick=()=>addToWishlist(p);productList.appendChild(el)})}
function searchProducts(){const q=(searchInput?.value||'').trim().toLowerCase();displayProducts(q?products.filter(p=>`${p.name} ${p.badge}`.toLowerCase().includes(q)):products)}
function showSlide(){const img=document.getElementById('slider-image');if(img)img.src=slides[currentSlide]}
function nextSlide(){currentSlide=(currentSlide+1)%slides.length;showSlide()}
function previousSlide(){currentSlide=(currentSlide-1+slides.length)%slides.length;showSlide()}
if(searchInput)searchInput.addEventListener('keydown',e=>{if(e.key==='Enter')searchProducts()});
window.searchProducts=searchProducts;window.nextSlide=nextSlide;window.previousSlide=previousSlide;window.addToCart=addToCart;window.addToWishlist=addToWishlist;
displayProducts(products);updateCartCount();showSlide();setInterval(nextSlide,4000);
