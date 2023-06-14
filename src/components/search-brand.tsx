"use client";
import { useState, Fragment } from "react";

import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { CARS_BRANDS } from "@/constants";
import { CarBrand } from "@/interfaces";

interface SearchBrandProps {
  selectedBrand: CarBrand;
  setSelectedBrand: (value: CarBrand) => void;
}
export default function SearchBrand({
  selectedBrand,
  setSelectedBrand,
}: SearchBrandProps) {
  const [query, setQuery] = useState("");

  const cartBrands =
    query === ""
      ? CARS_BRANDS
      : CARS_BRANDS.filter((brand) =>
          brand.name.toLowerCase().includes(query.toLowerCase())
        );

  const handleChange = (event: any) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <Combobox value={selectedBrand} onChange={setSelectedBrand}>
        <Combobox.Input
          placeholder="Volkswagen"
          displayValue={(brand: CarBrand) => brand.name}
          onChange={handleChange}
        />
        <Combobox.Button>
          <ChevronUpDownIcon
            className="w-5 h-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options>
            {cartBrands.length === 0 && query !== "" ? (
              <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">
                Nothing found.
              </div>
            ) : (
              cartBrands.map((brand) => (
                <Combobox.Option
                  key={brand.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-teal-600 text-white" : "text-gray-900"
                    }`
                  }
                  value={brand}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {brand.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-teal-600"
                          }`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
}
