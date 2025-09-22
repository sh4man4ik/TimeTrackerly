import { useNavigate } from 'react-router-dom';

function NavbarAbout() {
	const navigate = useNavigate();

	let handleClick = () => {
		navigate('/about');
	};

	return (
		<>
			<div
				className="text-xl lg:text-4xl mb-[4px] lg:mb-[0px] cursor-pointer w-fit hover:underline hover:underline-offset-3 text-black"
				onClick={handleClick}
			>
				About
			</div>
		</>
	);
}

export default NavbarAbout;
