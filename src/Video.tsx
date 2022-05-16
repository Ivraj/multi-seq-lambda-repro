import {Composition} from 'remotion';
import {MyComposition} from './Composition';

export const RemotionVideo: React.FC = () => {
	const fps = 30;

	return (
		<>
			<Composition
				id="Repro"
				component={MyComposition}
				durationInFrames={fps * 15}
				fps={fps}
				width={406}
				height={720}
			/>
		</>
	);
};
