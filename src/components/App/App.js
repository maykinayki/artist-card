import React, { Component } from "react";
import { connect } from "react-redux";
import "./app.scss";
import { getArtist } from "../../store/artist-store/selectors";
import { requestArtist } from "../../store/artist-store/actionCreators";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(requestArtist());
    }

    render() {
        return (
            <div className="app">
                <pre>
                    {JSON.stringify(this.props.artist, null, 4)}
                </pre>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        artist: getArtist(state)
    };
};
export default connect(mapStateToProps)(App);

