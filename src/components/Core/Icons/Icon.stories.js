import Icon from './Icon.vue';
export default {
    title: 'Global/Components/Icon',
    component: Icon,
};

const Template = (args) => ({
    components: { Icon },
    setup() {
        return { args };
    },
    template: '<Icon v-bind="args"/>',
});

export const IconComponent = Template.bind({});

IconComponent.args = {
    icon: ''
};