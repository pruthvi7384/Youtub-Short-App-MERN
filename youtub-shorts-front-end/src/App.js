import React,{ useState,useEffect } from 'react';
import './App.css'
import Video from './Video';
import axios from "axios";

function App() {
  const [videos, setVideos] = useState([]);
  console.log(videos);
  useEffect(()=>{
    const sync = async() => {
      await axios.get('http://localhost:8000/retrieve/conversation').then((res) => {
        // console.log('results', res.data);
        setVideos(res.data);
      });
    };
    sync();
  },[])
  return (
    <div className="app">
        <div className="shorts_vedios">
          {videos.map((video)=>(
            <Video key="video._id" video={video} />
          ))}
        </div>
    </div>
  );
}

export default App;
