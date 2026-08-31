"use client";

import { useState, type FormEvent } from "react";

const technologies = [
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Python",
  "Cursor AI",
];

const services = [
  {
    title: "Özel Web Sitesi & Landing Page",
    description:
      "Hızlı, erişilebilir ve dönüşüm odaklı arayüzler. Modern stack ile markanıza özel sayfalar tasarlıyorum.",
    highlights: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Veri Çekme & Otomasyon Botları",
    description:
      "Tekrarlayan işleri otomatikleştiren botlar ve veri hatları. Sonuçları düzenli, kullanılabilir formatta teslim ederim.",
    highlights: ["Python", "Web Scraping", "Excel/CSV teslimi"],
  },
  {
    title: "Hata Düzeltme & Kod Optimizasyonu",
    description:
      "Mevcut kod tabanındaki hataları giderir, darboğazları tespit eder ve uygulamayı daha hızlı hale getiririm.",
    highlights: ["Bug Fixing", "Performans artırımı"],
  },
];

const serviceOptions = services.map((service) => service.title);

const fieldClassName =
  "w-full rounded-xl border border-zinc-700 bg-zinc-900/60 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          service: formData.get("service"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      alert("Mesajınız başarıyla iletildi!");
      form.reset();
    } catch {
      alert("Bir hata oluştu, lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden bg-zinc-950 text-zinc-50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.22),_transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl"
      />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 sm:px-8">
        <section className="flex min-h-[85vh] flex-col justify-center py-20">
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-indigo-400 uppercase">
            Portfolyo
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Fullstack Developer & AI Specialist
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Ölçeklenebilir web uygulamaları ve yapay zeka destekli ürünler
            geliştiriyorum. Arayüzden API&apos;ye, model entegrasyonundan
            dağıtıma kadar uçtan uca çözümler tasarlıyorum.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#hizmetler"
              className="inline-flex h-12 items-center justify-center rounded-full bg-indigo-500 px-7 text-sm font-semibold text-white shadow-[0_0_24px_rgba(99,102,241,0.45)] transition-colors hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Projelerimi İncele
            </a>
            <a
              href="#iletisim"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-100/80 bg-transparent px-7 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-200"
            >
              İletişime Geç
            </a>
          </div>

          <div className="mt-20 border-t border-zinc-800 pt-8">
            <p className="mb-4 text-xs font-medium tracking-widest text-zinc-500 uppercase">
              Teknolojiler
            </p>
            <ul className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-1.5 text-sm font-medium text-zinc-100"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="hizmetler"
          className="scroll-mt-16 border-t border-zinc-800 py-20"
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-indigo-400 uppercase">
            Hizmetler
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Sunduğum Hizmetler
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
            İhtiyacınıza göre uçtan uca geliştirme, otomasyon ve mevcut
            kodunuzu hızlandırma.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(99,102,241,0.28)]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/0 blur-2xl transition group-hover:bg-violet-500/30"
                />
                <h3 className="relative text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-sm leading-6 text-zinc-300">
                  {service.description}
                </p>
                <ul className="relative mt-5 flex flex-wrap gap-2">
                  {service.highlights.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="iletisim"
          className="scroll-mt-16 border-t border-zinc-800 py-20"
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-indigo-400 uppercase">
            İletişim
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Hızlı İletişim
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
            Projenizi kısaca anlatın, uygun hizmet türünü seçin; en kısa sürede
            dönüş yapayım.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-12 max-w-xl space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-zinc-200">
                Ad
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Adınız"
                className={fieldClassName}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-zinc-200"
              >
                E-posta
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="ornek@mail.com"
                className={fieldClassName}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="service"
                className="text-sm font-medium text-zinc-200"
              >
                Hizmet Türü
              </label>
              <select
                id="service"
                name="service"
                required
                defaultValue=""
                className={`${fieldClassName} appearance-none`}
              >
                <option value="" disabled>
                  Bir hizmet seçin
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option} className="bg-zinc-900">
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-zinc-200"
              >
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Projenizden veya ihtiyacınızdan bahsedin..."
                className={`${fieldClassName} resize-y min-h-32`}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-indigo-500 px-7 text-sm font-semibold text-white shadow-[0_0_24px_rgba(99,102,241,0.45)] transition-colors hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-indigo-500 sm:w-auto"
            >
              {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
