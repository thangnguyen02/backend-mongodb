**Các bước tạo CSDL quản lí trên MongoDB:**\
1.Tạo tài khoản MongoDB\
2.Tạo Project\
3.Tạo database\
4.Kết nối DB với BE Nodejs

**Bài tập:**\
-Lấy tất cả dữ liệu:\
  Method Get:http://localhost:8080/api/v1/book/  \
  -Tạo dữ liệu mới:\
  Method Post:http://localhost:8080/api/v1/book/  \
   Body: {\
    "title":"Angels and Demons",\
    "author":"Dan Brown",\
    "year":2000\
    }
  
1.Lấy tất cả sách có năm xuất bản sau năm 2000.\
  Method Get: http://localhost:8080/api/v1/book/year/2000  \
2.Lấy tất cả sách của một tác giả cụ thể.\
  Method Get: http://localhost:8080/api/v1/book/author/J.K.Rowling  \
3.Lấy ra sách có tiêu đề bắt đầu bằng một ký tự nhất định\
  Method Get:http://localhost:8080/api/v1/book/title/H  \
4.Cập nhật năm xuất bản của một cuốn sách cụ thể.\
  Method Put:http://localhost:8080/api/v1/book/updateYear/66359876cb875647ae5318a9  \
5.Cập nhật tác giả cho một cuốn sách cụ thể.\
  Method Put:http://localhost:8080/api/v1/book/updateAuthor/66359876cb875647ae5318a9  \
6.Xóa một cuốn sách từ bảng "books" dựa trên tiêu đề\
  Method Delete: http://localhost:8080/api/v1/book/Anne of Green Gables 

