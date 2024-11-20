interface IllnessMapInterface {
  [key: string]: {
    link: string;
    description: string;
    solution: string;
  };
}

function useIllnessCardController() {
  const IllnessMap: IllnessMapInterface = {
    ["Blepharitis"]: {
      link: "https://eyewiki.org/Blepharitis",
      description:
        "Adalah peradangan pada tepi kelopak mata yang sering menyebabkan ketidaknyamanan dan iritasi mata, dan bisa dialami oleh semua usia dan etnis. Meski biasanya tidak membahayakan penglihatan, blefaritis bisa menyebabkan perubahan permanen pada kelopak mata atau bahkan penurunan penglihatan. Ada dua jenis blefaritis: anterior (depan) yang memengaruhi kulit kelopak mata dan pangkal bulu mata, dan posterior (belakang) yang melibatkan kelenjar meibomian, yaitu kelenjar di kelopak mata yang menghasilkan minyak pelumas. Penyebab pasti blefaritis belum sepenuhnya dipahami, tetapi infeksi bakteri dan peradangan diduga berperan.",
      solution:
        "Menjaga kebersihan kelopak mata dengan kompres hangat, pijatan, dan pembersihan. Kompres hangat selama beberapa menit, dua hingga empat kali sehari, dapat melunakkan kerak dan membuka sumbatan kelenjar minyak. Pijatan kelopak secara vertikal membantu mengeluarkan minyak dari kelenjar meibomian. Membersihkan kelopak mata dengan kain basah dan sedikit sampo bayi bisa menghilangkan kerak dan kotoran di tepi kelopak mata.",
    },
    ["Stye"]: {
      link: "https://eyewiki.org/Stye",
      description:
        "Adalah peradangan pada kelenjar minyak di tepi atau bagian tengah kelopak mata yang terlihat seperti benjolan merah, mirip jerawat, dan bisa terasa nyeri saat disentuh. Stye dapat muncul di bagian luar atau dalam kelopak mata dan kadang menyebabkan seluruh kelopak membengkak yang biasanya disebabkan oleh infeksi.",
      solution:
        "Konsultasi dengan dokter spesialis mata atau ahli bedah plastik mata diperlukan untuk diagnosis dan penanganan yang tepat.",
    },
    ["Anterior Cellulitis"]: {
      link: "https://eyewiki.org/Preseptal_Cellulitis",
      description:
        "Adalah peradangan pada jaringan di depan septum orbital, yaitu jaringan fibrosa yang membagi orbit mata menjadi dua bagian: preseptal (di depan septum) dan postseptal (di belakang septum). Peradangan di belakang septum disebut 'selulitis orbital'. Keduanya disebabkan oleh infeksi.",
      solution:
        "Konsultasi dengan dokter mata, dokter umum, dan THT diperlukan untuk diagnosis dan penanganan yang tepat.",
    },
    ["Posterior Cellulitis"]: {
      link: "https://eyewiki.org/Orbital_Cellulitis",
      description:
        "Adalah infeksi pada jaringan lunak di rongga mata di belakang septum orbital, yaitu jaringan tipis yang memisahkan kelopak mata dari rongga mata. Infeksi yang terbatas di depan septum orbital dianggap sebagai selulitis preseptal. Selulitis orbital biasanya merujuk pada infeksi akut yang menyebar ke rongga mata, yang bisa berasal dari struktur periorbital (terutama sinus etmoid atau frontal), kulit, dakriosistitis, infeksi gigi, atau penyebaran melalui darah.",
      solution:
        "Membutuhkan rawat inap di rumah sakit dengan pemberian antibiotik intravena untuk mengatasi infeksi. Jika kondisi membaik setelah 48 jam, antibiotik oral bisa dipertimbangkan.",
    },
    ["Nasolacrimal Drainage Obstruction"]: {
      link: "https://eyewiki.org/Secondary_Acquired_Nasolacrimal_Duct_Obstruction",
      description:
        "Adalah penyumbatan pada saluran yang mengalirkan air mata dari mata ke hidung. Kondisi ini menyebabkan mata berair terus-menerus karena air mata tidak dapat mengalir dengan baik. Penyebabnya bisa infeksi, peradangan, atau kelainan anatomi.",
      solution:
        "Memerlukan pengobatan medis, prosedur, atau operasi. Menemukan penyebab obstruksi adalah langkah pertama yang penting, dan obstruksi total biasanya memerlukan pembedahan.",
    },
    ["Allergic Conjunctivitis"]: {
      link: "https://eyewiki.org/Allergic_Conjunctivitis",
      description:
        "Adalah respons peradangan pada konjungtiva terhadap alergen. Biasanya bersifat musiman, disertai gejala saluran pernapasan atas, seperti hidung tersumbat, serta keluhan kemerahan, pembengkakan pada konjungtiva, gatal parah, dan peningkatan air mata.",
      solution:
        "Memberikan tetesan air mata buatan untuk mengencerkan alergen, kompres dingin, dan konsultasi ke ahli alergi jika gejala tidak membaik.",
    },
    ["Bacterial Conjunctivitis"]: {
      link: "https://eyewiki.org/Bacterial_Conjunctivitis",
      description:
        "Adalah infeksi pada selaput lendir mata, yaitu konjungtiva, yang meluas dari permukaan belakang kelopak mata (konjungtiva palpebra dan tarsal), menuju forniks, dan hingga ke bola mata (konjungtiva bulbar) sampai bergabung dengan kornea di limbus.",
      solution:
        "Hampir semua kasus bersifat sementara dan akan sembuh dalam 10 hari tanpa pengobatan. Namun, ada beberapa organisme yang lebih virulen yang dapat menyebabkan kolonisasi kronis dan gejala berlanjut. Selain itu, pengobatan antibiotik terbukti dapat mengurangi durasi gejala dan mempercepat penghilangan mikroorganisme dari permukaan.",
    },
    ["Viral Conjunctivitis"]: {
      link: "https://eyewiki.org/Conjunctivitis",
      description:
        "adalah pelebaran pembuluh darah konjungtiva, menyebabkan hiperemia (kemerahan) dan edema (pembengkakan) pada konjungtiva, biasanya disertai dengan keluarnya cairan. Terdapat beberapa variasi tergantung pada penyebabnya tetapi biasanya lebih dipengaruhi oleh usia pasien.",
      solution:
        "Meskipun tidak ada pengobatan yang efektif, tetes mata buatan, antihistamin topikal, atau kompres dingin dapat berguna untuk meredakan beberapa gejala.",
    },
    ["Subconjunctival Hemorrhage"]: {
      link: "https://eyewiki.org/Subconjunctival_Hemorrhage",
      description:
        "adalah penyebab umum mata merah yang tidak mempengaruhi ketajaman penglihatan. Kondisi jinak ini, yang biasanya tidak menimbulkan rasa sakit, terjadi ketika pembuluh darah pecah di ruang subkonjungtiva, yaitu antara konjungtiva superfisial dan kapsula Tenon. Ini terlihat sebagai area perdarahan yang biasanya datar di bawah konjungtiva. Jika parah, bisa tampak seperti gelembung.",
      solution:
        "Perawatan suportif dengan pelumasan topikal yang sering dapat membantu mengurangi ketidaknyamanan pasien akibat gangguan pada lapisan air mata.",
    },
    ["Keratitis Sicca"]: {
      link: "https://eyewiki.org/Dry_Eye_Syndrome",
      description:
        "adalah masalah umum yang memengaruhi banyak orang, dengan gejala yang bisa bervariasi mulai dari yang sedikit mengganggu hingga yang sangat membatasi. Sindrom ini terjadi ketika lapisan air mata alami yang melapisi bagian depan mata (film air mata) rusak. Pada kondisi normal, lapisan air mata ini stabil dan homogen, berfungsi melindungi kornea dan konjungtiva dari kerusakan akibat paparan udara.",
      solution:
        "Penggunaan air mata buatan (tanpa penghilang kemerahan), gel dan salep air mata, serta intervensi untuk mengurangi penguapan seperti punctal plugs atau masker malam. Selain itu, kompres hangat, pembersihan kelopak mata, serta obat resep seperti Restasis dan Xiidra dapat meningkatkan produksi air mata.",
    },
    ["Pingueculum"]: {
      link: "https://eyewiki.org/Pinguecula",
      description:
        "adalah lesi non-kanker yang relatif umum, berwarna kuning-putih, dan terangkat pada konjungtiva bulbar interpalpebral yang tidak melibatkan kornea. Lesi ini merupakan degenerasi elastotik dari kolagen subepitelial dengan jaringan ikat yang hialinisasi. Lesi ini biasanya ditemukan secara bilateral, dekat dengan limbus konjungtiva bulbar nasal, meskipun dapat juga ditemukan di bagian temporal.",
      solution:
        "Lubrikasi dengan air mata buatan dan salep dapat membantu mengatasi iritasi pada permukaan mata. Eksisi hanya diperlukan jika pinguecula mengganggu penampilan kosmetik, sering meradang, atau menyulitkan pemakaian lensa kontak.",
    },
    ["Episcleritis"]: {
      link: "https://eyewiki.org/Episcleritis",
      description:
        "adalah penyebab mata merah yang relatif umum, jinak, dan sembuh sendiri, akibat peradangan pada jaringan episklera. Ada dua bentuk kondisi ini: nodular dan sederhana. Episcleritis nodular ditandai dengan area terangkat yang jelas pada jaringan episklera yang meradang, sementara pada episkleritis sederhana, terjadi kemacetan pembuluh darah tanpa adanya benjolan yang jelas.",
      solution:
        "Biasanya sembuh dengan sendirinya tanpa pengobatan, dan memberikan rasa tenang kepada pasien adalah langkah utama dalam penanganannya. Namun, beberapa pasien mungkin merasakan rasa sakit atau ketidaknyamanan yang signifikan, atau tidak menyukai penampilan kondisi ini. Dalam kasus seperti itu, langkah pendukung seperti kompres dingin, tetes mata dingin, atau terapi medis dapat diberikan.",
    },
    ["Corneal Abrasion"]: {
      link: "https://eyewiki.org/Corneal_Epithelial_Defect",
      description:
        "adalah area fokal kehilangan lapisan epitel (lapisan terluar kornea). Kondisi ini dapat disebabkan oleh trauma mekanis, kekeringan kornea, penyakit neurotropik, perubahan pasca-bedah, infeksi, atau berbagai penyebab lainnya.",
      solution:
        "Pasien harus dipantau secara rutin di klinik untuk memastikan perbaikan defek dan memantau tanda-tanda infeksi.",
    },
    ["Viral Keratitis"]: {
      link: "https://eyewiki.org/Herpes_Simplex_Epithelial_Keratitis",
      description:
        "adalah gangguan sistem imun yang meningkatkan kerentanannya terhadap infeksi virus. Herpes simpleks (HSV) dapat memengaruhi semua lapisan kornea dan dapat disertai dengan blefarokonjunktivitis, yang menyebabkan lesi pada kelopak mata dan konjungtivitis folikular. Aktivasi berulang pada ganglion sensorik dapat menyebabkan jaringan parut kornea, nekrosis, dan penurunan sensasi kornea (kornea neurotropik), yang semuanya dapat mengancam penglihatan.",
      solution:
        "Biasanya akan sembuh dengan sendirinya. namun, pengobatan dengan obat antivirus dapat mempercepat penyembuhan dan mengurangi komplikasi jangka panjang",
    },
    ["Bacterial Keratitis"]: {
      link: "https://eyewiki.org/Bacterial_Keratitis",
      description:
        "adalah infeksi serius pada kornea yang dapat menyebabkan kehilangan penglihatan jika parah. Namun, istilah ini tidak selalu bisa dipertukarkan, karena kornea bisa terinfeksi bakteri (keratitis bakterial) tanpa kehilangan jaringan (ulkus), dan sebaliknya, kornea dapat memiliki ulkus tanpa infeksi bakteri.",
      solution:
        "Pemberian antibiotik topical, Antibiotik oral dapat dipertimbangkan untuk pasien dan obat pereda nyeri oral dapat digunakan sesuai kebutuhan.",
    },

    ["Hyphema"]: {
      link: "https://eyewiki.org/Hyphema",
      description:
        "adalah trauma tumpul atau robekan, setelah operasi mata, atau secara spontan, misalnya pada kondisi seperti rubeosis iridis, xanthogranuloma juvenil, melanoma iris, distropi miotonik, keratouveitis (misalnya herpes zoster), leukemia, hemofilia, penyakit von Willebrand, serta terkait dengan penggunaan zat yang mempengaruhi fungsi platelet atau trombin (misalnya etanol, aspirin, warfarin).",
      solution:
        "Sebagian besar pasien dapat dikelola di rumah sakit rawat jalan dengan pemantauan ketat untuk mengevaluasi penglihatan, regresi hiphema, dan tekanan intraokular. Namun, rawat inap harus dipertimbangkan untuk pasien yang tidak patuh, pasien dengan diatesis perdarahan atau displasia darah, pasien dengan cedera mata atau orbital yang parah.",
    },
    ["Hypopyon"]: {
      link: "https://eyewiki.org/Panuveitis",
      description:
        "adalah peradangan pada semua komponen uvea mata tanpa ada lokasi peradangan yang dominan.",
      solution:
        "Mencakup sikloplegik untuk meredakan kejang otot, kortikosteroid untuk mengurangi peradangan, dan obat imunosupresif seperti siklofosfamid, azathioprine, dan siklosporin untuk menekan sistem kekebalan tubuh dan peradangan..",
    },
    ["Angle-Closure Glaucoma"]: {
      link: "https://eyewiki.org/Primary_vs._Secondary_Angle_Closure_Glaucoma",
      description:
        "adalah penutupan sudut kamar depan mata, yang mengurangi aliran cairan mata, meningkatkan tekanan mata, dan merusak saraf optik, menyebabkan kehilangan penglihatan. ACG dibagi menjadi bentuk primer, yang disebabkan oleh blokade pupil, dan bentuk sekunder, yang disebabkan oleh faktor lain.",
      solution:
        "Pengobatan glaukoma penutupan sudut bertujuan untuk menurunkan tekanan mata, mencegah kerusakan saraf optik, dan mengatasi penyebab penutupan sudut. Obat glaukoma digunakan untuk menurunkan IOP, dengan iridotomy sebagai pengobatan utama pada PAC.",
    },
    ["Iris Iritis"]: {
      link: "https://eyewiki.org/Traumatic_Iritis",
      description:
        "adalah cedera mata tumpul, namun juga dapat terjadi akibat cedera dari sumber lain seperti petasan, proyektil senapan, kecelakaan kendaraan bermotor, dan lainnya.",
      solution:
        "Pengobatan melibatkan sikloplegik topikal untuk mencegah sinekia dan mengurangi nyeri, serta steroid topikal untuk mengurangi peradangan. Beta-blocker digunakan jika ada glaukoma sekunder. Pasien perlu kontrol ulang dalam 5-7 hari dan sebulan kemudian untuk mengevaluasi penyembuhan, mencegah kekambuhan, dan memastikan tidak ada kerusakan retina atau rekesi sudut.",
    },
    ["Cataract"]: {
      link: "https://eyewiki.org/Cataract",
      description:
        "adalah pengaburan lensa alami mata yang mengarah pada penurunan penglihatan dan dapat menyebabkan kebutaan jika tidak ditangani. Katarak berkembang secara perlahan dan tanpa rasa sakit.",
      solution:
        "Melalui operasi, yang merupakan satu-satunya pengobatan definitif. Prosedur ini melibatkan pengangkatan lensa mata yang keruh dan penggantian dengan lensa intraokular (IOL) yang jelas. Operasi ini sangat efektif dengan tingkat keberhasilan mencapai 97% atau lebih, dan dilakukan dengan anestesi lokal. Pasien dapat kembali beraktivitas dalam waktu singkat setelah operasi, dan penglihatan biasanya membaik setelahnya.",
    },
    ["Diabetic Retinopathy"]: {
      link: "https://eyewiki.org/Diabetic_Retinopathy",
      description:
        "adalah kerusakan mikrovasular pada organ mata akibat diabetes. Penyakit ini terbagi menjadi retinopati diabetik non-proliferatif (NPDR) yang memiliki beberapa tahap, hingga retinopati diabetik proliferatif (PDR). Seiring perkembangan penyakit, edema makula diabetik (DME) juga dapat muncul sebagai komplikasi.",
      solution:
        "Pengendalian sistemik terhadap diabetes, hipertensi, hiperlipidemia, hiperkolesterolemia, nefropati, dan penyakit lainnya sangat penting dalam penanganan retinopati diabetik.",
    },
    ["Hypertensive Retinopathy"]: {
      link: "https://eyewiki.org/Hypertensive_Retinopathy",
      description:
        "adalah faktor risiko untuk kondisi sistemik yang dapat menyebabkan kerusakan organ target, termasuk mata. Hipertensi dapat menyebabkan retinopati, neuropati optik, dan koroidopati, serta penyumbatan pembuluh darah retina besar seperti arteri retina sentral, arteri retina cabang, vena retina sentral, dan vena retina cabang.",
      solution:
        "Perawatan berfokus pada penurunan tekanan darah. Kerja sama dengan dokter perawatan utama pasien sangat penting untuk memastikan evaluasi dan manajemen yang tepat waktu guna mengurangi kerusakan okular dan sistemik. Riwayat medis yang menyeluruh sangat penting untuk pengobatan retinopati hipertensi yang tepat dan tepat waktu guna mencegah komplikasi yang mengancam penglihatan.",
    },
  };

  return { IllnessMap };
}

export default useIllnessCardController;
