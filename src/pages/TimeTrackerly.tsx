import Navbar from '../modules/Navbar/Navbar';
import StartActivity from '../components/TimeTrackerlyPage/StartActivity';
import SevenDaysHistory from '../modules/TimeTrackerlyPage/SevenDaysHistory';
import Activity from '../modules/TimeTrackerlyPage/Activity';
import { useState, useEffect } from 'react';

function TimeTrackerly() {
	let [isActivityOpen, setIsActivityOpen] = useState(false);
	let [activityData, setActivityData] = useState<string[]>([]);

	useEffect(() => {
		let storedList = JSON.parse(localStorage.getItem('activityDataList') || '[]');
		if (storedList) {
			setActivityData(storedList);
		}
	}, []);

	return (
		<>
			<Navbar></Navbar>
			<StartActivity setIsActivityOpen={setIsActivityOpen} isActivityOpen={isActivityOpen}></StartActivity>
			<Activity
				isActivityOpen={isActivityOpen}
				setIsActivityOpen={setIsActivityOpen}
				activityData={activityData}
				setActivityData={setActivityData}
			></Activity>
			<SevenDaysHistory activityData={activityData}></SevenDaysHistory>
		</>
	);
}

export default TimeTrackerly;
