import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Layout, Menu, Table, Button, Modal, Form, Input } from "antd";
import { useState } from "react";

const { Sider, Content } = Layout;

function App() {
  const [open, setOpen] = useState(false);

  const [users, setUsers] = useState([
    { key: 1, name: "Toan", email: "toan@gmail.com", role: "Admin" },
    { key: 2, name: "Nam", email: "nam@gmail.com", role: "User" },
  ]);

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Role", dataIndex: "role" },
  ];

  const onFinish = (values: any) => {
    const newUser = {
      key: users.length + 1,
      ...values,
    };
    setUsers([...users, newUser]);
    setOpen(false);
  };
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
      <Layout style={{ minHeight: "80vh" }}>
        <Sider width={200}>
        </Sider>
        <Content style={{ padding: 20 }}>
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          <Button type="primary" onClick={() => setOpen(true)}>
            Add User
          </Button>
          <Table
            style={{ marginTop: 20 }}
            columns={columns}
            dataSource={users}
          />
          <Modal
            title="Add User"
            open={open}
            footer={null}
            onCancel={() => setOpen(false)}
          >
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item label="Name" name="name">
                <Input />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input />
              </Form.Item>
              <Form.Item label="Role" name="role">
                <Input />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form>
          </Modal>
        </Content>
      </Layout>
      <Toaster />
    </>
  );
}

export default App;
