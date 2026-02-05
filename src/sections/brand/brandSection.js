import { ChevronLeft, ChevronRight } from "lucide-react";

const brands = [
  "https://opencart4.magentech.com/themes/so_emarket/layout2/image/cache/catalog/brands/b5-140x73.png",
  "https://opencart4.magentech.com/themes/so_emarket/layout2/image/cache/catalog/brands/b2-140x73.png",
  "https://opencart4.magentech.com/themes/so_emarket/layout2/image/cache/catalog/brands/b6-140x73.png",
  "https://opencart4.magentech.com/themes/so_emarket/layout2/image/cache/catalog/brands/b3-140x73.png",
  "https://opencart4.magentech.com/themes/so_emarket/layout2/image/cache/catalog/brands/id10-b1-140x73.png",
  "https://opencart4.magentech.com/themes/so_emarket/layout2/image/cache/catalog/brands/b1-140x73.png",
  "https://opencart4.magentech.com/themes/so_emarket/layout2/image/cache/catalog/brands/b4-140x73.png",
];

export const BrandSection = () => {
  return (
    <div className="emarket-brand-section">
      <div className="container">
        <div className="emarket-brand-container">
          <button className="emarket-brand-carousel-nav">
            <ChevronLeft size={20} />
          </button>

          <div className="emarket-brand-list">
            {brands.map((brand, index) => (
              <a key={index} href="#" className="emarket-brand-item">
                <img src={brand} alt="Brand" />
              </a>
            ))}
          </div>

          <button className="emarket-brand-carousel-nav">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
