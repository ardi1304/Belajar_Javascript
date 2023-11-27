var penumpang = ['ardi', undefined, 'andri'];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    if( penumpang.lenght == 0) {  //jika angkot kosong
         penumpang.push(namaPenumpang); //tambah penumpang di awal array
         return penumpang; //kembalikan isi array & keluar dari function
    } else { //else
        for ( var i = 0; i < penumpang.lenght; i++ ) { //telusuri seluruh kursi dari awal
             if ( penumpang[i] == undefined ) { //jika ada kursi kosong
                  penumpang[i] = namaPenumpang; //tambah penumpang di kursi tersebut
                  return penumpang;   //kembalikan isi array & keluar dari function
            };
//             else if ( )
//                 //jika sudah ada nama yang sama
//                 //tampilkan pesan kesalahannya
//                 //kembalikan isi array & keluar dari function
//             //jika seluruh kursi terisi
//                 //tambah penumpang di akhir array
//                 //kembalikan isi array & keluar dari function
        };    
    };
};