import React from 'react';
import { useState } from 'react';
export const AddCategory = ({ setCategories }: any) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputchange = ({ target: { value = '' } }) => {
		setInputValue(value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		inputValue.trim().length > 2
			? setCategories((Element: any) => [inputValue, ...Element])
			: console.error('Input Invalid');
		setInputValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' value={inputValue} onChange={handleInputchange} />
		</form>
	);
};
