import NavbarAbout from '../../ui/Navbar/NavbarAbout';
import NavbarFullHistory from '../../ui/Navbar/NavbarFullHistory';
import NavbarFavorites from '../../ui/Navbar/NavbarFavorites';

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
