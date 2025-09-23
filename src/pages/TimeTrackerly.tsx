import Navbar from '../modules/Navbar/Navbar';
import StartActivity from '../components/TimeTrackerlyPage/StartActivity';
import SevenDaysHistory from '../modules/TimeTrackerlyPage/SevenDaysHistory';
import Activity from '../modules/TimeTrackerlyPage/Activity';
import { useState } from 'react';

function TimeTrackerly() {
	let [isActivityOpen, setIsActivityOpen] = useState(false);

	return (
		<>
			<Navbar></Navbar>
			<StartActivity setIsActivityOpen={setIsActivityOpen}></StartActivity>
			<Activity isActivityOpen={isActivityOpen} setIsActivityOpen={setIsActivityOpen}></Activity>
			<SevenDaysHistory></SevenDaysHistory>
		</>
	);
}

export default TimeTrackerly;
