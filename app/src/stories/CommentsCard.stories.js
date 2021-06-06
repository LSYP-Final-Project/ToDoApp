import { Meta, Story } from "@storybook/react";
import { CommentsCard } from "Modules/tasks/components/CommentsCard";


export default {
    title: 'Todos/CommentsCard',
    component: CommentsCard,
    decorators: [
        Story => <div style={{ maxWidth: 800, margin: '0 auto' }} >{Story()}</div>
        // Story => <div style={{ maxWidth: 500, margin: '0 auto' }} ><Story /></div>
    ]
}

const Template = () => <CommentsCard />

export const Primary = Template.bind({})
