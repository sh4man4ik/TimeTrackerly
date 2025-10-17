import { useEffect, useRef } from 'react';

function AdBanner468x60() {
	let adRef: any = useRef(null);

	useEffect(() => {
		// @ts-ignore
		window.atOptions = {
			key: 'ff9c2fa8d89ec239f20dae6be8a201de',
			format: 'iframe',
			height: 60,
			width: 468,
			params: {}
		};

		let script = document.createElement('script');
		script.src = '//www.highperformanceformat.com/ff9c2fa8d89ec239f20dae6be8a201de/invoke.js';

		adRef.current.appendChild(script);
	}, []);

	return (
		<>
			<div className="justify-self-center mb-[40px]">
				<p className="lg:pt-[10px] pt-[3px] text-base lg:text-2xl">Ad</p>
				<div ref={adRef}></div>
			</div>
		</>
	);
}

export default AdBanner468x60;
