import Hero from "@/components/hero";
import SearchBar from "@/components/search-bar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <SearchBar />
    </main>
  );
}
