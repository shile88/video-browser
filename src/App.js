import "./App.css";

import { useEffect, useState } from "react";

import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import youtubeApi from "./api/youtubeApi";

function App() {
  const [search, setSearch] = useState("react js");
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();

  useEffect(() => {
    async function getVideos() {
      const response = await youtubeApi.get("/search", {
        params: {
          q: search,
        },
      });
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    }
    getVideos();
  }, [search]);


  return (
    <div className="App">
      <SearchBar search={search} setSearch={setSearch} />
      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
            <VideoDetail selectedVideo={selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList videos={videos} setSelectedVideo={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
