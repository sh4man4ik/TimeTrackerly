import EnterFavoriteActivity from '../../UI/FavoritesPage/EnterFavoriteActivity';
import FavoritesList from '../../components/FavoritesPage/FavoritesList';

function FavoritesBlock() {
	return (
		<>
			<EnterFavoriteActivity></EnterFavoriteActivity>
			<FavoritesList></FavoritesList>
		</>
	);
}

export default FavoritesBlock;
