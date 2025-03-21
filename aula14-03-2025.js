import {getHTML} from "./marcelolib.js"
import {elc} from "./marcelolib.js"
        function fruta(){
            let maca = confirm("Tem maçã?")
            let banana = confirm("Tem banana?")
            
            if (maca == 1 || banana == 1) {
                alert("Tu tem fruta")
            } else {
                alert("Tu não tem fruta")
            }

        }
        getHTML("id", "fruta").addEventListener("click", fruta)
        function contar(){
            let i = 1

            while (i <= 10){
                console.log(`Valor atual: ${i}`);
            }
        }
        getHTML("id", "contar").addEventListener("click", contar);

        function input(){
            let inputArr = prompt("Insira 5 números separados por vírgula (Ex.: 1,2,3,4,5)").split(",")
        alert(`Seus números são ${inputArr}`)
    }

    getHTML("id", "input").elc(input);

function order() {
        let inputArr = prompt("Insira 5 números separados por vírgula (Ex.: 1,2,3,4,5)").split(",")
        inputArr.forEach()
    }