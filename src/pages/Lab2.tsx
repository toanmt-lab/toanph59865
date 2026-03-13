import { Table, Button } from "antd";
export default function Lab2() {
  const studentColumns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Major",
      dataIndex: "major",
    },
  ];
  const studentData = [
    {
      key: 1,
      id: 1,
      name: "Nam",
      age: 20,
      major: "IT",
    },
    {
      key: 2,
      id: 2,
      name: "Linh",
      age: 21,
      major: "Business",
    },
    {
      key: 3,
      id: 3,
      name: "Hà",
      age: 19,
      major: "Design",
    },
  ];
  const productColumns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Product Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
  ];
  const productData = [
    {
      key: 1,
      id: 1,
      name: "Laptop",
      price: "$1000",
      category: "Electronics",
    },
    {
      key: 2,
      id: 2,
      name: "Phone",
      price: "$700",
      category: "Electronics",
    },
    {
      key: 3,
      id: 3,
      name: "Shoes",
      price: "$120",
      category: "Fashion",
    },
    {
      key: 4,
      id: 4,
      name: "Watch",
      price: "$250",
      category: "Accessories",
    },
    {
      key: 5,
      id: 5,
      name: "Bag",
      price: "$90",
      category: "Fashion",
    },
  ];
  const userColumns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => (
        <span style={{ color: status === "active" ? "green" : "red" }}>
          {status}
        </span>
      ),
    },
    {
      title: "Action",
      render: () => (
        <>
          <Button type="primary" style={{ marginRight: 10 }}>
            Edit
          </Button>
          <Button danger>Delete</Button>
        </>
      ),
    },
  ];
  const userData = [
    {
      key: 1,
      id: 1,
      name: "John",
      email: "john@gmail.com",
      status: "active",
    },
    {
      key: 2,
      id: 2,
      name: "Anna",
      email: "anna@gmail.com",
      status: "inactive",
    },
    {
      key: 3,
      id: 3,
      name: "David",
      email: "david@gmail.com",
      status: "active",
    },
  ];
  return (
    <div style={{ padding: 20 }}>
      <h2>Danh sách sinh viên</h2>
      <Table
        columns={studentColumns}
        dataSource={studentData}
        pagination={false}
      /><br /><br />
      <h2>Danh sách sản phẩm</h2>
      <Table
        columns={productColumns}
        dataSource={productData}
        pagination={{ pageSize: 3 }}
      /><br /><br />
      <h2>User Management</h2>
      <Table
        columns={userColumns}
        dataSource={userData}
      />
    </div>
  );
}