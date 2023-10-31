var penumpang = ['dias', undefined, 'ratim'];
var tbhPenumpang = function(nmPenumpang, penumpang) {
    if ( penumpang.length == 0) {                       
        penumpang.push(nmPenumpang);                    
        return penumpang;                               
    } else {                                            
        for ( var i = 0; i < penumpang.length; i++ ) {
            if (penumpang[i] == undefined) {            
                penumpang[i] = nmPenumpang;                
                return penumpang;                          
            };
            else if (penumpang[i] == nmPenumpang) {  
                console.log(nmPenumpang + ' sudah ada di dalam angkot') 
                return penumpang; 
            };
            else if ( i == penumpang.length - 1){     
                penumpang.push(nmPenumpang);            
                return penumpang;                       
            };
        };    
    };
};