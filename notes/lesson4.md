# Ant Design + React TypeScript

# Lesson 4 – useMutation với React Query

## Nội dung bài học

Trong bài này chúng ta sẽ học:

- useMutation là gì
- Khác biệt giữa useQuery và useMutation
- Gọi API POST, PUT, DELETE
- Xử lý loading & error
- onSuccess và onError callback
- Ví dụ useMutation hoàn chỉnh
- Bài tập thực hành

---

# 1. useMutation là gì?

**useMutation** dùng để **gửi dữ liệu đến server** (POST, PUT, DELETE).

Khác với `useQuery`:

| Tính năng | useQuery | useMutation |
| --- | --- | --- |
| Gọi API | GET | POST, PUT, DELETE |
| Tự động gọi | ✅ | ❌ |
| Cache dữ liệu | ✅ | ❌ |
| Gọi thủ công | ❌ | ✅ |

---

# 2. Cấu trúc cơ bản

```tsx
const { mutate, isLoading } = useMutation({
  mutationFn: async (data) => {
    return await axios.post("/api/stories", data);
  },
  onSuccess: () => {
    console.log("Thành công!");
  },
  onError: () => {
    console.log("Lỗi!");
  },
});
```

---

# 3. Ví dụ Form thêm truyện

```tsx
import { Form, Input, Button, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const AddStoryForm = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: async (data) => {
      const res = await axios.post("http://localhost:3000/stories", data);
      return res.data;
    },
    onSuccess: () => {
      message.success("Thêm truyện thành công!");
    },
    onError: () => {
      message.error("Thêm truyện thất bại!");
    },
  });

  const onFinish = (values: any) => {
    mutate(values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 500 }}>
      <Form.Item
        label="Tên truyện"
        name="title"
        rules={[{ required: true, message: "Nhập tên truyện" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Tác giả"
        name="author"
        rules={[{ required: true, message: "Nhập tác giả" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Mô tả"
        name="description"
        rules={[{ required: true }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item
        label="Link ảnh"
        name="image"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={isLoading}>
        Thêm truyện
      </Button>
    </Form>
  );
};

export default AddStoryForm;
```

---

# 4. Giải thích code

## useMutation

```tsx
const { mutate, isLoading } = useMutation({
  mutationFn: async (data) => {},
  onSuccess: () => {},
  onError: () => {},
});
```

| Thuộc tính | Ý nghĩa |
| --- | --- |
| `mutationFn` | Hàm gọi API |
| `onSuccess` | Gọi khi thành công |
| `onError` | Gọi khi lỗi |
| `mutate` | Hàm trigger mutation |
| `isLoading` | Đang loading hay không |

---

## mutate()

```tsx
const onFinish = (values: any) => {
  mutate(values);
};
```

Gọi `mutate()` để trigger API call.

---

## onSuccess & onError

```tsx
onSuccess: () => {
  message.success("Thêm thành công!");
},
onError: () => {
  message.error("Lỗi!");
},
```

Callback khi mutation thành công hoặc lỗi.

---

# 5. API tạo truyện

```
POST http://localhost:3000/stories

Body:
{
  "title": "Naruto",
  "author": "Masashi Kishimoto",
  "description": "...",
  "image": "..."
}
```

---

# 6. Hiển thị notification

Sử dụng `message` từ Ant Design.

```tsx
import { message } from "antd";

message.success("Thành công!");
message.error("Lỗi!");
message.loading("Đang xử lý...");
```

---

# 7. Bài tập thực hành

## Bài 1

Tạo **Form thêm truyện** gồm:

- Title
- Author
- Description
- Image URL

Yêu cầu:

- Tất cả field bắt buộc
- Submit -> thêm vào server
- Hiển thị thông báo thành công

---

## Bài 2

Tạo **Form cập nhật truyện**

Yêu cầu:

- Dùng useMutation với PUT
- URL: `http://localhost:3000/stories/{id}`
- Hiển thị message success/error

---

## Bài 3

Tạo **Form xóa truyện**

Yêu cầu:

- Button xóa
- Confirm trước khi xóa
- Gọi DELETE API
- Hiển thị thông báo

---

## Bài 4 (Nâng cao)

**Kết hợp Form + List**

Yêu cầu:

- Form thêm truyện
- List hiển thị truyện
- Xóa -> list tự update

Gợi ý:

```tsx
onSuccess: () => {
  queryClient.invalidateQueries(["stories"]);
}
```

---

# Tổng kết

Trong bài này bạn đã học:

- useMutation dùng để gửi dữ liệu
- mutationFn để gọi API
- onSuccess & onError callback
- Kết hợp Form + useMutation
- CRUD cơ bản với API