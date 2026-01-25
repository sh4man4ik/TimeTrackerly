function SmallCrossButton() {
	return (
		<>
			<button className="bg-[#1A1A1A] lg:hover:bg-[#000000] active:bg-[#000000] rounded-[6px] lg:rounded-[12px] font-small font-bold text-[#F8F8FF] flex items-center justify-center pb-[2px] lg:pb-[3.5x] cursor-pointer size-[18px] lg:size-[36px]">
				{'\u00D7'}
			</button>
		</>
	);
}

export default SmallCrossButton;
