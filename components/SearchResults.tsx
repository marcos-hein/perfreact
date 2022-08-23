import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
  totalPrice: number;
  addToWishList: (id: number) => void;
}

export function SearchResults({
  results,
  totalPrice,
  addToWishList,
}: SearchResultsProps) {
  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          addToWishList={addToWishList}
        />
      ))}
    </div>
  );
}
