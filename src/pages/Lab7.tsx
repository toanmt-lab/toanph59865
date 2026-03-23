import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Popconfirm, Table } from "antd";
import axios from "axios";
import toast from "react-hot-toast";

export default function Lab7() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await axios.delete(`http://localhost:3000/stories/${id}`);
    },
    onSuccess: () => {
      toast.success("Xóa phim thành công");
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
    onError: () => {
      toast.error("Xóa phim thất bại");
    },
  });

  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Director", dataIndex: "director", key: "director" },
    { title: "Year", dataIndex: "year", key: "year" },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <div style={{ display: "flex", gap: 8 }}>
          <Button type="default" onClick={() => toast.info(`Edit phim ${record.id}`)}>
            Edit
          </Button>
          <Popconfirm
            title="Xóa phim này?"
            onConfirm={() => deleteMutation.mutate(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger loading={deleteMutation.isLoading}>
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  if (isError) return <div>Có lỗi khi tải danh sách phim</div>;

  return <Table rowKey="id" columns={columns} dataSource={data} loading={isLoading} />;
}