import StartActivityTitle from '../../ui/TimeTrackerlyPage/StartActivityTitle';
import PlusButton from '../../ui/PlusButton';

function StartActivity(props: any) {
	let openActivity = () => {
		if (props.isActivityOpen == false) {
			props.setIsActivityOpen(true);
		}
	};

	return (
		<>
			<div className="flex flex-wrap mt-[45px] lg:mt-[90px] items-center justify-center gap-[10px] lg:gap-[30px] ml-[20px] mr-[20px] text-center">
				<StartActivityTitle></StartActivityTitle>
				<div onClick={openActivity}>
					<PlusButton></PlusButton>
				</div>
			</div>
		</>
	);
}

export default StartActivity;
