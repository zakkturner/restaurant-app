import { h, app } from 'hyperapp';

export default function ContactUs({ state, actions }) {
	return (
		<section id="ContactUs" class="texturebg">
			<div class="container">
				<h5 class="comp-title">Contact Us</h5>
				<h2></h2>
				<div class="box">
					<div class="row">
						<div class="col-md-6">
							<div class="title">{state.globalState.companyInfo.location}</div>
							<h6 class="address">
								{' '}
								4527 Peachtree Pkwy <br />
								Atlanta, GA 30328
							</h6>
							<p>
								<strong>Email:</strong>
								<a href="mailto:info@ragingbull.com"> info@ragingbull.com</a>
							</p>
						</div>
						<div class="col-md-6">
							<h6>Phone:</h6>
							<div class="title">919-995-9191</div>
							<h6>Lunch Service:</h6>
							<p>
								Friday, Saturday and Sunday <br />
								Bookings from 12pm-1:30pm
							</p>
							<h6>Dinner Service:</h6>
							<p>Daily Bookings from 12pm-1:30pm</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
