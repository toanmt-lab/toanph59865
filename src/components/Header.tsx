import { Link } from "react-router-dom";
import { Button, Input, Modal } from "antd";
import { useAuthStore } from "../stores/useAuthStore";
import { useState } from "react";
export default function Navbar() {
  const { user, setUser } = useAuthStore();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ username: "", email: "", password: "" });
  const handleLogin = async () => {
    if (!loginForm.email || !loginForm.password) return alert("Nhập email + password");
    setUser({ name: loginForm.email.split("@")[0], avatar: "https://i.pravatar.cc/150" });
    setIsLoginOpen(false);
  };
  const handleRegister = async () => {
    if (!registerForm.username || !registerForm.email || !registerForm.password)
      return alert("Nhập đầy đủ thông tin");
    setUser({ name: registerForm.username, avatar: "https://i.pravatar.cc/150" });
    setIsRegisterOpen(false);
    alert("Đăng ký thành công!");
  };
  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="#" className="text-xl font-semibold">
          <strong>WEB2091 App</strong>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="#" className="hover:text-gray-200">
            Trang chủ
          </Link>
          <Link to="/list" className="hover:text-gray-200">
            Danh sách
          </Link>
          <Link to="/add" className="hover:text-gray-200">
            Thêm mới
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <span>User: {user?.name || "Guest"}</span>
          {user ? (
            <Button onClick={() => setUser(null)}>Logout</Button>
          ) : (
            <>
              <Button onClick={() => setIsLoginOpen(true)}>Đăng nhập</Button>
              <Button onClick={() => setIsRegisterOpen(true)}>Đăng ký</Button>
            </>
          )}
        </div>
         <Modal
          title="Đăng nhập"
          open={isLoginOpen}
          onOk={handleLogin}
          onCancel={() => setIsLoginOpen(false)}
        >
          <Input
            placeholder="Email"
            value={loginForm.email}
            onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
            className="mb-2"
          />
          <Input.Password
            placeholder="Password"
            value={loginForm.password}
            onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
          />
        </Modal>
      <Modal
          title="Đăng ký"
          open={isRegisterOpen}
          onOk={handleRegister}
          onCancel={() => setIsRegisterOpen(false)}
        >
          <Input
            placeholder="Username"
            value={registerForm.username}
            onChange={(e) => setRegisterForm({ ...registerForm, username: e.target.value })}
            className="mb-2"
          />
          <Input
            placeholder="Email"
            value={registerForm.email}
            onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
            className="mb-2"
          />
          <Input.Password
            placeholder="Password"
            value={registerForm.password}
            onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
          />
        </Modal>
      </div>
    </nav>
  );
}