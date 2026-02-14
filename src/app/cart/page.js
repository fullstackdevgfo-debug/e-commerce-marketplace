// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import "@/styles/cart.css";

// export default function CartPage() {
//   const [cartItems, setCartItems] = useState([]);

//   /* ---------------- LOAD & FIX CART ---------------- */
//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];

//     // ✅ Ensure every item has quantity
//     const normalizedCart = cart.map((item) => ({
//       ...item,
//       quantity: item.quantity ?? 1,
//     }));

//     setCartItems(normalizedCart);
//     localStorage.setItem("cart", JSON.stringify(normalizedCart));
//   }, []);

//   /* ---------------- UPDATE QUANTITY ---------------- */
//   const updateQuantity = (id, change) => {
//     const updatedCart = cartItems.map((item) =>
//       item.id === id
//         ? {
//             ...item,
//             quantity: Math.max(1, item.quantity + change),
//           }
//         : item
//     );

//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   /* ---------------- REMOVE ITEM ---------------- */
//   const removeItem = (id) => {
//     const updatedCart = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   /* ---------------- SUBTOTAL ---------------- */
//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   const totalItems = cartItems.reduce(
//     (sum, item) => sum + item.quantity,
//     0
//   );

//   return (
//     <div className="cart-page container">
//       <h1>Shopping Cart</h1>

//       <div className="cart-content">
//         {/* LEFT */}
//         <div className="cart-items">
//           {cartItems.length === 0 ? (
//             <p className="empty-cart">Your cart is empty.</p>
//           ) : (
//             cartItems.map((item) => (
//               <div className="cart-item" key={item.id}>
//                 <div className="cart-item-image">
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     width={120}
//                     height={120}
//                   />
//                 </div>

//                 <div className="item-details">
//                   <h2>{item.name}</h2>

//                   <p className="stock">
//                     {item.stock || "In Stock"}
//                   </p>

//                   <p className="delivery">
//                     {item.delivery || "FREE delivery by Tomorrow"}
//                   </p>

//                   <div className="cart-price">
//                     <span className="cart-new-price">
//                       ₹ {item.price}
//                     </span>

//                     {item.oldPrice && (
//                       <span className="cart-old-price">
//                         ₹ {item.oldPrice}
//                       </span>
//                     )}

//                     {item.discount && (
//                       <span className="cart-discount">
//                         -{item.discount}%
//                       </span>
//                     )}
//                   </div>

//                   <div className="quantity-actions">
//                     <div className="quantity-selector">
//                       <button onClick={() => updateQuantity(item.id, -1)}>
//                         −
//                       </button>

//                       <span>{item.quantity}</span>

//                       <button onClick={() => updateQuantity(item.id, 1)}>
//                         +
//                       </button>
//                     </div>

//                     <button
//                       className="remove-btn"
//                       onClick={() => removeItem(item.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* RIGHT */}
//         <div className="cart-summary">
//           <h2>
//             Subtotal ({totalItems} item{totalItems !== 7 ? "s" : ""}): ₹{" "}
//             {subtotal.toLocaleString()}
//           </h2>
//           <button className="checkout-btn">
//             Proceed to Buy
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }













// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import "@/styles/cart.css";

// export default function CartPage() {
//   const [cartItems, setCartItems] = useState([]);
//   const router = useRouter();

//   /* ---------------- LOAD & FIX CART ---------------- */
//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];

//     const normalizedCart = cart.map((item) => ({
//       ...item,
//       quantity: item.quantity ?? 1,
//     }));

//     setCartItems(normalizedCart);
//     localStorage.setItem("cart", JSON.stringify(normalizedCart));
//   }, []);

//   /* ---------------- UPDATE QUANTITY ---------------- */
//   const updateQuantity = (id, change) => {
//     const updatedCart = cartItems.map((item) =>
//       item.id === id
//         ? { ...item, quantity: Math.max(1, item.quantity + change) }
//         : item
//     );

//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   /* ---------------- REMOVE ITEM ---------------- */
//   const removeItem = (id) => {
//     const updatedCart = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   /* ---------------- TOTALS ---------------- */
//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   const totalItems = cartItems.reduce(
//     (sum, item) => sum + item.quantity,
//     0
//   );

//   /* ---------------- CHECKOUT ---------------- */
//   const handleCheckout = () => {
//     if (cartItems.length === 0) return;
//     router.push("/checkout");
//   };

//   return (
//     <div className="cart-page container">
//       <h1>Shopping Cart</h1>

//       <div className="cart-content">
//         {/* LEFT */}
//         <div className="cart-items">
//           {cartItems.length === 0 ? (
//             <p className="empty-cart">Your cart is empty.</p>
//           ) : (
//             cartItems.map((item) => (
//               <div className="cart-item" key={item.id}>
//                 <div className="cart-item-image">
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     width={120}
//                     height={120}
//                   />
//                 </div>

//                 <div className="item-details">
//                   <h2>{item.name}</h2>

//                   <p className="stock">{item.stock || "In Stock"}</p>
//                   <p className="delivery">
//                     {item.delivery || "FREE delivery by Tomorrow"}
//                   </p>

//                   <div className="cart-price">
//                     <span className="cart-new-price">₹ {item.price}</span>

//                     {item.oldPrice && (
//                       <span className="cart-old-price">
//                         ₹ {item.oldPrice}
//                       </span>
//                     )}

//                     {item.discount && (
//                       <span className="cart-discount">
//                         -{item.discount}%
//                       </span>
//                     )}
//                   </div>

//                   <div className="quantity-actions">
//                     <div className="quantity-selector">
//                       <button onClick={() => updateQuantity(item.id, -1)}>
//                         −
//                       </button>
//                       <span>{item.quantity}</span>
//                       <button onClick={() => updateQuantity(item.id, 1)}>
//                         +
//                       </button>
//                     </div>

//                     <button
//                       className="remove-btn"
//                       onClick={() => removeItem(item.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* RIGHT */}
//         <div className="cart-summary">
//           <h2>
//             Subtotal ({totalItems} item{totalItems !== 1 ? "s" : ""}): ₹{" "}
//             {subtotal.toLocaleString()}
//           </h2>

//           <button
//             className="checkout-btn"
//             disabled={cartItems.length === 0}
//             onClick={handleCheckout}
//           >
//             Proceed to Buy
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }






"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "@/styles/cart.css";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();

  /* ---------------- LOAD & FIX CART ---------------- */
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const normalizedCart = cart.map((item) => ({
      ...item,
      quantity: item.quantity ?? 1,
    }));

    setCartItems(normalizedCart);
    localStorage.setItem("cart", JSON.stringify(normalizedCart));
  }, []);

  /* ---------------- GO TO PRODUCT ---------------- */
  const goToProduct = (id) => {
    router.push(`/product/${id}`);
  };

  /* ---------------- UPDATE QUANTITY ---------------- */
  const updateQuantity = (id, change) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  /* ---------------- REMOVE ITEM ---------------- */
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  /* ---------------- TOTALS ---------------- */
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  /* ---------------- CHECKOUT ---------------- */
  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    router.push("/checkout");
  };

  return (
    <div className="cart-page container">
      <h1>Shopping Cart</h1>

      <div className="cart-content">
        {/* LEFT */}
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                {/* IMAGE (CLICKABLE) */}
                <div
                  className="cart-item-image"
                  onClick={() => goToProduct(item.id)}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                  />
                </div>

                <div className="item-details">
                  {/* NAME (CLICKABLE) */}
                  <h2
                    onClick={() => goToProduct(item.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {item.name}
                  </h2>

                  <p className="stock">{item.stock || "In Stock"}</p>
                  <p className="delivery">
                    {item.delivery || "FREE delivery by Tomorrow"}
                  </p>

                  <div className="cart-price">
                    <span className="cart-new-price">₹ {item.price}</span>

                    {item.oldPrice && (
                      <span className="cart-old-price">
                        ₹ {item.oldPrice}
                      </span>
                    )}

                    {item.discount && (
                      <span className="cart-discount">
                        -{item.discount}%
                      </span>
                    )}
                  </div>

                  <div className="quantity-actions">
                    <div className="quantity-selector">
                      <button onClick={() => updateQuantity(item.id, -1)}>
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>
                        +
                      </button>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* RIGHT */}
        <div className="cart-summary">
          <h2>
            Subtotal ({totalItems} item{totalItems !== 1 ? "s" : ""}): ₹{" "}
            {subtotal.toLocaleString()}
          </h2>

          <button
            className="checkout-btn"
            disabled={cartItems.length === 0}
            onClick={handleCheckout}
          >
            Proceed to Buy
          </button>
        </div>
      </div>
    </div>
  );
}
