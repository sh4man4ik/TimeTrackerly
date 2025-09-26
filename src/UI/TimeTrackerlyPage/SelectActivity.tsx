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
			<div className="grid text-xl lg:text-4xl">
				<p className="pb-[6px] lg:pb-[12px]">Select activity</p>

				<select
					className={`appearance-none rounded-[6px] lg:rounded-[12px] bg-gradient-to-r from-[#7474BF] to-[#348AC7] w-[100%] lg:max-w-[500px] p-[2px] lg:p-[8px] pl-[8px] lg:pl-[16px] pr-[8px] lg:pr-[16px] truncate outline-none hover:from-[#6b6bb0] focus:to-[#3180b0] cursor-pointer ${value == '' ? 'text-[#D1D5DB]' : 'text-[#F8F8FF]'}`}
					onChange={(e) => handleChange(e)}
					value={value}
				>
					<option value="" disabled>
						Select activity...
					</option>
					{favoritesActivityList.map((activity: any, index: any) => (
						<option key={index} value={activity.trim()} className="text-[black]">
							{activity.trim()}
						</option>
					))}
				</select>
			</div>
		</>
	);
}

export default SelectActivity;
