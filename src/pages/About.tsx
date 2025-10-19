import Navbar from '../modules/Navbar/Navbar';
import AboutTitle from '../ui/AboutPage/AboutTitle';
import Cards from '../modules/AboutPage/Cards';
import NativeBanner3 from '../components/Ads/NativeBanner3';
import AdBanner300x250 from '../components/Ads/AdBanner300x250';
import { useEffect, useState } from 'react';

function About() {
	let [adWidth, setAdWidth] = useState(0);

	useEffect(() => {
		setAdWidth(710);
	}, []);

	return (
		<>
			<Navbar></Navbar>
			<AboutTitle></AboutTitle>
			<Cards></Cards>
			<div className={`lg:block hidden mb-[30px] lg:mb-[50px] justify-self-center`} style={{ width: adWidth }}>
				<NativeBanner3></NativeBanner3>
			</div>
			<div className="lg:hidden block mb-[30px] mt-[45px] lg:mt-[90px] lg:mb-[50px] justify-self-center">
				<div style={{ zoom: 0.65 }}>
					<AdBanner300x250></AdBanner300x250>
				</div>
			</div>
		</>
	);
}

export default About;
