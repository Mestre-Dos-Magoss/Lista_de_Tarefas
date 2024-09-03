$(document).ready(function(){

abreFechaSlideDeAdicionar();
mudaBotaoAdicionarlide();

let geradorDeId=0;
 $('form').submit(function(e){
   e.preventDefault();
   tarefaFinalizadaLinha();
   adicionaTarefaNaLista();
})

 function adicionaTarefaNaLista(){
  const mostraNaPagina='';

  if($('#input-tarefa').val()){
    geradorDeId++;
      const inputTarefaNaLinha = $(`<li><img src="Imagens/tarefaFinalizada.png" alt="logo de tarefa finalizada" class="check"/><label for="${geradorDeId}" id="${$(geradorDeId)}" class="babalu"><p>${mostraNaPagina.innerHtml = $('#input-tarefa').val()}</p></label></li>`);

  inputTarefaNaLinha.appendTo('ul');
  $('#input-tarefa').val('');
   
  }
  else{
   alert('Não é possivel Adicionar uma tarefa sem que o campo "Insira a sua tarefa esteja preenchido"');
   }
}

 function tarefaFinalizadaLinha(){
   $(document).on('click','label',function(){
 $(this).toggleClass('foiClicado');
 //tentei colocar uma imagem a acada click que eu desse no texto pra mostrar que a tarefa havia sido finalizada, mas não deu certo
//  if($(this).hasClass('foiClicado')){
//      console.log(`: ${$(this).parentUntil($('img').toggleClass('checkin'))}`);

//  }
//  $('.check')=$(this).toggleClass('checkin')

 })
}

 function abreFechaSlideDeAdicionar(){
   $('#btn-inicial').click(function(){
   $('form').toggle(1500);
 })
 }

function mudaBotaoAdicionarlide(){
  $('#btn-inicial').click(function(){
  if($('#btn-inicial').text() === 'Não adicionar -'){
     $('#btn-inicial').text('Adicionar Tarefa +');
  }
  else{
    $('#btn-inicial').text('Não adicionar -')
  }
  $('#btn-inicial').toggleClass('abrir');
 })

 }
})

//<input type="checkbox" title="Tarefa finalizada" id="tarefa-finalizada2" class="tarefaFinalizada"/><label for="tarefa-finalizada2"></label>