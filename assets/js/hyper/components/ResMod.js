import { h, app } from 'hyperapp';

export default function ResMod({ state, actions }) {
	var toggle = function() {
		actions.toggleMenu;
	};
	return (
		<section id="Modal">
			<div
				class={`${
					state.globalState.showMenu.currentShow > 0 ? 'is-active' : ''
				}`}
			>
				<div class="res-box">
					<i class="fa fa-times" onclick={actions.toggleMenu}></i>
					<h5>Make a Reservation</h5>
					<form>
						<input
							name="startDate"
							type="date"
							min="2019-08-07"
							value="2019-08-07"
						></input>
						<input name="startTime" type="time" min="9:00" max="22:00"></input>
						<input
							name="name"
							type="text"
							placeholder="Last Name"
							// value="Last Name"
						></input>
						<select class="select" name="people">
							<option value="one">1 person</option>
							<option value="two">2 people</option>
							<option value="three">3 people</option>
							<option value="four">4 people</option>
							<option value="five">5 people</option>
							<option value="six">6 people</option>
						</select>
					</form>
					<a href="#">Book</a>
				</div>
				<div class="modal-bg"></div>
			</div>
		</section>
	);
}
