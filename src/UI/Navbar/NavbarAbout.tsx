import { useNavigate } from 'react-router-dom';

function NavbarAbout() {
	const navigate = useNavigate();

	let handleClick = () => {
		navigate('/about');
	};

	return (
		<>
			<div
				className="text-xl lg:text-4xl mb-1 lg:mb-0 cursor-pointer w-fit hover:underline hover:underline-offset-3"
				onClick={handleClick}
			>
				About
			</div>
		</>
	);
}

export default NavbarAbout;
