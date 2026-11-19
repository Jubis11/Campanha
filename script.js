const dadosCampanha = {
  posts: [
    {
      categoria: "POST 01 · O PROBLEMA",
      titulo: "1080 × 1080 px",
      imagem: "img/post1.png",
      legenda: "Passar 15 minutos na fila para comer em dois ninguém merece. Chega de perder o intervalo esperando no balcão. Acesse o cardápio pelo link na bio e peça antes do sinal. #CantinaSENAI #IntervaloLivre #SENAIMorvan"
    },
    {
      categoria: "POST 02 · A SOLUÇÃO",
      titulo: "1080 × 1080 px",
      imagem: "img/post2.png",
      legenda: "Pediu, pagou, retirou. Escolha seu lanche com fotos reais, confira os ingredientes e retire direto no balcão sem filas. Teste agora pelo link na bio. #PediuPagouRetirou #CardapioDigital #CantinaSENAI"
    },
    {
      categoria: "POST 03 · O RESULTADO",
      titulo: "1080 × 1080 px",
      imagem: "img/post3.png",
      legenda: "De 15 minutos de espera para menos de 1 minuto na retirada. Mais tempo para descansar, conversar e aproveitar sua refeição com tranquilidade. Peça pelo link na bio. #MaisIntervalo #ZeroFila #SENAI2026"
    },
    {
      categoria: "CARROSSEL · COMO USAR",
      titulo: "3 imagens · 1080 × 1350 px",
      imagem: "img/carrossel1.png",
      legenda: "Arraste para o lado e veja como pedir seu lanche em três toques simples. Interface clara, rápida e com aviso preventivo de alérgenos. Acesse pelo link na bio. #ComoFunciona #SegurancaAlimentar #CantinaSENAI"
    },
    {
      categoria: "STORY 01 · ENQUETE",
      titulo: "1080 × 1920 px",
      imagem: "img/story1.png",
      legenda: "Bom dia! O que vai comer hoje no intervalo? Responda na caixinha qual lanche ou prato não pode faltar no nosso cardápio digital. Confira as opções no link. #EnqueteSENAI #HoraDoLanche #Cantina"
    },
    {
      categoria: "STORY 02 · CONVITE",
      titulo: "1080 × 1920 px",
      imagem: "img/story2.png",
      legenda: "Seu lanche pronto antes do sinal bater. Aponte a câmera para o QR Code ou toque no link para instalar o app da Cantina SENAI agora mesmo. #TesteAgora #QRCode #CantinaSENAI"
    }
  ],
  slidesTV: [
    "Cansado de passar o intervalo inteiro na fila da cantina?",
    "Escolha seu lanche com fotos reais direto pelo celular antes do sinal bater.",
    "Aviso claro de alérgenos e retirada expressa no balcão.",
    "Pediu, pagou, retirou. Mais intervalo, zero fila.",
    "Aponte a câmera para o cartaz no mural e faça seu pedido."
  ],
  calendario: [
    { dia: "Dia 01", oQue: "Post 01 (O Problema) + Story 01 (Enquete)", onde: "Instagram", resp: "Isabelle Fernandes" },
    { dia: "Dia 02", oQue: "Fixação do Cartaz A4 com QR Code", onde: "Mural e Cantina", resp: "Júlia Fernandes" },
    { dia: "Dia 03", oQue: "Exibição do Banner Animado", onde: "TV da Escola", resp: "Sophia Paixão" },
    { dia: "Dia 04", oQue: "Post 02 (A Solução) + Banner no Sistema", onde: "Instagram e App", resp: "Cícero Caetano" },
    { dia: "Dia 05", oQue: "Ação Criativa (Via Expressa no corredor)", onde: "Corredor da Cantina", resp: "Toda a equipe" },
    { dia: "Dia 06", oQue: "Carrossel (Como usar em 3 passos)", onde: "Instagram", resp: "Amira Jamal" },
    { dia: "Dia 07", oQue: "Story 02 (Convite + QR Code)", onde: "Instagram / WhatsApp", resp: "Raissa Silva" },
    { dia: "Dia 08", oQue: "Post 03 (O Resultado)", onde: "Instagram", resp: "Isabelle Fernandes" },
    { dia: "Dia 09", oQue: "Divulgação nos grupos das turmas", onde: "WhatsApp / Salas", resp: "Júlia Fernandes" },
    { dia: "Dia 10", oQue: "Balanço de leituras do QR Code e pedidos", onde: "Apresentação", resp: "Líder do grupo" }
  ],
  equipe: [
    { nome: "Isabelle Fernandes", cargos: "Direção de Arte & Redação" },
    { nome: "Júlia Fernandes", cargos: "Planejamento & Programação" },
    { nome: "Sophia Paixão", cargos: "Redação & Direção de Arte" },
    { nome: "Cícero Caetano", cargos: "Programação & Planejamento" },
    { nome: "Amira Jamal", cargos: "Liderança & Revisão de Marca" },
    { nome: "Raissa Silva", cargos: "Direção de Arte & Social Media" }
  ]
};

function renderizarPosts() {
  const gridPosts = document.getElementById("grid-posts");
  if (!gridPosts) return;

  gridPosts.innerHTML = dadosCampanha.posts.map(post => `
    <article class="card-superficie overflow-hidden shadow-suave flex flex-col">
      <div class="bg-creme aspect-square flex items-center justify-center overflow-hidden border-b-areia">
        <img src="${post.imagem}" alt="${post.categoria}" class="w-full h-full object-cover"
             onerror="this.parentElement.innerHTML='<div class=\\'p-6 text-center\\'><span class=\\'eyebrow-vinho\\'>Arquivo Pendente</span><span class=\\'text-xs text-tinta-suave\\'>Salve a imagem em <b>${post.imagem}</b></span></div>'">
      </div>
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span class="eyebrow-vinho">${post.categoria}</span>
          <h3 class="font-serif text-lg font-bold text-vinho mb-2">${post.titulo}</h3>
          <p class="text-sm text-tinta-corpo leading-relaxed">${post.legenda}</p>
        </div>
      </div>
    </article>
  `).join("");
}

function iniciarBannerTV() {
  const tvTexto = document.getElementById("tv-slide-texto");
  const tvIndicadores = document.getElementById("tv-indicadores");
  if (!tvTexto || !tvIndicadores) return;

  let slideAtual = 0;

  function atualizarIndicadores() {
    tvIndicadores.innerHTML = dadosCampanha.slidesTV.map((_, i) =>
      `<span class="h-2 rounded-full transition-all duration-300 ${i === slideAtual ? 'w-8 bg-dourado' : 'w-2 indicador-inativo'}"></span>`
    ).join("");
  }

  atualizarIndicadores();

  setInterval(() => {
    slideAtual = (slideAtual + 1) % dadosCampanha.slidesTV.length;
    tvTexto.classList.remove("animate__fadeInUp");
    void tvTexto.offsetWidth;
    tvTexto.textContent = dadosCampanha.slidesTV[slideAtual];
    tvTexto.classList.add("animate__fadeInUp");
    atualizarIndicadores();
  }, 3000);
}

function renderizarCalendario() {
  const tabelaCal = document.getElementById("tabela-calendario");
  if (!tabelaCal) return;

  tabelaCal.innerHTML = dadosCampanha.calendario.map(item => `
    <tr class="linha-calendario transition">
      <td class="py-3.5 px-5 font-semibold text-vinho whitespace-nowrap">${item.dia}</td>
      <td class="py-3.5 px-5 text-tinta">${item.oQue}</td>
      <td class="py-3.5 px-5 text-tinta-suave">${item.onde}</td>
      <td class="py-3.5 px-5 text-tinta-suave">${item.resp}</td>
    </tr>
  `).join("");
}

function renderizarEquipe() {
  const gridEquipe = document.getElementById("grid-equipe");
  if (!gridEquipe) return;

  gridEquipe.innerHTML = dadosCampanha.equipe.map(membro => `
    <div class="bg-creme border-areia p-4 rounded-xl">
      <p class="font-serif text-base font-bold text-vinho">${membro.nome}</p>
      <p class="text-xs font-medium text-vinho-claro mt-1">${membro.cargos}</p>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarPosts();
  iniciarBannerTV();
  renderizarCalendario();
  renderizarEquipe();
});