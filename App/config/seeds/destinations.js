/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("destinations").del();
  await knex("destinations").insert([
    {
      destination_name: "Pantai Meleura",
      location: "Lakarinta, Kec.Lohia,Kab.Muna, Sulawesi Tenggara",
      facilities:
        "Area Parkir, musholah, Warung makan & minum, perahu, Tempat istirahat",
      type: "Air",
      describe: "Pantai Indah dengan warna laut yang biru memanjakan mata",
      explained:
        "Berlokasi tak jauh dari ibukota Muna, pantai yang menyejukkan mata ini begitu menarik untuk dikunjungi dan dikatakan tak pernah sepi pengunjung. Sejak sampai di lokasi wisata, pengunjung akan disuguhkan dengan bebatuan karst cadas yang terlihat mempesona. Agar semakin menarik, pihak pengelola juga menambahkan spot khusus untuk berswafoto dengan background pemandangan pantai yang menakjubkan. Jika pada umumnya wisatawan akan mengunjungi bibir pantai, disini pengunjung juga bisa  menikmati pemandangan sekitar dari ketinggian. Spot satu ini dianggap sebagai surganya mendapatkan hasil jepretan terbaik, saat mengunjungi pantai cantik satu ini. Bahkan pihak pengelola menambahkan dengan sederet fasilitas khusus bagi para pengunjung, agar semakin betah berlama lama di lokasi wisata indah ini.",
      img_src:
        "https://raw.githubusercontent.com/Rasyahodhe/24001107_44_Lao_munaDestination_Challenge-Gold/main/photo/destinasi/Pantai%20Meleura-min.jpg",
    },
    {
      destination_name: "Tanjung Labora",
      location: "Lamorende, Kec. Tongkuno, Kab.Muna, Sultra",
      facilities: "Area Parkir",
      type: "Air",
      describe:
        "Pantai dengan Keindahan bawah yang tak kalah dengan pantai lain",
      explained:
        "Pemandangan pantainya memang terlihat eksotis, namun keindahan bawah airnya juga tak kalah menarik untuk diperhatikan. Disana pengunjung bisa melihat aneka terumbu karang yang masih terjaga kealamiannya, dan aneka kenis ikan beserta biota lautnya. Dengan berlibur ke tanjung satu ini, dijamin hari libur menjadi lebih mengasyikkan. Hanya saja destinasi wisata ini masih belum dikelola dengan maksimal, sehingga fasilitas yang tersedia masih cukup terbatas.",
      img_src:
        "https://raw.githubusercontent.com/Rasyahodhe/24001107_44_Lao_munaDestination_Challenge-Gold/main/photo/destinasi/tanjung%20Labora-min.jpg",
    },
    {
      destination_name: "Danau Ubur-Ubur Lohia",
      location: "Lohia, Kec.Lohia,Kab.Muna,Sulawesi Tenggara",
      facilities: "...",
      type: "Air",
      describe:
        "Danau Ubur-ubur yang tersembunyi telah di temukan disalah satu wilayah muna",
      explained:
        "Jika pada umumnya pengunjung akan ketakutan saat bertemu dengan ubur-ubur, justru disini mereka dapat berenang bersama tanpa takut tersengat sedikitpun. Karena tidak membayakan, pengunjung pun diperbolehkan untuk berenang di danau tersebut. Dengan pemandangan uniknya, tidak heran bila tempat ini sering dikunjungi oleh para pecinta snorkeling. Menurut mereka, pemandangan danau terlihat unik dan memiliki daya tarik tersendiri. Hanya saja lokasi wisata ini cukup sulit dijangkau, sehingga tak banyak dikunjungi oleh pengunjung, Bahkan para wisatawan harus menempuh perjalanan yang tidak sebentar dan melelahkan, dengan menelusuri terowongan panjang dan beberapa pulau kecil serta hutan yang masih asri. Namun rasa lelah selama perjalanan akan terbayarkan, usai sampai di lokasi utamanya yang begitu menawan.",
      img_src:
        "https://raw.githubusercontent.com/Rasyahodhe/24001107_44_Lao_munaDestination_Challenge-Gold/main/photo/destinasi/Danau%20Ubur-ubur%20Lohia-min.jpg",
    },
    {
      destination_name: "Puncak Lakude",
      location:
        "Jl.Kawasan Puncak, Masalili,Kec.Kontunaga,Kab.Muna,Sulawesi Tenggara",
      facilities: "Area parkir, Warung makan, spot foto",
      type: "Darat",
      describe:
        "Mau Menikmati keindahan puncak dengan menyebrangi tangga yang terhubung antara dua tebing, yuk ke lakude",
      explained:
        "Masih termasuk sebagai destinasi wisata baru, namun Puncak Lakude berhasil menarik perhatian masyarakat. Adanya jembatan yang terletak di ketinggian mencapai puluhan meter, dikatakan sebagai daya tarik tersendiri yang tidak bisa ditemukan di tempat lainnya. Para pengunjungnya pun akan dihipnotis dengan keindahan alamnya yang masih terjaga, sehingga mereka betah berlama lama di lokasi tersebut.",
      img_src:
        "https://raw.githubusercontent.com/Rasyahodhe/24001107_44_Lao_munaDestination_Challenge-Gold/main/photo/destinasi/Puncak%20Lakude-min.jpg",
    },
    {
      destination_name: "Gua Liangkabori",
      location: "Kotano Wuna, Kec.Tongkuno,Kab.Muna,Sultra",
      facilities: "Area Parkir",
      type: "Darat",
      describe:
        "Gua yang menjadi saksi bisu sejarah perkembangan masyarakat Muna, yang suka wisata sejarah, disini recomen banget sih.",
      explained:
        "Disebut sebagai saksi sejarah pada perkembangan masyarakat Muna, Goa satu ini pun kerap didatangi oleh para penggemar wisata sejarah. Disini pengunjung bisa mempelajari sejarah dari zaman pra sejarah hingga zaman penjajagan. Yang membuatnya tampak menarik untuk dilihat, yaitu adanya beberapa lukisan pada dinding goa yang terbuat dari tanah merah dan dicampur dengan getah pohon.",
      img_src:
        "https://raw.githubusercontent.com/Rasyahodhe/24001107_44_Lao_munaDestination_Challenge-Gold/main/photo/destinasi/Gua%20LiangKobori-min.JPG",
    },
    {
      destination_name: "Penangkaran Kura-kura Raksasa",
      location: "Lakarinta, Kec.Lohia,Kab.Muna, Sulawesi Tenggara",
      facilities: "Area Parkir",
      type: "Darat",
      describe: "oke guys,dimuna juga bisa lihat kura-kura raksasa nih",
      explained:
        "Tak hanya tawarkan pemandangan alamnya semata, namun disini pengunjung juga bisa berinteraksi langsung dengan para kura kura yang memiliki ukuran raksasa. Lokasi wisata ini juga terletak di deretan pulau pulau kecil dengan pemandangan indah, sehingga tidak heran bila banyak wisatawan tertarik mengunjunginya. Tak hanya bisa melihat puluhan kura kura berukuran jumbo, disini pengunjung juga bisa melihat aneka ikan ikanan yang menambah daya tariknya. Puluhan kura kura ini berasal dari pantai Meleura, yang ditangkap oleh para nelayan secara tidak sengaja saat menebarkan jaring ketika mencari ikan. Hal ini pun terus berlanjut dan semakin lama jumlahnya semakin meningkat, sehingga mereka pun diletakkan di sebuah penangkaran yang kemudian berubah menjadi destinasi wisata favorit masyarakat.  Termasuk objek wisata unik dan tak banyak ditemui, banyak wisatawan yang mengabadikan momen berliburnya tersebut.",
      img_src:
        "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1595071970/sob7rirkig2mhwupz9bl.jpg",
    },
    {
      destination_name: "Puncak Wakila",
      location: "Kondongia, Kec.Lohia,Kab.Muna,Sultra",
      facilities: "Area parkir, Warung makan, spot foto",
      type: "Darat",
      describe:
        "Ada lagi nih wisata puncak selain puncak lakude namanya puncak wakila,pemandangan dari puncak ini tidak kalah dari puncak lakude, kuy gas kesini",
      explained:
        "Bagi para pecinta fotografi ataupun yang ingin mendapatkan foto kekinian, destinasi wisata satu ini bisa menjadi pilihan. Di tempat ini, pengunjung bisa menemukan berbagai spot cantik dengan latar belakang mempesona. Bahkan beberapa spot tersebut memang sengaja dihadirkan, untuk menarik minat pengunjung pergi ke Puncak Wakila. Spot tersebut terdiri dari spot desain bunga, gembok berbentuk cinta, dan masih banyak lainnya.",
      img_src:
        "https://raw.githubusercontent.com/Rasyahodhe/24001107_44_Lao_munaDestination_Challenge-Gold/main/photo/destinasi/Puncak%20Wakila-min.jpg",
    },
    {
      destination_name: "Danau Moko",
      location: "Oempu, Kec.Tongkuno, kab.Muna,Sultra",
      facilities: "Area Parkir",
      type: "Air",
      describe:
        "Danau yang sangat Biru dan disitu ada seekor penyu itulah danau moko, penasaran ?, yuk kesana ",
      explained:
        "Tawarkan 3 danau sekaligus dengan jarak yang saling berdekatan, dimana pengunjung bisa menikmati keindahan ketiganya dalam satu waktu. Dari ketiga danau tersebut, danau yang memiliki ukuran terbesar dikatakan memiliki pemandangan paling menakjubkan. Bagaimana tidak, sebab airnya berwarna kebiru biruan nan jernih terlihat menggoda. Tak jarang pengunjung pun berenang di danau tersebut, sembari menikmati pemandangan sekitarnya.",
      img_src:
        "https://raw.githubusercontent.com/Rasyahodhe/24001107_44_Lao_munaDestination_Challenge-Gold/main/photo/destinasi/Danau%20Moko-min.jpg",
    },
    {
      destination_name: "Danau Randano Ghaghe",
      location: "Kotano Wuna, Kec.Tongkuno,Kab.Muna,Sultra",
      facilities: "Area Parkir",
      type: "Air",
      describe:
        "Danau yang takala indah dengan danau moko, dana ini memiliki nama yang unik yang di artikan telapak kaki, yang unik bukan",
      explained:
        "Menyandang unik, ternyata Danau cantik satu ini tidak sembarang diberi nama. Jika dilihat dari Google Maps, bentuk danau ini memang terlihat menyerupai telapak kaki dengan ukuran yang cukup besar. Sedangkan Randano Ghaghe sendiri, dalam bahasa Indonesia memiliki arti sebagai telapak kaki. Baru ditemukan pada tahun 2016 lalu, namun keberadaannya sudah berhasil memikat hati siapapun yang melihatnya.",
      img_src:
        "https://raw.githubusercontent.com/Rasyahodhe/24001107_44_Lao_munaDestination_Challenge-Gold/main/photo/destinasi/Danau%20Randano%20Ghaghe-min.jpg",
    },
    {
      destination_name: "Pantai Pajala",
      location: "Pajala, Kec.Maginti,Kab.Muna,Sultra",
      facilities: "Area parkir,warung makan",
      type: "Air",
      describe:
        "Pantai yang memiliki pemandangan yang tidak kalah indah dengan pantai lain",
      explained:
        "Miliki pemandangan luar biasa indah, disini pengunjung tak hanya bisa menikmati pesona alam khas pantai semata. Disini pengunjungnya juga akan dimanjakan dengan aneka wisata kuliner lezat di sepanjang pantainya, yang menambah rasa betah berlama lama disana. Keindahan alamnya tak kalah indah seperti pantai lainnya yang berada di Muna, namun lokasinya yang cukup jauh dari pusat kota membuatnya jarang dikunjungi.",
      img_src:
        "https://raw.githubusercontent.com/Rasyahodhe/24001107_44_Lao_munaDestination_Challenge-Gold/main/photo/destinasi/Pantai%20Pajala-min.jpg",
    },
    {
      destination_name: "Danau & Pantai Napabale",
      location: "Desa Loghia,Kec.Lohia, Kab.Muna, Sultra",
      facilities: "Area Parkir, perahu, tempat istirahat, warung makan",
      type: "Air",
      describe:
        "Danau yang memiliki keindahan tersendiri serta danau yang terhubung dengan pantai, jadi teman-teman secara tidak langsung berwisata dua tempat danau dan pantai, kuy gasss",
      explained:
        "Tampaknya destinasi wisata satu ini tak boleh ketinggalan untuk dikunjungi, dimana pengunjung dapat melihat keindahan wisata danau dan pantai di satu lokasi yang sama. Perpaduan antara pesona danaunya yang eksotis dan pantainya yang begitu cantik, mampu memikat hati para pengunjungnya. Di sepanjang danau, pengunjung bisa menemukan terowongan panjang yang ternyata menghubungkannya dengan pantai. Untuk menyusuri terowongan tersebut, pihak pengelola memperbolehkan pengunjung untuk menyewa sampan. Selain menggunakan sampan, pengunjung juga bisa eksplor keindahan bawah airnya dengan berenang dan menyelam sembari melewati terowongan tersebut. Oleh karenanya, lokasi wisata ini cocok dikunjungi bagi mereka yang memiliki hobi olahraga air dan petualangan.",
      img_src:
        "https://raw.githubusercontent.com/Rasyahodhe/24001107_44_Lao_munaDestination_Challenge-Gold/main/photo/destinasi/Pantai%20Napabale-min.jpg",
    },
    {
      destination_name: "Pantai Walengkabola",
      location: "Jl.Tanjung, Oempu, Kec.Tongkuno,Kab.Muna,Sultra",
      facilities: "Area parkir, Warung makan, spot foto, Tempat Istirahat",
      type: "Air",
      describe:
        "Salah satu Pantai indah selanjutnya pantai Walengkabola guys, kesini aja deh, supaya tau keindahan pantainya gimana",
      explained:
        "Dari kejauhan, pengunjung sudah bisa melihat pohon pohon kelapa berjajar di bibir pantai yang membuatnya semakin cantik nan mempesona. Kehadiran pepohonan rindang tersebut semakin indah, karena dibalut dengan pasir berwarna putih dan warna air lautnya yang terlihat jernih. Di tempat ini pula, wisatawan bisa menikmati wisata susur goa yang mampu memancarkan mata air ini banyak ditemukan di sekitar pantainya.",
      img_src:
        "https://raw.githubusercontent.com/Rasyahodhe/24001107_44_Lao_munaDestination_Challenge-Gold/main/photo/destinasi/Pantai%20Walengkabola-min.jpg",
    },
  ]);
};
