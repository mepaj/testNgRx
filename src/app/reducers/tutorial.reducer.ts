import { Tutorial } from './../models/tutorial.model';
import * as TutorialActions from './../action/tutorial.actions';

const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
};

export function tutorial(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        case TutorialActions.REMOVE_TUTORIAL:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}
