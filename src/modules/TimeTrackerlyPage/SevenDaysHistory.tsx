import HistoryTitle from '../../UI/TimeTrackerlyPage/HistoryTitle';
import HistoryBlock from '../../UI/TimeTrackerlyPage/HistoryBlock';

function SevenDaysHistory() {
	return (
		<>
			<div className="mt-[45px] lg:mt-[90px]">
				<HistoryTitle></HistoryTitle>
				<HistoryBlock></HistoryBlock>
			</div>
		</>
	);
}

export default SevenDaysHistory;
