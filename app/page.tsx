import Image from "next/image";
import CertificateCarousel from "./certificate-carousel";
import EntranceMotion from "./entrance-motion";
import TechnologyMarquee from "./technology-marquee";
import ThemeToggle from "./theme-toggle";

// Update this content block when Yusuf adds new credentials or contact details.
const profile = {
  initials: "YG",
  name: "Yusuf Ghondur",
  role: "Teknisi IT & Content Marketing",
  company: "Barcom Solo",
  location: "Karanganyar, Jawa Tengah",
  education: "S1 Informatika - Universitas Siber Muhammadiyah Yogyakarta",
  email: "ghondursangshobar@gmail.com",
  // Replace this with Yusuf's Instagram profile URL when it is ready to publish.
  instagram: "https://www.instagram.com/mhd.ysfghsbr",
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

const credentials = [
  {
    number: "01",
    preview: "award",
    kind: "Penghargaan akademik",
    title: "Lulusan Terbaik III",
    issuer: "SMK Negeri Jumantono",
    date: "4 Mei 2026",
    value: "III",
    previewLabel: "TJKT",
    description:
      "Penghargaan sebagai Lulusan Terbaik III kelas XII TJKT 3 pada kompetensi keahlian Teknik Jaringan Komputer dan Telekomunikasi.",
  },
  {
    number: "02",
    preview: "competency",
    kind: "Uji kompetensi",
    title: "Sertifikat Uji Kompetensi TKJ",
    issuer: "PT Lintas Data Prima POP Solo",
    date: "7 April 2026",
    value: "A",
    previewLabel: "Sangat kompeten",
    description:
      "Uji kompetensi Teknik Jaringan Komputer dan Telekomunikasi dengan fokus perancangan arsitektur, layanan, perangkat lunak, dan sarana jaringan private cloud.",
  },
  {
    number: "03",
    preview: "toeic",
    kind: "Kemampuan bahasa Inggris",
    title: "TOEIC Listening & Reading",
    issuer: "ETS / Direktorat SMK",
    date: "29 April 2026",
    value: "565",
    previewLabel: "Level B1",
    description:
      "Skor TOEIC 565 untuk kemampuan Listening dan Reading, setara dengan level B1 sesuai informasi sertifikat.",
  },
];

const internship = {
  company: "Solo Technopark",
  type: "Praktik Kerja Industri",
  field: "Building and Area Development",
  period: "19 Agustus 2025 - 30 Januari 2026",
  description:
    "Menjalani Praktik Kerja Industri di kawasan sains dan teknologi Solo Technopark sebagai bagian dari pembelajaran Teknik Jaringan Komputer dan Telekomunikasi.",
};

const technologies = [
  {
    name: "PHP 8.3",
    role: "Backend fundamentals",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  },
  {
    name: "Next.js",
    role: "React framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "HTML5",
    role: "Semantic structure",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    role: "Modern interface",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "TypeScript",
    role: "Bahasa website ini",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    role: "Dasar interaksi web",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    role: "Komponen antarmuka",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    role: "Styling website ini",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Ubuntu",
    role: "Eksplorasi sistem operasi",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg",
  },
  {
    name: "Linux",
    role: "Lingkungan belajar IT",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  },
  {
    name: "OpenCode",
    role: "Asisten pengembangan AI",
    icon: "https://opencode.ai/_build/assets/preview-opencode-logo-light-square-C1O1sac-.png",
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

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 10V7a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="page-shell">
      <EntranceMotion />
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
            <a href="#experience">Pengalaman</a>
            <a href="#about">Biografi</a>
            <a href="#skills">Keahlian</a>
          </nav>

          <div className="header-actions">
            <ThemeToggle />
            <a className="header-contact" href={`mailto:${profile.email}`}>
              <span>Hubungi saya</span>
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="intro" className="hero-section" aria-labelledby="hero-title">
          <div className="hero-grid frame">
            <div className="hero-copy">
              <p className="section-kicker" data-reveal="0">
                <span>01</span>
                Profil singkat
              </p>

              <h1 id="hero-title" data-reveal="80">
                Merawat teknologi,
                <br />
                merangkai <em>cerita digital.</em>
              </h1>

              <p className="hero-introduction" data-reveal="160">
                Halo, saya <strong>{profile.name}</strong>. Saya bekerja sebagai {profile.role} di{" "}
                <strong>{profile.company}</strong>, menangani perangkat, troubleshooting, instalasi,
                sekaligus konten promosi dan branding perusahaan. Sambil bekerja, saya menempuh S1
                Informatika secara online di Universitas Siber Muhammadiyah Yogyakarta.
              </p>

              <div className="hero-actions" data-reveal="240">
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

            <div className="hero-visual" data-reveal="160" aria-label={`Monogram ${profile.name}`}>
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
            <div className="section-heading section-heading-light" data-reveal="0">
              <div>
                <p className="section-kicker">
                  <span>02</span>
                  Kredensial
                </p>
                <h2 id="certifications-title">
                  Bukti belajar,
                  <br />
                  siap <em>bertumbuh.</em>
                </h2>
              </div>
              <p>
                Kredensial yang membentuk Saya di bidang Teknik Jaringan Komputer dan
                Telekomunikasi, cloud, serta kemampuan bahasa Inggris.
              </p>
            </div>

            <div data-reveal="80">
              <CertificateCarousel labels={credentials.map((credential) => credential.title)}>
                {credentials.map((credential) => (
                  <article className="credential-card" key={credential.number}>
                    <div className={`credential-preview credential-preview-${credential.preview}`} aria-hidden="true">
                      <span className="preview-number">{credential.number}</span>
                      <span className="preview-label">Preview ringkas</span>
                      <div className="preview-seal">{credential.previewLabel}</div>
                      <strong>{credential.value}</strong>
                      <span className="preview-line" />
                      <span className="preview-line preview-line-short" />
                    </div>
                    <div className="credential-content">
                      <p>{credential.kind}</p>
                      <h3>{credential.title}</h3>
                      <p className="credential-description">{credential.description}</p>
                      <div className="credential-meta">
                        <span>{credential.issuer}</span>
                        <span>{credential.date}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </CertificateCarousel>
            </div>

            <p className="document-privacy-note">
              <LockIcon />
              Preview hanya menampilkan ringkasan publik. Dokumen asli disimpan privat dan tersedia
              untuk kebutuhan verifikasi melalui kontak.
            </p>
          </div>
        </section>

        <section id="experience" className="experience-section" aria-labelledby="experience-title">
          <div className="frame">
            <div className="section-heading" data-reveal="0">
              <div>
                <p className="section-kicker">
                  <span>03</span>
                  Pengalaman
                </p>
                <h2 id="experience-title">
                  Belajar dari
                  <br />
                  praktik <em>langsung.</em>
                </h2>
              </div>
              <p>
                Pengalaman industri yang memperluas cara Saya melihat ruang kerja, teknologi, dan
                proses di lapangan.
              </p>
            </div>

            <article className="experience-card" data-reveal="80">
              <div className="experience-preview" aria-hidden="true">
                <span>STP</span>
                <strong>PKL</strong>
                <span>2025 / 2026</span>
                <div className="experience-preview-grid" />
              </div>
              <div className="experience-content">
                <p>{internship.type}</p>
                <h3>{internship.company}</h3>
                <p className="experience-field">{internship.field}</p>
                <p>{internship.description}</p>
                <dl>
                  <div>
                    <dt>Periode</dt>
                    <dd>{internship.period}</dd>
                  </div>
                  <div>
                    <dt>Bidang</dt>
                    <dd>{internship.field}</dd>
                  </div>
                </dl>
              </div>
            </article>
          </div>
        </section>

        <section id="about" className="about-section" aria-labelledby="about-title">
          <div className="frame about-grid">
            <div className="about-intro" data-reveal="0">
              <p className="section-kicker">
                <span>04</span>
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

            <div className="about-content" data-reveal="120">
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
            <div className="section-heading section-heading-light" data-reveal="0">
              <div>
                <p className="section-kicker">
                  <span>05</span>
                  Keahlian & fokus
                </p>
                <h2 id="skills-title">
                  Teknis, konten,
                  <br />
                  dan terus <em>bertumbuh.</em>
                </h2>
              </div>
              <p>
                Perpaduan kemampuan yang Saya gunakan saat ini dan arah yang sedang dipelajari untuk
                mendukung karier di dunia teknologi.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <article className="skill-card" data-reveal={index % 2 * 100} key={skill.number}>
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

            <div className="technology-stack" data-reveal="0" aria-labelledby="technology-title">
              <div>
                <p className="technology-kicker">Di balik proses</p>
                <h3 id="technology-title">Stack web & ruang eksplorasi.</h3>
              </div>
              <TechnologyMarquee>
                {technologies.map((technology) => (
                  <article className="technology-card" key={technology.name}>
                    <div className="technology-icon">
                      <Image src={technology.icon} alt={`Logo ${technology.name}`} width={48} height={48} />
                    </div>
                    <div>
                      <h4>{technology.name}</h4>
                      <p>{technology.role}</p>
                    </div>
                  </article>
                ))}
              </TechnologyMarquee>
              <p className="technology-sources">
                Logo dari <a href="https://devicon.dev/" target="_blank" rel="noopener noreferrer">Devicon</a>
                {" / "}<a href="https://opencode.ai/brand" target="_blank" rel="noopener noreferrer">OpenCode</a>.
                {" "}OS dan alat bantu ditampilkan sebagai bagian dari eksplorasi, bukan sertifikasi keahlian.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="frame contact-grid" data-reveal="0">
            <div>
              <p className="section-kicker">
                <span>06</span>
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
              <div className="contact-links">
                <a className="email-link" href={`mailto:${profile.email}`}>
                  <MailIcon />
                  <span>{profile.email}</span>
                  <ArrowUpRightIcon />
                </a>
                <a
                  className="instagram-link"
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Buka profil Instagram Yusuf"
                >
                  <InstagramIcon />
                  <span>Instagram</span>
                  <ArrowUpRightIcon />
                </a>
              </div>
              <p className="contact-availability">
                <span className="status-dot" aria-hidden="true" />
                {profile.availability}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="frame footer-content" data-reveal="0">
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
