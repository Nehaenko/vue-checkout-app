import App from './App.vue';
export default {
    title: 'App',
    component: App,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
};

const Template = (args) => ({
    components: { App },
    setup() {
        return { args };
    },
    template: '<App v-bind="args"/>',
});

export const FirstStory = Template.bind({});
