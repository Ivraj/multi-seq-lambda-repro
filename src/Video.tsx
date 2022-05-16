import {Composition} from 'remotion';
import {SingleSequence, MultiSequence} from './Compositions';

export const RemotionVideo: React.FC = () => {
	const fps = 30;
	const durationInFrames = fps * 15;
	const width = 406;
	const height = 720;

	return (
		<>
			<Composition
				id="SingleSequence"
				component={SingleSequence}
				durationInFrames={durationInFrames}
				fps={fps}
				width={width}
				height={height}
			/>
			<Composition
				id="MultiSequence"
				component={MultiSequence}
				durationInFrames={durationInFrames}
				fps={fps}
				width={width}
				height={height}
			/>
		</>
	);
};
