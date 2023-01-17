let url ="https://api.openweathermap.org/data/2.5/weather?q=KOTA DALAM&appid=6690fa214e4146088bb8f1946c21cfad&units=metric" //API
let url1 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTo0VjyMJDvt1FHxjc0lNGXWMFEh2Qyj0nisWrNfBg2IpMnHxDK1SufhszpNGxASJq0QrFFNffg2i-3/pub?output=csv" //usia
let url2 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQNbQfDT8PTu_H0oUPd9nYSOVTgwD9GMDnqNmjz34RtbqPjrFc_WdWj7LljmD1USe_wKF-K5cQPf8xU/pub?output=csv" //Pekerjaan
let url3 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSaJAKhxL6dzNRaCmFGc0BFYcITmGs5aD0KxKnMtODVsWkEStyFjqWTVJxwPOXkgenRBI97Wcmyqiaf/pub?output=csv" //Pendidikan
let url4 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTpx5LIC6qZfHug6FoKrAvieSp-E_rTDjcgbXkxX-GhgOW8b_SnUUeQEZ55qDEABmJbrJCeVQxuom7J/pub?output=csv" //JenisKelamin
let url5 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRGHwOAkI00DcpXwrbPxAW23q3vi2CugjVQFZXCoZJwO5eZ32fLqdfcj2MsRx375IgTJ5un5hcAlOQ2/pub?output=csv" //Agama
let dataAPI;
let diagramUsia;
let diagramPekerjaan;
let diagramPendidikan;
let diagramJenisKelamin;
let diagramAgama ;
let bagan;
let profil;
let itera;
let f1;
let f2;
let lamsel;
let mtk;
let peta;

function preload(){
  dataAPI = loadJSON(url);
  diagramUsia = loadTable(url1, 'csv', 'header');
  diagramPekerjaan = loadTable(url2, 'csv', 'header');
  diagramPendidikan = loadTable(url3, 'csv', 'header');
  diagramJenisKelamin = loadTable(url4, 'csv', 'header');
  diagramAgama = loadTable(url5, 'csv', 'header');
  f1 = loadFont('f1.otf');
  f2 = loadFont('f2.otf');
  bagan = loadImage('Bagan.jpg');
  profil = loadImage('Profil.jpg');
  lamsel =loadImage('lamsel.png');
  itera =loadImage('ITERA.png');
  mtk = loadImage('mtk.png')
  peta = loadImage('peta.png')

}

function API(a, b, data){
  fill('white')
  noStroke()
  textFont(f1)
  textSize (28)
  text ('"Informasi Cuaca"',58,520)
  textFont(f2)
  textSize (20)
  text(data.name,30,570)
  textSize(25)
  text(data.main.temp +" °c",30,600);
  textSize(20)
  text('Weather',30,640)
  textSize (25)
  text(data.weather [0].main,30,670)
  textSize(20)
  text('Wind Speed',30,710)
  textSize (25)
  text(data.wind.speed +" km/h ",30 ,740)
  textSize(20)
  text('Humidity',30,780)
  textSize (25)
  text (data.main.humidity + " % ",30,810)
}

function setup() {
  createCanvas(1363,5070);
  let div = createDiv();
  div.id('maps')
  div.style('height', '400px');
  div.style('width', '400px');
  div.position(1110, 3000);  
}
// let penduduk2021 = [1765, 2366, 1806, 818,1606, 2384, 820] //per dusun
function draw() {
  background('	255,255,255,100')
  
  // let dusun = ['Dusun 1','Dusun 2','Dusun 3','Dusun 4','Dusun 5','Dusun 6','Dusun 7' ]
  var warna = ['#000080','	#008080','	#800080','	#008000','#808000','	#800000','	#808080']
  // var maxBar = max(penduduk2021);
  // var w = 60
  // for (var i = 0; i < penduduk2021.length; i++) {
  //   fill(warna[i])
  //   var dat = map(penduduk2021[i], 0, maxBar, 0, 200)
  //   rect(i*w,4800 - dat, w, dat)
  //   textFont(f2)
  //   textSize(15)
  //   fill('black')
  //   text(penduduk2021[i],i*w, 4795-dat)
  //   text(dusun[i],i*w,4820)
  // }

  // textAlign(LEFT);
  // textFont(f1)
  // textSize(20)
  // text('Diagram Kependudukan tahun 2021',0,4540)
  // textFont(f2)
  // text('Berdasarkan diagram batang kependudukan tahun 2021 disamping, desa Way Huwi Kecamatan Jati Agung ',440,4710)
  // text('terdiri dari 7 dusun, dusun penduduk terbanyak yaitu dusun 6 dengan jumlah 2384 jiwa, Sedangkan dusun paling',440,4740)
  // text('sedikit penduduknya yaitu dusun 4 dengan jumlah 818 jiwa. Dusun lainya yaitu dusun 1 berjumlah 1765 jiwa,',440,4770)
  // text('dusun 2 berjumlah 2366 jiwa, dusun 3 berjumlah 1806 jiwa, dusun 5 berjumlah 1606 jiwa, dan dusun 7 berjumlah 820 jiwa.',440,4800)
  // noStroke()
  fill(0,0,0,200);
  rect(0,0,1600,850);
  fill("brown");
  rect(0, 0, 400, 850)
  image(lamsel,50,125,300,300);
  image(itera,20,25,50,50);
  image(mtk,330,25,50,50);
  image(peta,23,4538,750,500);
  
  sudut1 = diagramUsia.getColumn('usia')
  diagram1(200, sudut1);
  sudut2 = diagramPekerjaan.getColumn('pekerjaan')
  diagram2(200, sudut2);
  sudut3 = diagramPendidikan.getColumn('pendidikan')
  diagram3(200, sudut3);
  sudut4 = diagramJenisKelamin.getColumn('JenisKelamin')
  diagram4(200, sudut4);
  sudut5 = diagramAgama.getColumn('agama')
  diagram5(200, sudut5);


  fill('white');
  textFont(f1);
  textSize(35);
  text("Dashboard",93,65);
  API (0, 0, dataAPI, 500/20)
  fill("red");
  noStroke();
  textSize(30);
  var currentYear = year();
  var currentMonth = month();
  var currentDay = day();
  var currentHour = hour();
  var currentMinute = minute();
  var currentSecond = second();
  var currentDate = currentDay + '/' + nf(currentMonth, 2) + '/' + nf(currentYear, 2);
  var currentTime = currentHour + ':' + nf(currentMinute, 2) + ':' + nf(currentSecond, 2);
  text(currentDate, 800, 450);//tanggal
  textSize(60);
  text(currentTime, 765 ,405);//waktu


  textSize(25)
  textFont(f1)
  fill('black')
  text("A. Profil Desa Kota Dalam",35,960)
  image(profil,35,990,455,315);
  textSize(20)
  textFont(f2)
  text("Desa Kota Dalam adalah salah satu Desa Tua di Kecamatan Sidomulyo yang didirikan pada ",515,1005)
  text("akhir Abad ke-18, berdasarkan hasil mufakat Tokoh Adat, dengan Batas Wilayah : ",515,1035)
  text("- Sebelah Utara : Berbatasan dengan Desa Campang Tiga ", 515, 1065)
  text("- Sebelah Selatan : Berbatasan dengan Desa Merak Belantung ",515,1095)
  text("- Sebelah Timur : Berbatasan dengan Kolonisasi ",515,1125)
  text("- Sebelah Barat : Berbatasan dengan Desa Suak Labuhan ",515,1155)
  text("Dimana waktu itu penduduknya merupakan pindahan dari Ketibung (sekarang Desa Sidoasri) ",515,1185)
  text("yang hanya berjumlah 40 jiwa. Kota Dalam berasal dari nama KUTADALOM yang memiliki ",515,1215)
  text("arti KUTA (PAGAR) dan DALOM (TOKOH ADAT). Pada saat itu keadaan semua rumah ",515,1245)
  text("warga didirikan mengelilingi rumah Tokoh Adat. Jadi, Kutadalom merupakan Kampung yang ",515,1275)
  text("dilindungi oleh Tokoh Adat. Luas wilayah Desa Kota Dalam saat ini sebesar 550 Ha dengan ",515,1305)
  text("jumlah 7 dusun dan 14 RT/RW. Jumlah penduduk Desa Kota Dalam pada tahun 2021 sebanyak 2696 orang dengan jumlah kepala keluarga 728, ",35,1335)
  text("sedangkan pada tahun 2022 sebanyak 2660 orang dengan jumlah kepala keluarga 744. ",35,1365)
  
  textSize(25)
  textFont(f1)
  text("B. Struktur Perangkat Desa Kota Dalam",35,1460)
  image(bagan,0,1460,1410,720)
  text("C. Diagram Kependudukan Desa Kota Dalam",28,2200)
  text ("D. Peta Desa KOTA DALAM",30,4528)
}

function diagram1(diameter, diagramUsia) {
  var warna = ['#66FFFF','#00CCCC','#CCFFFF','#006666','#009999','#99FFFF']
  let lastAngle = 0; 
  for (var i = 0; i < diagramUsia.length; i++) {
    fill(warna[i])
    arc(215,2375,diameter,diameter,lastAngle,lastAngle + radians(sudut1[i]));
    lastAngle += radians(sudut1[i]);
  }
  fill(192,192,192,100)
  rect(30,2225,370,440)
  textAlign(LEFT);
  textSize(20)
  textFont(f1)
  fill('black')
  text("Diagram Usia",140,2255)
  textFont(f2)
  text("0 - 12 bulan  = 97",40,2515)
  text("1 - 5 tahun  = 237",40,2540)
  text("5 - 7 tahun  = 201",40,2565)
  text("7 - 15 tahun  = 382",40,2590)
  text("15 - 56 tahun  = 1576",40,2615)
  text("60 tahun ke atas  = 167",40,2640)
  fill(warna[0]) ;
  rect(330,2505,20,10);
  fill(warna[1]) ;
  rect(330,2530,20,10);
  fill(warna[2]) ;
  rect(330,2555,20,10);
  fill(warna[3]) ;
  rect(330,2580,20,10);
  fill(warna[4]) ;
  rect(330,2605,20,10);
  fill(warna[5]) ;
  rect(330,2630,20,10);

  fill(0)
  text('Berdasarkan diagram umur disamping, desa Kota Dalam Kecamatan Sidomulyo memiliki',440,2385)
  text("angka data umur paling tinggi di usia 15-56 tahun yaitu sebanyak 1576 jiwa.",440,2415)
  text("Sedangkan usia yang memiliki jumlah penduduk paling rendah yaitu di usia 0-12 bulan",440,2445)
  text("sebanyak 97 jiwa. Di usia 1-5 tahun sebanyak 237 jiwa, usia 5-7 tahun sebanyak",440,2475)
  text("201 jiwa, 7-15 tahun sebanyak 382 jiwa, dan usia 60 tahun ke atas sebanyak 167 jiwa.",440,2505)
  text('Jadi total jumlah penduduk pada tahun 2022 adalah sebanyak 2660 jiwa.',440,2535)
}

function diagram2(diameter, diagramPekerjaan) {
  var warna = ['#00FF00','#80FF00','#CCFF99','#99FF99','#B2FF66', '#66FF66','#66CC00','#009900','#33FF33','#006600','#00FF80']
  let lastAngle = 0; 
  for (var i = 0; i < diagramPekerjaan.length; i++) {
    fill(warna[i])
    arc(215,2845,diameter,diameter,lastAngle,lastAngle + radians(sudut2[i]));
    lastAngle += radians(sudut2[i]);
  }
  fill(192,192,192,100)
  rect(30,2695,370,560)
  textSize(20)
  textFont(f1)
  fill('black')
  text("Diagram Pekerjaan",105,2725)
  textFont(f2)
  text("PNS  = 14",40,2985)
  text("Pegawai Swasta  = 46",40,3010)
  text("Wiraswasta  = 60",40,3035)
  text("Tani  = 302",40,3060)
  text("Pedagang Keliling  = 12",40,3085)
  text("Buruh Tani  = 300",40,3110)
  text("Pensiunan  = 5",40,3135)
  text("Perawat Swasta  = 2",40,3160)
  text("Guru  = 16",40,3185)
  text("Pengusaha  = 36",40,3210)
  text("Petani/Pekebun  = 18",40,3235)
  fill(warna[0]);
  rect(330,2975,20,10);
  fill(warna[1]);
  rect(330,3000,20,10);
  fill(warna[2]);
  rect(330,3025,20,10);
  fill(warna[3]);
  rect(330,3050,20,10);
  fill(warna[4]);
  rect(330,3075,20,10);
  fill(warna[5]);
  rect(330,3100,20,10);
  fill(warna[6]);
  rect(330,3125,20,10);
  fill(warna[7]);
  rect(330,3150,20,10);
  fill(warna[8]);
  rect(330,3175,20,10);
  fill(warna[9]);
  rect(330,3200,20,10);
  fill(warna[10]);
  rect(330,3225,20,10);
  
  fill(0)
  text('Berdasarkan diagram pekerjaan disamping, desa Kota Dalam Kecamatan Sidomulyo memiliki',440,2920)
  text("angka paling tinggi pada diagram tersebut yaitu tani sebanyak 302 jiwa. Sedangkan ",440,2950)
  text("penduduk yang lain bekerja sebagai PNS sebanyak 14 jiwa, Pegawai Swasta 46 jiwa,",440,2980)
  text("Wiraswasta 60 jiwa, Pedagang Keliling 12 jiwa, Buruh Tani 300 jiwa, Pensiunan 5 jiwa,",440,3010)
  text("Perawat Swasta 2 jiwa, Guru 16 jiwa, Pengusaha Kecil dan Menengah 36 jiwa, dan ",440,3040)
  text('Petani/Pekebun 18 jiwa.',440,3070)

}

function diagram3(diameter, diagramPendidikan) {
  var warna = ['#FFB266','#FF9933','#FF8000','#CC6600','#994C00','#663300']
  let lastAngle = 0;
  for (var i = 0; i < diagramPendidikan.length; i++) {
    fill(warna[i])
    arc(215,3435,diameter,diameter,lastAngle,lastAngle + radians(sudut3[i]));
    lastAngle += radians(sudut3[i]);
  }
  fill(192,192,192,100)
  rect(30,3285,370,430)
  textSize(20)
  textFont(f1)
  fill('black')
  text("Diagram Pendidikan",100,3315)
  textFont(f2)
  text("Tamat SD  = 32",40,3575)
  text("Madrasah  = 106",40,3600)
  text("Tamat SLTP  = 67",40,3625)
  text("Tamat SLTA  = 230",40,3650)
  text("Tamat S1  = 262",40,3675)
  text("Tamat S2  = 4",40,3700)
  fill(warna[0]) ;
  rect(330,3565,20,10);
  fill(warna[1]) ;
  rect(330,3590,20,10);
  fill(warna[2]) ;
  rect(330,3615,20,10);
  fill(warna[3]) ;
  rect(330,3640,20,10);
  fill(warna[4]) ;
  rect(330,3665,20,10);
  fill(warna[5]) ;
  rect(330,3690,20,10);
  
  fill(0)
  text('Berdasarkan diagram pendidikan disamping, desa Kota Dalam Kecamatan Sidomulyo memiliki',440,3465)
  text("angka paling tinggi di tamat S1 yaitu sebanyak 262 jiwa. Sedangkan penduduk yang",440,3495)
  text("lain tamat SD sebanyak 32 jiwa, Madrasah 106 jiwa, tamat SLTP 67 jiwa,",440,3525)
  text('tamat SLTA 230 jiwa, dan tamat S2 4 jiwa.',440,3555)
  
}

function diagram4(diameter, diagramJenisKelamin) {
  var warna = ['#66B2FF','#FF9999'];
  let lastAngle = 0; 
  for (var i = 0; i < diagramJenisKelamin.length; i++) {
    fill(warna[i])
    arc(215,3895,diameter,diameter,lastAngle,lastAngle + radians(sudut4[i]));
    lastAngle += radians(sudut4[i]);
  }
  fill(192,192,192,100)
  rect(30,3745,370,334)
  fill('black')
  textSize(20)
  textFont(f1)
  text("Diagram Jenis Kelamin",85,3775)
  textFont(f2)
  text("Laki-Laki  = 1342",40,4035)
  text("Perempuan  = 1318",40,4060)
  fill(warna[0]) ;
  rect(330,4025,20,10);
  fill(warna[1]) ;
  rect(330,4050,20,10);
  
  fill(0)
  text('Berdasarkan diagram jenis kelamin disamping, desa Kota Dalam Kecamatan Sidomulyo memiliki',440,3890)
  text("jumlah penduduk dengan jenis kelamin laki-laki lebih tinggi dibandingkan dengan ",440,3920)
  text('perempuan, yaitu laki-laki sebanyak 1342 jiwa dan perempuan sebanyak 1318 jiwa.',440,3950)
}

function diagram5(diameter, diagramAgama) {
  var warna = ['#B266FF','#330066'];
  let lastAngle = 0;
  for (var i = 0; i < diagramAgama.length; i++) {
    fill(warna[i])
    arc(215,4260,diameter,diameter,lastAngle,lastAngle + radians(sudut5[i]));
    lastAngle += radians(sudut5[i]);
  }
  fill(192,192,192,100)
  rect(30,4110,370,333)
  fill('black')
  textFont(f1)
  text("Diagram Agama",125,4140)
  textFont(f2)
  text("Islam  = 2636",40,4400)
  text("Kristen  = 24",40,4425)
  fill(warna[0]) ;
  rect(330,4390,20,10);
  fill(warna[1]);
  rect(330,4415,20,10);
  
  fill(0)
  text('Berdasarkan diagram agama disamping, desa Kota Dalam Kecamatan Sidomulyo  ',440,4250)
  text("sebagian besar penduduknya beragama Islam yaitu sebanyak 2636 jiwa.",440,4280)
  text('Sedangkan penduduk yang lain yang menganut agama Kristen sebanyak 24 jiwa.',440,4310)
}
function mousePressed() {
  if (mouseX > 0 && mouseX < 1000 && mouseY > 0 && mouseY < 900) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
