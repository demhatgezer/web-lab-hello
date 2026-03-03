import "./App.css";

export default function App() {
  return (
    <>
      {/* Skip link */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header className="site-header">
        <h1>Demhat Gezer - Kişisel Portföy</h1>

        <nav aria-label="Ana navigasyon">
          <ul className="nav-list">
            <li>
              <a href="#hakkimda">Hakkımda</a>
            </li>
            <li>
              <a href="#projeler">Projeler</a>
            </li>
            <li>
              <a href="#iletisim">İletişim</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main-content" className="site-main">
        {/* HAKKIMDA */}
        <section id="hakkimda" aria-labelledby="hakkimda-baslik">
          <h2 id="hakkimda-baslik">Hakkımda</h2>

          <p>
            Merhaba! Ben Demhat. Bu sayfa LAB-3 kapsamında modern CSS ve
            responsive tasarım teknikleri kullanılarak geliştirilmiştir.
          </p>

          <h3>Kullandığım Teknolojiler</h3>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>Vite</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        {/* PROJELER */}
        <section id="projeler" aria-labelledby="projeler-baslik">
          <h2 id="projeler-baslik">Projelerim</h2>

          <div className="projects-grid">
            <article className="project-card">
              <h3>Proje 1: Web Lab Hello</h3>
              <p>
                LAB-1, LAB-2 ve LAB-3 kapsamında geliştirilen React +
                TypeScript + Vite projesi.
              </p>
              <p>
                <strong>Kullanılanlar:</strong> React, TypeScript, Vite
              </p>
            </article>

            <article className="project-card">
              <h3>Proje 2: Kişisel Web Sayfası</h3>
              <p>Semantik HTML5 ve erişilebilirlik kuralları ile hazırlanmıştır.</p>
              <p>
                <strong>Kullanılanlar:</strong> HTML, CSS
              </p>
            </article>

            <article className="project-card">
              <h3>Proje 3: (Ekstra)</h3>
              <p>Responsive tasarım teknikleri uygulanmıştır.</p>
              <p>
                <strong>Kullanılanlar:</strong> CSS Grid, Flexbox
              </p>
            </article>
          </div>
        </section>

        {/* İLETİŞİM */}
        <section id="iletisim" aria-labelledby="iletisim-baslik">
          <h2 id="iletisim-baslik">İletişim</h2>

          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required defaultValue="">
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                />
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Demhat Gezer. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}