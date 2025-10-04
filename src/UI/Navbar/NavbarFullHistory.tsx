import { useNavigate } from 'react-router-dom';

function NavbarFullHistory() {
	const navigate = useNavigate();

	let handleClick = () => {
		navigate('/history');
	};

	return (
		<>
			<div
				className="text-xl lg:text-4xl mb-[4px] lg:mb-[0px] cursor-pointer w-fit lg:hover:underline active:underline underline-offset-3 text-black"
				onClick={handleClick}
			>
				Full History
			</div>
		</>
	);
}

export default NavbarFullHistory;
