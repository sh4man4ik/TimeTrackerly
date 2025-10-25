function AboutCard(props: any) {
	return (
		<>
			<div
				className="bg-gradient-to-r from-[#7474BF]/20 to-[#348AC7]/20 lg:hover:from-[#6b6bb0]/22 lg:hover:to-[#3180b0]/22 active:from-[#6b6bb0]/22 active:to-[#3180b0]/22 grid w-[250px] h-auto lg:w-[330px] rounded-[12px] pt-[17px] pb-[17px] pl-[20px] pr-[20px] lg:pt-[21px] lg:pb-[21px] lg:pl-[25px] lg:pr-[25px] items-center cursor-pointer"
				onClick={props.cardFunction}
			>
				<div className="grid">
					<i className={`${props.logo} text-[30px] lg:text-[46px]`}></i>
					<p className="font-small">{props.text}</p>
				</div>
			</div>
		</>
	);
}

export default AboutCard;
