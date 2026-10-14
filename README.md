# PRO APP — React + Vite

## Chạy trên Windows 11
1. Cài Node.js bản LTS từ https://nodejs.org/
2. Giải nén `PRO-APP-React-Vite.zip`.
3. Mở thư mục `PRO-APP` bằng VS Code.
4. Chọn Terminal → New Terminal rồi chạy:

```bash
npm install
npm run dev
```

5. Mở URL local do Vite hiển thị trong terminal (thường là `http://localhost:5173`).

## Build kiểm tra

```bash
npm run build
npm run preview
```

## Deploy GitHub Pages
1. Đưa toàn bộ file/thư mục trong dự án lên repository `PRO-APP` (bao gồm `.github/workflows/deploy.yml`).
2. Vào **Settings → Pages** và chọn **GitHub Actions** làm nguồn triển khai.
3. Mở tab **Actions**, chờ workflow `Deploy PRO APP to GitHub Pages` chạy xong màu xanh.
4. Website dự kiến: `https://tuyendath09852-sys.github.io/PRO-APP/`.

Workflow tự đặt `base: '/PRO-APP/'` khi build cho GitHub Pages. Với Vercel, cấu hình mặc định dùng `base: '/'`.

## Deploy Vercel
Import repository trong Vercel. Dùng build command `npm run build`, output directory `dist`.

Các giá trị tìm kiếm là mô phỏng trên giao diện. Website không đọc hoặc tự thay đổi cài đặt hệ điều hành hay Free Fire.
