import React from 'react';
import { GifGridITemProps } from '../interfaces/GifGridItemProps';

const GifGridItem = ({ url, title, id }: GifGridITemProps) => {
	return (
		<div className='card animate__animated animate__fadeIn'>
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};

export default GifGridItem;
