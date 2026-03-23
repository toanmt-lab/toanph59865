import {Form, Input, Button, InputNumber} from 'antd';
export default function Lab3(){
  const onLogin = (values: any) => {
    console.log("Login", values);
  };
  const onRegister = (values: any)=> {
    console.log("Register", values);
  };
  const onProduct = (values: any)=> {
    console.log("Product", values);
  };
  const onPost = (values: any)=> {
    console.log("Post", values);
  };
  return(
    <div style={{ maxWidth: 500, margin: "40px auto" }}>
        <h2>Dang Nhap</h2>
    <Form layout="vertical" onFinish={onLogin}>
      <Form.Item 
      label="Email"
      name="email"
      rules={[{ required: true, message: 'vui long nhap email' }]}>
        <Input />
      </Form.Item>

      <Form.Item 
      label="Password"
      name="password"
      rules={[{ required: true, message: 'vui long nhap password' }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
    <br />
    <h2>Dang Ky</h2>
    <Form layout="vertical" onFinish={onRegister}>
        <Form.Item
        label="Tên"
        name="name"
        rules={[{ required: true, message: "Nhập tên" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, type: "email" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item 
        label="Mật khẩu"
        name="password"
        rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Đăng ký
        </Button>
      </Form.Item>
      </Form>
      <br/>
      <h2>Them San Pham</h2>
    <Form layout="vertical" onFinish={onProduct}>
        <Form.Item 
        label="Tên sản phẩm"
        name="name"
        rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item 
        label="Giá"
        name="price"
        rules={[{ required: true }]}>
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Mô tả" name="description">
        <Input.TextArea rows={4} />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Thêm sản phẩm
      </Button>
    </Form>
    <br/>
    <h2>Them Bai Viet</h2>
    <Form layout="vertical" onFinish={onPost}>
        <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'Nhập title' }]}>
      <Input />
    </Form.Item>
    <Form.Item
        label="Slug"
        name="slug"
        rules={[{ required: true, message: 'Nhập slug' }]}>
      <Input />
    </Form.Item>
    <Form.Item
        label="Content"
        name="content"
        rules={[{ required: true, message: 'Nhập content' }]}>
      <Input.TextArea rows={4} />
    </Form.Item>
    <Form.Item
        label="Author"
        name="author"
        rules={[{ required: true, message: 'Nhập author' }]}>
      <Input />
    </Form.Item>
    <Form.Item
        label="Image URL"
        name="image"
        rules={[{ required: true, message: 'Nhập image URL' }]}>
      <Input />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Thêm bài viết
      </Button>
    </Form.Item>
    </Form>
    </div>
  );
}
