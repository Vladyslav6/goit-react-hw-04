import { useEffect, useState } from "react";
import css from "./App.module.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchData } from "./services/api";
import { RingLoader } from "react-spinners";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("root"));

function App() {
  const [photo, setPhoto] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [isError, setIsError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleClick = (imgUrl) => {
    setCurrentImage(imgUrl);
    openModal();
  };

  useEffect(() => {
    const abortController = new AbortController();
    const getData = async () => {
      if (!query) return;
      try {
        setIsLoading(true);
        const data = await fetchData(query, page, abortController.signal);
        setPhoto((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
    return () => {
      abortController.abort();
    };
  }, [query, page]);
  const handleChangeQwery = (newQwery) => {
    setQuery(newQwery);
    setPhoto([]);
    setPage(1);
  };

  return (
    <>
      <div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <button onClick={closeModal}>close</button>
          {currentImage && (
            <img
              src={currentImage}
              alt="Selected"
              style={{ maxWidth: "100%" }}
            />
          )}
        </Modal>
        <SearchBar handleChangeQwery={handleChangeQwery} />
        <ImageGallery sendPhoto={photo} handleClick={handleClick} />
        {!isLoading && isError && <h2>Error server</h2>}
        {isLoading && <RingLoader color="#04f92b" />}
        {page < totalPages && !isLoading && (
          <div>
            <button
              className={css.loadMoreBtn}
              onClick={() => setPage(page + 1)}
            >
              Load more
            </button>
            <span className={css.spanEffect}>Page: {page}</span>
            <span className={css.spanEffect}>Total Page: {totalPages}</span>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
