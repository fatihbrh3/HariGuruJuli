# Panduan Mengisi Foto, Lagu, dan Ucapan 🌸

Website ucapan Selamat Hari Guru bertema pink lembut sudah siap dipakai! Kamu tinggal memasukkan foto dan lagu secara manual ke folder yang sudah disiapkan.

## 1. Cara Memasukkan Foto
1. Buka folder **`assets/foto/`** (`c:\Anti Gravity\HariGuruJuli\assets\foto\`).
2. Salin (copy) **6 foto** pilihanmu ke dalam folder tersebut.
3. Ubah nama file foto-fotonya menjadi:
   - `foto1.jpg`
   - `foto2.jpg`
   - `foto3.jpg`
   - `foto4.jpg`
   - `foto5.jpg`
   - `foto6.jpg`

> **Tips:** Jika foto kamu berformat `.png` atau `.jpeg` (bukan `.jpg`), atau kamu ingin mengubah caption dan jumlah foto, cukup edit file `js/config.js` di bagian `foto: [ ... ]`.

## 2. Cara Memasukkan Lagu
1. Buka folder **`assets/lagu/`** (`c:\Anti Gravity\HariGuruJuli\assets\lagu\`).
2. Salin 1 file lagu romantis berformat `.mp3` ke dalam folder tersebut.
3. Ubah nama file lagunya menjadi:
   - `lagu.mp3`

> **Tips:** Kamu bisa mengubah judul lagu dan nama penyanyinya di file `js/config.js` pada bagian `lagu: { ... }`.

## 3. Cara Mengubah Nama Pacar, Nama Kamu, dan Isi Surat
1. Buka file **`js/config.js`** menggunakan Notepad atau VS Code.
2. Ubah bagian berikut sesuai keinginan:
   - `namaPacar` → isi nama panggilan pacarmu
   - `namaPengirim` → isi namamu
   - `surat` → isi pesan ucapan Hari Guru & surat cinta
   - `pesanBunga` → pesan manis yang muncul saat bunga digital diklik

## 4. Cara Membuka Website
- Klik dua kali file **`index.html`** untuk membukanya langsung di browser (Chrome, Edge, Safari, dll).
- Saat tombol **"Buka Hadiah Hari Guru 💌"** diklik, lagu akan otomatis mulai diputar dan taman bunga digital akan bermekaran.

