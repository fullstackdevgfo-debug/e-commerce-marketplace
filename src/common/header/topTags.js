const tags = [
  "Fire Extinguisher",
  "Automatic FireBall",
  "Smart Smoke Detector",
  "Smart LPG Gas Detector",
  "Electric Board Device",
  "Smart Display",
  "Vehicle Fire Safety Device",
  "Smart Water Sprinkler with AI Camera",
  "Modular",
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
