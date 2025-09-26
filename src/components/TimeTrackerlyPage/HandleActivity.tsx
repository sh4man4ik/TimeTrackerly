import CrossButton from '../../UI/CrossButton';
import EnterActivity from '../../UI/TimeTrackerlyPage/EnterActivity';
import SelectActivity from '../../UI/TimeTrackerlyPage/SelectActivity';
import Warn from '../../UI/Warn';
import HandleButton from '../../UI/TimeTrackerlyPage/HandleButton';
import Stopwatch from '../../UI/TimeTrackerlyPage/Stopwatch';
import { useState } from 'react';

function HandleActivity(props: any) {
	let [isStarted, setIsStarted] = useState(false);
	let [isError, setIsError] = useState(2);
	let [enterActivityValue, setEnterActivityValue] = useState('');
	let [selectActivityValue, setSelectActivityValue] = useState('');

	let clickStart = () => {
		if (enterActivityValue == '' && selectActivityValue == '') {
			setIsError(0);
		} else if (enterActivityValue != '' && selectActivityValue != '') {
			setIsError(1);
		} else {
			setIsError(2);
			setIsStarted(true);
		}
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

	let closeActivity = () => {
		props.setIsActivityOpen(false);
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
							></EnterActivity>
							<p className="text-xl lg:text-4xl text-center mt-[20px] lg:mt-[40px] mb-[20px] lg:mb-[40px]">
								or
							</p>
							<SelectActivity setSelectActivityValue={setSelectActivityValue}></SelectActivity>
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
						<Stopwatch isStarted={props.isStarted}></Stopwatch>
						<div onClick={closeActivity}>
							<HandleButton text="STOP"></HandleButton>
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default HandleActivity;
