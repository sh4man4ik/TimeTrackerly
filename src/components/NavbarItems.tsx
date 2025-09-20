import NavbarAbout from '../UI/Navbar/NavbarAbout';
import NavbarFullHisotry from '../UI/Navbar/NavbarFullHistory';
import NavbarFavorites from '../UI/Navbar/NavbarFavorites';

function NavbarItems() {
	return (
		<>
			<ul className="grid lg:flex lg:gap-[44px]">
				<NavbarAbout></NavbarAbout>
				<NavbarFullHisotry></NavbarFullHisotry>
				<NavbarFavorites></NavbarFavorites>
			</ul>
		</>
	);
}

export default NavbarItems;
