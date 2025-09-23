import Navbar from '../modules/Navbar/Navbar';
import StartActivity from '../components/TimeTrackerlyPage/StartActivity';
import SevenDaysHistory from '../modules/TimeTrackerlyPage/SevenDaysHistory';

function TimeTrackerly() {
	return (
		<>
			<Navbar></Navbar>
			<StartActivity></StartActivity>
			<SevenDaysHistory></SevenDaysHistory>
		</>
	);
}

export default TimeTrackerly;
