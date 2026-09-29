"use client";

export default function HomePage() {
  return (
    <main className="page">
      <section id="home" className="glass hero">
        <p className="section-title">Xin chào</p>
        <h1>
          Tôi tên là
          <br />
          Beckham Roy
        </h1>
        <p>
          Tôi thiết kế trải nghiệm số tinh tế &amp; thẩm mỹ thương hiệu đẹp mắt.
          Cung cấp dịch vụ phát triển web chất lượng cao.
        </p>
        <div className="btn-row">
          <a className="btn btn-primary" href="#about">
            Về tôi <i className="fa fa-long-arrow-right" />
          </a>
          <a className="btn" href="#portfolio">
            Xem dự án
          </a>
        </div>
      </section>

      <section id="about">
        <p className="section-title">về tôi</p>
        <h2 className="section-heading">Tiểu sử ngắn</h2>
        <div className="grid-2">
          <div className="glass card">
            <table className="info-table">
              <tbody>
                <tr>
                  <td>Họ tên</td>
                  <td>Beckham Roy</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>
                    <a href="mailto:beckham@gmail.com">beckham@gmail.com</a>
                  </td>
                </tr>
                <tr>
                  <td>Điện thoại</td>
                  <td>(123) - 456-7890</td>
                </tr>
                <tr>
                  <td>Ngày sinh</td>
                  <td>23 Tháng 2, 1986</td>
                </tr>
                <tr>
                  <td>Quốc tịch</td>
                  <td>Hoa Kỳ</td>
                </tr>
              </tbody>
            </table>
            <div style={{ marginTop: 20 }}>
              <a className="btn btn-primary" href="#contact">
                Tải CV <i className="fa fa-long-arrow-right" />
              </a>
            </div>
          </div>
          <div className="glass card">
            <h3>Xin chào</h3>
            <p style={{ marginBottom: 12 }}>
              Tôi là Nhà thiết kế UI/UX &amp; Lập trình viên Frontend đến từ
              Victoria, Australia. Tôi có bằng thạc sĩ Thiết kế Web từ Đại học
              Thế giới.
            </p>
            <p>
              Làm việc với các nhóm dự án để tạo ra giao diện ứng dụng và website
              thân thiện, hấp dẫn. Tạo mock-up và tinh chỉnh qua nhiều vòng lặp
              để giải quyết vấn đề thực tế của người dùng.
            </p>
          </div>
        </div>
      </section>

      <section id="skills">
        <p className="section-title">kỹ năng</p>
        <h2 className="section-heading">Năng lực chuyên môn</h2>
        <div className="grid-4" style={{ marginBottom: 24 }}>
          {[
            {
              icon: "fa-lightbulb-o",
              title: "Tư duy",
              desc: "Ý tưởng sáng tạo và phản hồi xây dựng cho đội ngũ thiết kế.",
            },
            {
              icon: "fa-tablet",
              title: "Thiết kế",
              desc: "Prototype, icon và giải pháp điều hướng hiện đại.",
            },
            {
              icon: "fa-flag",
              title: "Phác thảo",
              desc: "Wireframe, sitemap, user flow và mockup chất lượng cao.",
            },
            {
              icon: "fa-code",
              title: "Lập trình",
              desc: "HTML5 / CSS / JS triển khai giao diện sản phẩm.",
            },
          ].map((s) => (
            <div className="glass card" key={s.title}>
              <div className="icon">
                <i className={`fa ${s.icon}`} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="glass card">
          {[
            { name: "Photoshop", pct: 80 },
            { name: "Illustrator", pct: 82 },
            { name: "jQuery", pct: 69 },
            { name: "HTML5", pct: 100 },
          ].map((b) => (
            <div className="bar-row" key={b.name}>
              <span className="bar-label">{b.name}</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${b.pct}%` }} />
              </div>
              <span className="bar-pct">{b.pct}%</span>
            </div>
          ))}
        </div>
      </section>

      <section id="education">
        <p className="section-title">học vấn</p>
        <h2 className="section-heading">Quá trình đào tạo</h2>
        <div className="glass card">
          {[
            {
              n: "01",
              school: "Đại học Thiết kế",
              detail: "Cử nhân Nghệ thuật · 2012 – 2013",
            },
            {
              n: "02",
              school: "Đại học Boston",
              detail: "Nghệ thuật thị giác & Thiết kế · 2011 – 2012",
            },
            {
              n: "03",
              school: "Đại học Boston",
              detail: "Bằng Thiết kế · 2009 – 2011",
            },
            {
              n: "04",
              school: "Đại học Thiết kế",
              detail: "Bằng Thiết kế Web · 2007 – 2009",
            },
          ].map((e) => (
            <div className="timeline-item" key={e.n}>
              <span className="timeline-mark">{e.n}</span>
              <div className="timeline-body">
                <h3>{e.school}</h3>
                <p>{e.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="employment">
        <p className="section-title">kinh nghiệm</p>
        <h2 className="section-heading">Công việc đã làm</h2>
        <div className="glass card">
          {[
            {
              year: "2016 – 2013",
              title: "Panara Media — Giám đốc Nghệ thuật",
              desc: "Thực hiện mọi giai đoạn thiết kế thị giác từ ý tưởng đến bàn giao kỹ thuật.",
            },
            {
              year: "2013 – 2012",
              title: "LinkSture Web — Quản lý Dự án",
              desc: "Thiết lập UX design như giai đoạn đầu trong phát triển web và app.",
            },
            {
              year: "2012 – 2011",
              title: "Matrix Media — Visual / UI Designer",
              desc: "Dẫn dắt thiết kế UX cho nhiều ứng dụng di động định hình thị trường.",
            },
            {
              year: "2011 – 2010",
              title: "Creatika Agency — Nhà thiết kế Đồ họa",
              desc: "Nghiên cứu và triển khai cải tiến UX cho các trang phi lợi nhuận.",
            },
          ].map((job) => (
            <div className="timeline-item" key={job.year}>
              <span className="timeline-mark">{job.year}</span>
              <div className="timeline-body">
                <h3>{job.title}</h3>
                <p>{job.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio">
        <p className="section-title">dự án</p>
        <h2 className="section-heading">Những thứ tôi đã thiết kế</h2>
        <div className="grid-3">
          {[
            "Third Eye Glasses",
            "RedDot Digital Media",
            "Lines Decor Light",
            "Dot Design Agency",
            "Design Blast Inc",
            "Web Lines Corp",
          ].map((name, i) => (
            <div className="glass card" key={name}>
              <div
                style={{
                  height: 140,
                  borderRadius: 12,
                  marginBottom: 14,
                  background: `linear-gradient(135deg, hsl(${i * 45 + 200}, 60%, 55%), hsl(${i * 45 + 280}, 50%, 45%))`,
                }}
              />
              <h3>{name}</h3>
              <p>Thiết kế thương hiệu &amp; trải nghiệm số</p>
            </div>
          ))}
        </div>
      </section>

      <section id="awards">
        <p className="section-title">giải thưởng</p>
        <h2 className="section-heading">Thành tựu nổi bật</h2>
        <div className="grid-3">
          {[
            {
              title: "Giải thưởng Sáng tạo",
              sub: "Giải quảng cáo xuất sắc nhất",
              date: "Tháng 1 – 2016",
            },
            {
              title: "Giải thưởng Photoshop",
              sub: "Giải thiết kế web xuất sắc nhất",
              date: "Tháng 12 – 2015",
            },
            {
              title: "Giải thưởng Thiết kế Logo",
              sub: "Giải thiết kế logo xuất sắc nhất",
              date: "Tháng 12 – 2015",
            },
          ].map((a) => (
            <div className="glass card" key={a.title}>
              <h3>{a.title}</h3>
              <p style={{ marginBottom: 8 }}>{a.sub}</p>
              <span
                style={{
                  display: "inline-block",
                  padding: "4px 10px",
                  borderRadius: 8,
                  background: "linear-gradient(90deg, var(--accent-1), var(--accent-3))",
                  color: "#fff",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                }}
              >
                {a.date}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <p className="section-title">liên hệ</p>
        <h2 className="section-heading">Hãy nói chuyện với tôi</h2>
        <div className="grid-2">
          <div className="glass card">
            <div className="contact-meta">
              <span>
                <i className="fa fa-map-marker" /> 401 Broadway, 24th Floor, NY
                10013
              </span>
              <span>
                <i className="fa fa-envelope" />{" "}
                <a href="mailto:sales@domain.com">sales@domain.com</a>
              </span>
              <span>
                <i className="fa fa-phone" /> +123 456 7890
              </span>
            </div>
          </div>
          <div className="glass card">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="form-group">
                <input type="text" name="name" placeholder="* HỌ VÀ TÊN" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="* EMAIL CỦA BẠN" required />
              </div>
              <div className="form-group">
                <select name="interest" defaultValue="">
                  <option value="" disabled>
                    BẠN QUAN TÂM ĐẾN LĨNH VỰC NÀO?
                  </option>
                  <option value="web">Phát triển Web</option>
                  <option value="mobile">Ứng dụng Di động</option>
                  <option value="graphic">Thiết kế Đồ họa</option>
                  <option value="other">Khác</option>
                </select>
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="TIN NHẮN CỦA BẠN" />
              </div>
              <button type="submit" className="btn btn-primary">
                Gửi <i className="fa fa-long-arrow-right" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} MUU — Portfolio. Thiết kế với Glassmorphism
        &amp; Next.js
      </footer>
    </main>
  );
}
