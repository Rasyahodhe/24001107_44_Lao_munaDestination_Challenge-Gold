> [!NOTE]
>
> # First Project

## Hal Yang Dilakukan Pertama kali

Sebelum menjalankan Website hal-hal yang di persiapkan :
-> Install Postgres SQL
-> Install VSC

Cara menjalankan webesite ini :

### Beberapa Konfigurasi

-> 1. Download dulu repository ini atau clone repo ini

-> 2. setelah diclone, open git bash dalam folder clone repo teman-teman lalu ketik `code .` untuk membuka Visual Studio Code, setelah itu Open terminal Visual Studio Code lalu ketik `cd app` code ini berfungsi memasukkan kita kedalam folder App.

-> 3. Setelah Masuk di terminal teman-teman ketik ini ke terminal kayak gini ya `npm install knex -g`.

-> 4. lanjut Masih di area terminal Visual Studio Code, teman-teman ketik `cd config` untuk masuk ke folder Config.

-> 5. Setelah masuk di folder Config teman-teman ketik lagi kedalam terminal seperti point ke 3 `npm install knex -g`.

kenapa point 3 dan 5 codenya diulang ?, saya sempat hanya menginstall di luar folder config tetapi terjadi error, nah ketika saya menginstall didalam folder config juga, akhirnya sistemnya berhasil berjalan. Demi menghindari terjadinya error saya melakukan dua kali penginstalan knex (diluar folder config dan didalam folder config), entah itu hasil penginstallannya saling tertimpah atau di reinstall, saya hanya coba mencoba menghilangkan error yang terjadi.

-> 6. Setelah itu kembali lagi ke Folder App menggunakan terminal ya teman-teman `cd ..`, setelah berada di folder APP teman-teman ketik kan didalam terminal kayak gini ya `npm install express pg knex`.

-> 7. Lanjut setelah itu sebelum menjalankan website ini teman-teman harus membuat database terlebih dahulu dengan menggunakan potgress SQL. Setelah Membuat databasenya silahkan Kembali lagi ke Folder Config lalu konfigurasi bagian knexfile.js nya ya. Perhatikan baik-baik nama databasenya, usernamenya dan passwordnya jika database teman-teman berbeda dengan yang ada direpo ini, teman-teman wajib mengkonfigurasinya ya.

-> 8. Setelah Berhasil Mengkonfigurasinya kita masuk di cara MIGRATE dan SEED tapi masih di Folder config ya teman-teman.

## Cara MIGRATE & SEED Di Folder Config

### Cara Migrate :

(1.) Membuat Tabel

Setelah teman-teman mengonfigurasi knexfile.js nya teman-teman sekarang buka terminal lagi, lalu ketik code `knex migrate:latest`.
Otomatis tabel users dan destinations akan terbuat.

(2.) Menghapus Tabel

Disini teman-teman saya menganjurkan jika ingin menghapus salah satu tabel maka teman-teman hanya tinggal menggunakan code
`knex migrate:down 'nama_file_migratenya'`.

Contoh : `knex migrate:down 20240517072240_destinations.js`

### Cara Seed :

Disini Teman-teman saya tidak menganjurkan langsung menggunakan code `knex seed:run` tapi step by step, Karena jika teman-teman menggunakan code `knex seed:run` data memang otomatis terisi di kedua tabel tersebut namun id tabel user dan destination akan berlanjut.

contoh data users ada 5 data dan data destinasi ada 10 :

Di `id user` didalam tabel user akan dimulai dari Id 1-5 sedangkan id destinasi didalam tabel destinasi akan dimulai dengan Id 6 - 15.

jadi saya sarankan untuk menggunakan code

`knex seed:run --specific='nama_file_seed'`.

Contoh :

`knex seed:run --specific=users.js` // mengisi data pada tabel users.

`knex seed:run --specific=destinations.js` //mengisi data pada tabel destinations

jadi dengan step by step data Id di kedua tabel akan normal.

## Menjalankan Website

Setelah mengkonfigurasi di Folder Config, maka kembalilah ke folder APP dengan mengetik code `cd ..`, perintah kode ini agar kita kembali ke folder APP.
Lengkapi Depenciesnya ya :

        "bootstrap": "^5.3.3",
        "ejs": "^3.1.9",
        "express": "^4.18.3", // pasti udah ada
        "express-ejs-layouts": "^2.5.1",
        "express-validator": "^7.0.1",
        "file-system": "^2.2.2",
        "knex": "^3.1.0", // pasti udah ada
        "nodemon": "^3.1.0",
        "pg": "^8.11.5" // pasti udah ada

setelah Dependeciesnya lengkap. kita coba jalankan websitenya dengan mengetik code kedalam terminal sperti ini `npm start`.

```

```
