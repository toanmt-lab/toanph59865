// import { Toaster } from "react-hot-toast";
// import { Link } from "react-router-dom";
// import { Layout, Menu, Form, Input, Button, Table, Modal } from "antd";
// import { useState } from "react";
// // import Lab2 from "./pages/Lab2";
// import Lab3 from "./pages/Lab3";
// const { Header, Sider, Content } = Layout;
// function App() {
//   const [open, setOpen] = useState(false);
//   const [users, setUsers] = useState([
//     { key: 1, name: "John", email: "john@gmail.com", role: "Admin" },
//     { key: 2, name: "Anna", email: "anna@gmail.com", role: "User" },
//   ]);
//   const onFinish = (values: any) => {
//     const newUser = {
//       key: users.length + 1,
//       ...values,
//     };
//     setUsers([...users, newUser]);
//     setOpen(false);
//   };
//   const columns = [
//     { title: "Name", dataIndex: "name" },
//     { title: "Email", dataIndex: "email" },
//     { title: "Role", dataIndex: "role" },
//   ];
//   return (
//     <>
//       <nav className="bg-blue-600 text-white shadow">
//         <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
//           <Link to="#" className="text-xl font-semibold">
//             <strong>WEB2091 App</strong>
//           </Link>
//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="#" className="hover:text-gray-200">
//               Trang chủ
//             </Link>
//             <Link to="#" className="hover:text-gray-200">
//               Danh sách
//             </Link>
//             <Link to="#" className="hover:text-gray-200">
//               Thêm mới
//             </Link>
//           </div>
//           <div className="hidden md:flex items-center space-x-6">
//             <Link to="#" className="hover:text-gray-200">
//               Đăng nhập
//             </Link>
//             <Link to="#" className="hover:text-gray-200">
//               Đăng ký
//             </Link>
//           </div>
//         </div>
//       </nav>
//       <div className="max-w-6xl mx-auto mt-10 px-4">
//         <Layout style={{ minHeight: "300px", marginBottom: 40 }}>
//           <Sider>
//             <Menu
//               theme="dark"
//               items={[
//                 { key: 1, label: "Dashboard" },
//                 { key: 2, label: "Users" },
//               ]}
//             />
//           </Sider>
//           <Layout>
//             <Header style={{ color: "white" }}>Dashboard</Header>
//             <Content style={{ padding: 20 }}>
//               Nội dung dashboard
//             </Content>
//           </Layout>
//         </Layout>
//         <h2 className="text-2xl font-bold mb-4">Form đăng ký</h2>
//         <Form
//           layout="vertical"
//           style={{ maxWidth: 400, marginBottom: 40 }}
//           onFinish={(values) => console.log(values)}
//         >
//           <Form.Item
//             label="Name"
//             name="name"
//             rules={[{ required: true, message: "Nhập tên" }]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             label="Email"
//             name="email"
//             rules={[{ required: true, message: "Nhập email" }]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             label="Password"
//             name="password"
//             rules={[{ required: true, message: "Nhập password" }]}
//           >
//             <Input.Password />
//           </Form.Item>
//           <Button htmlType="submit" type="primary">
//             Đăng ký
//           </Button>
//         </Form>
//         <h2 className="text-2xl font-bold mb-4">Danh sách User</h2>
//         <Button
//           type="primary"
//           style={{ marginBottom: 20 }}
//           onClick={() => setOpen(true)}
//         >
//           Add User
//         </Button>
//         <Table columns={columns} dataSource={users} />
//         <Modal
//           open={open}
//           title="Thêm User"
//           footer={null}
//           onCancel={() => setOpen(false)}
//         >
//           <Form layout="vertical" onFinish={onFinish}>
//             <Form.Item label="Name" name="name">
//               <Input />
//             </Form.Item>
//             <Form.Item label="Email" name="email">
//               <Input />
//             </Form.Item>
//             <Form.Item label="Role" name="role">
//               <Input />
//             </Form.Item>
//             <Button htmlType="submit" type="primary">
//               Thêm
//             </Button>
//           </Form>
//         </Modal>
//       </div>
//     <>
//       <Lab3 />
//     </>
//       <Toaster />
//     </>
//   );
// }
// export default App;
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Lab5 from "./pages/Lab5";
// import Lab4 from "./pages/Lab4";
function App() {
  return (
    <>
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
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
      </div>
      <Lab5/>
      <Toaster />
    </>
  );
}

export default App;