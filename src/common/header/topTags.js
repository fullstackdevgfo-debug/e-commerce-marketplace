const tags = [
  "Fashions",
  "Electronic",
  "Furniture",
  "Accessories",
  "Shoes",
  "Smartphone",
  "Cellphone",
  "Cameras",
  "Latops",
  "Tablets",
  "Makeup",
  "iPhone",
];

export const TopTags = () => {
  return (
    <div className="container">
      <div className="emarket-top-tags">
        <span className="tag-label">Top Tags:</span>
        {tags.map((tag, index) => (
          <a key={index} href="#">
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
};
