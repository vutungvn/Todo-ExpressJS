# Quản Lý Danh Mục & Sản Phẩm (Express + Prisma + MySQL)

Dự án API RESTful quản lý sản phẩm và danh mục theo kiến trúc MVC với mối quan hệ N-N (Many-to-Many).

## Checklist Các Bước Đã Thực Hiện

- [x] **Bước 1**: Khởi tạo dự án Node.js & Git, cài đặt Express, Prisma Client, dotenv, cors.
- [x] **Bước 2**: Khởi tạo Prisma, cấu hình biến môi trường kết nối CSDL MySQL.
- [x] **Bước 3**: Thiết lập Prisma Schema (Model Category, Product với quan hệ N-N) và chạy Migration.
- [x] **Bước 4**: Tạo file khởi tạo Prisma Client instance (`config/db.js`).
- [x] **Bước 5**: Xây dựng MVC Module Danh mục (Category Controller & Routes):
  - [x] Thêm mới danh mục.
  - [x] Sửa danh mục.
  - [x] Xóa danh mục.
  - [x] Lấy danh sách danh mục (Hỗ trợ Search theo tên).
- [x] **Bước 6**: Xây dựng MVC Module Sản phẩm (Product Controller & Routes):
  - [x] Thêm sản phẩm (Gán danh mục N-N).
  - [x] Sửa sản phẩm.
  - [x] Xóa sản phẩm.
  - [x] Lấy danh sách sản phẩm (Hỗ trợ Search theo tên & Phân trang Page/Limit).
- [x] **Bước 7**: Cấu hình Entry Point `app.js` tích hợp toàn bộ Routes.
