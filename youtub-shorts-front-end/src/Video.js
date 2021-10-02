import React,{ useState, useRef } from 'react'
import Footer from './Footer';
import Logo from './Logo';
import Sidebar from './Sidebar';
import './Video.css'


function Video({video}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = ()=>{
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
          } else {
            videoRef.current.play();
            setPlaying(true);
          }
    }
    return (
        <div className="video">
            <Logo/>
            <video
                className="shot_video"
                loop
                ref={videoRef}
                onClick={onVideoPress}
                src={video.url}
            >
            </video>
            <Sidebar like={video.liked} messages={video.messages}/>
            <Footer channel={video.channel} description={video.description} music={video.song}/>
        </div>
    )
}

export default Video
