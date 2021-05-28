import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { UsersView } from "./users-section/containers/UsersView";
import ExampleServices from "./ExampleServices";
import NavBar from "./core/components/index";
import TaskView from "./modules/tasks/containers/TaskView";
import DetailsTask from "./modules/tasks/components/DetailsTask";
import { Route, Switch } from "react-router";

function App() {
	return (
		<>
			{/* <ExampleServices/> */}
			<NavBar />
			<div className="container">
				<div className="row">
					<div className="col">
						<Switch>
							<Route exact path="/" component={UsersView} />
							<Route exact path="/tasks/" component={TaskView} />
							<Route exact path="/tasks/:task_id/" component={DetailsTask} />
						</Switch>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
