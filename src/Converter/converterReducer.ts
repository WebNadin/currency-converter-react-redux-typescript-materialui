import {CommentsAction, IComment, GET_COMMENTS, SHOW_COMMENTS} from "./actions";

export type CommentsState = {
  comments: IComment[];
};

function counterReducer(state: CommentsState= {comments: []}, action: CommentsAction) {
  switch (action.type) {
    case GET_COMMENTS:
      return {...state, comments: action.payload};
    case SHOW_COMMENTS:
      return state;
    default:
      return state;
  }
}

export default counterReducer;