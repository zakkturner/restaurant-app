var companyInfo = {
	title: 'Raging Bull Steakhouse',
	phone: '(919)-995-9191',
	location: 'Atlanta, GA'
};

var specialMenuData = [
	{
		title: 'Steak & Eggs',
		description:
			'Fried eggs, Steak, baked potato or french fries, side of vegetables',
		price: 19,
		picture:
			'https://media-cdn.tripadvisor.com/media/photo-s/10/c4/dc/f3/steak-eggs.jpg'
	},
	{
		title: 'Power Porterhouse',
		description:
			'8oz or 10oz Porterhouse Steak topped with sauteed mushrooms, baked potato, side of vegetables',
		price: 22,
		picture:
			'https://www.harrisranch.com/wp-content/uploads/2019/01/photo_porterhouse_steak_bdbaef5e-7c42-4893-ae30-ea77646eb48f_1024x1024.jpg'
	},
	{
		title: 'Plank Salmon and Shrimp',
		description:
			'Free ranged fresh salmon, served with a side of shrimp, comes with our famous garlic butter sauce, a salad of your choice and side of vegetables',
		price: 25,
		picture:
			'https://valentinascorner.com/wp-content/uploads/2019/03/Baked-Shrimp-Salmon-Recipe-6-of-6-750x1125.jpg'
	},
	{
		title: "Mama's Beef Stew",
		description:
			'Made with grass fed beef, assorted veggies, and comes with a side. Ask about our vegan version!',
		price: 12,
		picture:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRka4j353R_dOyloBLKnxBIi5-iLiIC35b0wTWFSOtiLmCkqBShqQ'
	},
	{
		title: 'Fried Pork Chop',
		description:
			'6oz or 8oz breaded Porkchops, served with gravy, mashed or baked potato, side of vegetables',
		price: 14,
		picture:
			'https://realhousemoms.com/wp-content/uploads/Smothered-Fried-Pork-Chops-Easy-Dinner-Recipe-FEAT.jpg'
	},
	{
		title: 'SteakHouse Bacon Cheeseburger',
		description:
			'Hand-formed, half-pound, Certified Angus Beef ground chuck, stacked high with Applewood-smoked bacon, sharp cheddar cheese and onion rings',
		price: 10,
		picture:
			'https://www.pastureprimewagyu.com/wp-content/uploads/Bacon-burger-plus.jpg'
	}
];

var reviewsData = [
	{
		company: 'The Food Network',
		author: 'Jessic Rivera',
		authorInfo: 'Winner Of Chef Masters',
		highlight: 'Best steak in the South East!',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos commodi, iste fuga consectetur, vitae, blanditiis repellat ut culpa quibusdam placeat.'
	},
	{
		company: 'HBO',
		author: 'Mike Swartz',
		authorInfo: 'Producer of hit show Cookoff',
		highlight: 'I would eat here every day',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos commodi, iste fuga consectetur, vitae, blanditiis repellat ut culpa quibusdam placeat.'
	},
	{
		company: 'NBC',
		author: 'Donald Mittens',
		authorInfo: 'Some cool dude',
		highlight: 'Damn son!',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos commodi, iste fuga consectetur, vitae, blanditiis repellat ut culpa quibusdam placeat.'
	},
	{
		company: 'New York Times',
		author: 'Bernie Warren',
		authorInfo: 'Self proclaimed foodie',
		highlight: 'Greatness in every bite',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos commodi, iste fuga consectetur, vitae, blanditiis repellat ut culpa quibusdam placeat.'
	},
	{
		company: 'MSNBC',
		author: 'Denise Lawrence',
		authorInfo: 'Intern',
		highlight: 'I wish I could afford this great food!',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos commodi, iste fuga consectetur, vitae, blanditiis repellat ut culpa quibusdam placeat.'
	}
];

var randomQuoteData = [
	{
		author: 'John',
		quote:
			"All You Need Is Love. But A Little Chocolate Now And Then Doesn't Hurt."
	},
	{
		author: 'Melissa',
		quote:
			'If a man does not have sauce, then he is lost. But the same man can get lost in the sauce.'
	},
	{
		author: 'Whitney',
		quote:
			'A wise man told me don’t argue with fools. Cause people from a distance can’t tell who is who.'
	}
];

export const globalState = {
	count: 0,
	companyInfo,
	specialMenuData,
	reviewsData,
	randomQuoteData,
	reviewStatus: {
		currentReview: 0
	},
	quoteStatus: {
		currentQuote: 0
	},
	showMenu: {
		currentShow: 1
	}
};
