export const navData = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Best Sellers",
    path: "/best-sellers",
    badge: "Hot",
  },
  {
    id: 3,
    title: "Shop",
    path: "/shop",
    hasMegaMenu: true,
    megaMenuData: [
      {
        id: 301,
        columnTitle: "Electronics",
        links: [
          { title: "Smartphones", path: "/shop/smartphones" },
          { title: "Laptops", path: "/shop/laptops" },
          { title: "Headphones", path: "/shop/headphones" },
          { title: "Tablets", path: "/shop/tablets" },
          { title: "Cameras", path: "/shop/cameras" },
        ],
      },
      {
        id: 302,
        columnTitle: "Fashion",
        links: [
          { title: "Men's Clothing", path: "/shop/mens-clothing" },
          { title: "Women's Clothing", path: "/shop/womens-clothing" },
          { title: "Shoes", path: "/shop/shoes" },
          { title: "Accessories", path: "/shop/accessories" },
          { title: "Watches", path: "/shop/watches" },
        ],
      },
      {
        id: 303,
        columnTitle: "Home & Kitchen",
        links: [
          { title: "Furniture", path: "/shop/furniture" },
          { title: "Appliances", path: "/shop/appliances" },
          { title: "Decor", path: "/shop/decor" },
          { title: "Kitchenware", path: "/shop/kitchenware" },
          { title: "Bedding", path: "/shop/bedding" },
        ],
      },
      {
        id: 304,
        columnTitle: "Beauty & Health",
        links: [
          { title: "Skincare", path: "/shop/skincare" },
          { title: "Makeup", path: "/shop/makeup" },
          { title: "Haircare", path: "/shop/haircare" },
          { title: "Personal Care", path: "/shop/personal-care" },
          { title: "Supplements", path: "/shop/supplements" },
        ],
      },
    ],
    featuredBanner: {
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
      title: "Summer Collection",
      subtitle: "Up to 50% Off",
      buttonText: "Shop Now",
      path: "/shop/summer-collection",
    },
  },
  {
    id: 4,
    title: "Top Deals",
    path: "/deals",
    badge: "New",
  },
  {
    id: 5,
    title: "Blog",
    path: "/blog",
  },
  {
    id: 6,
    title: "About Us",
    path: "/about",
  },
  {
    id: 7,
    title: "Contact",
    path: "/contact",
  },
];
