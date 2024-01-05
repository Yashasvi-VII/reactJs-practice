import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};
// Api/contract desiging
export const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "hi friends i am going to mumbai For my vacations. Hope to enjoy a lot.",
    reactions: 10,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoy"],
  },
  {
    id: "2",
    title: "Going to bangalore",
    body: "hi friends i am going to bangalore For my vacations. Hope to enjoy a lot.",
    reactions: 15,
    userId: "user-12",
    tags: ["vacation", "bangalore", "Enjoy"],
  },
];

export default PostListProvider;
