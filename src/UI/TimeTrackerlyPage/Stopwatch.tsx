import { useState, useEffect, useRef } from 'react';

function Stopwatch(props: any) {
	let [elapsedTime, setElapsedTime] = useState(0);
	let intervalRef: any = useRef(null);
	let startTimeRef = useRef(0);

	let formatTime = () => {
		let hours: string = String(Math.floor(elapsedTime / (1000 * 60 * 60)));
		let minutes: string = String(Math.floor((elapsedTime / (1000 * 60)) % 60));
		let seconds: string = String(Math.floor((elapsedTime / 1000) % 60));

		hours = hours.padStart(2, '0');
		minutes = minutes.padStart(2, '0');
		seconds = seconds.padStart(2, '0');

		return `${hours}:${minutes}:${seconds}`;
	};

	useEffect(() => {
		if (!props.isStarted) {
			startTimeRef.current = Date.now() - elapsedTime;

			intervalRef.current = setInterval(() => {
				setElapsedTime(Date.now() - startTimeRef.current);
			}, 1000);
		} else {
			setElapsedTime(0);
		}

		return () => {
			clearInterval(intervalRef.current);
		};
	}, [props.isStarted]);

	return (
		<>
			<p className="font-bold text-4xl lg:text-9xl text-center">{formatTime()}</p>
		</>
	);
}

export default Stopwatch;
