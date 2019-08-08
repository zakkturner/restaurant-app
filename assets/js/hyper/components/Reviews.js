import { h, app } from 'hyperapp';

export default function Reviews({ state, actions }) {
	var currentReview = function() {
		return (
			<div>
				<h5 class="comp-title">Reviews</h5>
				<h2>
					{
						state.globalState.reviewsData[
							state.globalState.reviewStatus.currentReview
						].company
					}
				</h2>
				<h4>
					"
					{
						state.globalState.reviewsData[
							state.globalState.reviewStatus.currentReview
						].highlight
					}
					"
				</h4>
				<p>
					{
						state.globalState.reviewsData[
							state.globalState.reviewStatus.currentReview
						].review
					}
				</p>
				<div class="author">
					<strong>
						{
							state.globalState.reviewsData[
								state.globalState.reviewStatus.currentReview
							].author
						}
					</strong>{' '}
					-{' '}
					<em>
						{
							state.globalState.reviewsData[
								state.globalState.reviewStatus.currentReview
							].authorInfo
						}
					</em>
				</div>
			</div>
		);
	};

	var rightClickBtn = function() {
		console.log('clicked');
		if (
			state.globalState.reviewStatus.currentReview ==
			state.globalState.reviewsData.length - 1
		) {
			console.log('do nothing');
		} else {
			actions.reviewRightClick();
		}
	};

	var leftClickBtn = function() {
		console.log('clicked');
		if (state.globalState.reviewStatus.currentReview == 0) {
			console.log('do nothing');
		} else {
			actions.reviewLeftClick();
		}
	};

	return (
		<section id="Reviews">
			<div class="container">
				<div class="row">
					<div class="col-md-8 ">
						<div class="side-img">
							<img
								src="https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526670303qwiib.png"
								alt="chef"
							/>
						</div>
					</div>
					<div class="col-md-4">
						{currentReview()}
						<div class="arrows">
							<i
								onclick={leftClickBtn}
								class={`fa fa-arrow-left ${
									state.globalState.reviewStatus.currentReview > 0
										? 'ready'
										: ''
								}`}
							></i>
							<i
								onclick={rightClickBtn}
								class={`fa fa-arrow-right ${
									state.globalState.reviewStatus.currentReview ==
									state.globalState.reviewsData.length - 1
										? ''
										: 'ready'
								}`}
							></i>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
