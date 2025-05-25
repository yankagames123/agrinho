document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contatoForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    alert(`Obrigado pelo contato, ${nome}! Entraremos em contato pelo e-mail ${email}.`);
    form.reset();
  });
});

function aumentarFonte() {
  document.body.style.fontSize = "1.2em";
}

function diminuirFonte() {
  document.body.style.fontSize = "1em";
}

function toggleContraste() {
  document.body.classList.toggle("contrast");
}

let tamanhoFonteAtual = 1;

function aumentarFonte() {
  if (tamanhoFonteAtual < 100) {
    tamanhoFonteAtual++;
    document.body.style.fontSize = `${tamanhoFonteAtual}em`;
  }
}

function diminuirFonte() {
  if (tamanhoFonteAtual > 1) {
    tamanhoFonteAtual--;
    document.body.style.fontSize = `${tamanhoFonteAtual}em`;
  }
}
