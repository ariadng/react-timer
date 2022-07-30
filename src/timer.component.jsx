import { useEffect, useState } from "react";

const Timer = ({
	setRef,
}) => {

	// [ Internal state ]
	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const [display, setDisplay] = useState('00:00');

	const interval = 1000;
	let internalTime = time;

	// [ Methods ]

	// Tick
	const tick = () => {
		internalTime = internalTime + 1;
		setTime(internalTime);
	};

	// Tock
	const tock = (intervalId) => {
		clearInterval(intervalId);
	};

	// Convert time to text
	const convertTimeToText = () => {
		const sec = (time % 60).toString();
		const min = (Math.floor(time / 60)).toString();
		return `${min.padStart(2, '0')}:${sec.padStart(2, '0')}`;
	}

	// Start
	const start = () => {
		setIsRunning(true);
	}
	// Pause
	const pause = () => {
		setIsRunning(false);
	}
	// Reset
	const reset = () => {
		setIsRunning(false);
		setTime(0);
	}

	// isRunning status
	const getIsRunning = () => {
		return isRunning;
	}

	// [ Reference object ]
	useEffect(() => {
		if (setRef) {
			setRef({
				start,
				pause,
				reset,
				isRunning: getIsRunning
			});
		}
	}, []);

	// Timer effect

	useEffect(() => {
		if (isRunning) {
			const intervalId = setInterval(tick, interval);
			return () => tock(intervalId);
		}
	}, [isRunning]);

	useEffect(() => {
		setDisplay(convertTimeToText());
	}, [time]);

	return (
		<div>{display}</div>
	);
}

export default Timer;