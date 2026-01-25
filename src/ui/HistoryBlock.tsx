import { useState, useEffect } from 'react';

function HistoryBlock(props: any) {
	let [newActivityDataList, setNewActivityDataList] = useState<string[]>([]);

	let setActivityList = () => {
		//seven or full
		if (props.historytype === 'full') {
			setNewActivityDataList(props.activityData);
		} else {
			if (props.activityData[0]) {
				let dateNow = new Date();
				let formatDateNow = Date.parse(dateNow.toISOString().split('T')[0]);

				let newActivityDataList = props.activityData.filter((activity: any) => {
					let activityDate = Date.parse(activity.slice(0, 10));

					return formatDateNow - activityDate < 604800000; //604800000 seven days in ms
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
			<div className="bg-[#e6e6ed] font-small p-[12px] lg:p-[25px] rounded-[6px] lg:rounded-[12px] mt-[17px] lg:mt-[35px] max-w-[450px] lg:max-w-[900px] w-[90%] h-auto justify-self-center grid gap-[7px] lg:gap-[15px] mb-[30px] lg:mb-[50px]">
				{newActivityDataList.length !== 0 ? (
					<>
						{newActivityDataList.map((activity: any, index: any) => (
							<div key={index}>
								<p className="wrap-anywhere">{activity.trim()}</p>
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
