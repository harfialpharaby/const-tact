# const-tact
Learning CRUD on contact list using REST-API

# The Idea
1. Buat sebuah halaman login register
2. Akan ada kontak-kontak public dimana dapat diakses semua orang yang telah login
3. Ada kontak group dimana jika ada salah satu member grup menambahkan kontak di grup tsb maka semua anggota grup akan dapat melihat kontak tsb
4. Ada kontak personal dimana hanya orang ybs yang dapat melihat kontak personal tsb

# Next Flow
1. User Login / Register
2. Muncul checklist untuk menampilkan kontak mana yang muncul (default: personal)
3. Pada step 2 juga terdapat menu untuk menambahkan maupun mengedit kontak dengan beberapa syarat:

    3.1 Untuk kontak personal dapat langsung add, edit, delete

    3.2 Untuk kontak group perlu approve setidaknya 10 atau setengah member grup baru kontak akan berubah atau terhapus, untuk add akan langsung ditambahkan tanpa approval

    3.3 Untuk kontak public maka perlu adanya approve baik untuk add, edit, delete setidaknya 10 user