/* ==========================================================================
   DATABASE SOAL TIU CPNS (KEMAMPUAN VERBAL - ANTONIM)
   Isilah variabel questionDatabase ini dengan daftar soal Anda.
   Sistem akan otomatis mengambil 10 soal pertama untuk versi Trial.
   ========================================================================== */

const questionDatabase = [
    {
        category: "TIU - Antonim",
        question: "ABSOLUT >< ...",
        options: ["Mutlak", "Terbatas", "Bebas", "Pasti"],
        correctIndex: 1, // Index 1 adalah B (Terbatas)
        explanation: "Menurut KBBI, 'absolut' berarti mutlak, tidak terbatas, atau sepenuhnya[cite: 6]. Maka antonim (lawan kata) yang paling tepat secara keilmuan adalah 'terbatas' atau bersyarat[cite: 7].",
        breakdowns: [
            "<b>Mutlak:</b> Mutlak adalah sinonim dari absolut (tidak bersyarat, penuh)[cite: 5].",
            "<b>Terbatas:</b> Jawaban Benar. Lawan kata yang paling tepat secara keilmuan[cite: 6, 7].",
            "<b>Bebas:</b> Bebas memiliki kedekatan makna dengan absolut (tidak terikat), bukan lawan katanya[cite: 8].",
            "<b>Pasti:</b> Pasti juga merupakan sinonim dari absolut (kepastian yang mutlak)[cite: 9]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "PROGRESIF >< ...",
        options: ["Stagnan", "Regresif", "Agresif", "Maju"],
        correctIndex: 1, 
        explanation: "'Progresif' berarti ke arah kemajuan; berhaluan ke arah perbaikan[cite: 13]. Lawan kata mutlaknya dalam ilmu bahasa adalah 'regresif' (bersifat mundur)[cite: 14].",
        breakdowns: [
            "<b>Stagnan:</b> Stagnan berarti terhenti atau tidak bergerak. Meski berlawanan dengan maju, lawan kata yang paling pas secara morfologis untuk progresif adalah regresif[cite: 12].",
            "<b>Regresif:</b> Jawaban Benar. Bersifat mundur[cite: 14].",
            "<b>Agresif:</b> Agresif berarti bersifat menyerang, tidak ada hubungannya dengan arah kemajuan[cite: 15].",
            "<b>Maju:</b> Maju adalah sinonim atau padanan makna dari progresif[cite: 16]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "PROMINEN >< ...",
        options: ["Terkenal", "Biasa", "Tinggi", "Menonjol"],
        correctIndex: 1, 
        explanation: "'Prominen' dalam KBBI diartikan sebagai terkemuka, menonjol, atau luar biasa[cite: 20]. Maka lawan katanya adalah sesuatu yang 'biasa' (lumrah/tidak menonjol)[cite: 21].",
        breakdowns: [
            "<b>Terkenal:</b> Terkenal adalah sinonim dari prominen[cite: 19].",
            "<b>Biasa:</b> Jawaban Benar. Lumrah/tidak menonjol[cite: 21].",
            "<b>Tinggi:</b> Tinggi tidak memiliki korelasi langsung sebagai lawan kata terkemuka[cite: 22].",
            "<b>Menonjol:</b> Menonjol adalah sinonim dari prominen[cite: 23]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "TENTATIF >< ...",
        options: ["Sementara", "Pasti", "Ragu-ragu", "Berubah-ubah"],
        correctIndex: 1, 
        explanation: "Dalam KBBI, 'tentatif' berarti belum pasti; masih dapat diubah; sementara[cite: 27]. Oleh karena itu, antonim yang sah secara kaidah adalah 'pasti' (sudah tetap/final)[cite: 28].",
        breakdowns: [
            "<b>Sementara:</b> Sementara adalah sinonim (makna yang sama) dari tentatif[cite: 26].",
            "<b>Pasti:</b> Jawaban Benar. Sudah tetap/final[cite: 28].",
            "<b>Ragu-ragu:</b> Ragu-ragu merupakan kondisi psikologis, bukan antonim dari keadaan sementara[cite: 29].",
            "<b>Berubah-ubah:</b> Berubah-ubah adalah sifat dari hal yang tentatif, bukan antonim[cite: 30]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "SPORADIS >< ...",
        options: ["Jarang", "Menyebar", "Sering", "Berkelanjutan"],
        correctIndex: 2, 
        explanation: "'Sporadis' secara leksikal berarti keadaan atau hal yang tidak terus-menerus (hanya kadang-kadang)[cite: 36]. Lawan katanya adalah hal yang bersifat rutin atau 'sering'[cite: 37].",
        breakdowns: [
            "<b>Jarang:</b> Jarang adalah sinonim dari sporadis (terjadi di sana-sini, tidak merata atau kadang-kadang)[cite: 34].",
            "<b>Menyebar:</b> Menyebar secara tidak beraturan adalah makna dari sporadis itu sendiri[cite: 35].",
            "<b>Sering:</b> Jawaban Benar. Bersifat rutin atau berlawanan dengan kadang-kadang[cite: 37].",
            "<b>Berkelanjutan:</b> Kontinyu bisa menjadi antonim, namun 'sering' lebih tepat menunjuk pada frekuensi kemunculan yang berlawanan dengan 'kadang-kadang'[cite: 38]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "ANTIPATI >< ...",
        options: ["Apatis", "Simpati", "Benci", "Emosi"],
        correctIndex: 1, 
        explanation: "'Antipati' adalah penolakan atau perasaan tidak suka yang kuat[cite: 42]. Antonimnya secara etimologis dan leksikal adalah 'simpati' (perasaan tertarik atau ikut merasakan)[cite: 43].",
        breakdowns: [
            "<b>Apatis:</b> Apatis berarti acuh tak acuh atau tidak peduli[cite: 41].",
            "<b>Simpati:</b> Jawaban Benar. Perasaan tertarik atau ikut merasakan[cite: 43].",
            "<b>Benci:</b> Benci adalah turunan/sinonim dari sifat antipati[cite: 44].",
            "<b>Emosi:</b> Emosi adalah kata umum (bisa positif/negatif), bukan antonim spesifik[cite: 45]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "ESOTERIS >< ...",
        options: ["Eksoteris", "Rahasia", "Tertutup", "Khusus"],
        correctIndex: 0, 
        explanation: "'Esoteris' berarti hanya dapat dipahami oleh orang-orang tertentu/khusus (bersifat rahasia)[cite: 48]. Berdasarkan kaidah keilmuan bahasa dan filsafat, antonim eksaknya adalah 'eksoteris' (dapat dipahami oleh umum)[cite: 49].",
        breakdowns: [
            "<b>Eksoteris:</b> Jawaban Benar. Dapat dipahami oleh umum[cite: 49].",
            "<b>Rahasia:</b> Rahasia adalah arti atau padanan kata dari esoteris[cite: 50].",
            "<b>Tertutup:</b> Tertutup juga merupakan sinonim kontekstual[cite: 51].",
            "<b>Khusus:</b> Khusus adalah makna lain yang sejalan dengan esoteris[cite: 52]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "KONKRET >< ...",
        options: ["Nyata", "Abstrak", "Wujud", "Jelas"],
        correctIndex: 1, 
        explanation: "'Konkret' (KBBI: nyata, bisa dilihat/diraba) berantonim mutlak dengan 'abstrak' (tidak berwujud/tidak dapat diraba)[cite: 56]. Ini adalah pasangan oposisi biner dalam linguistik[cite: 57].",
        breakdowns: [
            "<b>Nyata:</b> Nyata adalah sinonim konkret[cite: 55].",
            "<b>Abstrak:</b> Jawaban Benar. Tidak berwujud/tidak dapat diraba[cite: 56].",
            "<b>Wujud:</b> Wujud adalah syarat dari kebendaan konkret[cite: 58].",
            "<b>Jelas:</b> Jelas sejalan maknanya dengan konkret[cite: 59]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "KONVERGEN >< ...",
        options: ["Sejajar", "Bertemu", "Divergen", "Menyatu"],
        correctIndex: 2, 
        explanation: "'Konvergen' adalah bersifat menuju satu titik pertemuan[cite: 64]. Secara keilmuan eksakta dan linguistik, lawannya adalah 'divergen' (menyebar dari satu titik)[cite: 65].",
        breakdowns: [
            "<b>Sejajar:</b> Sejajar berarti tidak pernah bertemu, tapi bukan istilah yang tepat untuk lawan konvergen[cite: 62].",
            "<b>Bertemu:</b> Bertemu adalah definisi dari konvergen itu sendiri (memusat)[cite: 63].",
            "<b>Divergen:</b> Jawaban Benar. Menyebar dari satu titik[cite: 65].",
            "<b>Menyatu:</b> Menyatu adalah sinonim dari konvergen[cite: 66]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "SKEPTIS >< ...",
        options: ["Yakin", "Ragu", "Curiga", "Bimbang"],
        correctIndex: 0, 
        explanation: "'Skeptis' berarti kurang percaya, ragu-ragu (terhadap keberhasilan, ajaran, dsb)[cite: 69]. Lawan kata dari keraguan akademis/kepercayaan yang kurang adalah 'yakin' atau 'optimis'[cite: 70].",
        breakdowns: [
            "<b>Yakin:</b> Jawaban Benar. Optimis dan percaya[cite: 70].",
            "<b>Ragu:</b> Ragu adalah sinonim dari skeptis[cite: 71].",
            "<b>Curiga:</b> Curiga adalah sikap turunan dari sifat skeptis[cite: 72].",
            "<b>Bimbang:</b> Bimbang sepadan dengan ragu (sinonim)[cite: 73]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "NOMADEN >< ...",
        options: ["Berpindah", "Berkelana", "Menetap", "Primitif"],
        correctIndex: 2, 
        explanation: "'Nomaden' merujuk pada kelompok/orang yang tidak mempunyai tempat tinggal tetap (berkelana)[cite: 78]. Lawan katanya berdasarkan terminologi sosial adalah 'menetap' (sedenter)[cite: 79].",
        breakdowns: [
            "<b>Berpindah:</b> Berpindah adalah arti dari nomaden itu sendiri[cite: 76].",
            "<b>Berkelana:</b> Berkelana sejalan maknanya dengan nomaden[cite: 77].",
            "<b>Menetap:</b> Jawaban Benar. Sedenter atau bertempat tinggal tetap[cite: 79].",
            "<b>Primitif:</b> Primitif merujuk pada kebudayaan awal, bukan gaya hidup berpindah[cite: 80]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "APATIS >< ...",
        options: ["Acuh tak acuh", "Peduli", "Pasif", "Kecewa"],
        correctIndex: 1, 
        explanation: "Menurut KBBI, 'apatis' adalah sikap tidak peduli atau masa bodoh[cite: 84]. Sehingga, antonim relasionalnya adalah sikap 'peduli' atau antusias[cite: 85].",
        breakdowns: [
            "<b>Acuh tak acuh:</b> Acuh tak acuh adalah definisi langsung dari apatis[cite: 83].",
            "<b>Peduli:</b> Jawaban Benar. Sikap antusias dan memiliki perhatian[cite: 85].",
            "<b>Pasif:</b> Pasif adalah akibat dari sikap apatis[cite: 86].",
            "<b>Kecewa:</b> Kecewa adalah emosi negatif yang berbeda konteks[cite: 87]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "VANDALISME >< ...",
        options: ["Perusakan", "Pelestarian", "Kekerasan", "Pembangunan"],
        correctIndex: 1, 
        explanation: "Vandalisme adalah tindakan merusak keindahan/fasilitas[cite: 91]. Dalam tata bahasa dan logika, lawan dari merusak sesuatu yang sudah ada adalah merawat atau melakukan 'pelestarian' (konservasi)[cite: 91].",
        breakdowns: [
            "<b>Perusakan:</b> Perusakan adalah definisi/sinonim dari vandalisme[cite: 90].",
            "<b>Pelestarian:</b> Jawaban Benar. Konservasi atau merawat yang sudah ada[cite: 91].",
            "<b>Kekerasan:</b> Kekerasan adalah tindakan yang sejalan dengan vandalisme[cite: 92].",
            "<b>Pembangunan:</b> Pembangunan merujuk pada membuat hal baru, pelestarian lebih akurat sebagai lawan 'merusak'[cite: 93]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "DEDUKSI >< ...",
        options: ["Induksi", "Konduksi", "Reduksi", "Kesimpulan"],
        correctIndex: 0, 
        explanation: "Dalam kaidah keilmuan logika, 'deduksi' adalah penarikan kesimpulan dari hal umum ke khusus[cite: 96]. Lawan ruginya adalah 'induksi' (penarikan kesimpulan dari khusus ke umum)[cite: 97].",
        breakdowns: [
            "<b>Induksi:</b> Jawaban Benar. Penarikan kesimpulan dari khusus ke umum[cite: 97].",
            "<b>Konduksi:</b> Konduksi adalah istilah fisika (hantaran)[cite: 98].",
            "<b>Reduksi:</b> Reduksi berarti pengurangan[cite: 99].",
            "<b>Kesimpulan:</b> Kesimpulan adalah tujuan dari deduksi, bukan antonimnya[cite: 100]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "EPILOG >< ...",
        options: ["Prolog", "Monolog", "Dialog", "Katalog"],
        correctIndex: 0, 
        explanation: "Secara struktural karya sastra, 'epilog' adalah bagian penutup[cite: 103]. Lawan kata mutlaknya adalah 'prolog' yang berarti bagian pembuka atau pendahuluan[cite: 104].",
        breakdowns: [
            "<b>Prolog:</b> Jawaban Benar. Bagian pembuka atau pendahuluan[cite: 104].",
            "<b>Monolog:</b> Monolog adalah percakapan sendiri[cite: 105].",
            "<b>Dialog:</b> Dialog adalah percakapan dua orang atau lebih[cite: 106].",
            "<b>Katalog:</b> Katalog adalah daftar barang[cite: 107]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "IMIGRASI >< ...",
        options: ["Transmigrasi", "Emigrasi", "Migrasi", "Urbanisasi"],
        correctIndex: 1, 
        explanation: "'Imigrasi' adalah perpindahan orang masuk ke negara lain untuk menetap[cite: 111]. Berdasarkan kaidah linguistik preposisi in/eks, antonimnya adalah 'emigrasi' (perpindahan orang keluar dari tanah airnya sendiri)[cite: 112].",
        breakdowns: [
            "<b>Transmigrasi:</b> Transmigrasi adalah perpindahan dalam satu negara (pulau padat ke sepi)[cite: 110].",
            "<b>Emigrasi:</b> Jawaban Benar. Perpindahan keluar dari tanah air sendiri[cite: 112].",
            "<b>Migrasi:</b> Migrasi adalah perpindahan (istilah general/umum)[cite: 113].",
            "<b>Urbanisasi:</b> Urbanisasi adalah perpindahan desa ke kota[cite: 114]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "EKSPLISIT >< ...",
        options: ["Tersurat", "Terang", "Implisit", "Jelas"],
        correctIndex: 2, 
        explanation: "'Eksplisit' (KBBI: terus terang, tidak berbelit-belit). Antonim linguistiknya adalah 'implisit' (termasuk di dalamnya meskipun tidak dinyatakan secara jelas/tersirat)[cite: 119].",
        breakdowns: [
            "<b>Tersurat:</b> Tersurat adalah arti literal dari eksplisit[cite: 117].",
            "<b>Terang:</b> Terang sepadan dengan jelas/eksplisit[cite: 118].",
            "<b>Implisit:</b> Jawaban Benar. Tersirat, tidak dinyatakan secara langsung[cite: 119].",
            "<b>Jelas:</b> Jelas adalah sinonim[cite: 120]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "PARADOKS >< ...",
        options: ["Sejalan", "Bertentangan", "Anomali", "Berlawanan"],
        correctIndex: 0, 
        explanation: "'Paradoks' berarti pernyataan yang seolah-olah bertentangan dengan kebenaran umum namun kenyataannya mungkin benar, mengandung makna kontradiksi[cite: 123]. Antonim logisnya adalah keadaan yang bersesuaian atau 'sejalan' (konsisten)[cite: 124].",
        breakdowns: [
            "<b>Sejalan:</b> Jawaban Benar. Keadaan yang bersesuaian atau konsisten[cite: 124].",
            "<b>Bertentangan:</b> Bertentangan adalah sinonim dari paradoks[cite: 125].",
            "<b>Anomali:</b> Anomali adalah ketidaknormalan (memiliki kedekatan makna)[cite: 126].",
            "<b>Berlawanan:</b> Berlawanan adalah sinonim[cite: 127]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "APRIORI >< ...",
        options: ["Prasangka", "Aposteriori", "Dugaan", "Inferensi"],
        correctIndex: 1, 
        explanation: "'Apriori' dalam filsafat/keilmuan bermakna pengetahuan yang didapat sebelum pengalaman[cite: 131]. Pasangan antonim resminya adalah 'aposteriori' (pengetahuan yang didapat setelah pengalaman)[cite: 132].",
        breakdowns: [
            "<b>Prasangka:</b> Apriori sering kali dikaitkan dengan prasangka (penilaian sebelum mengetahui fakta)[cite: 130].",
            "<b>Aposteriori:</b> Jawaban Benar. Pengetahuan setelah pengalaman[cite: 132].",
            "<b>Dugaan:</b> Dugaan dekat maknanya dengan apriori[cite: 133].",
            "<b>Inferensi:</b> Inferensi berarti kesimpulan[cite: 134]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "SINKRON >< ...",
        options: ["Serentak", "Sesuai", "Asinkron", "Harmonis"],
        correctIndex: 2, 
        explanation: "'Sinkron' (terjadi bersamaan, sejajar). Secara morfologi kata serapan, penambahan awalan a- berfungsi menegasikan[cite: 139]. Maka antonimnya yang baku adalah 'asinkron' (tidak bersamaan)[cite: 140].",
        breakdowns: [
            "<b>Serentak:</b> Serentak adalah sinonim dari sinkron[cite: 137].",
            "<b>Sesuai:</b> Sesuai juga memiliki makna sejalan/sinkron[cite: 138].",
            "<b>Asinkron:</b> Jawaban Benar. Tidak bersamaan[cite: 140].",
            "<b>Harmonis:</b> Harmonis berarti selaras, bukan lawan kata[cite: 141]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "MONOTON >< ...",
        options: ["Berubah-ubah", "Konstan", "Tetap", "Statis"],
        correctIndex: 0, 
        explanation: "'Monoton' menurut KBBI berarti berulang-ulang selalu sama nada, gaya, atau warnanya[cite: 144]. Antonim yang tepat secara makna adalah yang memiliki keanekaragaman atau 'berubah-ubah' (bervariasi)[cite: 145].",
        breakdowns: [
            "<b>Berubah-ubah:</b> Jawaban Benar. Memiliki keanekaragaman dan variasi[cite: 145].",
            "<b>Konstan:</b> Konstan adalah kata yang sepadan dengan monoton (tetap)[cite: 146].",
            "<b>Tetap:</b> Tetap adalah sinonim[cite: 147].",
            "<b>Statis:</b> Statis juga bersinonim dengan keadaan monoton[cite: 148]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "SENTRIFUGAL >< ...",
        options: ["Memusat", "Sentripetal", "Menyebar", "Keluar"],
        correctIndex: 1, 
        explanation: "Dalam keilmuan (fisika), gaya 'sentrifugal' adalah gaya yang arahnya menjauhi pusat[cite: 152]. Antonim baku/istilah pasangannya adalah 'sentripetal' (arahnya menuju ke pusat)[cite: 153].",
        breakdowns: [
            "<b>Memusat:</b> Memusat adalah arti dari sentripetal, namun lawan istilah teknis sentrifugal haruslah istilah teknis pasangannya[cite: 151].",
            "<b>Sentripetal:</b> Jawaban Benar. Arah menuju ke pusat[cite: 153].",
            "<b>Menyebar:</b> Menyebar adalah akibat/arah dari sentrifugal[cite: 154].",
            "<b>Keluar:</b> Keluar juga merupakan makna dari sentrifugal[cite: 155]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "DINAMIS >< ...",
        options: ["Statis", "Aktif", "Progresif", "Bergerak"],
        correctIndex: 0, 
        explanation: "'Dinamis' artinya penuh semangat, cepat bergerak, mudah menyesuaikan diri (berubah-ubah)[cite: 158]. Lawan kata (antonim absolut) dari dinamis dalam kaidah keilmuan adalah 'statis' (diam/tidak berubah)[cite: 159].",
        breakdowns: [
            "<b>Statis:</b> Jawaban Benar. Diam atau tidak berubah[cite: 159].",
            "<b>Aktif:</b> Aktif adalah sinonim dinamis[cite: 160].",
            "<b>Progresif:</b> Progresif memiliki korelasi searah dengan dinamis[cite: 161].",
            "<b>Bergerak:</b> Bergerak adalah definisi dari dinamis[cite: 162]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "MAYORITAS >< ...",
        options: ["Semua", "Minoritas", "Banyak", "Sedikit"],
        correctIndex: 1, 
        explanation: "'Mayoritas' secara demografis dan linguistik berarti sebagian besar (jumlah terbanyak)[cite: 166]. Antonim eksaknya secara keilmuan adalah 'minoritas' (golongan yang lebih kecil/sedikit)[cite: 167].",
        breakdowns: [
            "<b>Semua:</b> Semua (totalitas) bukan lawan spesifik dari mayoritas[cite: 165].",
            "<b>Minoritas:</b> Jawaban Benar. Golongan yang lebih kecil/sedikit[cite: 167].",
            "<b>Banyak:</b> Banyak adalah sinonim dari mayoritas[cite: 168].",
            "<b>Sedikit:</b> Sedikit adalah lawan 'banyak', namun lawan spesifik 'mayoritas' adalah minoritas[cite: 169]."
        ]
    },
    {
        category: "TIU - Antonim",
        question: "OTODIDAK >< ...",
        options: ["Mahir", "Terlatih", "Berguru", "Pintar"],
        correctIndex: 2, 
        explanation: "'Otodidak' (KBBI) bermakna orang yang mendapat keahlian atau ilmu dengan belajar sendiri[cite: 178]. Dalam tradisi bahasa, lawan dari belajar secara mandiri adalah belajar melalui bimbingan orang lain atau 'berguru' (pendidikan terarah/formal)[cite: 179].",
        breakdowns: [
            "<b>Mahir:</b> Mahir merupakan hasil belajar (baik otodidak maupun berguru)[cite: 176].",
            "<b>Terlatih:</b> Terlatih adalah kondisi keahlian[cite: 177].",
            "<b>Berguru:</b> Jawaban Benar. Mendapatkan bimbingan orang lain[cite: 179].",
            "<b>Pintar:</b> Pintar bukanlah antonim dari metode belajar[cite: 180]."
        ]
    }
];
