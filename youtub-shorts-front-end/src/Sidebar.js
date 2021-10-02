import React,{ useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import './Sidebar.css'

function Sidebar({ like, messages }) {
    const [liked, setLiked] = useState(false);
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? (
                <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
                ) : (
                <FavoriteBorderIcon
                    fontSize="large"
                    onClick={(e) => setLiked(true)}
                />
                )}
                <p>{liked ? like + 1 : like}</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon fontSize="large"/>
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />
            </div>
    </div>
    )
}

export default Sidebar
