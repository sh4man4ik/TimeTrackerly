import { useNavigate } from 'react-router-dom';

function NavbarTitle() {
	const navigate = useNavigate();

	let handleClick = () => {
		navigate('/');
	};
	return (
		<>
			<p
				className="text-xl lg:text-4xl font-bold cursor-pointer lg:hover:underline active:underline underline-offset-3 text-black"
				onClick={handleClick}
			>
				TimeTrackerly
			</p>
		</>
	);
}

export default NavbarTitle;
