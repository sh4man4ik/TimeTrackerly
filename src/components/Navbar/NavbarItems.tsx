import NavbarAbout from '../../UIFIX/Navbar/NavbarAbout';
import NavbarFullHistory from '../../UIFIX/Navbar/NavbarFullHistory';
import NavbarFavorites from '../../UIFIX/Navbar/NavbarFavorites';

function NavbarItems() {
	return (
		<>
			<ul className="grid lg:flex lg:gap-[44px]">
				<NavbarAbout></NavbarAbout>
				<NavbarFullHistory></NavbarFullHistory>
				<NavbarFavorites></NavbarFavorites>
			</ul>
		</>
	);
}

export default NavbarItems;
