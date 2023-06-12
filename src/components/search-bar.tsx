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
    <form>
      <SearchBrand
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
      />
    </form>
  );
}
