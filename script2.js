// alert("Hello, world!!");

var nama = "Vista";
let umur = 17;
let aktif = true;
let kosong = null;
const sekolah = "SMA NEGERI 1 PATI";
let Umur = 17;
let status = (umur >= 17) ? "Dewasa" : "Anak-anak";


alert("nama saya "  + nama +  "  umur saya "  + umur +  " saya bersekolah di "  + sekolah);  // Vista umur saya 17
    console.log(status); 
    console.log(nama);  // Vista
    console.log(umur);  // 17
    console.log(sekolah); // SMA NEGERI 1 PATI
    console.log(status); // Dewasa

    let x = 30;

// if (x==10) {
//     console.log("x is 10");    
// }else if (x==20) {
//     console.log("x is 20");
// }else {
//     console.log("x is neither 10 nor 20");
// }


switch (x) {
    case 10:
        console.log("x is 10");
        break;
    case 20:
        console.log("x is 20");
        break;
    default:
        console.log("x is neither 10 nor 20");
}



const usia = 17, hari = "Senin", isMember = true;
const HARGA_DASAR = 50000;
let harga = usia < 5 ? 0 : usia <= 12 ? HARGA_DASAR * 0.5 : usia >= 60 ? HARGA_DASAR * 0.7 : HARGA_DASAR;
if (harga > 0) {
    const h = hari.toLowerCase();
    if (["senin", "selasa", "rabu", "kamis"].includes(h)) harga *= 0.9;
    else if (["sabtu", "minggu"].includes(h)) harga += HARGA_DASAR * 0.2;
}
if (isMember && harga > 0) harga *= 0.85;
alert(`Usia : ${usia}\nHari : ${hari}\nMember : ${isMember ? 'ya' : 'tidak'}\nHarga akhir : Rp ${Math.round(harga).toLocaleString("id-ID")}`);