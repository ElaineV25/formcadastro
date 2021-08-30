const limparFormulario = (endereco) => {
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('localidade').value = '';
}

const preencherFormulario = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('localidade').value = endereco.localidade;
}

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = ($cep) => $cep.length = 8 && eNumero($cep);

const consultaCep = async() => {
    limparFormulario();

    const $cep = document.getElementById("cep").value.replace(/\D/g, '');
    const url = 'https://viacep.com.br/ws/' +  $cep  + '/json/';
if(cepValido($cep)) {
    const dados = await fetch(url);
    const endereco = await dados.json();
    if (endereco.hasOwnProperty('erro')){
      document.getElementById('endereco').value =  alert ('CEP não encontrado') ;
    }else{
        preencherFormulario(endereco);
    }
}else{    
    document.getElementById('endereco').value =  alert ('CEP inválido!');
}

document.getElementById('cep')
        .addEventListener('focusout' , consultaCep);    
    
}

module.exports = trat_cep;