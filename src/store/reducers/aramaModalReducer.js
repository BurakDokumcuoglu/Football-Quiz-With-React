import { aramaModalIsOpen } from "../initialValues/aramaModal";
import { SHOW_ARAMA_MODAL } from "../actions/AramaModalActions";
import { HIDE_ARAMA_MODAL } from "../actions/AramaModalActions";

 export const initialState = {
  aramaModalIsOpen: aramaModalIsOpen,
};

export default function aramaModalReducer(state = initialState, { type }) {
  switch (type) {
    case SHOW_ARAMA_MODAL:
      return { ...state, aramaModalIsOpen: true };

    case HIDE_ARAMA_MODAL:
      return { ...state, aramaModalIsOpen: false };

    default:
      return state;
  }
}
