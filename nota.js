function nota(){

    //DECLARAÇÃO DAS VARIÁVEIS
    let nota1 = 0;
    let nota2 = 0;
    let nota3 = 0;
    let nota4 = 0;
    let media = 0;
    let situacao = 0;


    // nota1 = parseFloat(document.querySelector('#nota1').value); 

    // nota2 = parseFloat(document.querySelector('#nota2').value); 

    // nota3 = parseFloat(document.querySelector('#nota3').value); 
    
    // nota4 = parseFloat(document.querySelector('#nota4').value); 

    situacao = parseFloat(document.querySelector('#situacao').value);
    
    situacao = (nota1 + nota2 + nota3 + nota4) / 4;

    document.querySelector('#situacao').innerHTML = situacao;



}

//FUNÇÃO DE LIMPAR FURMULÁRIO
function limpar(){

    document.querySelector('#nota1').value = '';
    document.querySelector('#nota2').value = '';
    document.querySelector('#nota3').value = '';
    document.querySelector('#nota4').value = '';
    document.querySelector('#media').innerHTML = '-';
    
}
