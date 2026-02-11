import "@/styles/policy.css";

export const metadata = {
  title: "Refund & Returns Policy | GFO Fire Equipments",
  description: "Refund and Returns Policy of GFO Fire Equipments",
};

export default function RefundReturnsPolicy() {
  return (
    <div className="policy-wrapper">
      <div className="policy-container">
        <h1>Refund & Returns Policy</h1>

        <p>
          Please read the return and cancellation policy of our site carefully
          before placing your order with gfofireequipments.com.
        </p>

        <h2>What is the return policy in gfofireequipments.com?</h2>
        <p>
          When you order at gfofireequipments.com, we provide 100% genuine
          products and take utmost care of customer requirements. Products are
          delivered in excellent condition as per the specifications mentioned.
        </p>
        <p>
          However, if at the time of receiving the product it is found defective,
          damaged, or not as per your order, you have the right to return the
          product at your doorstep during delivery.
        </p>

        <h2>What is the cancellation guiding principle?</h2>
        <p>
          gfofireequipments.com ensures accurate product delivery at the correct
          location. If the received product does not match your order, you may
          request a refund or replacement.
        </p>
        <p>
          Our cancellation policy allows you to receive a refund within a
          maximum of 5 working days. Refunds or replacements will be processed
          only after the product reaches the Fire and Personal Safety
          Enterprises warehouse.
        </p>
        <p>
          In case the ordered item is not delivered to your location, the full
          amount will be refunded.
        </p>

        <h2>How can you cancel your order?</h2>
        <p>
          Once an order is placed, it is scheduled for delivery by default.
          However, cancellation requests can be raised by logging into your
          account on gfofireequipments.com before the product is dispatched.
        </p>
        <p>
          You may also request cancellation by emailing{" "}
          <strong>info@gfofireequipments.com</strong> or calling{" "}
          <strong>+91 8826132172, 9319312172</strong>.
        </p>
        <p>
          Cancellation requests are not accepted once the order has been
          dispatched. In such cases, the product must be returned after
          delivery, subject to return conditions.
        </p>

        <h2>What are the guidelines for Return Policy?</h2>
        <ul className="policy-list">
          <li>
            Items must be unused, uninstalled, and returned with original
            packaging, tags, invoices, and bills.
          </li>
          <li>
            Refund or replacement requests are allowed only if the wrong product
            is delivered.
          </li>
          <li>
            Replacement is applicable only for the same product; exchange with
            different items is not supported.
          </li>
          <li>
            Returns will not be accepted if any part of the package is missing
            or damaged after delivery.
          </li>
          <li>
            For fire extinguishers, returns are not accepted if the pressure
            gauge has fallen from its original reading.
          </li>
        </ul>

        <p>
          Returns are accepted only within 1 day of receipt and must be in new
          condition. Returns can be made in-store or by mail. Customers are
          responsible for return shipping costs unless the return is due to our
          error.
        </p>
        <p>
          There is no restocking fee for returns. This policy applies to
          transactions in INR (Indian Rupees).
        </p>

        <p className="policy-note">
          *** We reserve the right to change the return & cancellation policy at
          any time. Any updates will be posted on this page.
        </p>
      </div>
    </div>
  );
}
