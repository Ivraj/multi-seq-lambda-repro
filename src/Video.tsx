import {Composition} from 'remotion';
import {MyComposition} from './Composition';

export const RemotionVideo: React.FC = () => {
	const fps = 30;

	return (
		<>
			<Composition
				id="SingleSequence"
				component={MyComposition}
				durationInFrames={fps * 15}
				fps={fps}
				width={406}
				height={720}
			/>
			<Composition
				id="MultiSequence"
				component={MyComposition}
				durationInFrames={fps * 15}
				fps={fps}
				width={406}
				height={720}
			/>
		</>
	);
};
