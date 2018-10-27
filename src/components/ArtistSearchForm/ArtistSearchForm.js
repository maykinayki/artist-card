import React from 'react';
import './style.scss';

const ArtistSearchForm = ({artistName, onChange, onSubmit}) => {
    return (
        <form action="" className="artist-search-form" onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
        }}>
            <div className="form-item">
                <div className="form-item-group">
                    <input type="text"
                           name="artistName"
                           value={artistName}
                           onChange={onChange}
                           placeholder="Search by artist name"/>
                    <button>Search</button>
                </div>
            </div>
        </form>
    )
};

export default ArtistSearchForm;
