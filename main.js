const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const finalizado = document.querySelector('.finalizado');
const paleta = document.querySelector('.paleta');
let isShiftDeyDown = false;
let cor = "#000000";
const cores = [
  "#003366", "#336699", "#3366CC", 
  "#003399", "#000099", "#0000CC", 
  "#000066", "#006666", "#006699", 
  "#0099CC", "#0066CC", "#0033CC", 
  "#0000FF", "#3333FF", "#333399", 
  "#669999", "#009999", "#33CCCC", 
  "#00CCFF", "#0099FF", "#0066FF", 
  "#3366FF", "#3333CC", "#666699", 
  "#339966", "#00CC99", "#00FFCC", 
  "#00FFFF", "#33CCFF", "#3399FF", 
  "#6699FF", "#6666FF", "#6600FF", 
  "#6600CC", "#339933", "#00CC66", 
  "#00FF99", "#66FFCC", "#66FFFF", 
  "#66CCFF", "#99CCFF", "#9999FF", 
  "#9966FF", "#9933FF", "#9900FF", 
  "#006600", "#00CC00", "#00FF00", 
  "#66FF99", "#99FFCC", "#CCFFFF", 
  "#CCCCFF", "#CC99FF", "#CC66FF", 
  "#CC33FF", "#CC00FF", "#9900CC", 
  "#003300", "#009933", "#33CC33", 
  "#66FF66", "#99FF99", "#CCFFCC", 
  "#FFFFFF", "#FFCCFF", "#FF99FF", 
  "#FF66FF", "#FF00FF", "#CC00CC", 
  "#660066", "#336600", "#009900", 
  "#66FF33", "#99FF66", "#CCFF99", 
  "#FFFFCC", "#FFCCCC", "#FF99CC", 
  "#FF66CC", "#FF33CC", "#CC0099", 
  "#993399", "#333300", "#669900", 
  "#99FF33", "#CCFF66", "#FFFF99", 
  "#FFCC99", "#FF9999", "#FF6699", 
  "#FF3399", "#CC3399", "#990099", 
  "#666633", "#99CC00", "#CCFF33", 
  "#FFFF66", "#FFCC66", "#FF9966", 
  "#FF6666", "#FF0066", "#CC6699", 
  "#993366", "#999966", "#CCCC00", 
  "#FFFF00", "#FFCC00", "#FF9933", 
  "#FF6600", "#FF5050", "#CC0066", 
  "#660033", "#996633", "#CC9900", 
  "#FF9900", "#CC6600", "#FF3300", 
  "#FF0000", "#CC0000", "#990033", 
  "#663300", "#996600", "#CC3300", 
  "#993300", "#990000", "#800000", 
  "#993333", "#000000", "#808080",
  "#6a6a6a", "#545454", "#3f3f3f",
  "#2c2c2c","#191919",]

cores.forEach(element => {
  let btnCor = document.createElement('button');
  btnCor.value = element;
  btnCor.style.backgroundColor = element;
  btnCor.addEventListener('click', ()=> {
    cor = element;
  });
  paleta.appendChild(btnCor);


});
  
document.addEventListener('keydown', (e) => {
  if(e.shiftKey) {
    isShiftDeyDown = true;
  }
});
document.addEventListener('keyup', (e) => {
  if(!e.shiftKey) {
    isShiftDeyDown = false;
  }
});

finalizado.addEventListener('click', ()=> {
  //tirar as bordas e um print da tela
})

btn.addEventListener('click', ()=> {
  container.innerText = '';
  const resposta = parseInt(window.prompt('entre com o valor do grid!', 'ex. 16 = 16x16'));
  if(resposta <= 100 && resposta > 0){
    a(resposta, resposta);
  } else {
    window.alert('Entre com um valor entre 1 e 100');
    a(16,16);
  }
})

function a ( linhas, colunas) {
  container.setAttribute('style', `
  width: 800px;
  height: 800px;
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
          background-color: ${cor};
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

