import { useState } from 'react';

function NavbarButton() {
	const [isOpen, setIsOpen] = useState(false);

	let handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<button
				type="button"
				className="inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-black rounded-lg lg:hidden cursor-pointer"
				onClick={handleClick}
			>
				{isOpen ? (
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 14"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1l12 12M13 1L1 13"
						/>
					</svg>
				) : (
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				)}
			</button>
		</>
	);
}

export default NavbarButton;
