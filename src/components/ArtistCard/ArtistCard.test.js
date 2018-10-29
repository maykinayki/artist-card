import React from "react";
import { mount } from 'enzyme';
import ArtistCard from "./ArtistCard";

describe('ArtistCard', () => {

    const props = {
        artist: {
            name: "Jan Blomqvist"
        },
        artistEvents: [],
        loading: false
    };

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<ArtistCard {...props} />);
    });

    it('does not render loader if `loading` props is falsy', () => {
        expect(wrapper.find('.loader-container').length).toEqual(0);
    });

    it('renders loader if `loading` props is truthy', () => {
        wrapper.setProps({
            loading: true
        });
        expect(wrapper.find('.loader-container').length).toEqual(1);
    });

    it('renders artist name', () => {
        expect(wrapper.find('h1').first().text()).toEqual(wrapper.prop('artist').name);
    });

    it('renders event list correctly', () => {
        expect(wrapper.find('.events-list .music-meta').length).toEqual(wrapper.prop('artistEvents').length);
    });

});