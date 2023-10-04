var namaMakanan = prompt('Masukan Nama Makanan : \n (cth: nasi, ayam, telur, jeroan, gorengan) ');
switch (namaMakanan) {
    case 'nasi':
    case 'ayam':
    case 'telur':
        alert(namaMakanan + ' Adalah Makanan SEHAT');
        break;
    case 'jeroan':
    case 'gorengan':
        alert(namaMakanan + ' Adalah Makanan TIDAK SEHAT');
        break;
    default:
        alert('Nama Makanan SALAH');    
}