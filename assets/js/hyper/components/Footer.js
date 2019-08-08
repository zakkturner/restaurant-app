import { h, app } from 'hyperapp';

export default function Footer({ state, actions }) {
	return (
		<footer id="Footer">
			<div class="container">
				<div class="logo">
					<img src="https://seeklogo.com/images/B/burger_ranch_-_bull-logo-7B8CB2DB5A-seeklogo.com.png" />
				</div>
				<nav class="menu">
					<a href="#OurStory">Our Story</a>
					<a href="#SpecialMenu">Menu</a>
					<a href="#Reviews">Reviews</a>
					<a href="#">Reservations</a>
					<a href="#ContactUs">Contact</a>
				</nav>
				<ul class="social-media">
					<li>
						<a href="http://www.twitter.com" target="new">
							{' '}
							<i class="fa fa-twitter-square"></i>
						</a>
					</li>
					<li>
						<a href="http://www.facebook.com" target="new">
							<i class="fa fa-facebook-square"></i>
						</a>
					</li>
					<li>
						<a href="http://www.google.com" target="new">
							<i class="fa fa-google-plus-square"></i>
						</a>
					</li>

					<li>
						<a href="http://www.youtube.com" target="new">
							<i class="fa fa-youtube-square"></i>
						</a>
					</li>
				</ul>
				<div class="copyright">
					© 2019 Copyright
					<br />
					Created by Zak Turner
				</div>
			</div>
		</footer>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
