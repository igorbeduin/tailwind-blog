import article4 from "../assets/imgs/thumb_article4.png";
import article12 from "../assets/imgs/thumb_article12.png";
import article14 from "../assets/imgs/thumb_article14.png";
import article15 from "../assets/imgs/thumb_article15.png";
import article17 from "../assets/imgs/thumb_article17.png";
import article18 from "../assets/imgs/thumb_article18.png";
import article19 from "../assets/imgs/thumb_article19.png";
import article20 from "../assets/imgs/thumb_article20.png";
import article21 from "../assets/imgs/thumb_article21.png";
import article22 from "../assets/imgs/thumb_article22.png";
import article23 from "../assets/imgs/thumb_article23.png";
import article24 from "../assets/imgs/thumb_article24.png";
import article25 from "../assets/imgs/thumb_article25.png";
import article26 from "../assets/imgs/thumb_article26.png";
import article27 from "../assets/imgs/thumb_article27.png";
import article28 from "../assets/imgs/thumb_article28.png";
import article29 from "../assets/imgs/thumb_article29.png";
import article30 from "../assets/imgs/thumb_article30.png";
import article31 from "../assets/imgs/thumb_article31.png";

interface ArticleInterface {
    title: string,
    subtitle?: string,
    year: number,
    month: number,
    day?: number,
    img?: string,
    category?: string,
    
}

const articles: Array<ArticleInterface> = [
    {
        title: "Eksplorasi design untuk melamar pekerjaan UI Designer",
        subtitle: "Belum pernah mengerjakan project tapi sering melakukan eksplorasi design, bisa kah melamar pekerjaan sebagai designer?",
        year: 2022,
        month: 1,
        day: 11,
        img: article20,
        category: "main"
    },
    {
        title: "Mungkin yang kamu butuhkan saat ini bukan lagi latihan tapi terjun ke Industri",
        year: 2022,
        month: 3,
        day: 27,
        img: article30,
        category: "main"
    },
    {
        title: "Proses membuat layout dan komposisi pada UI Design",
        year: 2022,
        month: 2,
        day: 15,
        img: article24,
        category: "main"
    },
    {
        title: "Apakah menggunakan Grid akan membatasi kreatifitas UI Designer?",
        year: 2021,
        month: 8,
        day: 11,
        img: article12,
        category: "main"
    },
    {
        title: "Membuat kontrak project design dengan klien",
        subtitle: "Kontrak project adalah perjanjian tertulis untuk menjamin pekerja dan pemberi kerja berada di posisi aman dan tidak saling mencurangi.",
        year: 2022,
        month: 1,
        day: 24,
        img: article23,
        category: "pilihan editor"
    },
    {
        title: "Berlatih UX Writing dengan Prinsip Dasar Microcopy",
        subtitle: "Clear, Concise, Consistent dan Functional, prinsip dasar microcopy sebagai panduan menulis UX Writing",
        year: 2021,
        month: 12,
        day: 22,
        img: article15,
        category: "pilihan editor"
    },
    {
        title: "Cara memakai inspirasi dari referensi",
        subtitle: "Cari tahu apa yang membuat nya bagus, ambil lalu terapkan pada design mu.",
        year: 2021,
        month: 2,
        day: 24,
        img: article4,
        category: "pilihan editor"
    },
    {
        title: "Kadang sebuah UX perlu dibikin susah",
        subtitle: "UX enggak melulu tentang membuat alur yang serba mudah dan cepat. Ada beberapa bagian dari sebuah produk yang musti dibikin susah",
        year: 2021,
        month: 12,
        day: 21,
        img: article14,
        category: "pilihan editor"
    },
    {
        title: "Referensi Design 02: Halaman detail artikel pada blog",
        subtitle: "Beberapa referensi halaman artikel yang bis kamu terapkan untuk design blog pada project atau blog pribadimu.",
        year: 2022,
        month: 3,
        day: 20,
        img: article28,
        category: "artikel terbaru"
    },
    {
        title: "Referensi Design 01: Bold Number pada design panding page",
        subtitle: "Beberapa layout favorit saya untuk menampilkan angka pencapaian atau statistik pada design landing page",
        year: 2022,
        month: 3,
        day: 19,
        img: article27,
        category: "artikel terbaru"
    },
    {
        title: "Bingung saat eksplorasi design? mungkin kurang fokus",
        subtitle: "Jika kamu bingung eksplorasi design, saya harap artikel ini bisa membantu mu.",
        year: 2022,
        month: 4,
        day: 10,
        img: article31,
        category: "artikel terbaru"
    },
    {
        title: "Kapan menggunakan Switch atau Single Checkbox?",
        subtitle: "Kemiripan konsep Switch dan Single Checkbox sering membuat bingung designer untuk menentukan kapan menggunakan nya.",
        year: 2022,
        month: 3,
        day: 25,
        img: article29,
        category: "artikel terbaru"
    },
    {
        title: "Pertimbangkan branding sebelum menambahkan faktor delightful",
        subtitle: "Menambahkan faktor delightful tidak hanya sekedar menambahkan sesuatu yang menyenangkan tapi juga harus selaras dengan branding",
        year: 2022,
        month: 3,
        day: 11,
        img: article26,
        category: "artikel terbaru"
    },
    {
        title: "Proses design dalam pembuatan data visual",
        subtitle: "Ada tahapan sebelum ke pemilihan grafik, seperti mengetahui siapa yang akan membaca data",
        year: 2022,
        month: 1,
        day: 23,
        img: article22,
        category: "artikel terbaru"
    },
    {
        title: "Membuat Kumpulan referensi UI Design sebagai alat bantu saat membuat design",
        subtitle: "Cara saya mengumpulkan dan menggunakan referensi sebagai alat bantu saat membuat UI design.",
        year: 2022,
        month: 1,
        day: 20,
        img: article21,
        category: "artikel lainnya"
    },
    {
        title: "Beberapa pertanydan saat memulai project design dengan klien",
        subtitle: "Cari tahu bisnisnya, Cari tahu apa yang ditawarkan kepada customer, cari tahu kebutuhan project nya.",
        year: 2022,
        month: 2,
        day: 26,
        img: article25,
        category: "artikel lainnya"
    },
    {
        title: "Pembuatan UI Design harus selalu pakai riset?",
        subtitle: "Apakah mengubah bentuk toombol dari kotak menjadi rounded juga harus menggunakan riset? Terlalu memakan waktu enggak sih?",
        year: 2022,
        month: 1,
        day: 8,
        img: article19,
        category: "artikel lainnya"
    },
    {
        title: "UI Designer sebaiknya memahami bisnis klien",
        subtitle: "Memahami bisnis dan mengerti kebutuhan klien adalah pndasi awal untuk membuat design yang baik",
        year: 2022,
        month: 1,
        day: 5,
        img: article18,
        category: "artikel lainnya"
    },
    {
        title: "Handover File Design Website ke Developer",
        subtitle: "UI/UX tidak hanya tentang memudahkan user atau pengguna tapi juga memudahkan rekan kerja seperti developer",
        year: 2022,
        month: 1,
        day: 2,
        img: article17,
        category: "artikel lainnya"
    },
    {
        title: "Langkah Membuat Dashboard Responsive",
        year: 2021,
        month: 12,
        day: 26,
        category: "arsip 2021"
    },
    {
        title: "Belajar pola design dari mencoba aplikasi",
        year: 2021,
        month: 8,
        day: 13,
        category: "arsip 2021"
    },
    {
        title: "Cara cepat belajar design landing page",
        year: 2021,
        month: 7,
        day: 27,
        category: "arsip 2021"
    },
    {
        title: "Eksplorasi design presentasi dengan",
        year: 2021,
        month: 4,
        day: 13,
        category: "arsip 2021"
    },
    {
        title: "Mengenari benar dan salah pada UI Design",
        year: 2021,
        month: 3,
        day: 16,
        category: "arsip 2021"
    },
    {
        title: "Tentang membuat design responsive",
        year: 2021,
        month: 3,
        day: 15,
        category: "arsip 2021"
    },
    {
        title: "Tentang Creativity Block pada UI Designer",
        year: 2021,
        month: 3,
        day: 5,
        category: "arsip 2021"
    },
    {
        title: "Memilih foto yang cocok untuk desain website",
        year: 2021,
        month: 3,
        day: 1,
        category: "arsip 2021"
    },
    {
        title: "Membuat Desain header yang proporsional",
        year: 2021,
        month: 2,
        day: 28,
        category: "arsip 2021"
    },
    {
        title: "Sebaiknya Belajar UI Design mulai dari mana?",
        year: 2021,
        month: 23,
        day: 2,
        category: "arsip 2021"
    },
    {
        title: "Beberapa Pertanyaan tentang terjun di industri UI/UX",
        year: 2021,
        month: 2,
        day: 21,
        category: "arsip 2021"
    },
    {
        title: "Dari Website Programmer Menjadi UI Designer",
        year: 2021,
        month: 2,
        day: 18,
        category: "arsip 2021"
    },
];

export default articles;