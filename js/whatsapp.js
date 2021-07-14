const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://api.whatsapp.com/';
const telefone = '+558899053714';

const whatsapp = () => {
   let nome = document.querySelector('#nome').value;
   let email = document.querySelector('#email').value;
   let idade = document.querySelector('#idade').value;
   let cpf = document.querySelector('#cpf').value;
   let genero = document.querySelector('#selectGenero').value;
   
   let acompanhamento;
   if (document.querySelector('#inputSimAcompanhamento').checked == true)
      acompanhamento = document.querySelector('#infoAcompanhamento').value;
   else if (document.querySelector('#inputNaoAcompanhamento').checked == true)
      acompanhamento = "Não";

   let comorbidade;
   if (document.querySelector('#inputSimComorbidade').checked == true)
      comorbidade = document.querySelector('#infoComorbidade').value;
   else if (document.querySelector('#inputNaoComorbidade').checked == true)
      comorbidade = "Não";

   let mensagem = "send?phone=" + telefone + "&text=* Formulario Contato de cliente -->> %0A Nome: %0A " + nome + " %0A E-mail: %0A " + email + " %0A Idade: %0A " + idade + " %0A Genero: %0A " + genero + " %0A Acompanhamento: %0A " + acompanhamento + " %0A Comorbidade: %0A " + comorbidade;

   window.open(urlDesktop + mensagem, '_blank');
}