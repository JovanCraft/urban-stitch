import React, { forwardRef } from 'react';
import './Shop.css';

const products = [
  { id: 1, name: 'Oversized Hoodie', price: '$55', image: 'https://free-images.com/md/1a57/portrait_male_young_hoodie.jpg' },
  { id: 2, name: 'Minimalist Tee', price: '$30', image: 'https://free-images.com/md/464d/digital_equipment_t_shirt.jpg' },
  { id: 3, name: 'Cargo Pants', price: '$65', image: 'https://free-images.com/md/a261/cargo_pants_002.jpg' },
  { id: 4, name: 'Denim Jacket', price: '$80', image: 'https://media.istockphoto.com/id/2189959028/photo/male-men-denim-jacket-isolated-on-white-nobody-jean-jacket-blue-outwear.jpg?b=1&s=612x612&w=0&k=20&c=vWx7-YasOYmsjz4K2kNyzHektGXQuEDve_yNI3BOmyY=' },
  { id: 5, name: 'Utility Vest', price: '$70', image: 'https://media.istockphoto.com/id/1206763580/photo/yellow-reflective-vest-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=Ch6TZRd6_C8k1QJFpKwHd5Olx672GhKK3TV7d5zLsWA=' },
  { id: 6, name: 'Graphic Sweatshirt', price: '$60', image: 'https://free-images.com/md/48eb/felpa.jpg' },
];

const Shop = forwardRef((props, ref) => {
  return (
    <section className="shop" ref={ref}>
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map(item => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Shop;
