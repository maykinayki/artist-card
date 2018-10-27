import React from "react";
import "./style.scss";
import Loader from "../Loader/Loader";

const ArtistCard = ({artist, artistEvents, loading}) => {
    if(loading) {
        return (
            <div className="artist-card">
                <div className="loader-container">
                    <Loader/>
                </div>
            </div>
        )
    }
    return (
        <div className="artist-card">
            <div className="artist-photo"
                 style={{backgroundImage: `url(${artist.image_url})`}}/>
            <div className="artist-details">
                <h1>{artist.name}</h1>
                <span className="artist-genre">#{artist.id}</span>
                <div className="music-meta">
                    <div className="song">
                        <h4>Trackers</h4>
                        <ul>
                            <li>{artist.tracker_count}</li>
                        </ul>
                    </div>
                    <div className="social-links">
                        <h4>More info</h4>
                        <ul>
                            <li><a target="_blank" rel="noopener noreferrer"
                                   href={artist.facebook_page_url}>Facebook</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="artist-details">
                <h1>Events</h1>
                <div className="events-list">
                    {artistEvents.map(event => {
                        return (
                            <div key={event.id} className="music-meta">
                                <div className="event">
                                    <h4>{event.datetime}</h4>
                                    <ul>
                                        <li>{event.venue.name}</li>
                                        <li>{event.venue.city}, {event.venue.country}</li>
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ArtistCard;