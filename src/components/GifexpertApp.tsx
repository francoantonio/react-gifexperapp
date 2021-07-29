import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import GifGrid from './GifGrid';

export const GifexpertApp = () => {
	const [categories, setCategories] = useState(['React.js']);
	return (
		<>
			<h1>Gif Expert App</h1>
			<AddCategory setCategories={setCategories} />
			<hr />
			<ol>
				{categories.map((categori) => (
					<GifGrid key={categori} category={categori} />
				))}
			</ol>
		</>
	);
};
