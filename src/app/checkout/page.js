"use client";

import { useState, useEffect } from "react";
import "@/styles/checkout.css";

export default function CheckoutPage() {
  const [showAddressModal, setShowAddressModal] = useState(false);

  const [address, setAddress] = useState({
    name: "Chandra",
    line1: "avvdf",
    line2: "gfhgf",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110043",
    country: "India",
  });

  const [tempAddress, setTempAddress] = useState(address);

  /* 🔒 LOCK BODY SCROLL WHEN MODAL OPEN */
  useEffect(() => {
    document.body.style.overflow = showAddressModal ? "hidden" : "auto";
  }, [showAddressModal]);

  const saveAddress = () => {
    setAddress(tempAddress);
    setShowAddressModal(false);
  };

  return (
    <>
      <div className="checkout-container">
        {/* LEFT */}
        <div className="checkout-left">
          {/* DELIVERY ADDRESS */}
          <div className="card address-card">
            <div className="address-header">
              <h3>Delivering to {address.name}</h3>
              <button
                className="link-btn"
                onClick={() => setShowAddressModal(true)}
              >
                Change
              </button>
            </div>

            <p className="muted">
              {address.line1}, {address.line2}
              <br />
              {address.city}, {address.state} {address.pincode}
              <br />
              {address.country}
            </p>

            <a href="#">Add delivery instructions</a>
          </div>

          {/* PAYMENT */}
          <div className="card">
            <h3>Payment method</h3>

            <label className="payment-option">
              <input type="radio" name="payment" />
              Cash on Delivery / Pay on Delivery
            </label>

            <label className="payment-option">
              <input type="radio" name="payment" />
              UPI / Cards / Net Banking
            </label>

            <button className="primary-btn">
              Use this payment method
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="checkout-right">
          <div className="card summary">
            <button className="primary-btn full">
              Place Order
            </button>

            <div className="summary-row">
              <span>Items:</span>
              <span>₹299</span>
            </div>

            <div className="summary-row">
              <span>Delivery:</span>
              <span>₹39</span>
            </div>

            <hr />

            <div className="summary-row total">
              <span>Order Total:</span>
              <span>₹338</span>
            </div>
          </div>
        </div>
      </div>

      {/* ADDRESS MODAL */}
      {showAddressModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowAddressModal(false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Add delivery address</h3>

            <input
              placeholder="Full Name"
              value={tempAddress.name}
              onChange={(e) =>
                setTempAddress({ ...tempAddress, name: e.target.value })
              }
            />

            <input
              placeholder="Address line 1"
              value={tempAddress.line1}
              onChange={(e) =>
                setTempAddress({ ...tempAddress, line1: e.target.value })
              }
            />

            <input
              placeholder="Address line 2"
              value={tempAddress.line2}
              onChange={(e) =>
                setTempAddress({ ...tempAddress, line2: e.target.value })
              }
            />

            <input
              placeholder="City"
              value={tempAddress.city}
              onChange={(e) =>
                setTempAddress({ ...tempAddress, city: e.target.value })
              }
            />

            <input
              placeholder="State"
              value={tempAddress.state}
              onChange={(e) =>
                setTempAddress({ ...tempAddress, state: e.target.value })
              }
            />

            <input
              placeholder="Pincode"
              value={tempAddress.pincode}
              onChange={(e) =>
                setTempAddress({ ...tempAddress, pincode: e.target.value })
              }
            />

            <input
              placeholder="Country"
              value={tempAddress.country}
              onChange={(e) =>
                setTempAddress({ ...tempAddress, country: e.target.value })
              }
            />

            <div className="modal-actions">
              <button
                className="secondary-btn"
                onClick={() => setShowAddressModal(false)}
              >
                Cancel
              </button>

              <button className="primary-btn" onClick={saveAddress}>
                Save Address
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
