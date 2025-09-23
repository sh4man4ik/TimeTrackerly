function EnterActivity() {
	return (
		<>
			<div className="grid text-xl lg:text-4xl">
				<p className="pb-[6px] lg:pb-[12px]">Enter activity</p>
				<input
					type="text"
					className="rounded-[6px] lg:rounded-[12px] bg-gradient-to-r from-[#7474BF]/80 to-[#348AC7]/80 p-[2px] lg:p-[8px] pl-[8px] lg:pl-[16px] w-[100%] max-w-[500px] focus:outline-none focus:from-[#6b6bb0]/80 focus:to-[#3180b0]/80 text-[#F8F8FF]"
					maxLength={100}
					placeholder="Go to training..."
				/>
			</div>
		</>
	);
}

export default EnterActivity;
