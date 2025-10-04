import { useState, useEffect } from 'react';

function HistoryBlock(props: any) {
	let [newActivityDataList, setNewActivityDataList] = useState<string[]>([]);

	let setActivityList = () => {
		//seven or full
		if (props.historytype === 'full') {
			setNewActivityDataList(props.activityData);
		} else {
			if (props.activityData[0]) {
				let lastActivityElement = props.activityData[0].slice(0, 10);
				let lastActivityDate = Date.parse(lastActivityElement);

				let newActivityDataList = props.activityData.filter((activity: any) => {
					let activityDate = Date.parse(activity.slice(0, 10));

					return lastActivityDate - activityDate < 604800000; //604800000 seven days in ms
				});

				setNewActivityDataList(newActivityDataList);
			}
		}
	};

	useEffect(() => {
		setActivityList();
	}, [props.activityData]);

	return (
		<>
			<div className="text-base lg:text-2xl p-[12px] lg:p-[25px] bg-gradient-to-r from-[#7474BF]/20 to-[#348AC7]/20 rounded-[6px] lg:rounded-[12px] mt-[17px] lg:mt-[35px] max-w-[450px] lg:max-w-[900px] w-[90%] h-auto justify-self-center grid gap-[7px] lg:gap-[15px] mb-[30px] lg:mb-[50px]">
				{newActivityDataList.length !== 0 ? (
					<>
						{newActivityDataList.map((activity: any, index: any) => (
							<div key={index}>
								<p>{activity.trim()}</p>
							</div>
						))}
					</>
				) : (
					<p>The list is empty :(</p>
				)}
			</div>
		</>
	);
}

export default HistoryBlock;
