function AboutCard(props: any) {
	return (
		<>
			<div
				className="bg-[#e6e6ed] lg:hover:bg-[#e6e6ed]/85 active:bg-[#e6e6ed]/85 grid w-[250px] h-auto lg:w-[330px] rounded-[12px] pt-[17px] pb-[17px] pl-[20px] pr-[20px] lg:pt-[21px] lg:pb-[21px] lg:pl-[25px] lg:pr-[25px] items-center cursor-pointer"
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
