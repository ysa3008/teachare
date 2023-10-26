var btadd=document.querySelector(".bt_add");

btadd.addEventListener('click', () => {
  var registro= document.querySelector('.registro');
  registro.style.display="block";
});

var btcancelar= document.querySelector(".bt-cancelar");
btcancelar.addEventListener('click', ()=> {
  var registro= document.querySelector('.registro');
  registro.style.display= "none";
});

var btsalvar= document.querySelector(".bt-salvar");

btsalvar.addEventListener('click', ()=>{
  var registro= document.querySelector(".registro");
  var aula={};

  aula["codigo"]= "A007";
  aula["professor"]= "yslla";
  aula["disciplina"]="fisica";
  aula["curso"]= document.querySelector("#curso").value;
  aula["serie"]= document.querySelector("#serie").value;
  aula["data"]= document.querySelector("#data").value;
  aula["inicio"]= document.querySelector("#inicio").value;
  aula["fim"]= document.querySelector("#fim").value;

  aulas.unshift(aula);
  
  carregar_aulas();
  
  registro.style.display = "none";
  
});

function carregar_aulas(){
var dinamico= document.querySelector("#dinamico");
  dinamico.innerHTML = "";
  
for(var i=0; i<aulas.length;i++){ 
  var codigo= aulas[i]["codigo"];
  var professor= aulas[i]["professor"];
  var disciplina= aulas[i]["disciplina"];
  var curso=aulas[i]["curso"];
  var serie= aulas[i]["serie"];
  var data= aulas[i]["data"];
  var inicio= aulas[i]["inicio"];
  var fim= aulas[i]["fim"];

  dinamico.innerHTML+=`<div class="linha">
  <div class="coluna">
  ${codigo}
  </div>

  <div class="coluna">
  ${professor}(${disciplina})
  </div>

  <div class="coluna">
  ${curso} (${serie})
  </div>

     <div class="coluna">
  ${data}
  </div>
   <div class="coluna">
  ${inicio} ${fim}
  </div>
    
  </div>`;
}
}
 carregar_aulas();

