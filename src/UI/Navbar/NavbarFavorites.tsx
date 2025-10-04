import { useNavigate } from 'react-router-dom';

function NavbarFavorites() {
	const navigate = useNavigate();

	let handleClick = () => {
		navigate('/favorites');
	};

	return (
		<>
			<div
				className="text-xl lg:text-4xl cursor-pointer w-fit lg:hover:underline active:underline underline-offset-3 text-black"
				onClick={handleClick}
			>
				Favorites
			</div>
		</>
	);
}

export default NavbarFavorites;
