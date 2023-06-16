import { CarBrand } from "@/interfaces";
import SearchBrand from "./search-brand";
interface SearchBarProps {
  selectedBrand: CarBrand;
  setSelectedBrand: (value: CarBrand) => void;
}
export default function SearchBar({
  selectedBrand,
  setSelectedBrand,
}: SearchBarProps) {
  return (
    <div className="px-4 mx-auto mb-20 max-w-7xl">
      <SearchBrand
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
      />
    </div>
  );
}
