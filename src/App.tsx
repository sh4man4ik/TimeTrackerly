import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TimeTrackerly from './pages/TimeTrackerly';
import About from './pages/About';
import FullHistory from './pages/FullHistory';
import Favorites from './pages/Favorites';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<TimeTrackerly></TimeTrackerly>}></Route>
					<Route path="/about" element={<About></About>}></Route>
					<Route path="/fullhistory" element={<FullHistory></FullHistory>}></Route>
					<Route path="/favorites" element={<Favorites></Favorites>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
