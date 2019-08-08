import { h, app } from 'hyperapp';

export default function OurStory({ state, actions }) {
	return (
		<section id="OurStory">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<h5 class="comp-title">Our Story</h5>
						<h2>Cooking is the art of adjustment</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
							libero alias modi at, laudantium, quo repudiandae fuga odit amet
							quis explicabo exercitationem nihil. Quisquam quo sed soluta quae,
							quis veniam!
						</p>
						<div class="quote">
							"The best steak in the city!" - <strong>Johnny Bacon</strong>
						</div>
						<a href="#" class="reserve-btn">
							Reservation
						</a>
					</div>
					<div class="col-md-6">
						<div class="video-img"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
