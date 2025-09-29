function HistoryBlock(props: any) {
	return (
		<>
			<div className="text-base lg:text-2xl p-[12px] lg:p-[25px] bg-gradient-to-r from-[#7474BF]/20 to-[#348AC7]/20 rounded-[6px] lg:rounded-[12px] mt-[17px] lg:mt-[35px] max-w-[450px] lg:max-w-[900px] w-[90%] h-auto justify-self-center grid gap-[7px] lg:gap-[15px] mb-[30px] lg:mb-[50px]">
				{props.activityData.length !== 0 ? (
					<>
						{props.activityData.map((activity: any, index: any) => (
							<div key={index}>
								<p>{activity.trim()}</p>
							</div>
						))}

						{props.historytype == 'full' ? (
							<div className="grid gap-[7px] lg:gap-[15px]">
								<p className="font-bold">full...</p>
							</div>
						) : (
							<></>
						)}
					</>
				) : (
					<p>The list is empty :(</p>
				)}
			</div>
		</>
	);
}

export default HistoryBlock;
