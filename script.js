// Mostrar projetos extras
const verMaisBtn = document.getElementById('verMais');
const projetosExtras = document.getElementById('projetosExtras');

verMaisBtn.addEventListener('click', () => {
  projetosExtras.classList.toggle('hidden');
  verMaisBtn.textContent = projetosExtras.classList.contains('hidden') 
    ? 'Clique para ver mais projetos' 
    : 'Ocultar projetos extras';
});

// Validação do formulário
const contatoForm = document.getElementById('contatoForm');
const status = document.getElementById('status');

contatoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if(nome === '' || email === '' || mensagem === '') {
    status.textContent = 'Por favor, preencha todos os campos.';
    status.style.color = 'red';
    return;
  }

  // Simulação de envio
  status.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
  status.style.color = 'green';

  contatoForm.reset();
});
