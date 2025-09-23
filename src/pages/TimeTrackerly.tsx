import Navbar from '../modules/Navbar/Navbar';
import StartActivity from '../components/TimeTrackerlyPage/StartActivity';
import SevenDaysHistory from '../modules/TimeTrackerlyPage/SevenDaysHistory';
import Activity from '../modules/TimeTrackerlyPage/Activity';

function TimeTrackerly() {
	return (
		<>
			<Navbar></Navbar>
			<StartActivity></StartActivity>
			<SevenDaysHistory></SevenDaysHistory>
			<Activity></Activity>
		</>
	);
}

export default TimeTrackerly;
