import React from 'react';
import GifGridItem from './GifGridItem';
import { Img } from '../interfaces/Img';
import { useFetchGifs } from '../hooks/useFetchGifs';
interface Props {
	category: string;
}
const GifGrid = ({ category }: Props) => {
	const { data: images, loading } = useFetchGifs(category);

	return (
		<>
			<h3 className='animate__animated animate__fadeIn'>{category}</h3>
			{loading && <p className='animate__animated animate__flash'>Loading</p>}
			{
				<div className='card-grid'>
					{images.map((image: Img) => (
						<GifGridItem key={image.id} {...image} />
					))}
				</div>
			}
		</>
	);
};

export default GifGrid;
