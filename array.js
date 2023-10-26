var namaMhs = ['ardi', 'nia' , 'andri', 'nadia', 'john', 'dila'];

console.log(namaMhs[5]);


// menambah isi array
var arr = [];
arr[0] = 'ardi';
arr[1] = 'andri';
arr[2] = 'suhendri';
arr[3] = 'dody';
console.log(arr);



// menghapus isi array
// arr[2] = undefined;
console.log(arr[2]);

// menampilkan isi array
for (var i = 0; i < namaMhs.length; i++){ //menggunakan method array .length
    console.log(namaMhs[i]);
}


// method pada array

// 1.join (menggabungkan)
console.log(namaMhs.join('~'));
console.log(arr.join(' _ '));

arr.push('dedy');  //2.push (menambahkan elemen terakhir) 
namaMhs.push('misbah');

arr.pop(); //3. pop (menghapus elemen terakhir)
namaMhs.pop();

namaMhs.shift();  //4. shift (menghilangkan elemen pertama)
arr.unshift('darius'); //5. unshift (menambahkan elemen pertama)

console.log(arr.join('|'));
console.log(namaMhs.join());


// 6. Splice
// namaArray.splice(indexYangMauDitambahkan, mauDihapusBerapa, elemenBaru1, elemenBaru2, ....)
var namaBuah = ['semangka', 'mangga', 'pepaya'];
namaBuah.splice(1, 0, 'pisang', 'jambu');
console.log(namaBuah.join(' ~ '));

// 7. Slice
// namaArray.slice(indexYangAkanDiPotong, akhir)
//contoh 0 1 2 3 4 5 jika 2 s/d 5 akan yg di potong 2-4 5 nya ngga ikut
var namaBuah2 = namaBuah.slice(1,4);
console.log(namaBuah2.join(' ~ '));

// 8.forEach
var angka = [1,2,3,4,5,6,7,8];
// for(var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }
angka.forEach(function(e) {
    console.log(e);
})

namaMhs.forEach(function(e) {
    console.log(e);
})

