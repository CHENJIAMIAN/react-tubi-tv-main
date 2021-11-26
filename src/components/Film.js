import React from 'react'
import { Link } from 'react-router-dom'


class Film extends React.Component {


    render() {
        let video = this.props.video
        return (
            <div className="item">
                <div className="img">
                    <Link to={`/movies/${video.id}`} className="img-wrap"><img src={video.pic1} alt="" /></Link>
                    <Link to={`/movies/${video.id}`} className="play"><i className="fas fa-play"></i></Link>
                    <Link to="/home/" className="add-to-list">Add to My List</Link>
                </div>
                <Link to={`/movies/${video.id}`}>
                    <h3 className="name">{video.title} </h3>
                </Link>
                <div className="info flex">
                    <div className="info-left">
                        <p>{video.duration}</p>
                        <p>{video.category}</p>
                    </div>
                    <span>PG-13</span>
                </div>
            </div>
        )
    }
}

export default Film