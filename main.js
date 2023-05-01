const container = document.querySelector('.container');

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
      div.style.cssText = `
        border: auto solid red;
      `;
      div.addEventListener('mouseover' ,() => {
        div.style.cssText = `
          background-color: black;
        `;
      })
      container.appendChild(div);
      
      }
    }
    
  }

