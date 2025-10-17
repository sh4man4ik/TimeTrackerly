import Navbar from '../modules/Navbar/Navbar';
import StartActivity from '../components/TimeTrackerlyPage/StartActivity';
import SevenDaysHistory from '../modules/TimeTrackerlyPage/SevenDaysHistory';
import Activity from '../modules/TimeTrackerlyPage/Activity';
import NativeBanner3 from '../components/Ads/NativeBanner3';
import AdBanner300x250 from '../components/Ads/AdBanner300x250';
import { useState, useEffect } from 'react';

function TimeTrackerly() {
	let [isActivityOpen, setIsActivityOpen] = useState(false);
	let [activityData, setActivityData] = useState<string[]>([]);
	let [adWidth, setAdWidth] = useState(0);

	useEffect(() => {
		setAdWidth(900);
	}, []);

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
			<div className={`lg:block hidden mb-[30px] lg:mb-[50px] w-[${adWidth}px] justify-self-center`}>
				<NativeBanner3></NativeBanner3>
			</div>
			<div className="lg:hidden block mt-[45px] lg:mt-[90px] mb-[30px] lg:mb-[50px] justify-self-center">
				<div style={{ zoom: 0.6 }}>
					<AdBanner300x250></AdBanner300x250>
				</div>
			</div>
		</>
	);
}

export default TimeTrackerly;
