import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TimeTrackerly from './pages/TimeTrackerly';
import About from './pages/About';
import FullHistory from './pages/FullHistory';
import Favorites from './pages/Favorites';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<TimeTrackerly></TimeTrackerly>}></Route>
					<Route path="/about" element={<About></About>}></Route>
					<Route path="/history" element={<FullHistory></FullHistory>}></Route>
					<Route path="/favorites" element={<Favorites></Favorites>}></Route>
					<Route path="/privacy" element={<PrivacyPolicy></PrivacyPolicy>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
