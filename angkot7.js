var penumpang = ['Sandhika', undefined, 'Doddy'];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    if( penumpang.length == 0) {  //jika angkot kosong
         penumpang.push(namaPenumpang); //tambah penumpang di awal array
         return penumpang; //kembalikan isi array & keluar dari function
    } else { //else
        for ( var i = 0; i < penumpang.length; i++ ) { //telusuri seluruh kursi dari awal
             if ( penumpang[i] == undefined ) { //jika ada kursi kosong
                  penumpang[i] = namaPenumpang; //tambah penumpang di kursi tersebut
                  return penumpang;   //kembalikan isi array & keluar dari function
            }
            else if ( penumpang[i] == namaPenumpang) {    //jika sudah ada nama yang sama
                console.log(namaPenumpang + ' sudah ada di dalam angkot.'); //tampilkan pesan kesalahannya
                return penumpang; //kembalikan isi array & keluar dari function
            }
            else if( i == penumpang.length - 1) { //jika seluruh kursi terisi
                 penumpang.push(namaPenumpang); //tambah penumpang di akhir array
                 return penumpang; //kembalikan isi array & keluar dari function
            }
        }    
    }
}