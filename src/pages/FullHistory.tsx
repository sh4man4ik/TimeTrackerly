import Navbar from '../modules/Navbar/Navbar';
import FullHistoryBlock from '../modules/FullHistoryPage/FullHistoryBlock';
import NativeBanner3 from '../components/Ads/NativeBanner3';
import AdBanner300x250 from '../components/Ads/AdBanner300x250';
import { useState, useEffect } from 'react';

function FullHistory() {
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
			<FullHistoryBlock activityData={activityData}></FullHistoryBlock>
			<div
				className={`lg:block hidden mt-[45px] lg:mt-[90px] mb-[30px] lg:mb-[50px] justify-self-center`}
				style={{ width: adWidth }}
			>
				<NativeBanner3></NativeBanner3>
			</div>
			<div className="lg:hidden block mt-[45px] lg:mt-[90px] mb-[30px] lg:mb-[50px] justify-self-center">
				<div style={{ zoom: 0.65 }}>
					<AdBanner300x250></AdBanner300x250>
				</div>
			</div>
		</>
	);
}

export default FullHistory;
