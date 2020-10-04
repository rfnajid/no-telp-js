
# no-telp-js

Library JS untuk validasi &amp; mengecek operator nomor telepon Indonesia 🇮🇩

Operator yang disupport :

 - Telkomsel
	 - kartuHalo
	 - simPATI
	 - KARTU As
	 - LOOP
	 - By. U
- Indosat Ooredoo
	- Matrix
	- IndosatM2
	- Mentari
	- IM3
- XL Axiata
	- XL
	- Axis
- 3
- Smartfren
- Net1 (Ceria)
- ByRU

### Instalasi

NPM :

    npm install no-telp


Browser :

    <script src="noTelp.js"></script>

CDN :

	<script src="https://cdn.jsdelivr.net/npm/no-telp"></script>

[Lebih Lengkapnya](https://cdn.jsdelivr.net/npm/no-telp/)

###  Penggunaan

    getOperator(noTelp[, validasi])

**noTelp**: string, menerima format 081XXXXX, +62XXXX, dan 62XXXX
**validasi**: boolean optional, defaultnya false, set true apabila ingin menggunakan validasi yang tersedia. Saat ini hanya berupa pengecekan jumlah karakter saja

Return value  :

    { operator : string, card: string, message: string, valid: boolean}

**operator**: nama operator,
**card**: nama kartu
**message**: pesan error/sukses
**valid**: apakah nomer valid

Lebih lengkapnya bisa dilihat di folder [example](https://github.com/rfnajid/no-telp-js/tree/master/example)

### Showcase
- [Cek Operator](http://cek-operator.rfnaj.id)

### Pengembangan Selanjutnya
☐ Support nomer telepon rumahan
☐ Support operator luar negeri 🌎

### Referensi

https://id.wikipedia.org/wiki/Daftar_kode_telepon_di_Indonesia

### License
[MIT](https://github.com/rfnajid/no-telp-js/blob/master/LICENSE)

##

    Developed with ❤️ from SUB