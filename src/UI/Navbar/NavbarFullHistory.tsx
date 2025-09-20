import { useNavigate } from 'react-router-dom';

function NavbarFullHisotry() {
	const navigate = useNavigate();

	let handleClick = () => {
		navigate('/fullhistory');
	};

	return (
		<>
			<div
				className="text-xl lg:text-4xl mb-1 lg:mb-0 cursor-pointer w-fit hover:underline hover:underline-offset-3"
				onClick={handleClick}
			>
				Full hisotry
			</div>
		</>
	);
}

export default NavbarFullHisotry;
