
function ghici0(){

    let numarghicit = document.getElementById('valoare0').value; 
    numarghicit = Number (numarghicit);

    if (numarghicit < 105) {
        document.getElementById('rezultat0').innerHTML='Is bigger';
    }
    else if (numarghicit == 105) {
        document.getElementById('rezultat0').innerHTML='You are right!';
    }
    else if(numarghicit > 105 ){
        document.getElementById('rezultat0').innerHTML='Is smaller';
    }
}

// ex1

function ghici(){

    let numarghicit = document.getElementById('valoare2').value; 
    numarghicit = Number (numarghicit);
    numarghicit = Math.floor(Math.random() * 11)
    
      return  document.getElementById('rezultat2').innerHTML='My number was ' + numarghicit;
    }

    //ex2

    function doi(){

        let primulNumar = document.getElementById('date1').value;
    let numarDoi = document.getElementById('date2').value;
    
    primulNumar = Number (primulNumar);
    numarDoi = Number (numarDoi);
    
        if (primulNumar == numarDoi){
            document.getElementById('rezultat3').innerHTML='The numbers are equal';
        } else if (primulNumar !== numarDoi) {
            document.getElementById('rezultat3').innerHTML='The numbers are not equal and the difference between them is ' + (primulNumar - numarDoi);
        }
    
    }

    //ex3
    
    function trei(){
 
        let numar1 = document.getElementById('date11').value;
        let numar2 = document.getElementById('date21').value;
        numar1 = Number (numar1);
        numar2 = Number (numar2);
        let suma = numar1+ numar2;
        
        
        if (numar1 ==10 || numar2 ==10){
            document.getElementById('rezultat4').innerHTML = 'One of your numbers is equal with 10';
        } else if (suma == 10){
            document.getElementById('rezultat4').innerHTML = 'The sum of your numbers is 10';
        } else  {
            document.getElementById('rezultat4').innerHTML = numar1 + numar2 +' is the sum of your numbers and any of them is 10.';
        }
        
        }

        //ex4

        function patru(){

            let telefon = document.getElementById('numar5').value
            let lungime = telefon.length;
        
        if (lungime == 10){
            document.getElementById('rezultat5').innerHTML = 'The number is correct';
        }else {
            document.getElementById('rezultat5').innerHTML = 'The number is incorrect';
        }
        }

        //ex5

        const numere1 = ['zero', 'unu', 'doi', 'trei', 'patru', 'cinci', 'sase', 'sapte', 'opt', 'noua'];

function sub(){
    let numarInt = document.getElementById('123').value;
    let cifra;

    for(let cifra of numarInt){
        console.log( numere1[cifra] );
        return document.getElementById('rezult').innerHTML = 'Your number is: ' + numere1[cifra];
    } 

}

//ex6

function sub1(){
    let n = document.getElementById('1234').value;
    console.log(n.length);
    document.getElementById('rez').innerHTML= 'Your string has ' + n.length + ' characters';
}

//ex7

function functieAB(){

    document.getElementById('imag1').src = 'sad.png';
    document.getElementById('imag1').style.width = '100px';
  }
  
  function functieBC(){
  document.getElementById('imag1').src = 'happy.png';
  }

  //ex8

  function marire(){
    document.getElementById('landscape').style.width = '900px';
    }
    
    function normal(){
      document.getElementById('landscape').style.width = '600px';
    }
    
    function micsorare(){
      document.getElementById('landscape').style.width= '300px';
    }