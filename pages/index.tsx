import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import { SearchResults } from "../components/SearchResults";

const Home: NextPage = () => {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState([]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    setResults(data);
  }
  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <SearchResults results={results} />
    </div>
  );
};

export default Home;
