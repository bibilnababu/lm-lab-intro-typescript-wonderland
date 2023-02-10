import { endAdventure, haveAdventures } from '../..';
import { askQuestion, clear, print } from '../ui/console';

const VEGETABLES = ['Beans','Carrot','Lettuce','Chicken','Tomatoes',] as const;
type Vegetable = typeof VEGETABLES[number];

class Alice {
	name: string = 'Alice';
	shoppingList: Vegetable[] = [];
}

export function goShoppingWithAlice(): void {
	clear(true);

	const alice = new Alice();

	print(
		`You are shopping with ${alice.name} who have $10. She has a list of items to buy:`
	);

	alice.shoppingList = ['Carrot', 'Lettuce', 'Tomatoes'];

	print(alice.shoppingList.join(', '));

	if (alice.shoppingList.length > 0) {
		print(
			`🛒 Alice starts grabbing items from the shelves.`
		);
		return askQuestion('Press ENTER to continue! ', checkoutWithAlice);
	} else {
		print(`🤔 Alice is confused !!!.Is this money enough to buy the vegetables?? 🤔 `);
		return endShopping();
	}
}

function checkoutWithAlice(): void {
	print(`🛍️ Alice has finished her shopping and is now checking out. 🛍️ `);
	return endShopping();
}

function endShopping(): void {
	print(`👋 Shopping is now over. Goodbye! 👋 `);
}
