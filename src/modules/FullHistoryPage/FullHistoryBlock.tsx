import HistoryTitle from '../../UI/HistoryTitle';
import HistoryBlock from '../../UI/HistoryBlock';

function FullHistoryBlock(props: any) {
	return (
		<>
			<div className="mt-[45px] lg:mt-[90px]">
				<HistoryTitle title={'Full history'}></HistoryTitle>
				<HistoryBlock historytype={'full'} activityData={props.activityData}></HistoryBlock>
			</div>
		</>
	);
}

export default FullHistoryBlock;
