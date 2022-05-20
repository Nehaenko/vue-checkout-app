import Logo from './Logo.vue';
export default {
    title: 'Global/Components/Logo',
    component: Logo
};

const Template = (args) => ({
    components: { Logo },
    setup() {
        return { args };
    },
    template: '<Logo v-bind="args"/>',
});

export const LogoComponent = Template.bind({});
