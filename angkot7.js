var penumpang = [];
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

var hapusPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.length == 0) { //jika angkot kosong
        console.log('Angkot masih kosong.'); //tampilkan pesan bahwa angkot kosong, dan
        //tidak mungkin ada penumpang turun    
    } else { //else
        for ( var i = 0; i < penumpang.length; i++ ) { //telusuri seluruh kursi dari awal
            if (penumpang[i] == namaPenumpang) { //jika nama penumpang sesuai
                penumpang[i] = undefined; //hapus penumpang dengan mengubah namanya, 
                //menjadi undefined
                return penumpang; //kembalikan isi array dan keluar dari function
            } else if (penumpang[i] == namaPenumpang ) { //jika tidak ada nama yang sesuai 
                console.log(namaPenumpang + ' sudah ada di dalam angkot.'); //tampilkan pesan kesalahannya
                return penumpang; //kembalikan isi array & keluar dari function
                
            } else if (i == penumpang.length - 1 ){
                console.log (namaPenumpang + ' tidak ada di dalam angkot.');//tampilkan pesan kesalahannya
                return penumpang; //kembalikan isi array dan keluar dari function

            }
        }
    }
    return penumpang; //kembalikan isi array dan keluar dari function               
}