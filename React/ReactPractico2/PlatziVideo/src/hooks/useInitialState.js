import { useState, useEffect } from 'react';

const useInitialState = (api) => {
	const [videos, setVideos] = useState({ myList: [], trends: [], originals: [] });

	useEffect(() => {
		fetch(api)
			.then((res) => res.json())
			.then((data) => setVideos(data));
	}, []);

	return videos;
};

export default useInitialState;
