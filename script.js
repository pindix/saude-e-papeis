function calcular_preco() {
  const pag = Number(document.getElementById("pag").value);
  const preco = document.getElementById("preco");

  if (pag > 0 && pag < 30) {
    preco.innerHTML = `${pag} páginas custam ${Math.round((pag * 200) * 0.35)} KZ`;
  } else if (pag >= 30 && pag <= 70) {
    preco.innerHTML = `15.000 KZ se for um Trabalho de Fim do Curso. Fale conosco no Whatsapp para nos informar sobre o trabalho.`;
  } else if (pag > 70) {
    preco.innerHTML = `Não fazemos trabalhos com esse número de páginas.`;
  } else {
    preco.innerHTML = "";
  } 
}


function solicitar(){
    const pop_up = document.getElementById("pop_up"); 
    const foco= document.getElementById("foco");
    
    foco.classList.add("desfocar");
    pop_up.classList.add("show");
    
    const pag = parseFloat(document.getElementById("pag").value);
    const valor = document.getElementById("valor");

    if (pag > ""){
        valor.innerHTML = `É necessário pagar 50% antes de começarmos o trabalho. <br>  ${Math.round(((pag*200)*0.35)*0.5)} KZ se quiser continuar com as ${pag} páginas que digitou.`;
    } else {valor.innerHTML = "É necessário pagar 50% antes de começarmos o trabalho."}
}

function chamar(){
    setTimeout(() => {
    solicitar(); // tua função que mostra o pop-up
  }, 800); // tempo em milissegundos — ajusta se quiser
}

function fechar_solicitacao(){
    const pop_up = document.getElementById("pop_up");
    const foco= document.getElementById("foco");
    
    foco.classList.remove("desfocar");
    pop_up.classList.remove("show"); 
}

window.addEventListener('scroll', fechar_solicitacao); 



function ajustarAOS() {
  const tema = document.getElementById('tema');
    const a_sobre = document.getElementById('a_sobre');
    const a_solicitar = document.getElementById('a_solicitar');
    const texto = document.getElementById('texto');
  if (window.innerHeight < 710) {
    tema.removeAttribute('data-aos');
      a_sobre.removeAttribute('data-aos');
      a_solicitar.removeAttribute('data-aos');
      texto.removeAttribute('data-aos');
  } else {
    tema.setAttribute('data-aos', 'fade-right');
      a_sobre.setAttribute('data-aos', 'fade-top');
      a_solicitar.setAttribute('data-aos', 'fade-top');
      texto.setAttribute('data-aos', 'fade-top');
  }
  AOS.refresh();
}

window.addEventListener('resize', ajustarAOS);
ajustarAOS(); // roda uma vez ao carregar
