import { Img } from '../interfaces/Img';

export const getGifs = async (category: string) => {
	const KEY = 'o8kYfXLa5w6pUEOppSXtKuxnU2YWGiT1';
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
		category
	)}&limit=5&api_key=${KEY}`;
	const result = await fetch(url);
	const { data } = await result.json();
	const gifs = data.map((img: any): Img => {
		return {
			id: img.id,
			title: img.title,
			url: img.images.downsized_medium.url,
		};
	});
	return gifs;
};
