import { Form, Input, Button, Table, Spin, Modal, Popconfirm } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
const Lab4 = () => {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();
  const [editForm] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);
  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await axios.post("http://localhost:3000/stories", data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Thêm truyện thành công");
      form.resetFields();
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
    onError: () => {
      toast.error("Có lỗi xảy ra");
    },
  });
  const updateMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await axios.put(`http://localhost:3000/stories/${selected?.id}`, data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Cập nhật truyện thành công");
      queryClient.invalidateQueries({ queryKey: ["stories"] });
      setOpen(false);
      setSelected(null);
    },
    onError: () => {
      toast.error("Có lỗi xảy ra");
    },
  });
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`http://localhost:3000/stories/${id}`);
    },
    onSuccess: () => {
      toast.success("Xóa truyện thành công");
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
    onError: () => {
      toast.error("Có lỗi xảy ra");
    },
  });
  const { data = [], isLoading } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });
  const onFinish = (values: any) => {
    mutation.mutate(values);
  };
  const handleEdit = (record: any) => {
    setSelected(record);
    editForm.setFieldsValue(record);
    setOpen(true);
  };
  const handleUpdate = (values: any) => {
    updateMutation.mutate(values);
  };
  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: 60,
    },
    {
      title: "Tên truyện",
      dataIndex: "title",
    },
    {
      title: "Tác giả",
      dataIndex: "author",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      render: (url: string) => (
        <img src={url} width={50} style={{ borderRadius: 4 }} />
      ),
    },
    {
      title: "Action",
      width: 150,
      render: (_: any, record: any) => (
        <div style={{ display: "flex", gap: 8 }}>
          <Button type="primary" size="small" onClick={() => handleEdit(record)}>
            Sửa
          </Button>
          <Popconfirm
            title="Xóa truyện"
            description="Bạn có chắc muốn xóa truyện này?"
            onConfirm={() => handleDelete(record.id)}
            okText="Có"
            cancelText="Không"
          >
            <Button danger size="small" loading={deleteMutation.isPending}>
              Xóa
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];
  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 30, border: "1px solid #ddd", padding: 20 }}>
        <h3>Thêm truyện mới</h3>
        <Form
          layout="vertical"
          onFinish={onFinish}
          style={{ maxWidth: 500 }}
          form={form}
        >
          <Form.Item
            label="Tên truyện"
            name="title"
            rules={[{ required: true, message: "Nhập tên truyện" }]}
          >
            <Input placeholder="VD: Naruto" />
          </Form.Item>
          <Form.Item
            label="Tác giả"
            name="author"
            rules={[{ required: true, message: "Nhập tác giả" }]}
          >
            <Input placeholder="VD: Masashi Kishimoto" />
          </Form.Item>
          <Form.Item
            label="Mô tả"
            name="description"
            rules={[{ required: true, message: "Nhập mô tả" }]}
          >
            <Input.TextArea rows={4} placeholder="Nhập mô tả truyện" />
          </Form.Item>
          <Form.Item
            label="Image URL"
            name="image"
            rules={[{ required: true, message: "Nhập link ảnh" }]}
          >
            <Input placeholder="https://..." />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={mutation.isPending}
          >
            Thêm truyện
          </Button>
        </Form>
      </div>
      <h3>Danh sách truyện</h3>
      {isLoading ? (
        <Spin />
      ) : (
        <Table
          columns={columns}
          dataSource={data}
          rowKey="id"
          bordered
          pagination={{ pageSize: 5 }}
        />
      )}
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => editForm.submit()}
        confirmLoading={updateMutation.isPending}
        title="Cập nhật truyện"
      >
        <Form
          form={editForm}
          layout="vertical"
          onFinish={handleUpdate}
        >
          <Form.Item
            name="title"
            label="Tên truyện"
            rules={[{ required: true, message: "Nhập tên truyện" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="author"
            label="Tác giả"
            rules={[{ required: true, message: "Nhập tác giả" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Mô tả"
            rules={[{ required: true, message: "Nhập mô tả" }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item
            name="image"
            label="Image URL"
            rules={[{ required: true, message: "Nhập link ảnh" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Lab4;