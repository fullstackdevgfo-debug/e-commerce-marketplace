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
      <FeaturedProducts />
      <BrandSection />
      <BlogSection />
    </main>
  );
}
