import NavbarAbout from '../UI/NavbarAbout';
import NavbarFullHistory from '../UI/NavbarFullHistory';
import NavbarFavorites from '../UI/NavbarFavorites';

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
