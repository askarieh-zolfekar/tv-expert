import {START_LOADING, STOP_LOADING, TOGGLE_LEFT_MENU, TOGGLE_MAIN_MENU, CHANGE_EXPERT_ACTIVE_TAB} from '../actions/types'
const INIT_STATE = {
    loading: false,
    loadingRequests: 0,
    leftMenu: 0,
    mainMenu: 0,
    expertTab: {tabIndex: 0, details: false},
};

export default (state = INIT_STATE, {type, payload}) => {
    switch (type) {
        case START_LOADING:
            return {...state, loading: true, loadingRequests: state.loadingRequests + 1};
        case STOP_LOADING:
            return {...state, loading: (state.loadingRequests > 1), loadingRequests: state.loadingRequests - 1};
        case TOGGLE_LEFT_MENU:
            return {...state, leftMenu: state.leftMenu === 1 ? 0 : 1, mainMenu: state.leftMenu === 1 ? state.mainMenu : 0};
        case TOGGLE_MAIN_MENU:
            return {...state, mainMenu: state.mainMenu === 1 ? 0 : 1, leftMenu: state.mainMenu === 1 ? state.leftMenu : 0};
        case CHANGE_EXPERT_ACTIVE_TAB:
            return {...state, expertTab: {tabIndex: payload.tabIndex, details: payload.details}};
        default:
            return {...state};
    }
}
