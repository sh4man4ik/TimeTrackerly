import SmallCrossButton from '../../UI/FavoritesPage/SmallCrossButton';

function FavoritesList() {
	return (
		<>
			<div className="justify-self-center mt-[45px] lg:mt-[90px] mb-[30px] lg:mb-[50px] w-[80%] max-w-[400px] lg:w-[100%] lg:max-w-[700px]">
				<p className="font-bold text-xl lg:text-4xl text-center pb-[6px] lg:pb-[12px]">Full list</p>

				<div className="text-base lg:text-2xl bg-gradient-to-r from-[#7474BF]/20 to-[#348AC7]/20 rounded-[6px] lg:rounded-[12px] p-[12px] lg:p-[25px]">
					<ul className="grid gap-[5px] lg:gap-[10px]">
						<li className="flex items-start justify-between before:content-['•'] before:mr-2">
							<span className="mr-[6px] lg:mr-[12px] w-fit wrap-anywhere">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reiciendis
								cupiditate architecto quas magnam repellendus non minus voluptas fugit quis, quisquam
								corporis, accusamus doloremque eum obcaecati. Culpa aliquid omnis magnam.
							</span>
							<div>
								<SmallCrossButton></SmallCrossButton>
							</div>
						</li>
						<li className="flex items-start justify-between before:content-['•'] before:mr-2">
							<span className="mr-[6px] lg:mr-[12px] w-fit wrap-anywhere">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reiciendis
								cupiditate architecto quas magnam repellendus non minus voluptas fugit quis, quisquam
								corporis, accusamus doloremque eum obcaecati. Culpa aliquid omnis magnam.
							</span>
							<div>
								<SmallCrossButton></SmallCrossButton>
							</div>
						</li>
						<li className="flex items-start justify-between before:content-['•'] before:mr-2">
							<span className="mr-[6px] lg:mr-[12px] w-fit wrap-anywhere">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reiciendis
								cupiditate architecto quas magnam repellendus non minus voluptas fugit quis, quisquam
								corporis, accusamus doloremque eum obcaecati. Culpa aliquid omnis magnam.
							</span>
							<div>
								<SmallCrossButton></SmallCrossButton>
							</div>
						</li>
						<li className="flex items-start justify-between before:content-['•'] before:mr-2">
							<span className="mr-[6px] lg:mr-[12px] w-fit wrap-anywhere">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reiciendis
								cupiditate architecto quas magnam repellendus non minus voluptas fugit quis, quisquam
								corporis, accusamus doloremque eum obcaecati. Culpa aliquid omnis magnam.
							</span>
							<div>
								<SmallCrossButton></SmallCrossButton>
							</div>
						</li>
						<li className="flex items-start justify-between before:content-['•'] before:mr-2">
							<span className="mr-[6px] lg:mr-[12px] w-fit wrap-anywhere">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reiciendis
								cupiditate architecto quas magnam repellendus non minus voluptas fugit quis, quisquam
								corporis, accusamus doloremque eum obcaecati. Culpa aliquid omnis magnam.
							</span>
							<div>
								<SmallCrossButton></SmallCrossButton>
							</div>
						</li>
						<li className="flex items-start justify-between before:content-['•'] before:mr-2">
							<span className="mr-[6px] lg:mr-[12px] w-fit wrap-anywhere">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reiciendis
								cupiditate architecto quas magnam repellendus non minus voluptas fugit quis, quisquam
								corporis, accusamus doloremque eum obcaecati. Culpa aliquid omnis magnam.
							</span>
							<div>
								<SmallCrossButton></SmallCrossButton>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default FavoritesList;
