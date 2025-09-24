import HandleActivity from '../../components/TimeTrackerlyPage/HandleActivity';

function Activity(props: any) {
	return (
		<>
			{props.isActivityOpen == true ? (
				<div className="bg-[#C8C8D8]/35 w-[80%] max-w-[350px] lg:max-w-[1000px] h-auto rounded-[6px] lg:rounded-[12px] justify-self-center mt-[45px] lg:mt-[90px]">
					<HandleActivity
						setIsActivityOpen={props.setIsActivityOpen}
						isActivityOpen={props.isActivityOpen}
					></HandleActivity>
				</div>
			) : (
				<div></div>
			)}
		</>
	);
}

export default Activity;
