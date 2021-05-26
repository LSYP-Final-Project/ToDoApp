import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import TaskView from "./modules/tasks/containers/TaskView";
import DetailsTask from './modules/tasks/components/DetailsTask';
import { Route, Switch } from 'react-router';

function App() {
	return (
		<div className="App">
			<Switch>
              <Route exact path="/tasks/" component={TaskView} />
              <Route exact path="/tasks/:task_id/" component={DetailsTask} />
         </Switch>
		</div>
	);
}

export default App;
