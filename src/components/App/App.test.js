import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { mount, shallow } from 'enzyme';
import App from "./App";
import store from "../../store";
import ArtistSearchForm from "../ArtistSearchForm/ArtistSearchForm";
import ArtistCard from "../ArtistCard/ArtistCard";
import {
    updateArtistSearchForm
} from "../../store/artist-store/actionCreators";
import { getArtistSearchForm } from "../../store/artist-store/selectors";

describe('App', () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Provider store={store}>
            <App/>
        </Provider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    let wrapper;
    let app;

    beforeEach(() => {
        wrapper = mount(<Provider store={store}>
            <App/>
        </Provider>);
        app = wrapper.find(App);
    });

    it('contains ArtistSearchForm', () => {
        expect(app.containsMatchingElement(ArtistSearchForm)).toBe(true);
    });

    it('contains ArtistCard', () => {
        expect(app.containsMatchingElement(ArtistCard)).toBe(true);
    });

    it('updates artist search form state correctly', async (done) => {
        await store.dispatch(updateArtistSearchForm({
            artistName: "Jan Blomqvist"
        }));
        expect(getArtistSearchForm(store.getState()).artistName).toEqual("Jan Blomqvist");
        done();
    });
});