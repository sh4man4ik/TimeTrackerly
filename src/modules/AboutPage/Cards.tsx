import { useNavigate } from 'react-router-dom';
import AboutCard from '../../components/AboutPage/AboutCard';

function Cards() {
	let openGitHubRepo = () => {
		window.open('https://github.com/sh4man4ik/TimeTrackerly', '_blank');
	};

	const navigate = useNavigate();

	let openPrivacyPolicy = () => {
		navigate('/privacy');
	};

	let openTelegramForHelp = () => {
		window.open('https://t.me/sh4man4ikk', '_blank');
	};

	return (
		<>
			<div className="mt-[45px] lg:mt-[90px] flex flex-wrap justify-self-center justify-center gap-[30px] lg:gap-[50px] w-[90%] max-w-[600px] lg:max-w-[800px] mb-[30px] lg:mb-[50px]">
				<AboutCard
					text="Start tracking by giving your activity a name and clicking START"
					logo="bi bi-speedometer"
				></AboutCard>
				<AboutCard
					text="Create a list of favorite tasks so you don’t have to type them every time"
					logo="bi bi-list-ul"
				></AboutCard>
				<AboutCard
					text="All your activities are stored, so you can review your history anytime"
					logo="bi bi-cpu"
				></AboutCard>
				<AboutCard
					text="Your data is stored in localStorage, clearing it will erase your history"
					logo="bi bi-exclamation-octagon"
				></AboutCard>
				<AboutCard
					text="The project code is open and available for everyone (click me)"
					logo="bi bi-github"
					cardFunction={openGitHubRepo}
				></AboutCard>
				<AboutCard
					text="Check how we protect your privacy in our policy (click me)"
					logo="bi bi-shield-check"
					cardFunction={openPrivacyPolicy}
				></AboutCard>
				<AboutCard
					text="For quick help you can contact us directly via Telegram (click me)"
					logo="bi bi-chat"
					cardFunction={openTelegramForHelp}
				></AboutCard>
			</div>
		</>
	);
}

export default Cards;
