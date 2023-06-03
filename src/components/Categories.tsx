import React, { Fragment } from 'react';
import { Category } from '../redux/category/types';
import { mainURL } from '../axios';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

type CategoriesProps = {
	items: Category[];
	onChange: (id: string) => void;
};

const Categories: React.FC<CategoriesProps> = ({ items, onChange }) => {
	const [selected, setSelected] = React.useState(items[0]);

	const handleChangeSearch = (value: Category) => {
		setSelected(value);
		onChange(value._id);
	};

	return (
		<Listbox value={selected} onChange={handleChangeSearch}>
			<div className="relative mt-1">
				<Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
					<span className="flex items-center gap-2 truncate">
						<img className="h-5 w-5" src={`${mainURL}${selected.imageUrl}`} />
						{selected.name}
					</span>
					<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
						<ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
					</span>
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0">
					<Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						{items.map((item) => (
							<Listbox.Option
								key={item._id}
								className={({ active }) =>
									`relative cursor-default select-none py-2 pl-2 pr-4 ${
										active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
									}`
								}
								value={item}>
								{({ selected }) => (
									<>
										<span
											className={`flex items-center gap-2 truncate ${
												selected ? 'font-medium' : 'font-normal'
											}`}>
											<img className="h-5 w-5" src={`${mainURL}${item.imageUrl}`} />
											{item.name}
										</span>

										{selected ? (
											<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
												<CheckIcon className="h-5 w-5" aria-hidden="true" />
											</span>
										) : null}
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
};

export default Categories;
