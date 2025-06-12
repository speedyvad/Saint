        
    let audio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_4993cb9cd3.mp3?filename=chant-11047.mp3");
        audio.volume = 0.3;
    let somAtivo = true;

    const botaoSom = document.createElement("button");
    
    Object.assign(botaoSom.style, {
        position: "fixed",
        bottom: "10px",
        right: "10px",
        zIndex: "9999",
        padding: "8px 12px",
        fontSize: "14px",
        backgroundColor: "#f7f9fc",
        border: "1px solid #ccc",
        borderRadius: "8px",
        cursor: "pointer"
    });
    document.body.appendChild(botaoSom);

   
      const frasesData = {
        castidade: [
            { santo: "Santo Tomás de Aquino", frase: "A castidade é a virtude que ordena e modera o apetite dos prazeres venéreos segundo a reta razão iluminada pela fé" },
            { santo: "Santa Josefina Bakhita", frase: "A pureza de coração é ver Deus em todas as coisas e manter-se limpo para Ele" },
            { santo: "São João Paulo II", frase: "A castidade é a energia espiritual que liberta o amor do egoísmo e da agressividade" },
            { santo: "Santa Teresa de Ávila", frase: "Alma casta é templo do Espírito Santo, onde Deus se compraz em habitar" },
            { santo: "São Francisco de Sales", frase: "A castidade é uma virtude que purifica e eleva o amor de Deus dentro de nós" },
            { santo: "Santa Maria Goretti", frase: "A castidade é uma grande graça de Deus, que fortalece a alma a seguir o caminho da pureza" },
            { santo: "São João Paulo II", frase: "A castidade nos prepara para viver plenamente a verdade do amor humano, que é dom e entrega" },
            { santo: "Santa Rita de Cássia", frase: "A castidade não é uma abstinência, mas um amor ardente e puro por Deus" },
            { santo: "São José", frase: "A pureza e castidade são a base do verdadeiro amor conjugal" },
            { santo: "Santa Teresa de Lisieux", frase: "A castidade é uma flor que se cultiva com o amor à Deus e à pureza de coração" },
            { santo: "São Bento", frase: "A castidade é uma virtude que torna a alma mais forte diante das tentações" },
            { santo: "Santa Teresa de Calcutá", frase: "O verdadeiro amor exige pureza de coração e ação. Somente a castidade pode ser uma base sólida" },
            { santo: "São Francisco de Assis", frase: "A castidade nos leva a abandonar o egoísmo e nos tornar mais semelhantes a Cristo" },
            { santo: "São Vicente de Paulo", frase: "A castidade é uma forma de consagração e entrega total a Deus" }
        ],
        namoro: [
            { santo: "São João Paulo II", frase: "O amor verdadeiro é exigente. Não posso dizer que amo verdadeiramente se não me comprometo com a fidelidade para toda a vida" },
            { santo: "Santa Gianna Beretta Molla", frase: "O amor deve ser a força motriz do noivado: um amor profundo, sobrenatural, puro, generoso" },
            { santo: "São Josemaría Escrivá", frase: "O noivado é o tempo de preparação, de conhecimento mútuo e de crescimento conjunto na virtude" },
            { santo: "São Francisco de Sales", frase: "Entre os que se amam, é preciso que haja uma santa emulação de virtudes e perfeições" },
            { santo: "São João Paulo II", frase: "O amor exige fidelidade e respeito mútuo, pois é um pacto de vida e felicidade" },
            { santo: "Santa Catarina de Siena", frase: "O amor é a base de tudo. Se não há amor, não há vida, não há sentido" },
            { santo: "Santa Teresa de Ávila", frase: "O amor no namoro deve ser fiel e puro, com os olhos voltados para o céu e para o outro" },
            { santo: "São Luís Maria Grignion de Montfort", frase: "No namoro, a devoção e entrega a Maria garantem a pureza e a felicidade no amor" },
            { santo: "São Francisco de Assis", frase: "O verdadeiro amor no namoro é aquele que se preocupa mais com a alma do que com a aparência" },
            { santo: "Santa Maria Goretti", frase: "O namoro é um caminho para conhecer o outro e crescer na virtude do amor verdadeiro" },
            { santo: "São João Bosco", frase: "O namoro é uma preparação para o amor sacrificado e fiel do casamento" },
            { santo: "Santa Teresa de Lisieux", frase: "O namoro deve ser vivido com santidade, purificando o coração para o casamento" },
            { santo: "São José", frase: "Amar no namoro é aprender a viver com Deus no centro do relacionamento" },
            { santo: "São João Batista", frase: "O namoro deve ser uma vivência de castidade e respeito, sempre olhando para o bem do outro" }
        ],
        oracao: [
            { santo: "Santa Teresa de Ávila", frase: "A oração é um trato de amizade, estando muitas vezes tratando a sós com quem sabemos que nos ama" },
            { santo: "São João da Cruz", frase: "A oração da alma que ama não cansa a Deus, ainda que dure um dia inteiro" },
            { santo: "Santo Agostinho", frase: "Tu nos fizeste para Ti, e inquieto está nosso coração, enquanto não repousa em Ti" },
            { santo: "Santa Teresinha", frase: "Para mim, a oração é um impulso do coração, é um simples olhar dirigido ao céu" },
            { santo: "São Francisco de Sales", frase: "A oração é o oxigênio da alma, e quem não ora se afasta de Deus" },
            { santo: "Santa Teresa de Lisieux", frase: "A oração não consiste em palavras, mas em oferecer o coração a Deus" },
            { santo: "São José", frase: "A oração é a chave que abre o coração de Deus para nos dar a graça que precisamos" },
            { santo: "São João Paulo II", frase: "A oração é um diálogo constante com Deus, onde falamos e ouvimos" },
            { santo: "São Bento", frase: "A oração nos aproxima de Deus, nos torna mais fortes e nos ilumina na caminhada da vida" },
            { santo: "São Padre Pio", frase: "A oração é a alma da vida cristã, ela nos mantém ligados a Deus" },
            { santo: "Santa Faustina Kowalska", frase: "A oração é o refúgio da alma, a maneira de se unir ao amor de Deus" },
            { santo: "São Francisco de Assis", frase: "A oração é o melhor remédio para todas as aflições da alma" },
            { santo: "Santa Maria Goretti", frase: "Na oração, encontramos a paz e o alívio para nossas dores e angústias" },
            { santo: "São João Evangelista", frase: "Orar é sentir a presença de Deus dentro de nós, mesmo nos momentos de sofrimento" }
        ],
        "nossa-senhora": [
            { santo: "São Luís Maria Grignion de Montfort", frase: "Nunca se ouviu dizer que alguém tenha recorrido à proteção de Maria e tenha sido por ela abandonado" },
            { santo: "São João Paulo II", frase: "Maria é a mulher que introduz na Igreja a dimensão maternal e familiar" },
            { santo: "São Bernardo", frase: "Lembra-te, ó puríssima Virgem Maria, que jamais se ouviu dizer que fosse desamparado algum daqueles que recorreram à vossa proteção" },
            { santo: "Santo Afonso de Ligório", frase: "Maria é a escada do céu, porque por ela Deus desceu à terra e por ela os homens sobem ao céu" },
            { santo: "São João Paulo II", frase: "Maria é nossa Mãe e modelo de fé, sempre nos conduzindo ao Filho" },
            { santo: "São Francisco de Sales", frase: "Maria é a estrela que ilumina os passos daqueles que buscam a verdade e o amor" },
            { santo: "Santa Teresa de Ávila", frase: "Maria é a intercessora que nunca deixa de ouvir e atender as nossas súplicas" },
            { santo: "São José", frase: "Maria, mãe de todos nós, nos protege e nos guia com seu amor imenso" },
            { santo: "São João Batista", frase: "Maria é a Mãe que acolhe e cuida dos filhos de Deus com ternura infinita" },
            { santo: "Santa Gianna Beretta Molla", frase: "Maria é a nossa confiança e refúgio seguro nas adversidades da vida" },
            { santo: "São Francisco de Assis", frase: "Quem ama Maria ama a Cristo, e quem a segue nunca se perde" },
            { santo: "São Luís Maria Grignion de Montfort", frase: "Em Maria, encontramos o caminho seguro para Jesus e a salvação" },
            { santo: "Santa Teresinha", frase: "Maria é o nosso apoio inabalável em todos os momentos da vida" },
            { santo: "São João Paulo II", frase: "Maria, a estrela da evangelização, nos guia pelo caminho da verdade e da luz" }
        ],
        eucaristia: [
            { santo: "São João Paulo II", frase: "A Eucaristia é o coração e o ápice da vida da Igreja, porque nela Cristo associa sua Igreja e todos os seus membros ao seu sacrifício de louvor e ação de graças" },
            { santo: "Santa Teresa de Calcutá", frase: "Quando olhamos para a cruz, entendemos o quanto Jesus nos amou. Quando olhamos para o tabernáculo, entendemos o quanto Ele nos ama agora" },
            { santo: "São Francisco de Assis", frase: "Ó admirável altura e estupenda dignidade! Ó sublime humildade! Ó humilde sublimidade!" },
            { santo: "Santo Tomás de Aquino", frase: "A Eucaristia é o sacramento da caridade, é o sinal da unidade, é o vínculo da caridade" },
            { santo: "São João Paulo II", frase: "A Eucaristia é o alimento que nos fortalece e nos capacita a viver como filhos de Deus" },
            { santo: "São Francisco de Sales", frase: "A Eucaristia é a fonte de onde brota o verdadeiro amor, que é Deus em nós" },
            { santo: "Santa Teresa de Calcutá", frase: "Na Eucaristia, encontramos o abraço de Cristo e o sustento para a nossa vida" },
            { santo: "São Bento", frase: "A Eucaristia é o maior tesouro da Igreja, pois é a presença real de Cristo" },
            { santo: "São Padre Pio", frase: "Na Eucaristia, encontramos a paz e o amor que o mundo não pode nos dar" },
            { santo: "Santa Faustina Kowalska", frase: "A Eucaristia é a nossa maior fortaleza, pois em cada momento estamos unidos ao Corpo de Cristo" },
            { santo: "São João Bosco", frase: "A Eucaristia é o centro de toda a vida cristã. Sem ela, nossa fé é incompleta" },
            { santo: "São Francisco de Assis", frase: "Na Eucaristia, encontramos a perfeição do amor de Cristo por nós" },
            { santo: "São João Paulo II", frase: "A Eucaristia nos transforma em Cristo, nos fazendo parte do Seu Corpo" },
            { santo: "Santa Teresa de Ávila", frase: "Na Eucaristia, encontramos o amor de Cristo que nos sustenta e nos guia" }
        ],
        vocacao: [
            { santo: "São João Paulo II", frase: "O homem não pode viver sem amor. Permanece para si mesmo um ser incompreensível se o amor não lhe for revelado" },
            { santo: "Santa Teresa de Calcutá", frase: "Deus não nos chama para fazer coisas extraordinárias, mas para fazer coisas ordinárias com amor extraordinário" },
            { santo: "São Josemaría Escrivá", frase: "Não há senão um caminho para a santidade: cumprir os deveres de cada momento" },
            { santo: "Santa Teresinha", frase: "Minha vocação é o amor. No coração da Igreja serei o amor, e assim serei tudo" },
            { santo: "São João Paulo II", frase: "Cada vocação é um chamado único de Deus para amar e servir aos outros" },
            { santo: "São José", frase: "A vocação de cada um é a resposta fiel ao amor de Deus, refletida em nossas ações" },
            { santo: "São Francisco de Sales", frase: "A vocação nos chama a viver com perfeição a nossa vida comum, sem grandes gestos, mas com muito amor" },
            { santo: "Santa Clara", frase: "Nossa vocação é amar e servir a Deus em todos os momentos da vida cotidiana" },
            { santo: "São João Bosco", frase: "Nossa vocação é ser instrumentos de Deus para o bem dos outros, servindo com alegria" },
            { santo: "Santa Faustina Kowalska", frase: "A vocação é a resposta do coração ao chamado de Deus, para viver no Seu amor" },
            { santo: "São Vicente de Paulo", frase: "A verdadeira vocação é amar e servir aos mais necessitados, sendo a mão de Deus no mundo" },
            { santo: "São José", frase: "A vocação é servir aos outros com humildade e sem esperar nada em troca" },
            { santo: "São Francisco de Assis", frase: "Viver nossa vocação é seguir a Deus com humildade, simplicidade e confiança" },
            { santo: "São João Paulo II", frase: "Cada vocação é um dom que deve ser vivido com generosidade e dedicação total a Deus" }
        ],

        santidade: [
            { santo: "São João Paulo II", frase: "A santidade não é privilégio de poucos, mas vocação universal. Todos somos chamados à santidade" },
            { santo: "São Josemaría Escrivá", frase: "A santidade não está em fazer coisas extraordinárias, mas em fazer extraordinariamente bem as coisas ordinárias" },
            { santo: "Santa Teresa de Calcutá", frase: "A santidade não é o luxo de poucos, mas um dever simples para ti e para mim" },
            { santo: "São Francisco de Sales", frase: "Sede santos e perfeitos cada um segundo o seu estado e vocação" },
            { santo: "São João Paulo II", frase: "Ser santo não significa fazer coisas extraordinárias, mas viver com extraordinário amor e dedicação a Deus" },
            { santo: "São Josemaría Escrivá", frase: "A santidade é fruto do amor cotidiano e da fidelidade nos pequenos atos" },
            { santo: "Santa Teresa de Ávila", frase: "A santidade está em servir a Deus com todo o coração, sem reservas ou condições" },
            { santo: "São Francisco de Assis", frase: "A santidade está em ser simples e humilde, e encontrar a beleza em servir aos outros" },
            { santo: "São João Paulo II", frase: "A santidade não é apenas um objetivo, mas um caminho a ser percorrido todos os dias" },
            { santo: "Santa Teresa de Lisieux", frase: "A santidade é o amor vivido nas coisas mais simples da vida cotidiana" },
            { santo: "São Bento", frase: "A santidade está em buscar a perfeição em tudo o que fazemos, por mais simples que seja" },
            { santo: "São João Evangelista", frase: "Viver em santidade é viver em união constante com Deus, buscando a Sua vontade a cada momento" },
            { santo: "São Francisco de Sales", frase: "A santidade é a prática diária da virtude, do amor e da confiança em Deus" },
            { santo: "Santa Faustina Kowalska", frase: "A santidade está em confiar plenamente no amor de Deus e responder a Ele com generosidade" }
        ],
        providencia: [
            { santo: "São João Bosco", frase: "A Providência de Deus vela sobre nós com cuidado paternal e dispõe todas as coisas para o nosso bem" },
            { santo: "Santa Teresa de Ávila", frase: "Que nada te perturbe, que nada te espante. Quem a Deus tem, nada lhe falta" },
            { santo: "São José", frase: "Confiemos na Providência Divina. Ela jamais abandona aqueles que nela confiam" },
            { santo: "São Padre Pio", frase: "A Providência divina conhece as nossas necessidades e providencia para elas com amor de pai" },
            { santo: "São João Paulo II", frase: "A Providência de Deus nunca falha; ele cuida de nós mesmo nos momentos mais difíceis" },
            { santo: "Santa Teresa de Calcutá", frase: "A Providência de Deus é abundante e jamais nos abandona, mesmo quando estamos no desespero" },
            { santo: "São Francisco de Assis", frase: "A Providência de Deus se manifesta nas coisas simples da vida e nas pequenas alegrias do dia a dia" },
            { santo: "São Vicente de Paulo", frase: "A Providência de Deus é a força que sustenta a Igreja e o mundo, e em Ela encontramos nosso refúgio" },
            { santo: "Santa Gianna Beretta Molla", frase: "Confiar na Providência divina é viver com serenidade, sabendo que Deus nunca nos desampara" },
            { santo: "São José", frase: "A Providência divina é uma fonte de paz, pois sabemos que Deus cuida de nós em todos os momentos" },
            { santo: "Santa Faustina Kowalska", frase: "A Providência de Deus nos ama de maneira indescritível, sempre provendo o que é necessário para nossa salvação" },
            { santo: "São João Bosco", frase: "Deus providencia sempre aquilo que precisamos, pois Ele conhece o nosso coração" },
            { santo: "Santa Teresa de Ávila", frase: "A Providência divina é o conforto dos aflitos e a esperança dos que buscam auxílio em Deus" },
            { santo: "São João Paulo II", frase: "Confiar na Providência é ter a certeza de que Deus já prepara o melhor para nós" }
        ]
    };

        const imagensSantos = {
    "Santo Tomás de Aquino": "imagens/santo_tomas_de_aquino.jpg",
    "Santa Josefina Bakhita": "imagens/santa_josefina_bakhita.jpg",
    "São João Paulo II": "imagens/sao_joao_paulo_ii.jpg",
    "Santa Teresa de Ávila": "imagens/santa_teresa_de_avila.jpg",
    "São Francisco de Sales": "imagens/sao_francisco_de_sales.jpg",
    "Santa Maria Goretti": "imagens/santa_maria_goretti.jpg",
    "Santa Rita de Cássia": "imagens/santa_rita_de_cassia.jpg",
    "São José": "imagens/sao_jose.jpg",
    "Santa Teresa de Lisieux": "imagens/santa_teresa_de_lisieux.jpg",
    "São Bento": "imagens/sao_bento.jpg",
    "Santa Teresa de Calcutá": "imagens/santa_teresa_de_calcutta.jpg",
    "São Francisco de Assis": "imagens/sao_francisco_de_assis.jpg",
    "São Vicente de Paulo": "imagens/sao_vicente_de_paulo.jpg",
    "Santa Gianna Beretta Molla": "imagens/santa_gianna_beretta_molla.jpg",
    "São Josemaría Escrivá": "imagens/sao_josemaria_escriva.jpg",
    "Santa Catarina de Siena": "imagens/santa_catarina_de_siena.jpg",
    "São Luís Maria Grignion de Montfort": "imagens/sao_luis_maria_grignion_de_montfort.jpg",
    "São João Batista": "imagens/sao_joao_batista.jpg",
    "São João da Cruz": "imagens/sao_joao_da_cruz.jpg",
    "Santo Agostinho": "imagens/santo_agostinho.jpg",
    "Santa Teresinha": "imagens/santa_teresinha.jpg",
    "São Padre Pio": "imagens/sao_padre_pio.jpg",
    "Santa Faustina Kowalska": "imagens/santa_faustina_kowalska.jpg",
    "São João Evangelista": "imagens/sao_joao_evangelista.jpg",
    "São João Bosco": "imagens/sao_joao_bosco.jpg",
    "Santa Gianna Beretta Molla": "imagens/santa_gianna_beretta_molla.jpg",
    "São Francisco de Sales": "imagens/sao_francisco_de_sales.jpg",
    "São Vicente de Paulo": "imagens/sao_vicente_de_paulo.jpg"
};


window.addEventListener("load", () => {
    const temas = Object.keys(frasesData);
    const temaAleatorio = temas[Math.floor(Math.random() * temas.length)];
    temaAtual = temaAleatorio;
    modal.style.display = "flex";
    resetModal();
    mostrarFrase();
});

        // Elementos do DOM
        const modal = document.getElementById('modal');
        const fechar = document.getElementById('fechar');
        const btnVerFrase = document.getElementById('btn-ver-frase');
        const inicial = document.getElementById('inicial');
        const loading = document.getElementById('loading');
        const conteudoFrase = document.getElementById('conteudo-frase');
        const temaEscolhido = document.getElementById('tema-escolhido');
        const nomeSanto = document.getElementById('nome-santo');
        const fraseSanto = document.getElementById('frase-santo');
        const btnNovaFrase = document.getElementById('btn-nova-frase');
        const baloes = document.querySelectorAll('.balao');

        let temaAtual = '';

        // Event listeners para os balões
        baloes.forEach(balao => {
            balao.addEventListener('click', () => {
                temaAtual = balao.dataset.tema;
                const temaTexto = balao.textContent.replace(/[^\w\s]/gi, '').trim();
                temaEscolhido.textContent = temaTexto;
                modal.style.display = 'flex';
                resetModal();
                
                // Som suave de clique
                playClickSound();
            });
        });

        // Event listeners do modal
        fechar.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        btnVerFrase.addEventListener('click', mostrarFrase);
        btnNovaFrase.addEventListener('click', mostrarFrase);

        // Fechar modal clicando fora
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        function resetModal() {
            inicial.style.display = 'block';
            loading.style.display = 'none';
            conteudoFrase.style.display = 'none';
        }

        function mostrarFrase() {
            inicial.style.display = 'none';
            loading.style.display = 'block';
            conteudoFrase.style.display = 'none';

    setTimeout(() => {
        const frases = frasesData[temaAtual];
        const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
        
        nomeSanto.textContent = fraseAleatoria.santo;
        fraseSanto.textContent = fraseAleatoria.frase;
        
        // Alterar a imagem do santo com base no nome
        const imagemSanto = imagensSantos[fraseAleatoria.santo];
        if (imagemSanto) {
            document.getElementById('imagem-santo').src = imagemSanto;
        }


        if (somAtivo) {
    audio.currentTime = 0;
    audio.play();
        }
        loading.style.display = 'none';
        conteudoFrase.style.display = 'block';
        
        // Efeito suave da cruz
        adicionarCruz();
    }, 1800);

    exibirBotaoCompartilhar(fraseAleatoria);

    }

        function adicionarCruz() {
            const cruz = document.querySelector('.cruz-decoration');
            cruz.style.animation = 'none';
            setTimeout(() => {
                cruz.style.animation = 'gentleGlow 2s ease-in-out';
            }, 50);
        }

        function playClickSound() {
            // Som mais suave e discreto
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.15);
                
                gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.15);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.15);
            } catch (e) {
                // Fallback silencioso
            }
        }

        function exibirBotaoCompartilhar(frase) {
    let btnCompartilhar = document.getElementById('btn-compartilhar');
    if (!btnCompartilhar) {
        btnCompartilhar = document.createElement("button");
        btnCompartilhar.id = "btn-compartilhar";
        btnCompartilhar.textContent = "Compartilhar";
        Object.assign(btnCompartilhar.style, {
            marginTop: "16px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "6px",
            background: "#2d89ef",
            color: "white",
            fontSize: "14px",
            cursor: "pointer"
        });
        conteudoFrase.appendChild(btnCompartilhar);
    }

 btnCompartilhar.onclick = () => {
        const texto = `"${frase.frase}" — ${frase.santo}`;
        const url = window.location.href;
        const compartilhar = `${texto}\n\nVeja mais em: ${url}`;
        navigator.clipboard.writeText(compartilhar).then(() => {
            btnCompartilhar.textContent = "Copiado!";
            setTimeout(() => btnCompartilhar.textContent = "Compartilhar", 2000);
        });

        if (navigator.share) {
    navigator.share({
        title: 'Frase de Santo',
        text: texto,
        url: url
    });
} else {
    navigator.clipboard.writeText(compartilhar).then(() => {
        btnCompartilhar.textContent = "Copiado!";
        setTimeout(() => btnCompartilhar.textContent = "Compartilhar", 2000);
    });
}
    };
}


 // paralax
 document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            document.body.style.backgroundPosition = `${moveX}px ${moveY}px`;
        });

document.addEventListener('click', function tocarAudio() {
    const audio = document.getElementById('audio-frase');
    if (audio && audio.paused) {
        audio.play();
    }
    document.removeEventListener('click', tocarAudio);
});

const audioFrase = document.getElementById('audio-frase');
const btnMute = document.getElementById('btn-mute');

btnMute.addEventListener('click', () => {
    if (audioFrase.muted || audioFrase.paused) {
        audioFrase.muted = false;
        audioFrase.play();
        btnMute.textContent = "🔊 Som";
    } else {
        audioFrase.muted = true;
        audioFrase.pause();
        btnMute.textContent = "🔇 Mudo";
    }
});