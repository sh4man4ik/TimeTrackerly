import PlusButton from '../PlusButton';

function EnterFavoriteActivity() {
	return (
		<>
			<div className="grid text-xl lg:text-4xl justify-self-center mt-[45px] lg:mt-[90px] w-[80%] max-w-[400px] lg:w-[100%] lg:max-w-[700px]">
				<p className="text-left pb-[6px] lg:pb-[12px]">Enter activity</p>
				<div className="relative">
					<input
						type="text"
						className="rounded-[6px] lg:rounded-[12px] bg-gradient-to-r from-[#7474BF]/20 to-[#348AC7]/20 p-[2px] lg:p-[8px] pl-[8px] lg:pl-[16px] pr-[43px] lg:pr-[86px] w-[100%] outline-none hover:from-[#6b6bb0]/20 hover:to-[#3180b0]/20 text-[black] placeholder-[#6B7280] h-[35px] lg:h-[70px]"
						maxLength={50}
						placeholder="Go to training..."
					/>
					<div className="absolute inset-y-0 right-0 flex items-center">
						<PlusButton></PlusButton>
					</div>
				</div>
			</div>
		</>
	);
}

export default EnterFavoriteActivity;
