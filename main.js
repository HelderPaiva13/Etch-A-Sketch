const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
let isShiftDeyDown = false;

document.addEventListener('keydown', (e) => {
  if(e.shiftKey) {
    isShiftDeyDown = true;
  }
});
document.addEventListener('keyup', (e) => {
  if(!e.shiftKey) {
    isShiftDeyDown = false;
  }
})

btn.addEventListener('click', ()=> {
  container.innerText = '';
  const resposta = parseInt(window.prompt('entre com o valor do grid!', 'ex. 16 = 16x16'));
  if(resposta <= 100 && resposta > 0){
    a(resposta, resposta);
  } else {
    window.alert('Entre com um valor entre 1 e 100')
  }
})

function a ( linhas, colunas) {
  container.setAttribute('style', `
  width: 300px;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(${linhas}, 1fr);
  grid-template-rows: repeat(${colunas}, 1fr);
  `)
  for (let x=0; x<=linhas; x++){
    for(let y=0; y<colunas; y++){
      let div = document.createElement('div');
      div.className = x+''+y;
      
      div.addEventListener('mouseover' ,() => {
        if(isShiftDeyDown){
          div.style.cssText = `
          background-color: black;
        `;
        }
      });
      div.addEventListener('click', () => {
        div.style.cssText = `
          background-color: white;
        `;
      }); 
      container.appendChild(div);
      
      }
    }
    
  }

  document.addEventListener('DOMContentLoaded', a(16,16));

