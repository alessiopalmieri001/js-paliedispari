function palidromo(parola){

    let lunghezza = parola.length;
    
    for (i = 0; i < lunghezza / 2 | 0; i++){
        
        if (parola[i] != parola[lunghezza - 1 - i]){
            return false;
        }
        
    }
    return true;
}




const parolaPalindroma = prompt('inserire una parola palindroma');
console.log(parolaPalindroma);


if(palidromo(parolaPalindroma)){

    alert('è palindromo');

}

else{
    alert('non è palindroma')
}
