let capturarNomes = [];

function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (nome === '') {
    alert('Por favor, insira um nome.');
    return;
  }

  capturarNomes.push(nome);
  atualizarLista();
  input.value = '';
  input.focus(); 
}

function atualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; 

  for (let i = 0; i < capturarNomes.length; i++) {
    const item = document.createElement('li');
    item.textContent = capturarNomes[i];
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  if (capturarNomes.length === 0) {
    alert('A lista está vazia. Adicione pelo menos um nome.');
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * capturarNomes.length);
  const amigoSorteado = capturarNomes[indiceSorteado];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = ''; 

  const item = document.createElement('li');
  item.textContent = `🎉 O amigo secreto sorteado é: ${amigoSorteado}!`;
  resultado.appendChild(item);
}

function sortearAmigo() {
  
  if (capturarNomes.length === 0) {
    alert('A lista está vazia. Adicione pelo menos um nome.');
    return;
  }

  
  const indiceSorteado = Math.floor(Math.random() * capturarNomes.length);

  
  const amigoSorteado = capturarNomes[indiceSorteado];

  
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = ''; 

  const item = document.createElement('li');
  item.textContent = `🎁 O amigo secreto sorteado é: ${amigoSorteado}!`;

  resultado.appendChild(item);
}

