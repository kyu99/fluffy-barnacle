function convertWeight(summation, unitWeight) {
    var summationSplit = summation.split("+")
    //console.log(summationSplit)

    var conversion = 0
    for (var i = 0; i < summationSplit.length; i++) {
        var angka = parseInt(summationSplit[i])
        var satuan = summationSplit[i].split(' ')[1]
        // console.log(angka, satuan)

        conversion += angka * Math.pow(10, unit[satuan])
        // console.log(conversion)
    }

    conversion /= Math.pow(10,unit[unitWeight])
    conversion += ` ${unitWeight}`
    return conversion
}

var unit = {
    mg: 1,
    cg: 2,
    dg: 3,
    g: 4,
    dag: 5,
    hg: 6,
    ons: 6,
    kg: 7,
    kwintal: 9,
    ton: 10
}

console.log(convertWeight('1 ton +10 ons+2 kwintal', 'kg')) //1201 kg
  
console.log(convertWeight('1 ton +10 ons+2 kwintal', 'g')) //1201000 g
  
console.log(convertWeight('2 ton +500 kwintal+3 kg+350 ons', 'kg'))  //52038 kg
  