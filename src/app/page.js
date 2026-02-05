import { Hero, Features } from "@/sections";
import Categories from "@/sections/categories";
import DealsOfWeek from "@/sections/deals";
import HomeShowcase from "@/sections/homeShowcase";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Categories />
      <DealsOfWeek />
      <HomeShowcase />
    </main>
  );
}
