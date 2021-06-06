import React from 'react';
import store from 'Redux/store'
import { TaskCard } from 'Core/components';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

const history = createMemoryHistory()

export default {
  title: 'Core/TaskCard',
  component: TaskCard,
  decorators: [
    Story => <div style={{ maxWidth: 800, margin: '0 auto' }} >{Story()}</div>,
    Story => <Provider store={store}>{Story()}</Provider>,
    Story => <Router history={history}>{Story()}</Router>
  ]
};

const Template = (args) => <TaskCard {...args} />

export const Primary = Template.bind({})
Primary.args = { 
		data: {
      id: 1,
		  userId: 2,
		  title: "Code is like humor. When you have to explain it, it’s bad.",
		  description: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
		  createdAt: 1623006733218,
    }
}