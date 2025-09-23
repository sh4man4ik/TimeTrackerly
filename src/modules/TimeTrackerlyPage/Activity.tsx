import HandleActivity from '../../components/TimeTrackerlyPage/HandleActivity';

function Activity() {
	return (
		<>
			<div className="bg-[#F8F8FF]/20 w-[80%] max-w-[350px] lg:max-w-[1000px] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-[6px] lg:rounded-[12px] backdrop-blur-lg border-[2px] lg:border-[5px]">
				<HandleActivity></HandleActivity>
			</div>
		</>
	);
}

export default Activity;
