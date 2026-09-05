// Update this content block when Yusuf adds new credentials or contact details.
const profile = {
  initials: "YG",
  name: "Yusuf Ghondur",
  role: "Teknisi IT & Content Marketing",
  company: "Barcom Solo",
  location: "Karanganyar, Jawa Tengah",
  education: "S1 Informatika - Universitas Siber Muhammadiyah Yogyakarta",
  email: "gmailanda@gmail.com",
  availability: "Terbuka untuk diskusi & kolaborasi",
  focus: "IT Support, konten, dan web development",
};

const skills = [
  {
    number: "01",
    category: "Bidang teknis",
    title: "IT Support",
    items: [
      "Perakitan dan perbaikan PC/laptop",
      "Instalasi OS dan software",
      "Troubleshooting hardware dan software",
      "Maintenance perangkat IT",
      "Dasar jaringan komputer: IP, LAN, dan sharing",
    ],
  },
  {
    number: "02",
    category: "Konten & promosi",
    title: "Content Marketing",
    items: [
      "Pembuatan konten untuk media sosial",
      "Copywriting ringan untuk promosi",
      "Pengelolaan jadwal konten",
      "Pemahaman dasar digital marketing",
      "Dokumentasi kegiatan untuk kebutuhan branding",
    ],
  },
  {
    number: "03",
    category: "Sedang dipelajari",
    title: "Pengembangan",
    items: [
      "Logika pemrograman dan algoritma",
      "Dasar web development: HTML, CSS, dan JavaScript",
      "Pengembangan tools sederhana untuk mendukung teknisi dan marketing",
    ],
  },
  {
    number: "04",
    category: "Cara bekerja",
    title: "Soft Skill",
    items: [
      "Bekerja mandiri maupun dalam tim",
      "Memadukan kebutuhan teknisi dan marketing",
      "Disiplin waktu saat kerja sambil kuliah online",
      "Cepat mempelajari hal teknis maupun non-teknis",
    ],
  },
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
            <a href="#skills">Keahlian</a>
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
                Merawat teknologi,
                <br />
                merangkai <em>cerita digital.</em>
              </h1>

              <p className="hero-introduction">
                Halo, saya <strong>{profile.name}</strong>. Saya bekerja sebagai {profile.role} di{" "}
                <strong>{profile.company}</strong>, menangani perangkat, troubleshooting, instalasi,
                sekaligus konten promosi dan branding perusahaan. Sambil bekerja, saya menempuh S1
                Informatika secara online di Universitas Siber Muhammadiyah Yogyakarta.
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

            <div className="hero-visual" aria-label={`Monogram ${profile.name}`}>
              <div className="portrait-card">
                <div className="portrait-topline">
                  <span>YUSUF GHONDUR</span>
                  <span>IT / CONTENT</span>
                </div>
                <div className="portrait-disc portrait-disc-large" aria-hidden="true" />
                <div className="portrait-disc portrait-disc-small" aria-hidden="true" />
                <span className="portrait-initials" aria-hidden="true">
                  {profile.initials}
                </span>
                <div className="portrait-caption">
                  <span>{profile.company}</span>
                  <span>Kerja & belajar</span>
                </div>
              </div>

              <dl className="profile-facts">
                <div>
                  <dt>Domisili</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div>
                  <dt>Pendidikan</dt>
                  <dd>
                    <span className="status-dot" aria-hidden="true" />
                    {profile.education}
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
                  Terus belajar,
                  <br />
                  sambil membangun <em>pengalaman.</em>
                </h2>
              </div>
              <p>
                Bagian ini disiapkan untuk mendokumentasikan kursus dan sertifikasi yang melengkapi
                perjalanan Yusuf di bidang IT, web development, dan digital marketing.
              </p>
            </div>

            <div className="certificate-list">
              <article className="certificate-card certificate-pending">
                <span className="certificate-number">--</span>
                <div className="certificate-main">
                  <p>Dalam pengembangan</p>
                  <h3>Sertifikasi lagi disiapin, fokus kuliah dan kerja dulu.</h3>
                  <p className="certificate-description">
                    Daftar kredensial akan ditambahkan bertahap seiring pembelajaran dan pengalaman
                    baru yang diperoleh.
                  </p>
                </div>
                <div className="certificate-year">
                  <span>Fokus saat ini</span>
                  <strong>Kuliah & kerja</strong>
                </div>
              </article>
            </div>

            <p className="content-note">
              Sertifikasi akan ditambahkan setelah Yusuf menyelesaikan pelatihan atau memperoleh
              kredensial yang relevan.
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
                Perjalanan yang tumbuh
                <br />
                dari rasa <em>ingin tahu.</em>
              </h2>
              <div className="about-stamp" aria-hidden="true">
                <span>Personal</span>
                <strong>01</strong>
                <span>Brand</span>
              </div>
            </div>

            <div className="about-content">
              <p className="lead-copy">
                Dari ngoprek PC sampai menyusun konten yang membuat layanan lebih mudah dikenal.
              </p>
              <p>
                Saya berasal dari Kabupaten Karanganyar, Jawa Tengah. Awalnya saya suka ngoprek PC,
                bongkar-pasang komponen, mencoba instal ulang, sampai akhirnya bekerja di Barcom Solo
                sebagai teknisi IT. Di sana saya banyak belajar tentang hardware, software, jaringan
                dasar, serta penanganan masalah teknis di lapangan.
              </p>
              <p>
                Peran saya juga berkembang ke content marketing. Saya belajar membuat konten promosi,
                mengelola media sosial, menulis caption, dan memikirkan strategi agar lebih banyak
                orang mengenal produk serta layanan perusahaan. Perpaduan dua peran ini membuat saya
                melihat bahwa IT bukan hanya soal memperbaiki perangkat, tetapi juga komunikasi dan
                branding.
              </p>
              <p>
                Untuk memperkuat dasar teknis dan mengembangkan kemampuan programming, saya melanjutkan
                S1 Informatika secara online di Universitas Siber Muhammadiyah Yogyakarta. Ke depan,
                saya ingin menjadi profesional yang mampu menangani kebutuhan teknis sekaligus memahami
                cara menyampaikan nilai produk kepada orang lain.
              </p>

              <dl className="biography-facts">
                <div>
                  <dt>Domisili</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div>
                  <dt>Pendidikan</dt>
                  <dd>{profile.education}</dd>
                </div>
                <div>
                  <dt>Fokus</dt>
                  <dd>{profile.focus}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section" aria-labelledby="skills-title">
          <div className="frame">
            <div className="section-heading section-heading-light">
              <div>
                <p className="section-kicker">
                  <span>04</span>
                  Keahlian & fokus
                </p>
                <h2 id="skills-title">
                  Teknis, konten,
                  <br />
                  dan terus <em>bertumbuh.</em>
                </h2>
              </div>
              <p>
                Perpaduan kemampuan yang Yusuf gunakan saat ini dan arah yang sedang dipelajari untuk
                mendukung karier di dunia teknologi.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.number}>
                  <div className="skill-card-topline">
                    <span>{skill.number}</span>
                    <p>{skill.category}</p>
                  </div>
                  <h3>{skill.title}</h3>
                  <ul>
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="frame contact-grid">
            <div>
              <p className="section-kicker">
                <span>05</span>
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
                Butuh bantuan teknis ringan, ingin berdiskusi soal perangkat, atau ngobrol tentang
                konten dan IT? Kirimkan pesan dan mari mulai dari sana.
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
