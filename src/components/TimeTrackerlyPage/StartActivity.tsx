import StartActivityTitle from '../../UI/TimeTrackerlyPage/StartActivityTitle';
import PlusButton from '../../UI/TimeTrackerlyPage/PlusButton';

function StartActivity() {
	return (
		<>
			<div className="flex mt-[45px] lg:mt-[90px] items-center justify-center">
				<StartActivityTitle></StartActivityTitle>
				<PlusButton></PlusButton>
			</div>
		</>
	);
}

export default StartActivity;
