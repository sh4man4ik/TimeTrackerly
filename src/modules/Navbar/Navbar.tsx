import { useState } from 'react';
import NavbarTitle from '../../UI/Navbar/NavbarTitle';
import NavbarItems from '../../components/Navbar/NavbarItems';
import NavbarButton from '../../UI/Navbar/NavbarButton';

function Navbar(props: any) {
	const [isOpen, setIsOpen] = useState(false);

	let handleClick = () => {
		if (props.isActivityOpen == false) {
			setIsOpen(!isOpen);
		}
	};

	return (
		<>
			<div className="bg-[#f8f8ff] flex flex-wrap items-center justify-between mx-auto pt-[14px] pb-[14px] pl-[19px] pr-[19px] lg:pt-[28px] lg:pb-[28px] lg:pl-[38px] lg:pr-[38px] shadow-lg/4">
				<NavbarTitle></NavbarTitle>

				<div onClick={handleClick}>
					<NavbarButton isActivityOpen={props.isActivityOpen}></NavbarButton>
				</div>

				<div className={`${isOpen ? 'block' : 'hidden'} w-full lg:block lg:w-auto`}>
					<div className="flex flex-col mt-[8px] lg:mt-[0px] lg:flex-row">
						<NavbarItems></NavbarItems>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
