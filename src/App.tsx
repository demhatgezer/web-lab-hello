import { useEffect, useMemo, useState } from "react";
import type {
  Category,
  Project,
  SortField,
  SortOrder,
} from "./types/project";
import { fetchProjects } from "./services/projectService";
import { applyFilters } from "./utils/projectHelpers";
import "./App.css";

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        console.error(err);
        setError("Projeler yuklenirken bir hata olustu.");
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    return applyFilters(projects, search, category, sortField, sortOrder);
  }, [projects, search, category, sortField, sortOrder]);

  return (
    <main className="app-container">
      <header className="hero">
        <h1>Proje Listesi</h1>
        <p>
          JSON’dan veri cekme, filtreleme, siralama ve TypeScript tip guvenligi
          uygulamasi
        </p>
      </header>

      <section className="controls">
        <div className="control-group">
          <label htmlFor="search">Ara</label>
          <input
            id="search"
            type="text"
            placeholder="Proje, aciklama veya teknoloji ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="control-group">
          <label htmlFor="category">Kategori</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value as Category | "all")}
          >
            <option value="all">Tum Kategoriler</option>
            <option value="frontend">Frontend</option>
            <option value="fullstack">Fullstack</option>
            <option value="backend">Backend</option>
          </select>
        </div>

        <div className="control-group">
          <label htmlFor="sortField">Siralama Alani</label>
          <select
            id="sortField"
            value={sortField}
            onChange={(e) => setSortField(e.target.value as SortField)}
          >
            <option value="year">Yil</option>
            <option value="title">Baslik</option>
          </select>
        </div>

        <div className="control-group">
          <label htmlFor="sortOrder">Siralama Yonu</label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as SortOrder)}
          >
            <option value="desc">Azalan</option>
            <option value="asc">Artan</option>
          </select>
        </div>
      </section>

      {loading && <p className="info-message">Yukleniyor...</p>}

      {!loading && error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <>
          <section className="summary-box">
            <p>
              <strong>Toplam Gosterilen Proje:</strong> {filteredProjects.length}
            </p>
          </section>

          <section className="project-grid">
            {filteredProjects.length === 0 ? (
              <p className="info-message">Sonuc bulunamadi.</p>
            ) : (
              filteredProjects.map((project) => (
                <article key={project.id} className="project-card">
                  <div className="project-card-header">
                    <div>
                      <h2>{project.title}</h2>
                      <p className="project-meta">
                        {project.year} • {project.category}
                      </p>
                    </div>

                    {project.featured && (
                      <span className="badge">One Cikan</span>
                    )}
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="tech-list">
                    {project.tech.map((item) => (
                      <span key={item} className="tech-badge">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))
            )}
          </section>
        </>
      )}
    </main>
  );
}