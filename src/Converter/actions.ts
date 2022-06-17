export const GET_COMMENTS = "GET_COMMENTS";
export const SHOW_COMMENTS = "SHOW_COMMENTS";

export interface IComment {
  postId?: number,
  id?: number,
  name?: string,
  email: string,
  body: string,
}

export interface GetComments {
  type: typeof GET_COMMENTS;
  payload: IComment[];
}
export interface ShowComments {
  type: typeof SHOW_COMMENTS;
}

export type CommentsAction = GetComments | ShowComments;

export const fetchComments = async (): Promise<Array<IComment> | string | undefined> => {
  const api = 'https://jsonplaceholder.typicode.com/comments'
  const response = await fetch(api);
  return await response.json();
}


