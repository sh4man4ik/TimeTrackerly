import CrossButton from '../../UI/CrossButton';
import EnterActivity from '../../UI/TimeTrackerlyPage/EnterActivity';
import SelectActivity from '../../UI/TimeTrackerlyPage/SelectActivity';
import Warn from '../../UI/TimeTrackerlyPage/Warn';
import HandleButton from '../../UI/TimeTrackerlyPage/HandleButton';

function HandleActivity() {
	return (
		<>
			<div className="flex items-center justify-between p-[10px] lg:p-[30px] relative flex items-center justify-center">
				<div className="justify-self-center">
					<EnterActivity></EnterActivity>
					<p className="text-xl lg:text-4xl text-center mt-[20px] lg:mt-[40px] mb-[20px] lg:mb-[40px]">or</p>
					<SelectActivity></SelectActivity>
					<Warn></Warn>
					<HandleButton text="START"></HandleButton>
				</div>
				<div className="absolute top-[10px] right-[10px] lg:top-[20px] lg:right-[20px]">
					<CrossButton></CrossButton>
				</div>
			</div>
		</>
	);
}

export default HandleActivity;
