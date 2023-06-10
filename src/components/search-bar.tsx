"use client";
import { useState } from "react";
import { CARS_BRANDS } from "@/constants";
import { CarBrand } from "@/interfaces";
import SearchBrand from "./search-brand";

export default function SearchBar() {
  const [selectedBrand, setSelectedBrand] = useState<CarBrand>(CARS_BRANDS[0]);

  return (
    <form>
      <SearchBrand
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
      />
    </form>
  );
}
