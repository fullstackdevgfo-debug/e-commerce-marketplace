import { ChevronDown } from "lucide-react";

export const TopPromotionalBar = () => {
  return (
    <div className="emarket-topbar">
      <div className="container">
        <div className="promo-left">
          <span>Welcome to Emarket !</span>
          <span className="promo-highlight">
            Wrap new offers / gift every single day on Weekends -
          </span>
          <span>New Coupon code: Happy2017</span>
        </div>
        <div className="promo-right">
          <div className="dropdown-item">
            <span>$ US Dollar</span>
            <ChevronDown size={12} />
          </div>
          <div className="dropdown-item">
            <img
              src="https://opencart4.magentech.com/themes/so_emarket/layout2/image/catalog/flags/gb.png"
              alt="English"
              className="flag-icon"
            />
            <span>English</span>
            <ChevronDown size={12} />
          </div>
        </div>
      </div>
    </div>
  );
};
