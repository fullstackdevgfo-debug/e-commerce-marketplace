import React from "react";

export const MegaMenu = ({ data }) => {
  if (!data || !data.megaMenuData) return null;

  return (
    <div className="megamenu">
      {data.megaMenuData.map((column) => (
        <div className="megamenu-column" key={column.id}>
          <h4 className="megamenu-title">{column.columnTitle}</h4>
          <ul className="megamenu-list">
            {column.links.map((link, index) => (
              <li key={index}>
                <a href={link.path}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {data.featuredBanner && (
        <div className="megamenu-banner">
          <div className="banner-content">
            <img
              src={data.featuredBanner.image}
              alt={data.featuredBanner.title}
            />
            <div className="banner-overlay">
              <span className="banner-subtitle">
                {data.featuredBanner.subtitle}
              </span>
              <h3 className="banner-title">{data.featuredBanner.title}</h3>
              <a href={data.featuredBanner.path} className="banner-btn">
                {data.featuredBanner.buttonText}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
