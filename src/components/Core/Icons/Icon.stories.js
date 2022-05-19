import Icon from './Icon.vue';
export default {
    title: 'Icon',
    component: Icon,
};

const Template = (args) => ({
    components: { Icon },
    setup() {
        return { args };
    },
    template: '<Icon v-bind="args"/>',
});

export const FirstStory = Template.bind({});

FirstStory.args = {
    icon: ''
};