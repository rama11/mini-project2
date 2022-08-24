# Dokumentasi API

Ada 4 Item yang bisa di test

- [Test API Barang](https://github.com/rama11/mini-project2/tree/master/laravel-api#test-api-barang)
- [Test API Pelanggan](https://github.com/rama11/mini-project2/tree/master/laravel-api#test-api-pelanggan)
- [Test API Penjualan](https://github.com/rama11/mini-project2/tree/master/laravel-api#test-api-penjualan)
- [Test API ItemPenjualan](https://github.com/rama11/mini-project2/tree/master/laravel-api#test-api-itempenjualan)

## Test API Barang

Read All

```sh
curl -v -X GET https://mini-project-laravel.herokuapp.com/barang | json_pp
```

Read Each

```sh
curl -v -X GET https://mini-project-laravel.herokuapp.com/barang/1 | json_pp
```

Create

```sh
curl -v -X POST https://mini-project-laravel.herokuapp.com/barang \
	-F 'nama=Pen' \
	-F 'kategori=ATK' \
	-F 'harga=15000' 

curl -v -X POST https://mini-project-laravel.herokuapp.com/barang \
	-F 'nama=Pensil' \
	-F 'kategori=ATK' \
	-F 'harga=10000' 

curl -v -X POST https://mini-project-laravel.herokuapp.com/barang \
	-F 'nama=Payung' \
	-F 'kategori=RT' \
	-F 'harga=70000' 

curl -v -X POST https://mini-project-laravel.herokuapp.com/barang \
	-F 'nama=Panci' \
	-F 'kategori=MASAK' \
	-F 'harga=110000'

curl -v -X POST https://mini-project-laravel.herokuapp.com/barang \
	-F 'nama=Sapu' \
	-F 'kategori=RT' \
	-F 'harga=40000'

curl -v -X POST https://mini-project-laravel.herokuapp.com/barang \
	-F 'nama=Kipas' \
	-F 'kategori=ELEKTRONIK' \
	-F 'harga=200000'

curl -v -X POST https://mini-project-laravel.herokuapp.com/barang \
	-F 'nama=Kuali' \
	-F 'kategori=MASAK' \
	-F 'harga=120000'

curl -v -X POST https://mini-project-laravel.herokuapp.com/barang \
	-F 'nama=Sikat' \
	-F 'kategori=RT' \
	-F 'harga=30000'

curl -v -X POST https://mini-project-laravel.herokuapp.com/barang \
	-F 'nama=Gelas' \
	-F 'kategori=RT' \
	-F 'harga=25000'

curl -v -X POST https://mini-project-laravel.herokuapp.com/barang \
	-F 'nama=Piring' \
	-F 'kategori=RT' \
	-F 'harga=35000'
```

Update

```sh
curl -v -X PUT https://mini-project-laravel.herokuapp.com/barang/1 \
    -d 'nama=Pen' \
    -d 'kategori=ATK' \
    -d 'harga=15000'
```

Delete

```sh
curl -v -X DELETE https://mini-project-laravel.herokuapp.com/barang/10
```

## Test API Pelanggan

Read All

```sh	
curl -v -X GET https://mini-project-laravel.herokuapp.com/pelanggan | json_pp
```
Read Each

```sh	
curl -v -X GET https://mini-project-laravel.herokuapp.com/pelanggan/1 | json_pp
```

Create

```sh
curl -v -X POST https://mini-project-laravel.herokuapp.com/pelanggan \
	-F 'nama=ANDI' \
	-F 'domisili=JAK-UT' \
	-F 'jenis_kelamin=PRIA'
	
curl -v -X POST https://mini-project-laravel.herokuapp.com/pelanggan \
	-F 'nama=BUDI' \
	-F 'domisili=JAK-BAR' \
	-F 'jenis_kelamin=PRIA'
	
curl -v -X POST https://mini-project-laravel.herokuapp.com/pelanggan \
	-F 'nama=JOHAN' \
	-F 'domisili=JAK-SEL' \
	-F 'jenis_kelamin=PRIA'
	
curl -v -X POST https://mini-project-laravel.herokuapp.com/pelanggan \
	-F 'nama=SINTHA' \
	-F 'domisili=JAK-TIM' \
	-F 'jenis_kelamin=WANITA'
	
curl -v -X POST https://mini-project-laravel.herokuapp.com/pelanggan \
	-F 'nama=ANTO' \
	-F 'domisili=JAK-UT' \
	-F 'jenis_kelamin=PRIA'
	
curl -v -X POST https://mini-project-laravel.herokuapp.com/pelanggan \
	-F 'nama=BUJANG' \
	-F 'domisili=JAK-BAR' \
	-F 'jenis_kelamin=PRIA'
	
curl -v -X POST https://mini-project-laravel.herokuapp.com/pelanggan \
	-F 'nama=JOWAN' \
	-F 'domisili=JAK-SEL' \
	-F 'jenis_kelamin=PRIA'
	
curl -v -X POST https://mini-project-laravel.herokuapp.com/pelanggan \
	-F 'nama=SINTIA' \
	-F 'domisili=JAK-TIM' \
	-F 'jenis_kelamin=WANITA'
	
curl -v -X POST https://mini-project-laravel.herokuapp.com/pelanggan \
	-F 'nama=BUTET' \
	-F 'domisili=JAK-BAR' \
	-F 'jenis_kelamin=WANITA'
	
curl -v -X POST https://mini-project-laravel.herokuapp.com/pelanggan \
	-F 'nama=JONNY' \
	-F 'domisili=JAK-SEL' \
	-F 'jenis_kelamin=WANITA'
```

Update

```sh
curl -v -X PUT https://mini-project-laravel.herokuapp.com/pelanggan/1 \
	-d 'nama=CINDY' \
	-d 'domisili=JAK-BAR' \
	-d 'jenis_kelamin=WANITA'
```

Delete
	
```sh
curl -v -X DELETE https://mini-project-laravel.herokuapp.com/pelanggan/10
```

## Test API Penjualan

Read All
```sh	
curl -v -X GET https://mini-project-laravel.herokuapp.com/penjualan | json_pp
```

Read Each
```sh	
curl -v -X GET https://mini-project-laravel.herokuapp.com/penjualan/1 | json_pp
```

Create

```sh
curl -v -X POST https://mini-project-laravel.herokuapp.com/penjualan \
	-F 'tanggal=2018/01/01' \
	-F 'kode_pelanggan=1' \
	-F 'sub_total=50000'
	
curl -v -X POST https://mini-project-laravel.herokuapp.com/penjualan \
	-F 'tanggal=2018/01/01' \
	-F 'kode_pelanggan=2' \
	-F 'sub_total=200000'
	
curl -v -X POST https://mini-project-laravel.herokuapp.com/penjualan \
	-F 'tanggal=2018/01/01' \
	-F 'kode_pelanggan=3' \
	-F 'sub_total=430000'
	
curl -v -X POST https://mini-project-laravel.herokuapp.com/penjualan \
	-F 'tanggal=2018/01/02' \
	-F 'kode_pelanggan=7' \
	-F 'sub_total=120000'
	
curl -v -X POST https://mini-project-laravel.herokuapp.com/penjualan \
	-F 'tanggal=2018/01/02' \
	-F 'kode_pelanggan=4' \
	-F 'sub_total=70000'
	
curl -v -X POST https://mini-project-laravel.herokuapp.com/penjualan \
	-F 'tanggal=2018/01/03' \
	-F 'kode_pelanggan=8' \
	-F 'sub_total=230000'
	
curl -v -X POST https://mini-project-laravel.herokuapp.com/penjualan \
	-F 'tanggal=2018/01/03' \
	-F 'kode_pelanggan=9' \
	-F 'sub_total=390000'
	
curl -v -X POST https://mini-project-laravel.herokuapp.com/penjualan \
	-F 'tanggal=2018/01/03' \
	-F 'kode_pelanggan=5' \
	-F 'sub_total=65000'
	
curl -v -X POST https://mini-project-laravel.herokuapp.com/penjualan \
	-F 'tanggal=2018/01/04' \
	-F 'kode_pelanggan=2' \
	-F 'sub_total=40000'
```

Update

```sh
curl -v -X PUT https://mini-project-laravel.herokuapp.com/penjualan/1 \
	-d 'tanggal=2018/01/02' \
	-d 'kode_pelanggan=2' \
	-d 'sub_total=5000'
```

Delete
	
```sh	
curl -v -X DELETE https://mini-project-laravel.herokuapp.com/penjualan/9
```

## Test API ItemPenjualan

Read All
```sh	
curl -v -X GET https://mini-project-laravel.herokuapp.com/item_penjualan | json_pp
```

Read Each
```sh	
curl -v -X GET https://mini-project-laravel.herokuapp.com/item_penjualan/1 | json_pp
```

Create
```sh
curl -v -X POST https://mini-project-laravel.herokuapp.com/item_penjualan \
	-F 'id_nota=1' \
	-F 'kode_barang=1' \
	-F 'qty=2'

curl -v -X POST https://mini-project-laravel.herokuapp.com/item_penjualan \
	-F 'id_nota=1' \
	-F 'kode_barang=2' \
	-F 'qty=2'

curl -v -X POST https://mini-project-laravel.herokuapp.com/item_penjualan \
	-F 'id_nota=2' \
	-F 'kode_barang=6' \
	-F 'qty=1'

curl -v -X POST https://mini-project-laravel.herokuapp.com/item_penjualan \
	-F 'id_nota=3' \
	-F 'kode_barang=4' \
	-F 'qty=1'

curl -v -X POST https://mini-project-laravel.herokuapp.com/item_penjualan \
	-F 'id_nota=3' \
	-F 'kode_barang=7' \
	-F 'qty=1'

curl -v -X POST https://mini-project-laravel.herokuapp.com/item_penjualan \
	-F 'id_nota=3' \
	-F 'kode_barang=6' \
	-F 'qty=1'

curl -v -X POST https://mini-project-laravel.herokuapp.com/item_penjualan \
	-F 'id_nota=4' \
	-F 'kode_barang=9' \
	-F 'qty=2'

curl -v -X POST https://mini-project-laravel.herokuapp.com/item_penjualan \
	-F 'id_nota=4' \
	-F 'kode_barang=1' \
	-F 'qty=2'

curl -v -X POST https://mini-project-laravel.herokuapp.com/item_penjualan \
	-F 'id_nota=5' \
	-F 'kode_barang=3' \
	-F 'qty=1'

curl -v -X POST https://mini-project-laravel.herokuapp.com/item_penjualan \
	-F 'id_nota=6' \
	-F 'kode_barang=7' \
	-F 'qty=1'

curl -v -X POST https://mini-project-laravel.herokuapp.com/item_penjualan \
	-F 'id_nota=6' \
	-F 'kode_barang=5' \
	-F 'qty=1'

curl -v -X POST https://mini-project-laravel.herokuapp.com/item_penjualan \
	-F 'id_nota=6' \
	-F 'kode_barang=3' \
	-F 'qty=1'

curl -v -X POST https://mini-project-laravel.herokuapp.com/item_penjualan \
	-F 'id_nota=7' \
	-F 'kode_barang=5' \
	-F 'qty=1'

curl -v -X POST https://mini-project-laravel.herokuapp.com/item_penjualan \
	-F 'id_nota=7' \
	-F 'kode_barang=6' \
	-F 'qty=1'

curl -v -X POST https://mini-project-laravel.herokuapp.com/item_penjualan \
	-F 'id_nota=7' \
	-F 'kode_barang=7' \
	-F 'qty=1'

curl -v -X POST https://mini-project-laravel.herokuapp.com/item_penjualan \
	-F 'id_nota=7' \
	-F 'kode_barang=8' \
	-F 'qty=1'

curl -v -X POST https://mini-project-laravel.herokuapp.com/item_penjualan \
	-F 'id_nota=8' \
	-F 'kode_barang=5' \
	-F 'qty=1'

curl -v -X POST https://mini-project-laravel.herokuapp.com/item_penjualan \
	-F 'id_nota=8' \
	-F 'kode_barang=9' \
	-F 'qty=1'

curl -v -X POST https://mini-project-laravel.herokuapp.com/item_penjualan \
	-F 'id_nota=9' \
	-F 'kode_barang=5' \
	-F 'qty=1'
```

Update

```sh
curl -v -X PUT https://mini-project-laravel.herokuapp.com/item_penjualan/1 \
	-d 'id_nota=1' \
	-d 'kode_barang=1' \
	-d 'qty=3'
```

Delete
	
```sh	
curl -v -X DELETE https://mini-project-laravel.herokuapp.com/item_penjualan/1
```
