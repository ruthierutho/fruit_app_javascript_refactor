import App from "@/App.vue";
import { fruitsData } from './fruits.js';
import { shallowMount } from '@vue/test-utils';
import fetch from 'fetch-mock'

describe('App', () => {
    let wrapper;
    beforeEach(async () => {
        fetch.once('http://localhost:3000/api/fruits', JSON.stringify(fruitsData));
        wrapper = shallowMount(App);
        await wrapper.vm.$nextTick()
        fetch.reset()
    })
    it('should have 2 fruits', () => {
        expect(wrapper.vm.fruits).toHaveLength(2)
    });

    it('should be able to select a fruit', () => {
        wrapper.setData({ selectedFruit: fruitsData[0] })
        expect(wrapper.vm.selectedFruit.name).toMatch(fruitsData[0].name)
    });
});