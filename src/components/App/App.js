import React, { Component } from "react";
import { connect } from "react-redux";
import "./app.scss";
import {
    getArtist, getArtistEvents,
    getArtistSearchForm, getArtistStore
} from "../../store/artist-store/selectors";
import {
    requestArtist,
    updateArtistSearchForm
} from "../../store/artist-store/actionCreators";
import ArtistSearchForm from "../ArtistSearchForm/ArtistSearchForm";
import ArtistCard from "../ArtistCard/ArtistCard";

class App extends Component {
    render() {
        return (
            <div className="app">
                <ArtistSearchForm
                    {...this.props.artistSearchForm}
                    onChange={(e) => {
                        const target = e.target;
                        const name = target.name;
                        const value = target.value;
                        this.props.dispatch(updateArtistSearchForm({
                            [name]: value
                        }))
                    }}
                    onSubmit={() => {
                        this.props.dispatch(requestArtist());
                    }}
                />
                <br/>
                {(this.props.artist.id || this.props.loadingArtistData === true) && (
                    <ArtistCard artist={this.props.artist} artistEvents={this.props.artistEvents} loading={this.props.loadingArtistData} />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        artistSearchForm: getArtistSearchForm(state),
        artist: getArtist(state),
        artistEvents: getArtistEvents(state),
        loadingArtistData: getArtistStore(state).loadingArtistData
    };
};
export default connect(mapStateToProps)(App);

