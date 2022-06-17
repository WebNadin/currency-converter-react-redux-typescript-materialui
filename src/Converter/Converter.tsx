import * as React from "react";
import {connect, ConnectedProps} from "react-redux";
import { State } from "../store";

const mapState = (state: State) => {
  return {
    fetchedComments: state.converter
  };
};
const mapDispatch = {
}

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux {
  color?: string
}

function Converter(props: Props) {
  const comments = props.fetchedComments.comments;
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>{comment.email}</div>
      ))}
    </div>
  );
}

export default connector(Converter)
