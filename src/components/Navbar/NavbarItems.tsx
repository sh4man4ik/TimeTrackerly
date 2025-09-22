import NavbarAbout from '../../UI/Navbar/NavbarAbout';
import NavbarFullHistory from '../../UI/Navbar/NavbarFullHistory';
import NavbarFavorites from '../../UI/Navbar/NavbarFavorites';

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
