# MUU Portfolio – Next.js (Component Architecture)

Website portfolio/resume template **MUU** đã được chuyển sang **Next.js 14 App Router** và tách thành các React component chi tiết.

## Cấu trúc components

```
components/
├── Header.tsx           # Logo + Navigation menu
├── HomeSlide.tsx        # Slider giới thiệu (3 sub-slides)
├── AboutSlide.tsx       # About me + thông tin cá nhân
├── SkillsSlide.tsx      # Skills intro + progress bars + counters
├── EducationSlide.tsx   # Học vấn
├── EmploymentSlide.tsx  # Kinh nghiệm làm việc
├── PortfolioSlide.tsx   # Portfolio filter + gallery + popups
├── AwardSlide.tsx       # Awards + chi tiết giải thưởng
├── BlogSlide.tsx        # Blog posts
├── ContactSlide.tsx     # Contact form + địa chỉ
├── IndicationArrows.tsx # Navigation arrows
└── index.ts             # Barrel export
```

```
app/
├── layout.tsx   # Metadata + CSS/JS CDN ThemeZaa
├── page.tsx     # Compose tất cả components
└── globals.css
```

## Chạy dự án

```bash
cd muu-portfolio
npm install
npm run dev
```

Mở: http://localhost:3000

## Đặc điểm

- **Giữ nguyên className** của template gốc → CSS + jQuery plugins vẫn hoạt động.
- Mỗi section là 1 component độc lập, dễ chỉnh sửa nội dung.
- `app/page.tsx` chỉ compose các component, rất gọn.

## Unit Tests

```bash
npm test
npm run test:coverage
```

Jest + React Testing Library với 11 file test cho toàn bộ components.
