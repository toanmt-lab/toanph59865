import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Avatar } from "antd";

const Header = () => {
  const context = useContext(UserContext);
  if (!context) return null;

  const { user } = context;

  return (
    <div style={{ display: "flex", gap: 10, padding: 20 }}>
      {user ? (
        <>
          <Avatar src={user.avatar} />
          <span>{user.name}</span>
        </>
      ) : (
        <span>Chưa đăng nhập</span>
      )}
    </div>
  );
};

export default Header;