const btn1=document.getElementById('btn-1');
const btn2=document.getElementById('btn-2'); //true
const btn3=document.getElementById('btn-3'); //true
const btn4=document.getElementById('btn-4'); //true
const btn5=document.getElementById('btn-5');
const btn6=document.getElementById('btn-6'); //true
const aviso = document.querySelector('.aviso');
const felicitacion = document.querySelector('.felicitacion');

btn1.addEventListener("change", validaCheckbox, false);
btn2.addEventListener("change", validaCheckbox, false);
btn3.addEventListener("change", validaCheckbox, false);
btn4.addEventListener("change", validaCheckbox, false);
btn5.addEventListener("change", validaCheckbox, false);
btn6.addEventListener("change", validaCheckbox, false);

let cont=0;

function validaCheckbox(){
    if(btn1.checked || btn2.checked || btn3.checked || btn4.checked || btn5.checked || btn6.checked){
        cont+=1;
    }

    if(cont == 4){
        if(btn2.checked && btn3.checked && btn4.checked && btn6.checked){
            felicitacion.style.display="flex";
        }else{
            aviso.style.display="flex";
        }
    }
}