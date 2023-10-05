var segiTiga = '';
for (var i = 0 ; i < 10; i++) {
    for ( var j = 0; j < i; j++) {
        segiTiga += '*';  
    } 
    segiTiga += '\n';
}
for (var i = 10 ; i > 0; i--) {
    for ( var j = 0; j < i; j++) {
        segiTiga += '*';  
    } 
    segiTiga += '\n';
}
console.log(segiTiga);


//contoh belah ketupat
var segiTiga = '';
for (var i = 1; i <= 10; i++) {
    for (var j = 10; j >= i; j--) {
        segiTiga += ' ';
    }
    for (var k = 1; k <= i + (i-1); k++) {
        segiTiga += '*';
    }
    segiTiga += '\n';
}
for (var i = 1; i <= 10; i++){
    for (var j = 1; j <= i; j++) {
        segiTiga += ' ';
    }
    for (var k = 10; k >= (2*i -10); k--) {
        segiTiga += '*';
    }
    segiTiga += '\n';
}
console.log(segiTiga);
