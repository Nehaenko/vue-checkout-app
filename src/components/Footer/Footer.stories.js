import Footer from './Footer.vue';
export default {
    title: 'Footer',
    component: Footer,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
};

const Template = (args) => ({
    components: { Footer },
    setup() {
        return { args };
    },
    template: '<Footer v-bind="args"/>',
});

export const FirstStory = Template.bind({});
