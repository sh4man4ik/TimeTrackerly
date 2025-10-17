import { useEffect, useRef } from 'react';

function AdBanner300x250() {
	let adRef: any = useRef(null);

	useEffect(() => {
		// @ts-ignore
		window.atOptions = {
			key: '852f411eadda91aae48e3b73fefdd49c',
			format: 'iframe',
			height: 250,
			width: 300,
			params: {}
		};

		let script = document.createElement('script');
		script.src = '//www.highperformanceformat.com/852f411eadda91aae48e3b73fefdd49c/invoke.js';

		adRef.current.appendChild(script);
	}, []);

	return (
		<>
			<div className="lg:p-[15px] p-[7px] lg:pt-[0px] pt-[0px] justify-self-center bg-gradient-to-r from-[#7474BF]/20 to-[#348AC7]/20 rounded-[6px] lg:rounded-[12px]">
				<p className="lg:pt-[10px] pt-[3px] text-base lg:text-2xl">Ad</p>
				<div ref={adRef}></div>
			</div>
		</>
	);
}

export default AdBanner300x250;
