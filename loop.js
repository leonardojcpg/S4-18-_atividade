//CONTAGEM DE UM ATE VINTE
function oneTotwenty (){
    let meuRetorno = []
    for (counter = 1; counter <= 20; counter ++){
        meuRetorno.push(counter)
    }
    return meuRetorno
}
console.log (oneTotwenty())


// PARES DE UM A VINTE
function evenToTwenty(){
    let meuRetorno = []
    for (counter = 1; counter <= 20; counter ++){
        if((counter%2) == 0){
            meuRetorno.push(counter)
        }
    }
    return meuRetorno
}
console.log(evenToTwenty())


// IMPARES DE UM A VINTE
function oddsToTwenty(){
    let meuRetorno = []
    for (counter = 1; counter <= 20; counter ++){
        if((counter%2) !== 0){
            meuRetorno.push(counter)
        }
    }
    return meuRetorno
}
console.log(oddsToTwenty())

// MULTIPLOS DE 5 ATE 100

function multiplesOfFive(){
    let meuRetorno = []
    for (counter = 1; counter <= 100; counter ++){
        if((counter%5) == 0){
            meuRetorno.push(counter)
        }
    }
    return meuRetorno
}
console.log(multiplesOfFive())

// NUMEROS QUADRADOS PERFEITOS


// NUMEROS CONTANDO DO VINTA AO UM

function twentyToOne (){
    let meuRetorno = []
    for (counter = 20; counter <= 20 && counter> 0 ; counter --){
        meuRetorno.push(counter)
    }
    return meuRetorno
}
console.log (twentyToOne())

// NUMERO IMPARES DE 20 A 1

function twentyToOneEven (){
    let meuRetorno = []
    for (counter = 20; counter <= 20 && counter> 0 ; counter --){
      if((counter%2) != 0)
        meuRetorno.push(counter)
    }
    return meuRetorno
}
console.log (twentyToOneEven())

// NUMERO PARES DE 20 A 1

function twentyToOneOdd (){
    let meuRetorno = []
    for (counter = 20; counter <= 20 && counter> 0 ; counter --){
      if((counter%2) == 0)
        meuRetorno.push(counter)
    }
    return meuRetorno
}
console.log (twentyToOneOdd())

// NUMEROS PARES DE 100 A 1

function hundredToOneMultiplesOfFive (){
    let meuRetorno = []
    for (counter = 100; counter <= 100 && counter> 0 ; counter --){
      if((counter%5) == 0)
        meuRetorno.push(counter)
    }
    return meuRetorno
}
console.log (hundredToOneMultiplesOfFive())

