function reviewRightClick(state, actions) {
	return {
		reviewStatus: {
			currentReview: state.globalState.reviewStatus.currentReview++
		}
	};
}

function reviewLeftClick(state, actions) {
	return {
		reviewStatus: {
			currentReview: state.globalState.reviewStatus.currentReview--
		}
	};
}

// function toggleMenu(state, actions) {
// 	return {
// 		showMenu: {
// 			currentShow: state.globalState.showMenu.currentShow--
// 		}
// 	};
// }

export const actions = {
	reviewRightClick,
	reviewLeftClick
	// toggleMenu
};
