function tabuada(){
    let numero = Number(document.getElementById("tabu").value)
    let adicao =document.getElementById("adi")
    let subtracao = document.getElementById("sub")
    let multiplicacao =document.getElementById("mult")
    let divisao= document.getElementById("div")

    for(i=0;i<=10;i++){
        soma = numero + i
        sub = i + numero
        multi = numero * i
        divi = i * numero
        adicao.innerHTML += numero + " + " + i + "=" + soma + "<br>"
        subtracao.innerHTML += sub + " - " + numero + "=" + i + "<br>"
        multiplicacao.innerHTML += numero + " &#215 " +  i + "=" + multi + "<br>"
        divisao.innerHTML += divi + " / " + numero + "=" + i + "<br>"

    }
    
}
