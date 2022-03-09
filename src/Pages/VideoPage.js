import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";



const VideoPage = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("cryptocurrency");
  const [render, setRender] = useState("")


  const allVideos = () =>
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${search}&key=AIzaSyD7WvZHOahX4B5EXossb1vgV-7s1hGLR1g`;

  //fetching trending coins 
  const fetchAllVideos = async () => {
    const { data } = await axios.get(allVideos())

    setVideos(data.items);
  };

  useEffect(() => {
    fetchAllVideos();
  }, [render]);

  const formSubmit = (event) => {
    event.preventDefault();
    console.log(`The search you entered was: ${search}`)
    setRender(`${search}`)
  }

  return (
    <div>
    <div className="videoPageTitle"> "{render.toUpperCase()}" Videos </div>
    <form onSubmit={formSubmit}>
      <label >Search a cryptocurrency:<br/>
        <input
          type="text" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </form>

      <div className="youtubeVideos">
      {videos.map((video, index) => (
            <iframe className="youtubeSingleVideo" key={index} width="420" height="315"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}>
            </iframe>
      ))}
      </div>
      </div>
  )
}

export default VideoPage