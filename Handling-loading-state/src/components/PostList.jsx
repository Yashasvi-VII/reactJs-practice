import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

import { useEffect, useContext } from "react";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  }, []);

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
