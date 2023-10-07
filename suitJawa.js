var tanya = true;
while (tanya) {

    //  menangkap pilihan player
    var p = prompt ('pilih : gajah, semut, orang');

    // menangkap pilihan komputer
    // membangkitkan pilihan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    // menentukan rulesnya
    var hasil = '';
    if (p == comp) {
        hasil = 'SERI';
    } else if (p == 'gajah') {
        // if (comp == 'orang') {
        // hasil  = 'Menang';  
        // } else {
        //     hasil = 'KALAH';
        // }
        hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
    } else if (p == 'orang') {
        if (comp == 'gajah') {
            hasil = 'KALAH';
        } else {
            hasil = 'MENANG'
        }
    } else if (p == 'semut') {
        if (comp == 'orang') {
            hasil = 'MENANG';
        } else {
            hasil = 'KALAH';
        }
    } else {
        hasil = 'memasukan pilhan salah'
    }

    // menentukan hasilnya
    alert ('Kamu Memilih : ' + p + '\nKomputer Memilih : ' + comp + '\nMaka Hasilnya Adalah : Kamu ' + hasil);
    tanya = confirm ('main lagi?');
}
alert('Terima Kasih Sudah Bermain');
