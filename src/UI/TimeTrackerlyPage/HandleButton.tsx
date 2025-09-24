function HandleButton(props: any) {
	return (
		<>
			<p className="text-xl lg:text-4xl font-bold w-[80%] max-w-[125px] lg:max-w-[250px] mt-[20px] lg:mt-[40px] bg-gradient-to-r from-[#7474BF] to-[#348AC7] hover:from-[#6b6bb0] hover:to-[#3180b0] rounded-[6px] lg:rounded-[12px] text-center justify-self-center text-[#F8F8FF] pt-[5px] pb-[5px] lg:pt-[10px] lg:pb-[10px] cursor-pointer">
				{props.text}
			</p>
		</>
	);
}

export default HandleButton;
