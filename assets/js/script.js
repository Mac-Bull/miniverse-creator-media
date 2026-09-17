const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-header nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', () => nav.classList.remove('open'));

const modal = document.querySelector('.modal');
document.querySelector('[data-video]').addEventListener('click', () => {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
});
modal.addEventListener('click', event => {
  if (event.target === modal || event.target.closest('button')) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
});

// English / Indonesian language switcher.
const idTranslations = new Map([
  ['Home', 'Beranda'],
  ['Creator Support', 'Dukungan Kreator'],
  ['Creators', 'Kreator'],
  ['About', 'Tentang Kami'],
  ['Stories', 'Cerita'],
  ['Join Us', 'Gabung'],
  ['Join Our Agency', 'Gabung dengan Kami'],
  ['GO LIVE', 'MULAI LIVE'],
  ['GROW', 'BERTUMBUH'],
  ['EARN', 'HASILKAN'],
  ['Turn Your Talent', 'Ubah Bakatmu'],
  ['Into a', 'Menjadi'],
  ['Live', 'Karier'],
  ['Career', 'LIVE'],
  ['is a TikTok LIVE agency helping creators grow audiences, build confident live shows, and unlock sustainable earning opportunities—with real support behind every stream.', 'adalah agensi TikTok LIVE yang membantu kreator membangun audiens, tampil lebih percaya diri, dan membuka peluang penghasilan yang berkelanjutan. Tim kami siap mendukung di setiap LIVE.'],
  ['Join as a Creator', 'Gabung sebagai Kreator'],
  ['See How It Works', 'Lihat Cara Kerjanya'],
  ['Supporting 200+ LIVE creators', 'Mendampingi 200+ kreator LIVE'],
  ['and growing', 'dan terus bertambah'],
  ['Active Creators', 'Kreator Aktif'],
  ['LIVE Hours Supported', 'Jam LIVE Didampingi'],
  ['Creator Assistance', 'Dukungan Kreator'],
  ['Creator Coaching', 'Coaching Kreator'],
  ['Growth Strategy', 'Strategi Pertumbuhan'],
  ['Community', 'Komunitas'],
  ['CREATOR SUPPORT', 'DUKUNGAN KREATOR'],
  ['Everything You Need to Thrive on LIVE', 'Semua yang Kamu Butuhkan untuk Tumbuh di LIVE'],
  ['From your first broadcast to your next milestone, our team helps you stream smarter, grow faster, and stay supported.', 'Dari LIVE pertama sampai target berikutnya, tim kami membantu kamu menyusun strategi, berkembang lebih cepat, dan tetap punya tempat untuk bertanya.'],
  ['Become a Creator →', 'Gabung sebagai Kreator →'],
  ['LIVE Onboarding', 'Onboarding LIVE'],
  ['Set up for success from your first stream.', 'Mulai LIVE pertamamu dengan persiapan yang tepat.'],
  ['One-to-one guidance to build confidence.', 'Pendampingan personal agar kamu makin percaya diri.'],
  ['Practical plans to grow your LIVE audience.', 'Strategi praktis untuk menambah penonton LIVE.'],
  ['LIVE Operations', 'Operasional LIVE'],
  ['Scheduling, moderation, and stream support.', 'Bantuan jadwal, moderasi, dan kebutuhan LIVE.'],
  ['Creator Campaigns', 'Kampanye Kreator'],
  ['Opportunities, events, and collaborations.', 'Akses ke peluang, acara, dan kolaborasi.'],
  ['Performance Insights', 'Analisis Performa'],
  ['Clear feedback backed by LIVE analytics.', 'Masukan yang jelas berdasarkan data LIVE.'],
  ['Learn More →', 'Pelajari Lebih Lanjut →'],
  ['ABOUT US', 'TENTANG KAMI'],
  ['More Than an Agency.', 'Lebih dari Sekadar Agensi.'],
  ['Your Team Behind the Stream.', 'Tim yang Mendukung Setiap LIVE-mu.'],
  ['MINIVERSE CREATOR MEDIA helps ambitious TikTok LIVE creators turn personality and consistency into real momentum. We combine hands-on coaching, data-led strategy, and responsive support so creators never have to grow alone.', 'MINIVERSE CREATOR MEDIA membantu kreator TikTok LIVE mengubah karakter dan konsistensi menjadi perkembangan nyata. Kami menggabungkan coaching langsung, strategi berbasis data, dan dukungan yang cepat agar kreator tidak perlu berkembang sendirian.'],
  ['“Your talent.', '“Bakatmu.'],
  ['Your community.', 'Komunitasmu.'],
  ['Your moment', 'Momenmu'],
  ['to go LIVE.”', 'untuk tampil LIVE.”'],
  ['Creator First', 'Kreator Utama'],
  ['Your goals, voice, and wellbeing guide every decision we make.', 'Target, karakter, dan kenyamananmu menjadi dasar setiap keputusan kami.'],
  ['Human Support', 'Dukungan Langsung'],
  ['Real people are here to coach, encourage, and help when you need it.', 'Tim kami siap memberi arahan dan membantu saat kamu membutuhkannya.'],
  ['Growth Focused', 'Fokus Bertumbuh'],
  ['Practical strategy and insights help every LIVE move you forward.', 'Strategi dan evaluasi yang jelas membuat setiap LIVE terus berkembang.'],
  ['CREATOR JOURNEYS', 'PERJALANAN KREATOR'],
  ['Real Creators. Real Momentum.', 'Kreator Nyata. Perkembangan Nyata.'],
  ['Different personalities, niches, and ambitions—supported by one creator-first LIVE agency.', 'Karakter, niche, dan tujuan yang berbeda, didukung oleh satu agensi LIVE yang mengutamakan kreator.'],
  ['Start Your Journey →', 'Mulai Perjalananmu →'],
  ['BEAUTY', 'BEAUTY'], ['Beauty & Lifestyle', 'Beauty & Lifestyle'],
  ['Community Building', 'Membangun Komunitas'],
  ['EXPLORE', 'JELAJAH'], ['Travel Creators', 'Kreator Travel'],
  ['Audience Growth', 'Pertumbuhan Audiens'],
  ['PLAY.', 'MAIN.'], ['CONNECT.', 'TERHUBUNG.'], ['Gaming Hosts', 'Host Gaming'],
  ['LIVE Development', 'Pengembangan LIVE'],
  ['MAKE', 'BUAT'], ['YOUR', 'MOMEN'], ['MOMENT', 'MU'],
  ['Entertainment', 'Hiburan'],
  ['CREATOR STORIES', 'CERITA KREATOR'],
  ['Backed by People Who Get LIVE', 'Didampingi Tim yang Paham LIVE'],
  ['“I finally have a clear plan for every LIVE. The coaching helped me feel more confident, connect with viewers, and stay consistent.”', '“Sekarang setiap LIVE punya arah yang jelas. Coaching membuat saya lebih percaya diri, lebih dekat dengan penonton, dan lebih konsisten.”'],
  ['Beauty Creator', 'Kreator Beauty'],
  ['“The team understands creators. I get practical feedback, quick answers, and real encouragement whenever I need it.”', '“Timnya memahami kebutuhan kreator. Saya mendapat masukan yang praktis, jawaban cepat, dan dukungan saat dibutuhkan.”'],
  ['Gaming Creator', 'Kreator Gaming'],
  ['“Joining Miniverse gave me structure and a community. My streams are stronger and my goals finally feel achievable.”', '“Bergabung dengan Miniverse memberi saya arah dan komunitas. LIVE saya lebih matang dan target terasa lebih mungkin dicapai.”'],
  ['Lifestyle Creator', 'Kreator Lifestyle'],
  ['HOW WE GROW TOGETHER', 'CARA KITA BERTUMBUH'],
  ['Your LIVE Journey Starts Here.', 'Perjalanan LIVE-mu Dimulai di Sini.'],
  ['Four clear steps. One committed team behind you from your application to every new milestone.', 'Empat langkah yang jelas. Satu tim mendampingimu sejak mendaftar sampai mencapai target berikutnya.'],
  ['Apply', 'Daftar'],
  ['Tell us about your personality, your niche, and what you want to achieve on TikTok LIVE.', 'Ceritakan karakter, niche, dan target yang ingin kamu capai di TikTok LIVE.'],
  ['Onboard', 'Onboarding'],
  ['Meet your creator support team and build a practical streaming plan around your goals.', 'Kenali tim pendampingmu dan susun jadwal LIVE yang sesuai dengan targetmu.'],
  ['Go LIVE', 'Mulai LIVE'],
  ['Build confidence and consistency with hands-on coaching behind every broadcast.', 'Bangun rasa percaya diri dan konsistensi dengan coaching di setiap tahap.'],
  ['Review your performance, sharpen your strategy, and keep reaching new milestones.', 'Tinjau performa, perbaiki strategi, dan capai target berikutnya.'],
  ['YOUR LIVE JOURNEY STARTS HERE', 'PERJALANAN LIVE-MU DIMULAI DI SINI'],
  ['Ready to Grow as a TikTok LIVE Creator?', 'Siap Bertumbuh sebagai Kreator TikTok LIVE?'],
  ['Join a team that supports your talent, goals, and community.', 'Bergabunglah dengan tim yang mendukung bakat, target, dan komunitasmu.'],
  ['Apply to Join', 'Daftar Sekarang'],
  ['Creator-first support. Real growth.', 'Dukungan untuk kreator. Perkembangan nyata.'],
  ['Go LIVE.', 'Mulai LIVE.'],
  ['Grow together.', 'Tumbuh bersama.'],
  ['© 2026 MINIVERSE CREATOR MEDIA. All rights reserved.', '© 2026 MINIVERSE CREATOR MEDIA. Hak cipta dilindungi.'],
  ['Creator introduction video coming soon.', 'Video pengenalan kreator akan segera hadir.']
]);

const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
  acceptNode(node) {
    const value = node.nodeValue.trim();
    if (!value || !idTranslations.has(value)) return NodeFilter.FILTER_REJECT;
    return NodeFilter.FILTER_ACCEPT;
  }
});

while (walker.nextNode()) {
  const node = walker.currentNode;
  textNodes.push({ node, english: node.nodeValue.trim() });
}

const languageButtons = document.querySelectorAll('[data-lang]');
function setLanguage(language) {
  const useIndonesian = language === 'id';
  textNodes.forEach(({ node, english }) => {
    const leading = node.nodeValue.match(/^\s*/)[0];
    const trailing = node.nodeValue.match(/\s*$/)[0];
    node.nodeValue = leading + (useIndonesian ? idTranslations.get(english) : english) + trailing;
  });
  document.documentElement.lang = useIndonesian ? 'id' : 'en';
  document.title = useIndonesian ? 'Miniverse Creator Media | Agensi TikTok LIVE' : 'Miniverse Creator Media';
  document.querySelector('meta[name="description"]').content = useIndonesian
    ? 'Miniverse Creator Media adalah agensi TikTok LIVE yang membantu kreator bertumbuh, menghasilkan, dan membangun komunitas.'
    : 'Miniverse Creator Media — a TikTok LIVE agency helping creators grow, earn, and build thriving communities.';
  languageButtons.forEach(button => {
    const active = button.dataset.lang === language;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', active);
  });
  try { localStorage.setItem('miniverse-language', language); } catch {}
}

languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('miniverse-language') || 'en'; } catch {}
setLanguage(savedLanguage === 'id' ? 'id' : 'en');

// Reveal key content as it enters the viewport.
const revealGroups = [
  '.hero-copy > *',
  '.hero-art',
  '.proof > div',
  '.section-heading > *',
  '.service-grid article',
  '.about-media',
  '.about-copy',
  '.about blockquote',
  '.about-values span',
  '.project-grid article',
  '.testimonials > .eyebrow',
  '.testimonials > h2',
  '.quote-grid article',
  '.process .steps > div',
  '.cta > div'
];

const revealItems = document.querySelectorAll(revealGroups.join(','));
revealItems.forEach((item, index) => {
  item.classList.add('reveal-item');
  item.style.setProperty('--reveal-delay', `${(index % 4) * 80}ms`);

  if (item.matches('.about-media, .cta > div:first-child')) {
    item.classList.add('reveal-left');
  }
  if (item.matches('.about blockquote, .cta > div:last-child')) {
    item.classList.add('reveal-right');
  }
});

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -45px' });

  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}
