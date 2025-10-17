import CrossButton from '../../UI/CrossButton';
import EnterActivity from '../../UI/TimeTrackerlyPage/EnterActivity';
import SelectActivity from '../../UI/TimeTrackerlyPage/SelectActivity';
import Warn from '../../UI/Warn';
import HandleButton from '../../UI/TimeTrackerlyPage/HandleButton';
import Stopwatch from '../../UI/TimeTrackerlyPage/Stopwatch';
import AdBanner468x60 from '../Ads/AdBanner468x60';
import { useState, useEffect } from 'react';

function HandleActivity(props: any) {
	let [isFirstRender, setIsFirstRender] = useState(true);
	let [startDate, setStartDate] = useState('');
	let [isStarted, setIsStarted] = useState(false);
	let [isError, setIsError] = useState(2);
	let [enterActivityValue, setEnterActivityValue] = useState('');
	let [selectActivityValue, setSelectActivityValue] = useState('');
	let [zoom, setZoom] = useState(0);

	let clickStart = () => {
		setStartDate(new Date(Date.now() - 3000).toLocaleString('en-CA', { hour12: false }));

		if (enterActivityValue.trim() == '' && selectActivityValue.trim() == '') {
			setIsError(0);
		} else if (enterActivityValue.trim() != '' && selectActivityValue.trim() != '') {
			setIsError(1);
		} else {
			setIsError(2);
			setIsStarted(true);
		}
	};

	let closeActivity = () => {
		props.setIsActivityOpen(false);
	};

	let getWarnType = (isError: any) => {
		switch (isError) {
			case 0:
				return <Warn text="One of the activities must be selected"></Warn>;
			case 1:
				return <Warn text="Two activities cannot be selected"></Warn>;
			case 2:
				return <div></div>;
		}
	};

	useEffect(() => {
		setZoom(window.innerWidth < 1024 ? 0.3 : 1);
	}, []);

	useEffect(() => {
		if (isFirstRender) {
			setIsFirstRender(false);
		} else {
			localStorage.setItem('activityDataList', JSON.stringify(props.activityData));
			props.setIsActivityOpen(false);
		}
	}, [props.activityData]);

	let setActivityString = () => {
		let finishDate = new Date(Date.now() - 3000).toLocaleString('en-CA', { hour12: false });
		let activity = enterActivityValue || selectActivityValue;

		let activityString = startDate;

		if (startDate.slice(0, 9) == finishDate.slice(0, 9)) {
			activityString += ' — ' + finishDate.slice(12);
		} else {
			activityString += ' — ' + finishDate;
		}

		activityString += ' ' + activity;

		props.setActivityData((a: any) => [activityString, ...a]);
	};

	return (
		<>
			<div className="flex items-center justify-between p-[15px] lg:p-[30px] relative flex items-center justify-center">
				{isStarted === false ? (
					<div>
						<div className="justify-self-center">
							<EnterActivity
								enterActivityValue={enterActivityValue}
								setEnterActivityValue={setEnterActivityValue}
								setIsError={setIsError}
							></EnterActivity>
							<p className="text-xl lg:text-4xl text-center mt-[20px] lg:mt-[40px] mb-[20px] lg:mb-[40px]">
								or
							</p>
							<SelectActivity
								setSelectActivityValue={setSelectActivityValue}
								setIsError={setIsError}
							></SelectActivity>
							<div>{getWarnType(isError)}</div>
							<div onClick={clickStart} className="w-auto">
								<HandleButton text="START"></HandleButton>
							</div>
						</div>
						<div className="absolute top-[10px] right-[10px] lg:top-[20px] lg:right-[20px]">
							<div onClick={closeActivity}>
								<CrossButton></CrossButton>
							</div>
						</div>
					</div>
				) : (
					<div className="w-full h-full">
						<Stopwatch isStarted={isStarted}></Stopwatch>
						<div className="mt-[5px]">
							<div style={{ zoom: zoom }}>
								<AdBanner468x60></AdBanner468x60>
							</div>
						</div>
						<div onClick={setActivityString}>
							<HandleButton text="STOP"></HandleButton>
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default HandleActivity;
