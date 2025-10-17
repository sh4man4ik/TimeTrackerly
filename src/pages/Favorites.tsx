import Navbar from '../modules/Navbar/Navbar';
import FavoritesBlock from '../modules/FavoritesPage/FavoritesBlock';
import NativeBanner3 from '../components/Ads/NativeBanner3';
import AdBanner300x250 from '../components/Ads/AdBanner300x250';
import { useEffect, useState } from 'react';

function Favorites() {
	let [adWidth, setAdWidth] = useState(0);

	useEffect(() => {
		setAdWidth(700);
	}, []);

	return (
		<>
			<Navbar></Navbar>
			<FavoritesBlock></FavoritesBlock>
			<div className={`lg:block hidden mb-[30px] lg:mb-[50px] justify-self-center`} style={{ width: adWidth }}>
				<NativeBanner3></NativeBanner3>
			</div>
			<div className="lg:hidden block mt-[45px] lg:mt-[90px] mb-[30px] lg:mb-[50px] justify-self-center">
				<div style={{ zoom: 0.65 }}>
					<AdBanner300x250></AdBanner300x250>
				</div>
			</div>
		</>
	);
}

export default Favorites;
