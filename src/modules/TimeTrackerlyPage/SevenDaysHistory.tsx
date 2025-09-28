import HistoryTitle from '../../UI/HistoryTitle';
import HistoryBlock from '../../UI/HistoryBlock';

function SevenDaysHistory(props: any) {
	return (
		<>
			<div className="mt-[45px] lg:mt-[90px]">
				<HistoryTitle title={'7 days history'}></HistoryTitle>
				<HistoryBlock historytype={'seven'} activityData={props.activityData}></HistoryBlock>
			</div>
		</>
	);
}

export default SevenDaysHistory;
