import { h, app } from 'hyperapp';

export default function Header({ state, actions }) {
	return (
		<header>
			<div class="container">
				<div class="logo">
					<img src="https://seeklogo.com/images/B/burger_ranch_-_bull-logo-7B8CB2DB5A-seeklogo.com.png" />
				</div>
				<nav>
					<a href="#OurStory">Our Story</a>
					<a href="#SpecialMenu">Menu</a>
					<a href="#Reviews">Reviews</a>
					<a href="#">Reservations</a>
					<a href="#ContactUs">Contact</a>
				</nav>
			</div>
		</header>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
