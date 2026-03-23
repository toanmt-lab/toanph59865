import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, Spin, message } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EditStory() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories/1");
      return res.data;
    },
    queryKey: ["story"],
  });

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data]);

  const mutation = useMutation({
    mutationFn: async (values: any) => {
      return axios.put("http://localhost:3000/stories/1", values);
    },
    onSuccess: () => {
      message.success("Cập nhật thành công");
      queryClient.invalidateQueries({ queryKey: ["stories"] });
      navigate("/list");
    },
  });

  const onFinish = (values: any) => {
    mutation.mutate(values);
  };

  if (isLoading) return <Spin />;

  return (
    <Form form={form} layout="vertical" onFinish={onFinish} disabled={isLoading}>
      <Form.Item name="title" label="Tên truyện" rules={[{ required: true, message: "Nhập tên truyện" }]}>
        <Input />
      </Form.Item>

      <Form.Item name="author" label="Tác giả" rules={[{ required: true, message: "Nhập tác giả" }]}>
        <Input />
      </Form.Item>

      <Form.Item name="image" label="Ảnh">
        <Input />
      </Form.Item>

      <Form.Item name="description" label="Mô tả">
        <Input.TextArea />
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={mutation.isPending}>
        Cập nhật
      </Button>
    </Form>
  );
}