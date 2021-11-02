# Tugas Individu 4

Membuat geometri yang digenerate secara terus-menerus dimana terdapat waktu percepatan dalam generate geometri. Warna dari geometri digenerate secara random. Geometri berhenti di generate ketika telah mencapai batas tertentu. Jika 2 `Mesh` dengan geometri dan warna yang sama di klik, maka kedua `Mesh` tersebut dihapus dan skor akan ditambah.

## How to run

1. Clone repository secara keseluruhan.
2. Buka folder ini pada terminal.
3. Jalankan `npm install`.
4. Jalankan `npm run dev`.

## Fitur

- Di awal akan digenerate 30 cube dengan warna random (terdapat 6 warna) dan position yang juga random.
- Cube akan digenerate dengan warna random dalam interval tertentu. Interval generate akan semakin cepat seiring berlajannya waktu.
- Cube dibatasi sebanyak 40. Selama objek tidak berkurang tidak ada cube baru yang ditambah pada scene.
- Skor akan bertambah sebanyak 50 jika berhasil memilih cube dengan warna yang sama.
- Jika memilih objek yang salah maka skor akan berkurang 10 poin.
- Jika cube mencapai 40 maka score akan direset menjadi 0.
- Hanya ada satu score leaderboard tertinggi.

## Hasil

![depan](./)