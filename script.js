/*Consegna:
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/


for (i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {  // → Numeri che sono multipli per 3 e 5.
        console.log("FizzBuzz", i);
    } else if (i % 3 === 0) {          // → Numeri che sono mulipli per 3.
        console.log("Fizz", i);
    } else if (i % 5 === 0) {          // → Numeri che sono multipli per 5.
        console.log("Buzz", i);
    } else {
        console.log(i);                // → "Altrimenti" continua a stampare i numeri che non sono multipli per 3 e 5.
    }   
}