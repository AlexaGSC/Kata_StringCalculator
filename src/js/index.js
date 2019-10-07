function stringCalculator (numberStr) {

    if ( numberStr == '') {
        return 0;
    }
    if ( numberStr.lenght == 1) {
        return parseInt(numberStr);
    }

    if ( numberStr.lenght > 1) {
        let nString = numberStr.split(',');
        let suma = 0;

            for( i=0; i < nString.lenght; i++) {
                suma = suma + parceInt(nString[i]);
            }
          
    }

    console.log(suma)
}

console.log(stringCalculator(''));
console.log(stringCalculator('2'));
console.log(stringCalculator('2,7'));