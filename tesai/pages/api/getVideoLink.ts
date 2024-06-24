import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

const getVideoData = async (req: NextApiRequest, res: NextApiResponse) => {
    const { exerciseName } = req.query;

    if (!exerciseName) {
        return res.status(400).json({ error: 'Exercise name is required' });
    }

    console.log(`Fetching video data for exercise: ${exerciseName}`); // Debugging line

    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: `${exerciseName} exercise`,
                key: YOUTUBE_API_KEY,
                maxResults: 1,
                type: 'video'
            }
        });

        console.log(`YouTube API response: ${JSON.stringify(response.data, null, 2)}`); // Debugging line

        const { items } = response.data;
        if (items.length > 0) {
            const videoId = items[0].id.videoId;
            const thumbnailUrl = items[0].snippet.thumbnails.high.url;
            return res.status(200).json({ videoId, thumbnailUrl });
        } else {
            return res.status(404).json({ error: 'No video found' });
        }
    } catch (error) {
        console.error('Error fetching video data:', error);
        return res.status(500).json({ error: 'Failed to fetch video data' });
    }
};

export default getVideoData;
