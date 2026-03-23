# Ant Design + React TypeScript

# Lesson 5 – useQuery với Table Ant Design

## Nội dung bài học

Trong bài này chúng ta sẽ học:

- useQuery là gì
- Khác biệt giữa useQuery và useMutation
- Gọi API GET danh sách
- Hiển thị dữ liệu với Table
- Xử lý loading & error
- Mapping dữ liệu vào columns
- Bài tập thực hành

---

# 1. useQuery là gì?

**useQuery** dùng để **lấy dữ liệu từ server** (GET).

Ưu điểm so với useState + useEffect:

- Tự động gọi API
- Cache dữ liệu
- Tự động refetch
- Quản lý loading & error

---

# 2. Cấu trúc cơ bản

```tsx
const { data, isLoading, isError } = useQuery({
  queryKey: ["stories"],
  queryFn: async () => {
    const res = await axios.get("/api/stories");
    return res.data;
  },
});
```

---

# 3. API lấy danh sách truyện

```
GET http://localhost:3000/stories

Response:
[
  {
    "id": 1,
    "title": "Naruto",
    "author": "Masashi",
    "image": "...",
    "description": "...",
    "createdAt": "2024-01-01"
  }
]
```

---

# 4. Ví dụ hiển thị với Table

```tsx
import { Table, Image, Spin } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const StoryList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      render: (url: string) => <Image src={url} width={60} />,
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
  ];

  if (isLoading) return <Spin />;

  if (isError) return <p>Lỗi khi tải dữ liệu</p>;

  return <Table columns={columns} dataSource={data} />;
};

export default StoryList;
```

---

# 5. Giải thích code

## useQuery

```tsx
const { data, isLoading, isError } = useQuery({
  queryKey: ["stories"],
  queryFn: async () => {},
});
```

| Thuộc tính | Ý nghĩa |
| --- | --- |
| `queryKey` | Unique key cho query |
| `queryFn` | Hàm gọi API |
| `data` | Dữ liệu trả về |
| `isLoading` | Đang loading |
| `isError` | Có lỗi không |

---

## Table columns

```tsx
const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
];
```

| Thuộc tính | Ý nghĩa |
| --- | --- |
| `title` | Tên cột hiển thị |
| `dataIndex` | Key dữ liệu |
| `render` | Tùy chỉnh hiển thị |

---

## render() function

```tsx
{
  title: "Ảnh",
  dataIndex: "image",
  render: (url: string) => <Image src={url} width={60} />,
}
```

Render tùy chỉnh cách hiển thị cột.

---

# 6. Xử lý loading & error

```tsx
if (isLoading) return <Spin />;

if (isError) return <p>Lỗi khi tải dữ liệu</p>;

return <Table columns={columns} dataSource={data} />;
```

---

# 7. Bài tập thực hành

## Bài 1

**Thêm cột Created At**

Yêu cầu:

- Hiển thị thêm cột ngày tạo
- Format: `dd/mm/yyyy`

Gợi ý:

```tsx
{
  title: "Created At",
  dataIndex: "createdAt",
  render: (date: string) => new Date(date).toLocaleDateString("vi-VN"),
}
```

---

## Bài 2

**Thêm cột Action (Xóa)**

Yêu cầu:

- Mỗi dòng có nút "Xóa"
- Click -> gọi API DELETE
- Xóa thành công -> cập nhật table

Gợi ý:

```tsx
{
  title: "Action",
  render: (_, record) => (
    <Button onClick={() => handleDelete(record.id)}>
      Xóa
    </Button>
  )
}
```

Hàm xóa:

```tsx
const handleDelete = async (id: number) => {
  await axios.delete(`http://localhost:3000/stories/${id}`);
};
```

---

## Bài 3

**Thêm Phân trang**

Yêu cầu:

- Mỗi trang 5 bản ghi
- Có thể chuyển trang

Gợi ý:

```tsx
<Table
  columns={columns}
  dataSource={data}
  pagination={{ pageSize: 5 }}
/>
```

---

## Bài 4

**Reload danh sách sau khi thêm**

Yêu cầu:

- Thêm truyện -> table tự update
- Không cần reload trang

Gợi ý:

```tsx
import { useQueryClient } from "@tanstack/react-query";

const queryClient = useQueryClient();

onSuccess: () => {
  queryClient.invalidateQueries(["stories"]);
}
```

---

## Bài 5 (Nâng cao)

**Tìm kiếm truyện**

Yêu cầu:

- Input tìm kiếm
- Lọc danh sách theo title
- Real-time search

Gợi ý:

```tsx
const [keyword, setKeyword] = useState("");

const filteredData = data?.filter((item: any) =>
  item.title.toLowerCase().includes(keyword.toLowerCase()),
);

<Input
  placeholder="Tìm kiếm..."
  value={keyword}
  onChange={(e) => setKeyword(e.target.value)}
/>

<Table columns={columns} dataSource={filteredData} />
```

---

# Tổng kết

Trong bài này bạn đã học:

- useQuery để lấy dữ liệu
- Hiển thị Table Ant Design
- Xử lý loading & error
- Mapping dữ liệu vào columns
- CRUD với API