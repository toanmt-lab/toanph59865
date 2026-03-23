Ant Design + React + React Query
Lesson 7 -- Ôn tập Table + Form + useQuery + useMutation (CRUD Movies)
Nội dung bài học
Trong bài này chúng ta sẽ tổng hợp lại toàn bộ kiến thức:

Table Ant Design để hiển thị danh sách
Form Ant Design để thêm / sửa dữ liệu
useQuery để lấy danh sách & chi tiết
useMutation để Create / Update / Delete
Quản lý trạng thái loading, error
invalidateQueries để reload data
👉 Đồng thời chuyển sang bài toán thực tế: CRUD Movies

1. Tổng quan CRUD Movies
Chúng ta sẽ xây dựng các chức năng:

Danh sách phim (Table)
Thêm phim (Create)
Sửa phim (Edit)
Xoá phim (Delete)
2. Cấu trúc dữ liệu Movie
Ví dụ:

{
  "id": "1",
  "title": "Avengers",
  "director": "Marvel",
  "year": 2020,
  "poster": "https://upload.wikimedia.org/wikipedia/vi/e/e8/Avengers-Infinity_War-Official-Poster.jpg",
  "description": "Biệt đội siêu anh hùng là một bộ phim siêu anh hùng của Mỹ công chiếu vào năm 2012 "
}
3. API cần có
GET /movies → lấy danh sách
GET /movies/:id → chi tiết
POST /movies → thêm mới
PUT /movies/:id → cập nhật
DELETE /movies/:id → xoá
4. Ôn tập Table (AntD)
Hiển thị danh sách movie
Có cột: Title, Director, Year, Action
Action: Edit / Delete
5. Ôn tập Form (AntD)
title (Input)
director (Input)
year (InputNumber)
poster (Input)
description (TextArea)
6. useQuery (GET data)
Lấy danh sách → ["movies"]
Lấy chi tiết → ["movie", id]
7. useMutation (POST / PUT / DELETE)
Create → POST
Update → PUT
Delete → DELETE
8. invalidateQueries
Sau khi thay đổi dữ liệu:

queryClient.invalidateQueries({ queryKey: ["movies"] });
9. Flow tổng hợp
Create → Form → POST → reload
Edit → Load → Fill → PUT → reload
Delete → Confirm → DELETE → reload
10. Bài tập thực hành
Bài 1 -- Hiển thị danh sách
Table: title, director, year
Action: Edit / Delete
Bài 2 -- Thêm Movie
Form + validate
POST
Reset form + reload
Bài 3 -- Sửa Movie
Load theo id
Fill form
PUT
Quay lại list
Bài 4 -- Xoá Movie
Confirm
DELETE
Reload
Bài 5 -- Loading & UX
Table loading
Button loading
Disable form
Bài 6 -- Message
Success / Error
Tổng kết
Table → list
Form → input
useQuery → GET
useMutation → POST/PUT/DELETE
invalidateQueries → sync data