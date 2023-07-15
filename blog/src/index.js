// Import các module cần thiết
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');

// Khởi tạo ứng dụng Express
const app = express();

// Thiết lập cổng lắng nghe
const port = 3001;

// Sử dụng middleware morgan để ghi log các yêu cầu
app.use(morgan('combined'));

// Đăng ký công cụ mô-đun giao diện Handlebars với Express
app.engine('handlebars', hbs.engine());

// Thiết lập công cụ mô-đun giao diện là Handlebars
app.set('view engine', 'handlebars');

// Thiết lập đường dẫn thư mục views
app.set('views', path.join(__dirname, 'resources/views'));

// Định nghĩa route cho đường dẫn '/'
app.get('/', (req, res) => {
  // Render view 'home'
  res.render('home');
});

// Lắng nghe các yêu cầu đến từ cổng đã thiết lập
app.listen(port, () => {
  // In ra console thông báo khi máy chủ được khởi chạy
  console.log(`Example app listening at http://localhost:${port}`);
});
