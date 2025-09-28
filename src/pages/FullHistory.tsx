import Navbar from '../modules/Navbar/Navbar';
import FullHistoryBlock from '../modules/FullHistoryPage/FullHistoryBlock';
import { useState, useEffect } from 'react';

function FullHistory() {
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
			<FullHistoryBlock activityData={activityData}></FullHistoryBlock>
		</>
	);
}

export default FullHistory;
