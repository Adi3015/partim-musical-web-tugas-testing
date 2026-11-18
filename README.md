# PARTIM MUSICAL 2028

Website statis (HTML, CSS, JavaScript) untuk acara Partim Musical.

## Pembagian halaman

| Nama | Folder | Halaman | Isi halaman |
|---|---|---|---|
| Adi | `Adi-Home/` | Home | Poster utama, hitung mundur, cuplikan line up, galeri, dan tentang acara |
| Parly | `Parly-LineUp/` | Line Up | Daftar penampil dalam 8 kotak gambar bernama |
| Rapli | `Rapli-Rundown/` | Rundown | Poster rundown dengan latar buram |
| Rizkiy | `Rizkiy-About/` | About | Penjelasan tentang Partim Musical |
| Adimulyono | `Adimulyono-Galery/` | Galery | Kumpulan foto yang bisa diklik untuk dibesarkan |
| Alinda | `Alinda-Merch/` | Merch | Dua produk kaos, lengan pendek dan lengan panjang |

`style.css`, `main.js`, dan folder `img/` dipakai bersama oleh semua halaman.

## Struktur

```
index.html            -> mengarahkan ke Adi-Home/index.html
Adi-Home/index.html        -> Home
Parly-LineUp/index.html      -> Line Up
Rapli-Rundown/index.html      -> Rundown
Rizkiy-About/index.html     -> About
Adimulyono-Galery/index.html -> Galery
Alinda-Merch/index.html     -> Merch
style.css  main.js  img/
```

## Menjalankan

Buka `index.html` di root dengan browser, atau taruh seluruh folder di web server (misalnya Nginx) lalu buka alamat servernya.
