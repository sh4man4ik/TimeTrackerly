import { useState } from 'react';
import EnterFavoriteActivity from '../../components/FavoritesPage/EnterFavoriteActivity';
import FavoritesList from '../../components/FavoritesPage/FavoritesList';

function FavoritesBlock() {
	let [favoritesActivityList, setFavoritesActivityList] = useState(['eat', 'training', 'sleep']);
	let [newActivity, setNewActivity] = useState('');

	let addTask = () => {
		setFavoritesActivityList((f) => [...f, newActivity]);
		setNewActivity('');
	};

	let deleteTask = (index: any) => {
		let updatedActivities = favoritesActivityList.filter((_: any, i: any) => i !== index);
		setFavoritesActivityList(updatedActivities);
	};

	return (
		<>
			<EnterFavoriteActivity addTask={addTask} setNewActivity={setNewActivity}></EnterFavoriteActivity>
			<FavoritesList favoritesActivityList={favoritesActivityList} deleteTask={deleteTask}></FavoritesList>
		</>
	);
}

export default FavoritesBlock;
