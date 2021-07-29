import React from 'react';
import { Img } from '../interfaces/Img';

const GifGridItem = ({ url, title, id }: Img) => {
	return (
		<div className='card animate__animated animate__fadeIn'>
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};

export default GifGridItem;
