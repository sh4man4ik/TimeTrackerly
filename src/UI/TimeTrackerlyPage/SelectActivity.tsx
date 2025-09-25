function SelectActivity() {
	return (
		<>
			<div className="grid text-xl lg:text-4xl">
				<p className="pb-[6px] lg:pb-[12px]">Select activity</p>

				<select className="appearance-none rounded-[6px] lg:rounded-[12px] bg-gradient-to-r from-[#7474BF] to-[#348AC7] w-[100%] lg:max-w-[500px] p-[2px] lg:p-[8px] pl-[8px] lg:pl-[16px] pr-[8px] lg:pr-[16px] truncate outline-none hover:from-[#6b6bb0] focus:to-[#3180b0] text-[#F8F8FF] cursor-pointer">
					<option value="" disabled selected>
						Select activity...
					</option>
					<option value="" className="text-[black]">
						Go to training fydgfgdbdfbdfdfdvffdvdvdfvdfvfdfd;v;df;vfdfd;fdb;fgb;gfb;f;gpb
					</option>
					<option value="" className="text-[black]">
						Eat
					</option>
					<option value="" className="text-[black]">
						Sleepg
					</option>
				</select>
			</div>
		</>
	);
}

export default SelectActivity;
