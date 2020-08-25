import {TOGGLE_LEFT_MENU, TOGGLE_MAIN_MENU} from "./types";

export const toggleLeftMenu = () => {
    return ({type: TOGGLE_LEFT_MENU});
};

export const toggleMainMenu = () => {
    return ({type: TOGGLE_MAIN_MENU});
};
