class System {
  constructor() {
    this.araba = [];
    this.musteri = [];
  }
  addAraba(item) {
    this.araba.push(item);
  }
  addMusteri(item) {
    this.musteri.push(item);
  }
  getMyAraba() {
    return this.araba;
  }
  getMyMusteri() {
    return this.musteri;
  }
  bosalt() {
    this.araba = [];
    this.musteri = [];
  }
}

class Araba {
  constructor(plaka, marka, model, yil, kiraBedeli, durum, resim) {
    this.plaka = plaka;
    this.marka = marka;
    this.model = model;
    this.yil = yil;
    this.kiraBedeli = kiraBedeli;
    this.resim = resim;
    this.durum = durum;
    this.arabalar = [];
  }
  addAraba(item) {
    this.arabalar.push(item);
  }
  getMyAraba() {
    return this.arabalar;
  }
  updateAraba(marka, yeniDurum) {
    const arabaIndex = this.arabalar.findIndex(
      (araba) => araba.marka === marka
    );
    if (arabaIndex !== -1) {
      this.arabalar[arabaIndex].durum = yeniDurum;
    }
  }
}

class Musteri {
  constructor(isim, soyisim, email, sifre, telefon, tc) {
    this.isim = isim;
    this.soyisim = soyisim;
    this.email = email;
    this.sifre = sifre;
    this.telefon = telefon;
    this.tc = tc;
    this.kiraladigiAraba = "Yok";
    this.kiraladigiTarih = "----------";
    this.musteriler = [];
  }
  addMusteri(item) {
    this.musteriler.push(item);
  }
  getMyMusteri() {
    return this.musteriler;
  }
  updateMusteri(isim, yeniKiraladıgıAraba, yeniKiraladigiTarih) {
    const musteriIndex = this.musteriler.findIndex(
      (musteri) => musteri.isim === isim
    );
    if (musteriIndex !== -1) {
      this.musteriler[musteriIndex].kiraladigiAraba = yeniKiraladıgıAraba;
      this.musteriler[musteriIndex].kiraladigiTarih = yeniKiraladigiTarih;
    }
  }
  deleteMusterii(isim) {
    const index = this.musteriler.findIndex((musteri) => musteri.isim === isim);
    if (index !== -1) {
      this.musteriler.splice(index, 1);
    }
  }
}

const customer = new Musteri();
const cars = new Araba();
const myObject = new System();

const musteri0 = new Musteri(
  "Admin",
  "Admin",
  "admin@gmail.com",
  "admin",
  "admin123",
  "00000000000"
);
const musteri1 = new Musteri(
  "Berke",
  "Tangör",
  "berke@gmail.com",
  "sifre",
  "11111111111",
  "11111111111"
);
const musteri2 = new Musteri(
  "Ahmet Akif",
  "Kasım",
  "ahmet@gmail.com",
  "sifre",
  "22222222222",
  "22222222222"
);
const musteri3 = new Musteri(
  "Betül",
  "Daşçi",
  "betul@gmail.com",
  "sifre",
  "33333333333",
  "33333333333"
);
customer.addMusteri(musteri0);
customer.addMusteri(musteri1);
customer.addMusteri(musteri2);
customer.addMusteri(musteri3);
const araba1 = new Araba(
  "26mrc45",
  "Mercedes",
  "Benz CLS",
  "2021",
  "2500",
  "Kullanılabilir",
  "./assets/images/mercedes1.jpg"
);
const araba2 = new Araba(
  "34mrc87",
  "Mercedes",
  "AMG GT",
  "2011",
  "1500",
  "Serviste",
  "./assets/images/mercedes2.jpg"
);
const araba3 = new Araba(
  "41audi",
  "Audi",
  "A5",
  "2016",
  "2500",
  "Kullanılabilir",
  "./assets/images/audi1.jpg"
);
const araba4 = new Araba(
  "61audi1",
  "Audi",
  "A6",
  "2021",
  "2500",
  "Kullanılabilir",
  "./assets/images/audi2.jpg"
);
const araba5 = new Araba(
  "44volvo63",
  "Volvo",
  "V40",
  "2017",
  "1800",
  "Serviste",
  "./assets/images/volvo1.jpg"
);
const araba6 = new Araba(
  "45fiat45",
  "Fiat",
  "500",
  "2017",
  "500",
  "Rezerve",
  "./assets/images/fiat1.jpg"
);
const araba7 = new Araba(
  "35volvo45",
  "Volvo",
  "240",
  "2015",
  "2500",
  "Kullanılabilir",
  "./assets/images/volvo2.jpg"
);
const araba8 = new Araba(
  "37fiat85",
  "Fiat",
  "500",
  "1975",
  "700",
  "Rezerve",
  "./assets/images/fiat2.jpg"
);

cars.addAraba(araba1);
cars.addAraba(araba2);
cars.addAraba(araba3);
cars.addAraba(araba4);
cars.addAraba(araba5);
cars.addAraba(araba6);
cars.addAraba(araba7);
cars.addAraba(araba8);

const main = document.getElementById("row");
main.className = "row gap";

function arabaFonksiyon(sonuc) {
  main.innerHTML = "";
  cars.getMyAraba().forEach((araba) => {
    //başlık Yapısı
    const card = document.createElement("div");
    card.className = "col-4 col-sm-6 mt0 card";

    const cardItem = document.createElement("div");
    cardItem.className = "row";

    let baslik = document.createElement("h2");
    baslik.className = "col-6-11";

    baslik.textContent = araba.marka + " " + araba.model;
    const imageDiv = document.createElement("div");

    imageDiv.className = "image-height-center col-6-11";
    let image = document.createElement("img");

    image.src = araba.resim;
    //Table Yapısı
    const tableSection = document.createElement("div");
    tableSection.className = "navbar-center";
    const tableDiv = document.createElement("div");

    tableDiv.className = "table-responsive";
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    const tr1 = document.createElement("tr");
    const tr2 = document.createElement("tr");
    const tr3 = document.createElement("tr");
    const tr4 = document.createElement("tr");
    const tr5 = document.createElement("tr");
    const tr6 = document.createElement("tr");

    let markaTd = document.createElement("td");
    markaTd.textContent = "Marka:";

    let markaTextTd = document.createElement("td");
    markaTextTd.textContent = araba.marka;

    let modelTd = document.createElement("td");
    modelTd.textContent = "Model:";

    let modelTextTd = document.createElement("td");
    modelTextTd.textContent = araba.model;

    let yilTd = document.createElement("td");
    yilTd.textContent = "yil:";

    let yilTextTd = document.createElement("td");
    yilTextTd.textContent = araba.yil;

    let plakaTd = document.createElement("td");
    plakaTd.textContent = "Plaka:";

    let plakaTextTd = document.createElement("td");
    plakaTextTd.textContent = araba.plaka;

    let kiraBedeliTd = document.createElement("td");
    kiraBedeliTd.textContent = "Kira Ücreti:";
    
    let kiraBedeliTextTd = document.createElement("td");
    
    if (sonuc != NaN) {
      kiraBedeliTextTd.innerHTML =
        Number(araba.kiraBedeli) * sonuc + " " + "TL";
    } else {
      kiraBedeliTextTd.innerHTML = araba.kiraBedeli + "TL";
    }

    let durumTd = document.createElement("td");
    durumTd.textContent = "Durumu:";

    let durumTextTd = document.createElement("td");
    durumTextTd.textContent = araba.durum;

    let kiralabuton = document.createElement("button");
    kiralabuton.type = "button";

    kiralabuton.className = "btn-out-white mb2";
    kiralabuton.textContent = "Kirala";

    kiralabuton.addEventListener("click", () => {
      kiralamaYapilanAraba(araba);

      if (dateGiris.value && dateBitis && hesaplaButonuCheck == true) {
        alert("Ödeme ekranına ininiz");
        odemeWindow.style.display =  "flex";
        odemeWindow.style.alignItems="center";
        odemeWindow.style.justifyContent="center";
        odemeWindow.style.flexDirection="column";
        if (durumTextTd.textContent.toLowerCase() == "kullanılabilir") {
          cars.updateAraba(araba.marka, "Kiralandı");
          durumTextTd.textContent = araba.durum;
        } else {
          alert("Araç kiralanamaz " + durumTextTd.textContent);
        }
      } else {
        alert("Tarih Seçiniz ve Hesapla Butonuna Basınız");
      }
    });

    main.appendChild(card);
    card.appendChild(cardItem);
    cardItem.appendChild(baslik);
    cardItem.appendChild(imageDiv);
    imageDiv.appendChild(image);
    card.appendChild(tableSection);
    tableSection.appendChild(tableDiv);
    tableDiv.appendChild(table);
    table.appendChild(tbody);
    tbody.appendChild(tr1);
    tbody.appendChild(tr2);
    tbody.appendChild(tr3);
    tbody.appendChild(tr4);
    tbody.appendChild(tr5);
    tbody.appendChild(tr6);
    tr1.appendChild(markaTd);
    tr1.appendChild(markaTextTd);
    tr2.appendChild(modelTd);
    tr2.appendChild(modelTextTd);
    tr3.appendChild(yilTd);
    tr3.appendChild(yilTextTd);
    tr4.appendChild(plakaTd);
    tr4.appendChild(plakaTextTd);
    tr5.appendChild(kiraBedeliTd);
    tr5.appendChild(kiraBedeliTextTd);
    tr6.appendChild(durumTd);
    tr6.appendChild(durumTextTd);
    tableSection.appendChild(kiralabuton);
  });
}

arabaFonksiyon(1);
const musteriListeleButton = document.getElementById("musteriListesi");
musteriListeleButton.addEventListener("click", function () {
  
  let kiralanacakOlanAraba = myObject.getMyAraba()[0].marka;
  let kiralayanMüsteri = myObject.getMyMusteri()[0].isim;

  customer.updateMusteri(
    kiralayanMüsteri,
    kiralanacakOlanAraba,
    dateGiris.value + dateBitis.value
  );
  musteriListele(kiralanacakOlanAraba, kiralayanMüsteri);
});

function musteriListele(kiralananAraba, kiralayanMüsteri) {
  const musteriListe = document.getElementById("musteriListe");
  musteriListe.innerHTML = "";
  customer.getMyMusteri().forEach((musteri) => {
    const tr = document.createElement("tr");
    let isimTd = document.createElement("td");
    isimTd.textContent = musteri.isim;
    let soyisimTd = document.createElement("td");
    soyisimTd.textContent = musteri.soyisim;
    let emailTd = document.createElement("td");
    emailTd.textContent = musteri.email;
    let sifreTd = document.createElement("td");
    sifreTd.textContent = musteri.sifre;
    let telefonTd = document.createElement("td");
    telefonTd.textContent = musteri.telefon;
    let tcTd = document.createElement("td");
    tcTd.textContent = musteri.tc;
    let kiraladigiArabaTd = document.createElement("td");
    kiraladigiArabaTd.textContent =
      kiralayanMüsteri == musteri.isim
        ? kiralananAraba
        : musteri.kiraladigiAraba;
    let kiraladigiZamanTd = document.createElement("td");
    kiraladigiZamanTd.textContent =
      kiralayanMüsteri == musteri.isim
        ? dateGiris.value + "/" + dateBitis.value
        : musteri.kiraladigiTarih;
    const settingsBtnTd = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn-red me5";
    deleteBtn.addEventListener("click", () => {
      if(musteri.isim!= "Admin"){
        customer.deleteMusterii(musteri.isim)
        musteriListele()
      }
    });
    //Düzenleme işlemi
    const duzenleBtn = document.createElement("button");
    duzenleBtn.textContent = "Düzenle";
    duzenleBtn.className = "btn-green";
    duzenleBtn.addEventListener("click", () => {
      duzenleMusteri(musteri);
    });
    settingsBtnTd.appendChild(deleteBtn);
    settingsBtnTd.appendChild(duzenleBtn);
    musteriListe.appendChild(tr);
    tr.appendChild(isimTd);
    tr.appendChild(soyisimTd);
    tr.appendChild(emailTd);
    tr.appendChild(sifreTd);
    tr.appendChild(telefonTd);
    tr.appendChild(tcTd);
    tr.appendChild(kiraladigiArabaTd);
    tr.appendChild(kiraladigiZamanTd);
    tr.appendChild(settingsBtnTd);
  });
  myObject.bosalt();
}

// /Musteri Ekle/;
function musteriEkle() {
  const isim = document.getElementById("isim").value;
  const soyisim = document.getElementById("soyisim").value;
  const email = document.getElementById("email").value;
  const sifre = document.getElementById("sifre").value;
  const telefon = document.getElementById("telefon").value;
  const tc = document.getElementById("tc").value;
  if (isim && soyisim && email && sifre && telefon && tc) {
    let musteri = new Musteri(isim, soyisim, email, sifre, telefon, tc);
    customer.addMusteri(musteri);
    musteriListele();
  } else {
    alert("Eksik bilgi girdiniz.");
  }
}

// Düzenleme formunu gizle
const duzenleForm = document.getElementById("duzenleForm");
// Düzenleme işlemi başlat
function duzenleMusteri(musteri) {
  // Düzenleme formunu göster
  duzenleForm.style.display = "flex"; // Düzenlenen müşteri bilgilerini formda göster
  duzenleForm.style.flexDirection = "column"; // Düzenlenen müşteri bilgilerini formda göster
  duzenleForm.style.alignItems = "center"; // Düzenlenen müşteri bilgilerini formda göster
  document.getElementById("duzenlenecekMusteriIndex").value = customer
    .getMyMusteri()
    .indexOf(musteri);
  document.getElementById("duzenleIsim").value = musteri.isim;
  document.getElementById("duzenleSoyisim").value = musteri.soyisim;
  document.getElementById("duzenleEmail").value = musteri.email;
  document.getElementById("duzenleSifre").value = musteri.sifre;
  document.getElementById("duzenleTelefon").value = musteri.telefon;
  document.getElementById("duzenleTc").value = musteri.tc;
}
// Düzenleme formunu iptal et
document.getElementById("duzenleIptal").addEventListener("click", function () {
  duzenleForm.style.display = "none";
});

// Düzenleme işlemini kaydet
document.getElementById("duzenleKaydet").addEventListener("click", function () {
  // Düzenlenen müşteri bilgilerini alın
  const duzenlenecekMusteriIndex = document.getElementById(
    "duzenlenecekMusteriIndex"
  ).value;
  const yeniIsim = document.getElementById("duzenleIsim").value;
  const yeniSoyisim = document.getElementById("duzenleSoyisim").value;
  const yeniEmail = document.getElementById("duzenleEmail").value;
  const yeniSifre = document.getElementById("duzenleSifre").value;
  const yeniTelefon = document.getElementById("duzenleTelefon").value;
  const yeniTc = document.getElementById("duzenleTc").value;
  // Müşteri nesnesini güncelle
  const duzenlenecekMusteri = customer.getMyMusteri()[duzenlenecekMusteriIndex];
  duzenlenecekMusteri.isim = yeniIsim;
  duzenlenecekMusteri.soyisim = yeniSoyisim;
  duzenlenecekMusteri.email = yeniEmail;
  duzenlenecekMusteri.sifre = yeniSifre;
  duzenlenecekMusteri.telefon = yeniTelefon;
  duzenlenecekMusteri.tc = yeniTc;
  // Düzenleme formunu gizle
  duzenleForm.style.display = "none";
  // Müşteri listesini yeniden oluştur
  musteriListele();
});

let dateButton = document.getElementById("tarihbtn");
let dateGiris = document.getElementById("startDate");
let dateBitis = document.getElementById("endDate");
let hesaplaButonuCheck = false;
dateButton.addEventListener("click", () => {
  hesapla();
  hesaplaButonuCheck = true;
});

function hesapla() {
  var dateBitis_ = dateBitis.value.split("-");
  var dateGiris_ = dateGiris.value.split("-");
  var gunSonuc = Number(dateBitis_[2]) - Number(dateGiris_[2]);
  var aySonuc = Number(dateBitis_[1]) - Number(dateGiris_[1]);
  var sonuc = gunSonuc + aySonuc * 30;
  if (sonuc > 0) {
    arabaFonksiyon(sonuc);
  } else {
    alert("Yanlış Tarih girdiniz");
  }
}

var loginLink = document.getElementById("login-link");
var loginWindow = document.getElementById("login-window");
var loginButton = document.getElementById("login-button");
var body = document.getElementsByTagName("body");
loginLink.addEventListener("click", function (event) {
  event.preventDefault();
  loginWindow.style.display = "block";
  body.style.display = "none";
});

loginButton.addEventListener("click", function () {
  loginWindow.style.display = "none";
  body.style.display = "block";
});

var signupLink = document.getElementById("signup-link");
var signupWindow = document.getElementById("signup-window");
var signupButton = document.getElementById("signup-button");

signupLink.addEventListener("click", function (event) {
  event.preventDefault();
  signupWindow.style.display = "block";
  body.style.display = "none";
});

signupButton.addEventListener("click", function () {
  musteriEkle();
  signupWindow.style.display = "none";
  body.style.display = "block";
});

var body = document.getElementsByTagName("body");
loginLink.addEventListener("click", function (event) {
  event.preventDefault();
  loginWindow.style.display = "block";
  body.style.display = "none";
});

loginButton.addEventListener("click", function () {
  login();
  loginWindow.style.display = "none";
  body.style.display = "block";
});

let kullaniciEmail = document.getElementById("yeni_email");
let kullaniciPassword = document.getElementById("yeni_password");
let loginSignup = document.getElementById("loginSignup");
let loginItem = document.getElementById("login");
let signupItem = document.getElementById("signup");
let kiralaButtonu = document.getElementById("kiralaButon");
const musteriListe_ = document.getElementById("musteriListe_");

musteriListeleButton.style.display = "none";
musteriListe_.style.display = "none";
function login() {
  var kimlikDogrulama = customer.getMyMusteri().find(function (element) {
    return kullaniciEmail.value == element.email &&
      kullaniciPassword.value == element.sifre
      ? true
      : false;
  });

  if (kimlikDogrulama) {
    if (
      kimlikDogrulama.email == "admin@gmail.com" &&
      kimlikDogrulama.sifre == "admin"
    ) {
      musteriListe_.style.display = "table";
      musteriListeleButton.style.display = "block";
    } else {
      musteriListe_.style.display = "none";
    }
    myObject.addMusteri(kimlikDogrulama);

    loginSignup.innerHTML = "";
    alert("Giriş Başarılı");
    loginItem.style.display = "none";
    signupItem.style.display = "none";
    let li = document.createElement("li");
    li.className = "nav-item";
    let ahref = document.createElement("a");
    ahref.textContent = "Hoşgeldin " + kimlikDogrulama.isim;
    ahref.className = "nav-link";
    loginSignup.appendChild(li);
    li.appendChild(ahref);
    let li2 = document.createElement("li");
    li2.className = "nav-item";
    let ahref2 = document.createElement("a");
    ahref2.textContent = "Çıkış Yap";
    ahref2.className = "nav-link";
    ahref2.id = "secondLogin";
    loginSignup.appendChild(li2);
    li2.appendChild(ahref2);
    let secondLogin = document.getElementById("secondLogin");
    secondLogin.addEventListener("click", (event) => {
      event.preventDefault();
      loginWindow.style.display = "block";
      body.style.display = "none";
      myObject.bosalt();
    });
  } else {
    alert("Giriş Başarısız");
  }
}

function kiralamaYapilanAraba(araba) {
  if (araba != undefined) {
    myObject.addAraba(araba);
  }
}

// Ödeme:
let odemeWindow = document.getElementById("odeme-window");
odemeWindow.style.display = "none";
let cardNumber = document.getElementById("cardNumber");
let expirationDate = document.getElementById("expirationDate");
let cvv = document.getElementById("cvv");
let odemeButton = document.getElementById("odeme-button");

odemeButton.addEventListener("click" , ()=>{
 odemeYap();
})

function odemeYap() {
  var cardNumber = document.getElementById("cardNumber").value;
  var expirationDate = document.getElementById("expirationDate").value;
  var cvv = document.getElementById("cvv").value;

  if (cardNumber == "" && expirationDate == "" && cvv == "") {
    alert("Eksik yerleri doldurunuz.");
  } else {
    alert(
      "Ödeme işlemi tamamlandı. Kart Numarası: " +
        cardNumber 
    );
  }
}     