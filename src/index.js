//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável,
//o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

let ranked = pontosRanked(200, 85)

function pontosRanked(vitorias, derrotas){
    let saldoRanked = vitorias - derrotas
    return saldoRanked
}

if (ranked <= 10){
    saldoRanked = "Ferro"
    console.log("O Herói tem um saldo de " + ranked + " Vitórias e está no nivel " + saldoRanked)
}

    else if (ranked <= 11 && ranked >= 20){
        saldoRanked = "Bronze"
        console.log("O Herói tem um saldo de " + ranked + " Vitórias e está no nivel " + saldoRanked)
    }

    else if (ranked <= 21 && ranked >= 50){
        saldoRanked = "Prata"
        console.log("O Herói tem um saldo de " + ranked + " Vitórias e está no nivel " + saldoRanked)
    }

    else if (ranked <= 51 && ranked >= 80){
        saldoRanked = "Ouro"
        console.log("O Herói tem um saldo de " + ranked + " Vitórias e está no nivel " + saldoRanked)
    }

    else if (ranked <= 81 && ranked >= 90){
        saldoRanked = "Diamante"
        console.log("O Herói tem um saldo de " + ranked + " Vitórias e está no nivel " + saldoRanked)
    }

    else if (ranked <= 91 && ranked >= 100){
        saldoRanked = "Lendário"
        console.log("O Herói tem um saldo de " + ranked + " Vitórias e está no nivel " + saldoRanked)
    }

    else if(ranked >= 101){
        saldoRanked = "Imortal"
        console.log("O Herói tem um saldo de " + ranked + " Vitórias e está no nivel " + saldoRanked)
    }

    else{
        console.log("Valores invalidos")
    }