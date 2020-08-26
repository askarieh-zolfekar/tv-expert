import {CHANGE_EXPERT_ACTIVE_TAB, TOGGLE_LEFT_MENU, TOGGLE_MAIN_MENU} from "./types";

export const toggleLeftMenu = () => {
    return ({type: TOGGLE_LEFT_MENU});
};

export const toggleMainMenu = () => {
    return ({type: TOGGLE_MAIN_MENU});
};

export const changeExpertActiveTab = (tabIndex, details) => {
    return ({type: CHANGE_EXPERT_ACTIVE_TAB, payload: {tabIndex, details}});
};
