const btn1=document.getElementById('btn-1'); //true
const btn2=document.getElementById('btn-2'); 
const btn3=document.getElementById('btn-3'); //true
const btn4=document.getElementById('btn-4'); 
const btn5=document.getElementById('btn-5');
const btn6=document.getElementById('btn-6'); //true
const btn7=document.getElementById('btn-7'); //true
const btn8=document.getElementById('btn-8');
const btn9=document.getElementById('btn-9'); //true
const btn10=document.getElementById('btn-10');
const btn11=document.getElementById('btn-11');
const btn12=document.getElementById('btn-12'); //true
const btn13=document.getElementById('btn-13');
const btn14=document.getElementById('btn-14'); //true
const btn15=document.getElementById('btn-15');

const aviso = document.querySelector('.aviso');
const felicitacion = document.querySelector('.felicitacion');

btn1.addEventListener("change", validaCheckbox, false);
btn2.addEventListener("change", validaCheckbox, false);
btn3.addEventListener("change", validaCheckbox, false);
btn4.addEventListener("change", validaCheckbox, false);
btn5.addEventListener("change", validaCheckbox, false);
btn6.addEventListener("change", validaCheckbox, false);
btn7.addEventListener("change", validaCheckbox, false);
btn8.addEventListener("change", validaCheckbox, false);
btn9.addEventListener("change", validaCheckbox, false);
btn10.addEventListener("change", validaCheckbox, false);
btn11.addEventListener("change", validaCheckbox, false);
btn12.addEventListener("change", validaCheckbox, false);
btn13.addEventListener("change", validaCheckbox, false);
btn14.addEventListener("change", validaCheckbox, false);
btn15.addEventListener("change", validaCheckbox, false);

let cont=0;

function validaCheckbox(){
    if(btn1.checked || btn2.checked || btn3.checked || btn4.checked || btn5.checked || btn6.checked ||
        btn7.checked || btn8.checked || btn9.checked || btn10.checked || btn11.checked || btn12.checked ||
        btn13.checked || btn14.checked || btn15.checked) {
            cont+=1;
        }

    if(cont == 7){
        if(btn1.checked && btn3.checked && btn6.checked && btn7.checked && btn9.checked && btn12.checked && btn14.checked){
            felicitacion.style.display="flex";
        }else{
            aviso.style.display="flex";
        }
    }
}