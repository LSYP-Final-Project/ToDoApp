import React from 'react';

import StyledAddButtonComponent from './StyledAddButtonComponent';

export default{
    title: 'Sprints Styles/ StyledAddButton',
    component: StyledAddButtonComponent,
    argTypes: {
        backgroundColor: {control: 'color'},
    }
}

const Template = (args) => <StyledAddButtonComponent {...args} />

export const Primary = Template.bind({});
export const Secondary = Template.bind({});