import CrossButton from '../../UI/CrossButton';
import EnterActivity from '../../UI/TimeTrackerlyPage/EnterActivity';
import SelectActivity from '../../UI/TimeTrackerlyPage/SelectActivity';
import Warn from '../../UI/TimeTrackerlyPage/Warn';
import HandleButton from '../../UI/TimeTrackerlyPage/HandleButton';
import Timer from '../../UI/TimeTrackerlyPage/Timer';
import { useState } from 'react';

function HandleActivity(props: any) {
	let [isStarted, setIsStarted] = useState(false);

	let clickStart = () => {
		setIsStarted(true);
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
							<EnterActivity></EnterActivity>
							<p className="text-xl lg:text-4xl text-center mt-[20px] lg:mt-[40px] mb-[20px] lg:mb-[40px]">
								or
							</p>
							<SelectActivity></SelectActivity>
							<Warn></Warn>
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
						<Timer></Timer>
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
