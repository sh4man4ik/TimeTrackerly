import StartActivityTitle from '../../UI/TimeTrackerlyPage/StartActivityTitle';
import PlusButton from '../../UI/TimeTrackerlyPage/PlusButton';

function StartActivity() {
	return (
		<>
			<div className="flex flex-wrap mt-[45px] lg:mt-[90px] items-center justify-center gap-[10px] lg:gap-[30px] ml-[20px] mr-[20px] text-center">
				<StartActivityTitle></StartActivityTitle>
				<PlusButton></PlusButton>
			</div>
		</>
	);
}

export default StartActivity;
