import HandleActivity from '../../components/TimeTrackerlyPage/HandleActivity';

function Activity(props: any) {
	return (
		<>
			{props.isActivityOpen == true ? (
				<div className="bg-[#E0E0F0]/60 w-[80%] max-w-[350px] lg:max-w-[1000px] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-[6px] lg:rounded-[12px] backdrop-blur-lg">
					<HandleActivity setIsActivityOpen={props.setIsActivityOpen}></HandleActivity>
				</div>
			) : (
				<div></div>
			)}
		</>
	);
}

export default Activity;
