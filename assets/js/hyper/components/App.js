import { h, app } from 'hyperapp';
// import ResMod from './ResMod.js';
import Header from './Header.js';
import TopImg from './TopImg.js';
import Ourstory from './OurStory.js';
import SpecialMenu from './SpecialMenu.js';
import RandomQuote from './RandomQuote.js';
import Reviews from './Reviews.js';
import ContactUs from './ContactUs.js';
import Footer from './Footer.js';

export default function App({ state, actions }) {
	return (
		<div class={'app'}>
			{/* <ResMod state={state} actions={actions} /> */}
			<Header state={state} actions={actions} />
			<TopImg state={state} actions={actions} />
			<Ourstory state={state} actions={actions} />
			<SpecialMenu state={state} actions={actions} />
			<RandomQuote state={state} actions={actions} />
			<Reviews state={state} actions={actions} />
			<ContactUs state={state} actions={actions} />
			<Footer state={state} actions={actions} />
		</div>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
