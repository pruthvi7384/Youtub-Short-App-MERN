import React from 'react'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import './Footer.css'

function Footer({channel, description, music}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@ {channel}</h3>
                <p>{description}</p>
                <MusicNoteIcon/>
                <marquee>{music}</marquee>
            </div>
            <img
                className="videoFooter__record"
                src="https://static.thenounproject.com/png/934821-200.png"
                alt=""
            />
        </div>
    )
}

export default Footer
