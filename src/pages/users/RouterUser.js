import { Routes, Route } from "react-router-dom";
import IndexUser from "./IndexUser";
import User from "./User";

function RouterUser() {
  return (
    <Routes>
      <Route path="/" element={<IndexUser />} />
      <Route path="/:userID" element={<User />} />
    </Routes>
  );
}
export default RouterUser;
