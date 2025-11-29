import { type FormEvent, useState } from 'react';
import React from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import { Analytics } from "@vercel/analytics/next";

type groceries = {
	id: string;
	name: string;
	amount: string;
	category: string;
};

const groceriesListBase: groceries[] = [];

function App() {
	const [groceryList, setGroceryList] =
		useState<groceries[]>(groceriesListBase);
	const [currentCategory, setCurrentCategory] = useState<string>('all');

	function addGrocery(grocery: groceries) {
		setGroceryList([...groceryList, grocery]);
	}

	function deleteGrocery(deleteGroceryId: string) {
		setGroceryList(
			groceryList.filter((grocery) => grocery.id !== deleteGroceryId)
		);
	}

	function ChangeSetCurrentCategory(category: string) {
		setCurrentCategory(category);
	}

	return (
		<div className='box'>
			<h1>Shopping List 🛒</h1>
			<FilterItems ChangeSetCurrentCategory={ChangeSetCurrentCategory} />
			<ListBox groceryList={groceryList} deleteGrocery={deleteGrocery} currentCategory={currentCategory}/>
			<FormAddThing addGrocery={addGrocery} />
			<Analytics />
		</div>
	);
}

export default App;

function FilterItems({
	ChangeSetCurrentCategory,
}: {
	ChangeSetCurrentCategory: (category: string) => void;
}) {
	return (
		<div className='filerBox'>
			<select
				name=''
				id=''
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
					ChangeSetCurrentCategory(e.currentTarget.value)
				}>
				<option value='all'>All</option>
				<option value='vegies'>Warzywa</option>
				<option value='fruit'>Owoce</option>
				<option value='cheese'>Ser</option>
				<option value='meat'>Wędliny</option>
				<option value='other'>Other</option>
			</select>
		</div>
	);
}

function ListBox({
	groceryList,
	deleteGrocery,
  currentCategory,
}: {
	groceryList: groceries[];
	deleteGrocery: (deleteGroceryId: string) => void;
  currentCategory: string,
}) {

  const filteredGroceryList: groceries[] = currentCategory === "all" ? groceryList : groceryList.filter(grocery => grocery.category === currentCategory);
	return (
		<div className='listBox'>
			{filteredGroceryList.map((grocery) => (
				<div key={grocery.id} className='grocery-item'>
					<div className='item-info'>
						<span className='item-name'>{grocery.name}</span>
						{/* We only render the badge if there is an amount */}
						{grocery.amount && (
							<span className='item-amount'>{grocery.amount}</span>
						)}
					</div>
					<button
						className='delete-btn'
						onClick={() => deleteGrocery(grocery.id)}
						title='Delete item'>
						✕
					</button>
				</div>
			))}
		</div>
	);
}

function FormAddThing({
	addGrocery,
}: {
	addGrocery: (grocery: groceries) => void;
}) {
	const [nameProduct, setNameProduct] = useState<string>('');
	const [amountProduct, setAmountProduct] = useState<string>('');
	const [categoryProduct, setCategoryProduct] = useState<string>('vegies');

	function submitForm(e: FormEvent) {
		e.preventDefault();

		// Simple validation to prevent empty items
		if (!nameProduct.trim()) return;

		const grocery = {
			id: uuid(),
			name: nameProduct,
			amount: amountProduct,
			category: categoryProduct,
		};

		addGrocery(grocery);

		// Clear inputs after submit
		setNameProduct('');
		setAmountProduct('');
	}

	return (
		<div className='formAddThing'>
			<form action='' onSubmit={(e) => submitForm(e)}>
				<label htmlFor='name'>Name of product</label>
				<input
					id='name'
					type='text'
					placeholder='e.g. Milk'
					value={nameProduct}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setNameProduct(e.currentTarget.value)
					}
				/>

				<label htmlFor='amount'>Amount</label>
				<input
					id='amount'
					type='text'
					placeholder='e.g. 2 liters'
					value={amountProduct}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setAmountProduct(e.currentTarget.value)
					}
				/>

				<select
					name=''
					id=''
					value={categoryProduct}
					onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
						setCategoryProduct(e.currentTarget.value)
					}>
					<option value='vegies'>Warzywa</option>
					<option value='fruit'>Owoce</option>
					<option value='cheese'>Ser</option>
					<option value='meat'>Wędliny</option>
					<option value='other'>Other</option>
				</select>

				<input type='submit' value='Dodaj' />
			</form>
		</div>
	);
}
