import HandleActivity from '../../components/TimeTrackerlyPage/HandleActivity';

function Activity(props: any) {
	return (
		<>
			{props.isActivityOpen == true ? (
				<div className="bg-gradient-to-r from-[#7474BF]/20 to-[#348AC7]/20 w-[80%] max-w-[350px] lg:max-w-[1000px] h-auto rounded-[6px] lg:rounded-[12px] justify-self-center mt-[45px] lg:mt-[90px]">
					<HandleActivity
						setIsActivityOpen={props.setIsActivityOpen}
						isActivityOpen={props.isActivityOpen}
						activityData={props.activityData}
						setActivityData={props.setActivityData}
					></HandleActivity>
				</div>
			) : (
				<div></div>
			)}
		</>
	);
}

export default Activity;
