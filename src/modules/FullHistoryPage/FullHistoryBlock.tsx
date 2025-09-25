import HistoryTitle from '../../UI/HistoryTitle';
import HistoryBlock from '../../UI/HistoryBlock';

function FullHistoryBlock() {
	return (
		<>
			<div className="mt-[45px] lg:mt-[90px]">
				<HistoryTitle title={'Full history'}></HistoryTitle>
				<HistoryBlock historytype={'full'}></HistoryBlock>
			</div>
		</>
	);
}

export default FullHistoryBlock;
