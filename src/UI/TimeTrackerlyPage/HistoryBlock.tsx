function HistoryBlock() {
	return (
		<>
			<div className="text-base lg:text-2xl p-[12px] lg:p-[25px] bg-gradient-to-r from-[#7474BF]/20 to-[#348AC7]/20 rounded-[6px] lg:rounded-[12px] mt-[17px] lg:mt-[35px] max-w-[450px] lg:max-w-[900px] w-[90%] h-auto justify-self-center grid gap-[7px] lg:gap-[15px] mb-[30px] lg:mb-[50px]">
				<p className="font-bold">Today</p>
				<ul>
					<li>17:30 - 22:49 playing computer games</li>
					<li>08:00 - 10:00 breakfast</li>
				</ul>

				<p className="font-bold">Yesterday</p>
				<ul>
					<li>17:30 - 22:49 playing computer games</li>
					<li>08:00 - 10:00 breakfast</li>
					<li>07:00 - 08:00 sleeping</li>
				</ul>

				<p className="font-bold">23.09.2025</p>
				<ul>
					<li>17:30 - 22:49 playing computer games</li>
					<li>08:00 - 10:00 breakfast</li>
					<li>07:00 - 08:00 sleeping</li>
				</ul>
			</div>
		</>
	);
}

export default HistoryBlock;
