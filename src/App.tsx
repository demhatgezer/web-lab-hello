import { useEffect, useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import UIKit from "./pages/UIKit";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-blue-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Ana içeriğe atla
      </a>

      <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-white">
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-3xl font-bold sm:text-4xl">
              Demhat Gezer - Kişisel Portföy
            </h1>

            <nav aria-label="Ana navigasyon">
              <ul className="flex flex-col gap-2 sm:flex-row sm:gap-6">
                <li>
                  <a
                    href="#hakkimda"
                    className="font-medium text-blue-700 hover:underline dark:text-blue-400"
                  >
                    Hakkımda
                  </a>
                </li>
                <li>
                  <a
                    href="#projeler"
                    className="font-medium text-blue-700 hover:underline dark:text-blue-400"
                  >
                    Projeler
                  </a>
                </li>
                <li>
                  <a
                    href="#iletisim"
                    className="font-medium text-blue-700 hover:underline dark:text-blue-400"
                  >
                    İletişim
                  </a>
                </li>
              </ul>
            </nav>

            <Button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "Açık Mod" : "Koyu Mod"}
            </Button>
          </div>
        </header>

        <main id="main-content" className="mx-auto max-w-6xl px-4 py-10">
          <section id="hakkimda" className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
              Hakkımda
            </h2>

            <p className="max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              Merhaba! Ben Demhat. Bu sayfa LAB-4 kapsamında Tailwind CSS,
              React component yapısı ve dark mode özellikleri kullanılarak
              geliştirilmiştir.
            </p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
              <h3 className="mb-3 text-xl font-semibold">
                Kullandığım Teknolojiler
              </h3>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
                <li className="rounded-lg bg-white px-4 py-3 shadow dark:bg-slate-700">
                  React
                </li>
                <li className="rounded-lg bg-white px-4 py-3 shadow dark:bg-slate-700">
                  TypeScript
                </li>
                <li className="rounded-lg bg-white px-4 py-3 shadow dark:bg-slate-700">
                  Vite
                </li>
                <li className="rounded-lg bg-white px-4 py-3 shadow dark:bg-slate-700">
                  Tailwind CSS
                </li>
              </ul>
            </div>
          </section>

          <section id="projeler" className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">
              Projelerim
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card title="Proje 1: Web Lab Hello">
                <p className="mb-3 text-slate-700 dark:text-slate-300">
                  LAB-1, LAB-2 ve LAB-3 kapsamında geliştirilen React +
                  TypeScript + Vite projesi.
                </p>
                <p>
                  <strong>Kullanılanlar:</strong> React, TypeScript, Vite
                </p>
              </Card>

              <Card title="Proje 2: Kişisel Web Sayfası">
                <p className="mb-3 text-slate-700 dark:text-slate-300">
                  Semantik HTML5, erişilebilirlik ve responsive tasarım
                  ilkeleriyle hazırlanmıştır.
                </p>
                <p>
                  <strong>Kullanılanlar:</strong> HTML, CSS
                </p>
              </Card>

              <Card title="Proje 3: Tailwind UI Çalışması">
                <p className="mb-3 text-slate-700 dark:text-slate-300">
                  Tailwind CSS ile modern component tabanlı arayüz geliştirme
                  çalışmasıdır.
                </p>
                <p>
                  <strong>Kullanılanlar:</strong> Tailwind CSS, React
                </p>
              </Card>
            </div>
          </section>

          <section id="iletisim" className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">
              İletişim
            </h2>

            <form className="space-y-5 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
              <Input
                label="Ad Soyad"
                id="name"
                placeholder="Ad Soyad giriniz"
              />

              <Input
                label="E-posta"
                id="email"
                type="email"
                placeholder="ornek@mail.com"
              />

              <div>
                <label htmlFor="message" className="mb-2 block font-medium">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-900"
                  placeholder="Mesajınızı yazınız"
                />
              </div>

              <Button type="submit">Gönder</Button>
            </form>
          </section>

          <UIKit />
        </main>

        <footer className="border-t border-slate-200 px-4 py-6 text-center text-sm text-slate-600 dark:border-slate-700 dark:text-slate-400">
          &copy; 2026 Demhat Gezer. Tüm hakları saklıdır.
        </footer>
      </div>
    </>
  );
}