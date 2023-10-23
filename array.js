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
arr[2] = undefined;
console.log(arr[2]);

// menampilkan isi array
for (var i = 0; i < namaMhs.length; i++){ //menggunakan method array .length
    console.log(namaMhs[i]);
}
