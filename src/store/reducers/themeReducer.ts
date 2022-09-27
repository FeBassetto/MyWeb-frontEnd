import IStateTheme from "../../models/IStateTheme/IStateTheme";
import { Types } from "../actions/themeActions";

const initialState: IStateTheme = {
  lightMode: true,
};

export default function themeReducer(state = initialState, action: any) {
  switch (action.type) {
    case Types.CHANGE_THEME:
      return {
        lightMode: !state.lightMode,
      };
    default:
      return state;
  }
}
