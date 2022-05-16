import {Series, useVideoConfig, Video} from 'remotion';

const testSrc =
	'https://storage.googleapis.com/us-airr-dev-backend-bucket/images/xDz3QzNZqB8xqEkj1hbvdNZ4.mp4';

export const SingleSequence = () => {
	const {fps} = useVideoConfig();

	return (
		<Series>
			<Series.Sequence durationInFrames={fps * 15}>
				<Video src={testSrc} />
			</Series.Sequence>
		</Series>
	);
};

export const MultiSequence = () => {
	const {fps} = useVideoConfig();

	return (
		<Series>
			<Series.Sequence durationInFrames={fps * 5}>
				<Video src={testSrc} />
			</Series.Sequence>
			<Series.Sequence durationInFrames={fps * 5}>
				<Video src={testSrc} startFrom={fps * 5} />
			</Series.Sequence>
			<Series.Sequence durationInFrames={fps * 5}>
				<Video src={testSrc} startFrom={fps * 10} />
			</Series.Sequence>
		</Series>
	);
};
