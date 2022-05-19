import TextField from './TextField.vue';
export default {
    title: 'TextField',
    component: TextField,
    argTypes: {
        color: { control: 'color' },
        fontSize: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
    },
};

const Template = (args) => ({
    components: { TextField },
    setup() {
        return { args };
    },
    template: '<TextField v-bind="args"/>',
});

export const FirstStory = Template.bind({});

FirstStory.args = {
    text: ''
};