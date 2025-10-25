function EnterActivity(props: any) {
	let handleOnChange = (e: any) => {
		props.setIsError(2);
		props.setEnterActivityValue(e.target.value);
	};

	return (
		<>
			<div className="grid font-medium">
				<p className="pb-[6px] lg:pb-[12px]">Enter activity</p>
				<input
					type="text"
					onChange={(e) => handleOnChange(e)}
					className="rounded-[6px] lg:rounded-[12px] bg-gradient-to-r from-[#7474BF] to-[#348AC7] p-[2px] lg:p-[4px] pl-[8px] lg:pl-[16px] pr-[8px] lg:pr-[16px] w-[100%] max-w-[500px] outline-none lg:hover:from-[#6b6bb0] lg:hover:to-[#3180b0] focus:from-[#6b6bb0] focus:to-[#3180b0] text-[#F8F8FF] placeholder-[#D1D5DB]"
					maxLength={100}
					placeholder="Go to training..."
				/>
			</div>
		</>
	);
}

export default EnterActivity;
