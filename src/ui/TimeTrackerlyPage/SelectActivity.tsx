import { useState, useEffect } from 'react';

function SelectActivity(props: any) {
	let [value, setValue] = useState('');
	let [favoritesActivityList, setFavoritesActivityList] = useState([]);

	let handleChange = (e: any) => {
		props.setIsError(2);
		props.setSelectActivityValue(e.target.value);
		setValue(e.target.value);
	};

	useEffect(() => {
		let storedList = JSON.parse(localStorage.getItem('favoritesList') || '[]');
		if (storedList) {
			setFavoritesActivityList(storedList);
		}
	}, []);

	return (
		<>
			<div className="grid font-medium">
				<p className="pb-[6px] lg:pb-[12px]">Select activity</p>

				<select
					className={`appearance-none rounded-[6px] lg:rounded-[12px] bg-[#d5d5db] lg:hover:bg-[#d2d2d9] w-[100%] lg:max-w-[500px] p-[2px] lg:p-[4px] pl-[8px] lg:pl-[16px] pr-[8px] lg:pr-[16px] truncate outline-none cursor-pointer ${value == '' ? 'text-[#8a8a8a]' : 'text-[#1A1A1A]'}`}
					onChange={(e) => handleChange(e)}
					value={value}
				>
					<option className="text-[black] bg-[#d5d5db]" value="" disabled>
						Select activity...
					</option>
					{favoritesActivityList.map((activity: any, index: any) => (
						<option key={index} value={activity.trim()} className="text-[#1A1A1A]  bg-[#d5d5db]">
							{activity.trim()}
						</option>
					))}
				</select>
			</div>
		</>
	);
}

export default SelectActivity;
