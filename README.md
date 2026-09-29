# MUU Portfolio — Next.js

Website portfolio / CV chuyển từ HTML tĩnh sang **Next.js 14 (App Router)**.

## Tính năng

- Glassmorphism (sáng / tối)
- Font Play
- Header trong suốt + menu + nút đổi theme
- Các section: Trang chủ, Về tôi, Kỹ năng, Học vấn, Kinh nghiệm, Dự án, Giải thưởng, Liên hệ
- Nội dung tiếng Việt

## Chạy dự án

```bash
cd muu-portfolio
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
npm start
```

## Cấu trúc

```
muu-portfolio/
├── app/
│   ├── globals.css      # Glassmorphism + theme tokens
│   ├── layout.js        # Root layout + ThemeProvider
│   └── page.js          # Trang chủ (các section)
├── components/
│   ├── Header.js        # Header + menu + theme toggle
│   └── ThemeProvider.js # Context sáng/tối
├── package.json
└── next.config.js
```
