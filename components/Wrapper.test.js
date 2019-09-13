import '@/labkit';
import {mount} from '@vue/test-utils';
import Wrapper from './Wrapper';

/*
    NOTE:
    I'm not advocating these as "good tests": they exist to demonstrate
    snapshot testing as a concept.
*/

describe('Wrapper component', () => {
    describe('When no props are provided', () => {
        it('renders as expected', () => {
            const component = mount(Wrapper, {
                propsData: {},
            });
            expect(component.html()).toMatchSnapshot();
        });
    });

    describe('When props are provided', () => {
        it('renders as expected', () => {
            const component = mount(Wrapper, {
                propsData: {
                    display: 'none',
                    'sm:display': 'block',
                    'md:display': 'inline-block',
                },
            });
            expect(component.html()).toMatchSnapshot();
        });
    });
});
