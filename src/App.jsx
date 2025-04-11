import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchData } from "./services/api";

function App() {
  const [photo, setPhoto] = useState([]);
  const [query, setQuery] = useState("Hello world");
  const [page, setPage] = useState(1);
  console.log(photo);
  useEffect(() => {
    const abortController = new AbortController();
    const getData = async () => {
      try {
        const data = await fetchData(query, page, abortController.signal);
        setPhoto((prev) => [...prev, ...data.results]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    return () => {
      abortController.abort();
    };
  }, [query, page]);
  const handleChangeQwery = (newQwery) => {
    setQuery(newQwery);
  };

  return (
    <>
      <div>
        <p>Start hw</p>
        <SearchBar handleChangeQwery={handleChangeQwery} />
        <ImageGallery sendPhoto={photo} />
        <button onClick={() => setPage(page + 1)}>Load more</button>
      </div>
    </>
  );
}

export default App;
