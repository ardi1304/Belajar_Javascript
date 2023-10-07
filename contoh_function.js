function jumlVolumeDuaKubus(a,b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}
alert (jumlVolumeDuaKubus(8, 3));
alert (jumlVolumeDuaKubus(3321,2121));
alert (jumlVolumeDuaKubus(15,12));