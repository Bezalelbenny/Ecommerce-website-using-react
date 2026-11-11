import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const products={
    1: { name: "HeadPhones", description: "Good Audio Device", price: "₹1499",image:"https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=600&auto=format&fit=crop&q=60" },
    2: { name: "Shoes", description: "Stilish Drippy shoes", price: "₹2000" ,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60"},
    3: { name: "Bag", description: "Aesthetic trendy Bags", price: "₹750" ,image:"https://images.unsplash.com/photo-1622560481156-01fc7e1693e6?w=600&auto=format&fit=crop&q=60"},
    4: { name: "watch", description: "Trendy All timely watch", price: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&auto=format&fit=crop&q=60" },
    
    
  }
  const product=products[id];
  if (!product)return alert("Product not found")

  return (
   <div className="product-details">
      <img src={product.image} alt={product.name} width="250" />

      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
      <p>{product.description}</p>

      <button onClick={()=>alert("Product Bought Succesfully")}>Buy Now</button>
      <button onClick={()=>alert("Product added to cart")}>Add to cart</button>
    </div>
  );
}

export default ProductDetails;

      

