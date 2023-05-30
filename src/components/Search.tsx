import React from 'react';

const Search: React.FC = () => {
	const [searchInput, setSearchInput] = React.useState('');

	return (
		<input
			value={searchInput}
			onChange={(e) => setSearchInput(e.target.value)}
			type="text"
			placeholder="Наименование проекта..."
			className="block w-full outline-none hover:border-gray-400 focus:border-gray-500 text-md rounded-md py-1 px-2 px border border-gray-300 text-gray-900"
		/>
	);
};

export default Search;
