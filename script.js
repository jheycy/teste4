let nome = prompt(" insira seu nome:");
const exibe_nome = document.createElement('div');
exibe_nome


//q 2// 

const bnt_onoff= document.querySelector('#btn-onoff')
const lampada =  document.querySelector ('#lamp')
const icone_onoff = document.querySelector('#icon-onpff')
const body = document.querySelector('body')

let ligado = true
bnt_onoff .addEventListener('click' , () => {
    if (ligado) {
        lampada.src = "lampada.ligada.gif"
        icone_onoff.innerHTML = 'toggle_off'
        body.style.backgroundColor = 'black'
        body.style.color= 'white'
        icone_onoff.style.color = 'white'
        ligado = falso
    } else  {
        lampada.src = "lampada.desligada.gif"
        icone_onoff.innerHTML = 'toggle_off'
        body.style.backgroundColor = 'white'
        body.style.color= 'black'
        icone_onoff.style.color = 'black'
        ligado = true
    }
     })

   //q 3// 
   
   const ipt_senha= document.querySelector('#senha')
   const btn_olho = document.querySelector('#btn-olho')
   const icn_olho = document.querySelector('#icon-olho')
   let visivel = false
   btn_olho.addEventListener('click', () => {
    if (visivel) {
        ipt_senha.type = 'passaword'
        icn_olho.innerHTML = 'visibility_off'
        visivel = false

    } else {
        ipt_senha.type = 'text'
        icn_olho.innerHTML = 'visibility'
        visivel = true
    }
   })