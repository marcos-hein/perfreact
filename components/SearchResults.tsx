import { List, ListRowRenderer } from "react-virtualized";
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
  const rowRerender: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem product={results[index]} addToWishList={addToWishList} />
      </div>
    );
  };

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRerender}
      />

      {/* {results.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          addToWishList={addToWishList}
        />
      ))} */}
    </div>
  );
}
