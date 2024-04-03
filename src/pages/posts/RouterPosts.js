import { Routes, Route } from "react-router-dom";
import Post from "./Post";
import IndexPosts from "./IndexPosts";
import CreatePost from "./CreatePost";

function RouterPosts() {
  return (
    <Routes>
      <Route path="/" element={<IndexPosts />} />
      <Route path="/createpost" element={<CreatePost />} />
      <Route path="/:postID" element={<Post />} />
      
      
    </Routes>
  );
}
export default RouterPosts;
