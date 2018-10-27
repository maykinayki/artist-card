import React, { Component } from "react";
import { connect } from "react-redux";
import "./app.scss";
import { getArtist, getArtistSearchForm } from "../../store/artist-store/selectors";
import {
    requestArtist,
    updateArtistSearchForm
} from "../../store/artist-store/actionCreators";
import ArtistSearchForm from "../ArtistSearchForm/ArtistSearchForm";

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
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        artistSearchForm: getArtistSearchForm(state),
        artist: getArtist(state)
    };
};
export default connect(mapStateToProps)(App);

