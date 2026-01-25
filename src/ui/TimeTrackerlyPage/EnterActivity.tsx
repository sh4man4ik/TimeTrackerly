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
					className="rounded-[6px] lg:rounded-[12px] bg-[#d5d5db] lg:hover:bg-[#d2d2d9] p-[2px] lg:p-[4px] pl-[8px] lg:pl-[16px] pr-[8px] lg:pr-[16px] w-[100%] max-w-[500px] outline-none text-[#1A1A1A] placeholder-[#8a8a8a]"
					maxLength={100}
					placeholder="Go to training..."
				/>
			</div>
		</>
	);
}

export default EnterActivity;
