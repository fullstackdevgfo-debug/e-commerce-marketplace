import {
  Truck,
  Headphones,
  RotateCcw,
  CreditCard,
  Percent,
} from "lucide-react";

const policies = [
  { icon: Truck, title: "FREE DELIVERY", desc: "From $59.89" },
  { icon: Headphones, title: "SUPPORT 24/7", desc: "Online 24 Hours" },
  { icon: RotateCcw, title: "FREE RETURN", desc: "365 A Day" },
  { icon: CreditCard, title: "PAYMENT METHOD", desc: "Secure Payment" },
  { icon: Percent, title: "BIG SAVING", desc: "Weekend Sales" },
];

export const Features = () => {
  return (
    <div className="emarket-container ">
      <div className="emarket-policy">
        {policies.map((policy, index) => (
          <div key={index} className="emarket-policy-item">
            <div className="emarket-policy-icon">
              <policy.icon size={32} strokeWidth={1.2} />
            </div>
            <div>
              <h4 className="emarket-policy-title">{policy.title}</h4>
              <p className="emarket-policy-desc">{policy.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
