import React from "react";
import { mount } from 'enzyme';
import ArtistSearchForm from "./ArtistSearchForm";

describe('ArtistSearchForm', () => {

    const props = {
        artistName: "Dua Lipa",
        onChange: () => {},
        onSubmit: () => {}
    };


    let wrapper;

    beforeEach(() => {
        wrapper = mount(<ArtistSearchForm {...props} />);
    });

    it('renders form', () => {
        expect(wrapper.find('form').length).toBe(1);
    });

    it('renders input', () => {
        expect(wrapper.find('input').length).toBe(1);
    });

    it('renders button', () => {
        expect(wrapper.find('button').length).toBe(1);
    });

    it('sets input value based on props artistName', () => {
        expect(wrapper.find('input').instance().value).toEqual(wrapper.prop('artistName'));
        const newArtist = "Jan Blomqvist";
        wrapper.setProps({
            artistName: newArtist
        });
        expect(wrapper.find('input').instance().value).toEqual(newArtist);
    });

});