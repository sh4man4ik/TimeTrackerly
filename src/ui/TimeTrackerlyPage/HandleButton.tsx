function HandleButton(props: any) {
	return (
		<>
			<p className="font-medium font-bold w-[80%] max-w-[125px] lg:max-w-[250px] mt-[20px] lg:mt-[40px] bg-[#1A1A1A] lg:hover:bg-[#000000] active:bg-[#000000] rounded-[6px] lg:rounded-[12px] text-center justify-self-center text-[#F8F8FF] pt-[5px] pb-[5px] lg:pt-[10px] lg:pb-[10px] cursor-pointer">
				{props.text}
			</p>
		</>
	);
}

export default HandleButton;
