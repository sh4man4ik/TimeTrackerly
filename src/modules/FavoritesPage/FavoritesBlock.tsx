import { useState, useEffect } from 'react';
import EnterFavoriteActivity from '../../components/FavoritesPage/EnterFavoriteActivity';
import FavoritesList from '../../components/FavoritesPage/FavoritesList';

function FavoritesBlock() {
	let [favoritesActivityList, setFavoritesActivityList] = useState<string[]>([]);
	let [isFirstRender, setIsFirstRender] = useState(true);

	let addTask = (activityText: any) => {
		setFavoritesActivityList((f) => [...f, activityText]);
	};

	let deleteTask = (index: any) => {
		let updatedActivities = favoritesActivityList.filter((_: any, i: any) => i !== index);
		setFavoritesActivityList(updatedActivities);
	};

	useEffect(() => {
		if (isFirstRender) {
			setIsFirstRender(false);
		} else {
			localStorage.setItem('favoritesList', JSON.stringify(favoritesActivityList));
		}
	}, [favoritesActivityList]);

	useEffect(() => {
		let storedList = JSON.parse(localStorage.getItem('favoritesList') || '[]');
		if (storedList) {
			setFavoritesActivityList(storedList);
		}
	}, []);

	return (
		<>
			<EnterFavoriteActivity addTask={addTask}></EnterFavoriteActivity>
			<FavoritesList favoritesActivityList={favoritesActivityList} deleteTask={deleteTask}></FavoritesList>
		</>
	);
}

export default FavoritesBlock;
