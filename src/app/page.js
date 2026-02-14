
import Categories from "@/sections/categories/CategoryHome";
import DealsOfWeek from "@/sections/deals";
import HomeShowcase from "@/sections/homeShowcase";
import {
  Hero,
  Features,
  BlogSection,
  BrandSection,
  FeaturedProducts,
} from "@/sections";
import LercTestedSection from "@/sections/video";

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
      <LercTestedSection />
      <BlogSection />
    </main>
  );
}
