function SelectActivity() {
	return (
		<>
			<div className="grid text-xl lg:text-4xl">
				<p className="pb-[6px] lg:pb-[12px]">Select activity</p>

				<select className="appearance-none rounded-[6px] lg:rounded-[12px] bg-gradient-to-r from-[#7474BF]/80 to-[#348AC7]/80 w-[100%] lg:max-w-[500px] p-[2px] lg:p-[8px] pl-[8px] lg:pl-[16px] truncate focus:outline-none focus:from-[#6b6bb0]/80 focus:to-[#3180b0]/80 text-[#F8F8FF]">
					<option value="" disabled selected>
						Select activity...
					</option>
					<option value="">
						Go to training fdgfgdbdfbdfdfdvffdvdvdfvdfvfdfd;v;df;vfdfd;fdb;fgb;gfb;f;gpb
					</option>
					<option value="">Eat</option>
					<option value="">Sleep</option>
				</select>
			</div>
		</>
	);
}

export default SelectActivity;
