/* =====================================================
   DATABASE OBAT
===================================================== */

const drugs = [

    {
        name: "Paracetamol",
        generic: "Paracetamol",
        brand: "Panadol, Biogesic, Sanmol",
        category: "Obat Bebas",
        form: "Tablet, kaplet, sirup",
        strength: "500 mg",
        indication: "Membantu meredakan demam dan nyeri ringan sampai sedang.",
        usage: "Gunakan sesuai aturan pada kemasan atau anjuran tenaga kesehatan.",
        sideEffects: "Mual, ruam kulit, atau gangguan hati terutama jika digunakan berlebihan.",
        contraindication: "Perhatian pada pasien dengan gangguan hati atau riwayat alergi terhadap paracetamol.",
        storage: "Simpan di tempat kering dan terlindung dari panas berlebih.",
        safety: "Jangan menggunakan melebihi dosis yang dianjurkan."
    },

    {
        name: "Amoxicillin",
        generic: "Amoxicillin",
        brand: "Amoxsan, Hufanoxil",
        category: "Obat Keras",
        form: "Kapsul, tablet, sirup",
        strength: "500 mg",
        indication: "Antibiotik untuk mengatasi infeksi bakteri tertentu.",
        usage: "Digunakan sesuai resep dan petunjuk dokter.",
        sideEffects: "Mual, diare, ruam, atau reaksi alergi.",
        contraindication: "Tidak digunakan pada pasien dengan alergi terhadap penisilin atau komponen obat.",
        storage: "Simpan sesuai petunjuk pada kemasan.",
        safety: "Antibiotik harus digunakan sesuai resep. Jangan menggunakan sisa antibiotik untuk penyakit lain."
    },

    {
        name: "Ibuprofen",
        generic: "Ibuprofen",
        brand: "Proris, Bufect",
        category: "Obat Bebas Terbatas",
        form: "Tablet, kaplet, sirup",
        strength: "200 mg, 400 mg",
        indication: "Membantu meredakan nyeri dan demam serta mengurangi peradangan.",
        usage: "Gunakan sesuai dosis pada kemasan atau anjuran tenaga kesehatan.",
        sideEffects: "Nyeri lambung, mual, muntah, atau gangguan pencernaan.",
        contraindication: "Perhatian pada pasien dengan riwayat tukak lambung, gangguan ginjal, atau alergi NSAID.",
        storage: "Simpan pada suhu ruang dan tempat kering.",
        safety: "Sebaiknya digunakan setelah makan jika dianjurkan pada etiket."
    },

    {
        name: "Cetirizine",
        generic: "Cetirizine hydrochloride",
        brand: "Cetirizine, Incidal",
        category: "Obat Keras",
        form: "Tablet, sirup",
        strength: "10 mg",
        indication: "Membantu mengurangi gejala alergi seperti bersin, pilek, dan gatal.",
        usage: "Gunakan sesuai petunjuk dokter atau tenaga kesehatan.",
        sideEffects: "Mengantuk, lelah, mulut kering.",
        contraindication: "Perhatian pada pasien dengan gangguan ginjal.",
        storage: "Simpan pada tempat kering dan suhu ruang.",
        safety: "Dapat menyebabkan kantuk pada sebagian orang."
    },

    {
        name: "Omeprazole",
        generic: "Omeprazole",
        brand: "Losec, Omez",
        category: "Obat Keras",
        form: "Kapsul",
        strength: "20 mg",
        indication: "Mengurangi produksi asam lambung pada kondisi tertentu.",
        usage: "Digunakan sesuai resep atau petunjuk tenaga kesehatan.",
        sideEffects: "Sakit kepala, mual, diare atau konstipasi.",
        contraindication: "Perhatian pada pasien dengan gangguan hati atau penggunaan obat tertentu.",
        storage: "Simpan dalam wadah tertutup pada tempat kering.",
        safety: "Jangan menggunakan secara terus-menerus tanpa evaluasi tenaga kesehatan."
    },

    {
        name: "Antasida",
        generic: "Aluminium hydroxide + Magnesium hydroxide",
        brand: "Antasida Doen, Mylanta",
        category: "Obat Bebas",
        form: "Tablet kunyah, suspensi",
        strength: "Bervariasi berdasarkan produk",
        indication: "Membantu menetralkan asam lambung dan meredakan gejala maag.",
        usage: "Gunakan sesuai petunjuk pada kemasan.",
        sideEffects: "Konstipasi atau diare tergantung komposisi.",
        contraindication: "Perhatian pada pasien dengan gangguan ginjal.",
        storage: "Simpan pada tempat kering dan terlindung dari panas.",
        safety: "Dapat berinteraksi dengan beberapa obat lain sehingga perlu memperhatikan jarak penggunaan."
    },

    {
        name: "Loratadine",
        generic: "Loratadine",
        brand: "Claritin",
        category: "Obat Bebas Terbatas",
        form: "Tablet, sirup",
        strength: "10 mg",
        indication: "Membantu meredakan gejala alergi.",
        usage: "Gunakan sesuai aturan pada kemasan.",
        sideEffects: "Sakit kepala, mengantuk, atau mulut kering.",
        contraindication: "Perhatian pada gangguan hati.",
        storage: "Simpan pada suhu ruang.",
        safety: "Jangan melebihi dosis yang dianjurkan."
    },

    {
        name: "Aspirin",
        generic: "Acetylsalicylic acid",
        brand: "Aspirin",
        category: "Obat Bebas Terbatas",
        form: "Tablet",
        strength: "80 mg, 100 mg, 500 mg",
        indication: "Digunakan untuk indikasi tertentu sesuai dosis dan anjuran tenaga kesehatan.",
        usage: "Gunakan sesuai petunjuk.",
        sideEffects: "Iritasi lambung, mual, dan peningkatan risiko perdarahan.",
        contraindication: "Perhatian pada pasien dengan gangguan perdarahan atau alergi salisilat.",
        storage: "Simpan dalam wadah tertutup dan kering.",
        safety: "Tidak semua orang cocok menggunakan aspirin."
    },

    {
        name: "Diclofenac",
        generic: "Diclofenac sodium",
        brand: "Voltaren",
        category: "Obat Keras",
        form: "Tablet, gel",
        strength: "25 mg, 50 mg",
        indication: "Membantu mengurangi nyeri dan peradangan.",
        usage: "Gunakan sesuai resep atau anjuran tenaga kesehatan.",
        sideEffects: "Gangguan lambung, mual, dan sakit kepala.",
        contraindication: "Perhatian pada pasien dengan penyakit lambung, ginjal, atau jantung.",
        storage: "Simpan pada suhu ruang.",
        safety: "Gunakan sesuai dosis dan durasi yang dianjurkan."
    },

    {
        name: "Loperamide",
        generic: "Loperamide hydrochloride",
        brand: "Imodium",
        category: "Obat Bebas Terbatas",
        form: "Tablet, kapsul",
        strength: "2 mg",
        indication: "Membantu mengurangi frekuensi buang air besar pada diare tertentu.",
        usage: "Gunakan sesuai petunjuk kemasan.",
        sideEffects: "Konstipasi, kram perut, atau mual.",
        contraindication: "Tidak digunakan sembarangan pada diare dengan kondisi tertentu.",
        storage: "Simpan pada tempat kering.",
        safety: "Jika diare berat atau disertai tanda bahaya, konsultasikan dengan tenaga kesehatan."
    },

    {
        name: "Vitamin C",
        generic: "Ascorbic acid",
        brand: "Vitacimin, CDR",
        category: "Obat Bebas",
        form: "Tablet, kaplet, effervescent",
        strength: "Bervariasi",
        indication: "Memenuhi kebutuhan vitamin C.",
        usage: "Gunakan sesuai petunjuk pada kemasan.",
        sideEffects: "Gangguan pencernaan pada penggunaan dosis tinggi.",
        contraindication: "Perhatian pada pasien dengan kondisi tertentu seperti riwayat batu ginjal.",
        storage: "Simpan pada tempat kering dan terlindung dari kelembapan.",
        safety: "Penggunaan dosis tinggi tidak selalu memberikan manfaat tambahan."
    },

    {
        name: "Dextromethorphan",
        generic: "Dextromethorphan",
        brand: "Vicks Formula 44",
        category: "Obat Bebas Terbatas",
        form: "Sirup, tablet",
        strength: "Bervariasi",
        indication: "Membantu meredakan batuk tertentu.",
        usage: "Gunakan sesuai petunjuk kemasan.",
        sideEffects: "Mengantuk, pusing, atau mual.",
        contraindication: "Perhatian terhadap interaksi dengan obat tertentu.",
        storage: "Simpan pada suhu ruang.",
        safety: "Jangan menggunakan melebihi dosis yang dianjurkan."
    },

    {
        name: "Metformin",
        generic: "Metformin hydrochloride",
        brand: "Glucophage",
        category: "Obat Keras",
        form: "Tablet",
        strength: "500 mg, 850 mg",
        indication: "Digunakan dalam pengelolaan diabetes melitus tipe 2 sesuai anjuran dokter.",
        usage: "Gunakan sesuai resep dokter.",
        sideEffects: "Mual, diare, nyeri perut.",
        contraindication: "Perhatian pada gangguan ginjal berat.",
        storage: "Simpan pada suhu ruang dan tempat kering.",
        safety: "Penggunaan harus mengikuti pemantauan tenaga kesehatan."
    },

    {
        name: "Amlodipine",
        generic: "Amlodipine",
        brand: "Norvask",
        category: "Obat Keras",
        form: "Tablet",
        strength: "5 mg, 10 mg",
        indication: "Digunakan untuk membantu mengendalikan tekanan darah dan kondisi tertentu pada jantung.",
        usage: "Gunakan sesuai resep dokter.",
        sideEffects: "Pusing, sakit kepala, atau pembengkakan pada kaki.",
        contraindication: "Perhatian pada kondisi kardiovaskular tertentu.",
        storage: "Simpan pada suhu ruang.",
        safety: "Jangan menghentikan obat resep tanpa berkonsultasi."
    },

    {
        name: "Furosemide",
        generic: "Furosemide",
        brand: "Lasix",
        category: "Obat Keras",
        form: "Tablet, injeksi",
        strength: "40 mg",
        indication: "Digunakan sebagai diuretik pada kondisi tertentu.",
        usage: "Gunakan sesuai resep dokter.",
        sideEffects: "Peningkatan frekuensi buang air kecil, pusing, dan perubahan elektrolit.",
        contraindication: "Perhatian pada gangguan elektrolit dan ginjal.",
        storage: "Simpan sesuai petunjuk produk.",
        safety: "Penggunaan membutuhkan pengawasan tenaga kesehatan."
    },

    {
        name: "Salbutamol",
        generic: "Salbutamol",
        brand: "Ventolin",
        category: "Obat Keras",
        form: "Tablet, sirup, inhaler",
        strength: "Bervariasi",
        indication: "Membantu meredakan bronkospasme pada kondisi tertentu.",
        usage: "Gunakan sesuai petunjuk dokter.",
        sideEffects: "Tremor, jantung berdebar, atau sakit kepala.",
        contraindication: "Perhatian pada penyakit jantung tertentu.",
        storage: "Simpan sesuai petunjuk kemasan.",
        safety: "Penggunaan inhaler harus dilakukan dengan teknik yang benar."
    },

    {
        name: "Mefenamic Acid",
        generic: "Mefenamic acid",
        brand: "Ponstan",
        category: "Obat Keras",
        form: "Tablet, kapsul",
        strength: "500 mg",
        indication: "Digunakan untuk mengatasi nyeri tertentu.",
        usage: "Gunakan sesuai resep atau petunjuk tenaga kesehatan.",
        sideEffects: "Mual, gangguan lambung, diare.",
        contraindication: "Perhatian pada pasien dengan riwayat tukak lambung.",
        storage: "Simpan pada tempat kering.",
        safety: "Gunakan sesuai dosis dan durasi yang diberikan."
    },

    {
        name: "Domperidone",
        generic: "Domperidone",
        brand: "Motilium",
        category: "Obat Keras",
        form: "Tablet, sirup",
        strength: "10 mg",
        indication: "Digunakan pada kondisi tertentu sesuai pertimbangan tenaga kesehatan.",
        usage: "Gunakan sesuai resep dokter.",
        sideEffects: "Mulut kering, sakit kepala, atau efek lainnya.",
        contraindication: "Perhatian pada pasien dengan gangguan jantung tertentu.",
        storage: "Simpan pada suhu ruang.",
        safety: "Tidak digunakan tanpa pertimbangan tenaga kesehatan."
    },

    {
        name: "Clotrimazole",
        generic: "Clotrimazole",
        brand: "Canesten",
        category: "Obat Bebas Terbatas",
        form: "Krim, tablet vaginal",
        strength: "1%",
        indication: "Digunakan untuk infeksi jamur tertentu.",
        usage: "Gunakan sesuai petunjuk produk.",
        sideEffects: "Iritasi atau rasa terbakar pada area penggunaan.",
        contraindication: "Perhatian pada pasien dengan alergi terhadap komponen.",
        storage: "Simpan pada suhu ruang.",
        safety: "Gunakan sesuai lama penggunaan yang dianjurkan."
    },

    {
        name: "Povidone Iodine",
        generic: "Povidone iodine",
        brand: "Betadine",
        category: "Obat Bebas",
        form: "Cairan antiseptik",
        strength: "10%",
        indication: "Antiseptik untuk penggunaan pada kulit sesuai petunjuk.",
        usage: "Gunakan sesuai petunjuk pada kemasan.",
        sideEffects: "Iritasi atau reaksi kulit pada sebagian orang.",
        contraindication: "Perhatian pada alergi atau kondisi tiroid tertentu.",
        storage: "Simpan pada tempat sejuk dan tertutup.",
        safety: "Untuk penggunaan luar dan hindari kontak dengan mata."
    }

];


/* =====================================================
   DATA ARTIKEL
===================================================== */

const articles = {

    etiket: {
        title: "Cara Membaca Etiket Obat",
        content: `
            <p>
                Etiket obat memberikan informasi penting agar obat dapat digunakan
                dengan benar.
            </p>

            <h3>Informasi yang perlu diperhatikan</h3>

            <ul>
                <li>Nama obat.</li>
                <li>Kekuatan obat.</li>
                <li>Aturan dan waktu penggunaan.</li>
                <li>Jumlah obat.</li>
                <li>Nama pasien jika terdapat pada etiket.</li>
                <li>Peringatan khusus.</li>
            </ul>

            <h3>Tips</h3>

            <p>
                Bacalah etiket sebelum menggunakan obat dan jangan ragu bertanya
                kepada apoteker apabila ada informasi yang belum dipahami.
            </p>
        `
    },

    simpan: {
        title: "Cara Menyimpan Obat yang Benar",
        content: `
            <p>
                Penyimpanan yang tepat membantu menjaga mutu obat.
            </p>

            <ul>
                <li>Simpan sesuai suhu yang tercantum pada kemasan.</li>
                <li>Hindarkan dari panas dan kelembapan berlebih.</li>
                <li>Simpan dalam wadah aslinya jika memungkinkan.</li>
                <li>Jauhkan dari jangkauan anak-anak.</li>
                <li>Perhatikan tanggal kedaluwarsa.</li>
            </ul>
        `
    },

    generik: {
        title: "Apa Itu Obat Generik?",
        content: `
            <p>
                Obat generik merupakan obat yang menggunakan nama zat aktifnya
                dan memenuhi persyaratan mutu, keamanan, serta khasiat sesuai
                ketentuan yang berlaku.
            </p>

            <h3>Contoh</h3>

            <p>
                Paracetamol merupakan nama generik dari zat aktif yang terdapat
                pada berbagai produk obat dengan nama dagang berbeda.
            </p>
        `
    },

    bebas: {
        title: "Perbedaan Obat Bebas dan Obat Keras",
        content: `
            <p>
                Obat bebas pada umumnya dapat diperoleh tanpa resep dan memiliki
                simbol lingkaran hijau pada kemasan.
            </p>

            <p>
                Obat keras memiliki pengawasan lebih ketat dan penggunaannya
                berdasarkan resep dokter.
            </p>

            <h3>Yang perlu diingat</h3>

            <p>
                Tidak berarti obat bebas dapat digunakan tanpa memperhatikan
                dosis, aturan pakai, kontraindikasi, dan peringatan.
            </p>
        `
    },

    tigakali: {
        title: "Cara Menggunakan Obat 3 Kali Sehari",
        content: `
            <p>
                Aturan penggunaan tiga kali sehari berarti obat digunakan
                sebanyak tiga kali dalam satu hari sesuai petunjuk resep atau
                tenaga kesehatan.
            </p>

            <h3>Perhatikan</h3>

            <p>
                Waktu penggunaan dapat bergantung pada jenis obat. Jangan
                menentukan jadwal sendiri apabila etiket atau resep memberikan
                instruksi khusus.
            </p>
        `
    },

    antibiotik: {
        title: "Pentingnya Menggunakan Antibiotik Sesuai Resep",
        content: `
            <p>
                Antibiotik digunakan untuk mengatasi infeksi bakteri tertentu.
                Antibiotik tidak digunakan untuk mengobati semua jenis penyakit.
            </p>

            <h3>Hal penting</h3>

            <ul>
                <li>Gunakan sesuai resep.</li>
                <li>Ikuti dosis dan lama penggunaan.</li>
                <li>Jangan berbagi antibiotik dengan orang lain.</li>
                <li>Jangan menggunakan sisa antibiotik untuk penyakit lain.</li>
            </ul>
        `
    },

    lasa: {
        title: "Apa Itu Obat LASA?",
        content: `
            <p>
                LASA merupakan singkatan dari Look-Alike Sound-Alike, yaitu
                obat-obatan yang memiliki kemiripan nama, pengucapan, atau
                tampilan sehingga berpotensi menyebabkan kesalahan.
            </p>

            <h3>Contoh pencegahan</h3>

            <p>
                Perhatikan nama obat, kekuatan, bentuk sediaan, dan etiket
                sebelum obat diberikan atau digunakan.
            </p>
        `
    },

    expired: {
        title: "Cara Mengecek Tanggal Kedaluwarsa Obat",
        content: `
            <p>
                Tanggal kedaluwarsa menunjukkan batas waktu yang ditetapkan
                berdasarkan kondisi penyimpanan yang sesuai.
            </p>

            <h3>Yang perlu dilakukan</h3>

            <ul>
                <li>Periksa tulisan EXP atau ED pada kemasan.</li>
                <li>Pastikan tanggal masih berlaku.</li>
                <li>Jangan menggunakan obat yang sudah kedaluwarsa.</li>
                <li>Perhatikan kondisi kemasan dan obat.</li>
            </ul>
        `
    }

};


/* =====================================================
   NAVIGATION
===================================================== */

function showPage(pageId) {

    // Cek apakah pengguna sudah login
    const isLoggedIn = sessionStorage.getItem("farmasikuLoggedIn") === "true";

    // Jika belum login dan mencoba membuka halaman selain login
    if (pageId !== "login" && !isLoggedIn) {
        alert("Silakan login terlebih dahulu.");
        pageId = "login";
    }

    // Sembunyikan semua halaman
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    // Tampilkan halaman yang dipilih
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    const navMenu = document.getElementById("navMenu");

    if (navMenu) {
        navMenu.classList.remove("show");
    }

    // Jika membuka halaman pencarian
    if (pageId === "search") {
        renderDrugs(drugs);
    }
}


/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {

    const menu = document.getElementById("navMenu");

    menu.classList.toggle("show");

}


/* =====================================================
   RENDER DRUGS
===================================================== */

function renderDrugs(data, targetId = "drugList") {

    const container = document.getElementById(targetId);

    if (!container) return;

    if (data.length === 0) {

        container.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:50px;color:#78918f">
                <i class="fa-solid fa-magnifying-glass"
                   style="font-size:35px;margin-bottom:15px;"></i>

                <h3>Obat tidak ditemukan</h3>

                <p>
                    Coba gunakan kata kunci lain.
                </p>
            </div>
        `;

        return;
    }


    container.innerHTML = data.map((drug, index) => `

        <div class="drug-card"
             onclick="showDrugDetail(${drugs.indexOf(drug)})">

            <div class="drug-icon">
                <i class="fa-solid fa-pills"></i>
            </div>

            <h3>${drug.name}</h3>

            <p>
                ${drug.generic}
            </p>

            <span class="drug-tag">
                ${drug.category}
            </span>

        </div>

    `).join("");
}


/* =====================================================
   POPULAR DRUGS
===================================================== */

function renderPopularDrugs() {

    const popular = drugs.slice(0, 8);

    renderDrugs(popular, "popularDrugs");

}


/* =====================================================
   SEARCH DRUG
===================================================== */

function searchDrug() {

    const keyword =
        document.getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const category =
        document.getElementById("categoryFilter")
        .value;


    const filtered = drugs.filter(drug => {

        const matchesKeyword =
            drug.name.toLowerCase().includes(keyword) ||
            drug.generic.toLowerCase().includes(keyword) ||
            drug.brand.toLowerCase().includes(keyword);

        const matchesCategory =
            category === "all" ||
            drug.category === category;

        return matchesKeyword && matchesCategory;

    });


    document.getElementById("resultCount").textContent =
        `${filtered.length} obat ditemukan`;

    renderDrugs(filtered);

}


/* =====================================================
   DRUG DETAIL
===================================================== */

function showDrugDetail(index) {

    const drug = drugs[index];

    if (!drug) return;


    const container =
        document.getElementById("drugDetailContent");


    container.innerHTML = `

        <div class="drug-detail-card">

            <div class="detail-header">

                <div class="detail-icon">
                    <i class="fa-solid fa-pills"></i>
                </div>

                <div>

                    <h1>${drug.name}</h1>

                    <p>
                        ${drug.generic}
                    </p>

                    <span class="drug-tag">
                        ${drug.category}
                    </span>

                </div>

            </div>


            <div class="detail-body">

                <div class="detail-info-grid">

                    <div class="info-box">
                        <h4>Nama Obat</h4>
                        <p>${drug.name}</p>
                    </div>

                    <div class="info-box">
                        <h4>Nama Generik</h4>
                        <p>${drug.generic}</p>
                    </div>

                    <div class="info-box">
                        <h4>Contoh Nama Dagang</h4>
                        <p>${drug.brand}</p>
                    </div>

                    <div class="info-box">
                        <h4>Golongan Obat</h4>
                        <p>${drug.category}</p>
                    </div>

                    <div class="info-box">
                        <h4>Bentuk Sediaan</h4>
                        <p>${drug.form}</p>
                    </div>

                    <div class="info-box">
                        <h4>Kekuatan</h4>
                        <p>${drug.strength}</p>
                    </div>

                </div>


                <div class="detail-section">

                    <h3>
                        <i class="fa-solid fa-stethoscope"></i>
                        Indikasi / Kegunaan
                    </h3>

                    <p>
                        ${drug.indication}
                    </p>

                </div>


                <div class="detail-section">

                    <h3>
                        <i class="fa-solid fa-clock"></i>
                        Cara Penggunaan Secara Umum
                    </h3>

                    <p>
                        ${drug.usage}
                    </p>

                </div>


                <div class="detail-section">

                    <h3>
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        Efek Samping
                    </h3>

                    <p>
                        ${drug.sideEffects}
                    </p>

                </div>


                <div class="detail-section">

                    <h3>
                        <i class="fa-solid fa-ban"></i>
                        Kontraindikasi / Perhatian
                    </h3>

                    <p>
                        ${drug.contraindication}
                    </p>

                </div>


                <div class="detail-section">

                    <h3>
                        <i class="fa-solid fa-box"></i>
                        Cara Penyimpanan
                    </h3>

                    <p>
                        ${drug.storage}
                    </p>

                </div>


                <div class="detail-section">

                    <h3>
                        <i class="fa-solid fa-shield-heart"></i>
                        Informasi Keamanan
                    </h3>

                    <p>
                        ${drug.safety}
                    </p>

                </div>


                <div class="warning-box">

                    <i class="fa-solid fa-circle-info"></i>

                    <strong>Perhatian:</strong>

                    Informasi pada halaman ini hanya untuk edukasi.
                    Penggunaan obat harus mengikuti informasi resmi,
                    resep, dan arahan dokter atau apoteker.

                </div>

            </div>

        </div>

    `;


    showPage("drugDetail");

}


/* =====================================================
   ARTICLES
===================================================== */

function openArticle(articleId) {

    const article = articles[articleId];

    if (!article) return;


    document.getElementById("articleContent").innerHTML = `

        <span style="
            color:#39a99b;
            font-size:11px;
            font-weight:700;
            letter-spacing:1.5px;
        ">
            ARTIKEL EDUKASI
        </span>

        <h1>
            ${article.title}
        </h1>

        ${article.content}

        <div class="warning-box">

            <i class="fa-solid fa-circle-info"></i>

            Artikel ini merupakan informasi edukasi umum.
            Untuk kondisi khusus, konsultasikan dengan dokter atau apoteker.

        </div>

    `;


    showPage("articleDetail");

}


/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    renderPopularDrugs();

    renderDrugs(drugs);

});
// ================= LOGIN =================

function loginUser(event) {

    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (email === "" || password === "") {
        alert("Email dan password harus diisi.");
        return;
    }

    // Menyimpan status bahwa pengguna sudah login
    sessionStorage.setItem("farmasikuLoggedIn", "true");

    alert("Login berhasil!");

    // Masuk ke Beranda
    showPage("home");
}