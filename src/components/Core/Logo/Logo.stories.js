import Logo from './Logo.vue';
export default {
    title: 'Logo',
    component: Logo
};

const Template = (args) => ({
    components: { Logo },
    setup() {
        return { args };
    },
    template: '<Logo v-bind="args"/>',
});

export const FirstStory = Template.bind({});