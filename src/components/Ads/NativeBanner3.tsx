import { useEffect, useRef } from 'react';

function NativeBanner3() {
	let adRef: any = useRef(null);

	useEffect(() => {
		let script = document.createElement('script');
		script.src = '//pl27864720.effectivegatecpm.com/46eeb8b2539f50fc4111527a8b597d20/invoke.js';

		adRef.current.appendChild(script);
	}, []);

	return (
		<>
			<div className="lg:p-[15px] p-[7px] lg:pt-[0px] pt-[0px] lg:pb-[0px] pb-[0px] justify-self-center mt-[45px] lg:mt-[90px] bg-gradient-to-r from-[#7474BF]/20 to-[#348AC7]/20 rounded-[6px] lg:rounded-[12px]">
				<p className="lg:pt-[10px] pt-[3px] text-base lg:text-2xl">Ad</p>
				<div ref={adRef} id="container-46eeb8b2539f50fc4111527a8b597d20"></div>
			</div>
		</>
	);
}

export default NativeBanner3;
