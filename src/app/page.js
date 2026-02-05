
import Categories from "@/sections/categories";
import DealsOfWeek from "@/sections/deals";
import HomeShowcase from "@/sections/homeShowcase";
import {
  Hero,
  Features,
  BlogSection,
  BrandSection,
  FeaturedProducts,
} from "@/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Categories />
      <DealsOfWeek />
      <HomeShowcase />
      <FeaturedProducts />
      <BrandSection />
      <BlogSection />
    </main>
  );
}
