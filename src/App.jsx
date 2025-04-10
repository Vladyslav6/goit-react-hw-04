import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchData } from "./services/api";

function App() {
  const [photo, setPhoto] = useState([]);
  console.log(photo);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setPhoto(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div>
        <p>Start hw</p>
        <SearchBar />
        <ImageGallery sendPhoto={photo} />
      </div>
    </>
  );
}

export default App;
