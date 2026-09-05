// Replace this content block with your own profile, credentials, and email.
const profile = {
  initials: "NA",
  name: "Nama Anda",
  role: "Kreator digital & problem solver",
  location: "Indonesia",
  email: "emailanda@gmail.com",
  availability: "Terbuka untuk kolaborasi",
  focus: "Ide, sistem, dan dampak",
};

const certifications = [
  {
    number: "01",
    title: "Nama sertifikasi pertama",
    issuer: "Lembaga penerbit",
    year: "Tahun terbit",
    description:
      "Tambahkan konteks singkat tentang kompetensi atau pembelajaran yang dibuktikan oleh sertifikasi ini.",
  },
  {
    number: "02",
    title: "Nama sertifikasi kedua",
    issuer: "Lembaga penerbit",
    year: "Tahun terbit",
    description:
      "Gunakan ruang ini untuk menjelaskan keahlian praktis yang Anda peroleh dan terapkan.",
  },
  {
    number: "03",
    title: "Nama sertifikasi ketiga",
    issuer: "Lembaga penerbit",
    year: "Tahun terbit",
    description:
      "Tampilkan kredensial yang paling relevan dengan arah karier atau layanan personal Anda.",
  },
];

const principles = [
  ["01", "Rasa ingin tahu", "Memulai dari pertanyaan yang tepat sebelum mencari jawaban."],
  ["02", "Proses yang sadar", "Menyusun keputusan dengan tujuan, konteks, dan manusia di dalamnya."],
  ["03", "Dampak yang nyata", "Mengutamakan karya yang berguna, mudah dipahami, dan bisa berkembang."],
];

function ArrowUpRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5 19 19 5M8 5h11v11" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M12 4v15M6.5 13.5 12 19l5.5-5.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="page-shell">
      <a className="skip-link" href="#intro">
        Lewati ke konten
      </a>

      <header className="site-header">
        <div className="frame header-content">
          <a className="brand" href="#intro" aria-label="Kembali ke bagian profil">
            <span className="brand-mark">{profile.initials}</span>
            <span className="brand-name">{profile.name}</span>
          </a>

          <nav className="site-nav" aria-label="Navigasi utama">
            <a href="#intro">Profil</a>
            <a href="#certifications">Sertifikasi</a>
            <a href="#about">Biografi</a>
          </nav>

          <a className="header-contact" href={`mailto:${profile.email}`}>
            <span>Hubungi saya</span>
            <ArrowUpRightIcon />
          </a>
        </div>
      </header>

      <main>
        <section id="intro" className="hero-section" aria-labelledby="hero-title">
          <div className="hero-grid frame">
            <div className="hero-copy">
              <p className="section-kicker">
                <span>01</span>
                Profil singkat
              </p>

              <h1 id="hero-title">
                Merancang <em>makna</em>
                <br />
                untuk setiap jejak <span>digital.</span>
              </h1>

              <p className="hero-introduction">
                Halo, saya <strong>{profile.name}</strong>, {profile.role.toLowerCase()} yang percaya
                bahwa ide yang baik akan terasa lebih kuat saat disampaikan dengan jernih dan
                penuh tujuan.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#about">
                  Kenali perjalanan saya
                  <ArrowUpRightIcon />
                </a>
                <a className="text-link" href="#certifications">
                  Lihat sertifikasi
                  <ArrowDownIcon />
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Ruang untuk foto profil atau monogram Anda">
              <div className="portrait-card">
                <div className="portrait-topline">
                  <span>VISUAL ID</span>
                  <span>01 / 01</span>
                </div>
                <div className="portrait-disc portrait-disc-large" aria-hidden="true" />
                <div className="portrait-disc portrait-disc-small" aria-hidden="true" />
                <span className="portrait-initials" aria-hidden="true">
                  {profile.initials}
                </span>
                <div className="portrait-caption">
                  <span>{profile.name}</span>
                  <span>Personal portfolio</span>
                </div>
              </div>

              <dl className="profile-facts">
                <div>
                  <dt>Berbasis di</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>
                    <span className="status-dot" aria-hidden="true" />
                    {profile.availability}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <a className="scroll-cue frame" href="#certifications">
            <span>Gulir untuk melihat kredensial</span>
            <ArrowDownIcon />
          </a>
        </section>

        <section id="certifications" className="certification-section" aria-labelledby="certifications-title">
          <div className="frame">
            <div className="section-heading section-heading-light">
              <div>
                <p className="section-kicker">
                  <span>02</span>
                  Kredensial
                </p>
                <h2 id="certifications-title">
                  Belajar dengan arah,
                  <br />
                  tumbuh dengan <em>bukti.</em>
                </h2>
              </div>
              <p>
                Pilih sertifikasi yang paling relevan untuk memperlihatkan cara Anda mengasah
                keahlian dan memperdalam bidang yang ditekuni.
              </p>
            </div>

            <div className="certificate-list">
              {certifications.map((certificate) => (
                <article className="certificate-card" key={certificate.number}>
                  <span className="certificate-number">{certificate.number}</span>
                  <div className="certificate-main">
                    <p>{certificate.issuer}</p>
                    <h3>{certificate.title}</h3>
                    <p className="certificate-description">{certificate.description}</p>
                  </div>
                  <div className="certificate-year">
                    <span>Diterbitkan</span>
                    <strong>{certificate.year}</strong>
                  </div>
                </article>
              ))}
            </div>

            <p className="content-note">
              Tiga kartu ini adalah ruang untuk sertifikasi utama Anda. Ganti judul, lembaga,
              tahun, dan deskripsinya dari blok data di atas halaman ini.
            </p>
          </div>
        </section>

        <section id="about" className="about-section" aria-labelledby="about-title">
          <div className="frame about-grid">
            <div className="about-intro">
              <p className="section-kicker">
                <span>03</span>
                Biografi
              </p>
              <h2 id="about-title">
                Cerita di balik
                <br />
                setiap <em>karya.</em>
              </h2>
              <div className="about-stamp" aria-hidden="true">
                <span>Personal</span>
                <strong>01</strong>
                <span>Brand</span>
              </div>
            </div>

            <div className="about-content">
              <p className="lead-copy">
                Saya percaya portofolio yang baik tidak berhenti pada hasil akhir. Ia memberi
                ruang untuk melihat rasa ingin tahu, keputusan, dan proses yang membentuk sebuah
                karya.
              </p>
              <p>
                Gunakan bagian ini untuk memperkenalkan perjalanan Anda dengan lebih personal:
                titik awal yang membentuk minat, pengalaman yang mengubah cara pandang, serta
                arah yang sedang Anda tuju. Tulis dengan suara sendiri agar orang yang membaca
                tidak hanya mengenal apa yang Anda kerjakan, tetapi juga alasan di baliknya.
              </p>
              <p>
                Anda dapat menambahkan pengalaman profesional, proyek penting, pendidikan, atau
                momen belajar yang relevan. Pilih detail yang membantu calon kolaborator memahami
                nilai unik yang Anda bawa ke dalam setiap percakapan dan pekerjaan.
              </p>

              <dl className="biography-facts">
                <div>
                  <dt>Berbasis di</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div>
                  <dt>Fokus</dt>
                  <dd>{profile.focus}</dd>
                </div>
                <div>
                  <dt>Nilai kerja</dt>
                  <dd>Jelas, ingin tahu, dan kolaboratif</dd>
                </div>
              </dl>

              <div className="principle-list">
                {principles.map(([number, title, description]) => (
                  <article className="principle" key={number}>
                    <span>{number}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="frame contact-grid">
            <div>
              <p className="section-kicker">
                <span>04</span>
                Mari terhubung
              </p>
              <h2 id="contact-title">
                Ada ide yang ingin
                <br />
                dibawa lebih jauh?
              </h2>
            </div>

            <div className="contact-content">
              <p>
                Saya selalu terbuka untuk percakapan yang baik, peluang kolaborasi, atau sekadar
                bertukar perspektif. Kirimkan pesan dan mari mulai dari sana.
              </p>
              <a className="email-link" href={`mailto:${profile.email}`}>
                <MailIcon />
                <span>{profile.email}</span>
                <ArrowUpRightIcon />
              </a>
              <p className="contact-availability">
                <span className="status-dot" aria-hidden="true" />
                {profile.availability}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="frame footer-content">
          <p>© 2026 {profile.name}. Dibuat dengan niat baik.</p>
          <a href="#intro">
            Kembali ke atas
            <ArrowUpRightIcon />
          </a>
        </div>
      </footer>
    </div>
  );
}
