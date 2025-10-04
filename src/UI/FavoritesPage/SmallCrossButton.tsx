function SmallCrossButton() {
	return (
		<>
			<button className="bg-gradient-to-r from-[#7474BF] to-[#348AC7] lg:hover:from-[#6b6bb0] lg:hover:to-[#3180b0] active:from-[#6b6bb0] active:to-[#3180b0] rounded-[6px] lg:rounded-[12px] text-base lg:text-2xl font-bold text-[#F8F8FF] flex items-center justify-center pb-[2px] lg:pb-[3.5x] cursor-pointer size-[18px] lg:size-[36px]">
				{'\u00D7'}
			</button>
		</>
	);
}

export default SmallCrossButton;
