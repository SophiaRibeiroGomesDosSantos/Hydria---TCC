const express = require('express');
const path = require('path');
const router = express.Router();

// Página inicial
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/index.html'));
});

// Home alternativa
router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/index.html'));
});

// Sobre
router.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/sobre.html'));
});

// Projetos
router.get('/projetos', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/projetos.html'));
});

// Sobre Instituto Agua Viva
router.get('/sobreInstitutoAguaViva', (req, res) => {
    res.render('pages/sobreInstitutoAguaViva');
});

router.get('/sobre-instituto-agua-viva', (req, res) => {
    res.render('pages/sobreInstitutoAguaViva');
});

router.get('/sobreinstitutoaguaviva', (req, res) => {
    res.render('pages/sobreInstitutoAguaViva');
});

// Sobre Águas Potiguara
router.get('/sobre-aguas-potiguara', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/sobreAguasPotiguara.html'));
});

// Sobre Um Milhão de Cisternas
router.get('/sobre-um-milhao-de-cisternas', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/sobreUmMilhaoDeCisternas.html'));
});

// Contato
router.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/contato.html'));
});

// Mensagem enviada
router.get('/mensagem-enviada', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/mensagemEnviada.html'));
});

router.get('/mensagemEnviada', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/mensagemEnviada.html'));
});


// Doações
router.get('/doacoes', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/doações.html'));
});

// Doações (rota alternativa)
router.get('/doações', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/doações.html'));
});

// Selecionar valor da doação
router.get('/selecionar-valor', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/selecionar-valor.html'));
});

router.get('/selecionar-valor-doacao', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/selecionar-valor.html'));
});

// Forma de pagamento
router.get('/pagamento', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/pagamento.html'));
});

router.get('/forma-pagamento', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/pagamento.html'));
});

// Pagamento via Pix
router.get('/dopagamentoviapix', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/dopagamentoviapix.html'));
});

router.get('/pagamento-via-pix', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/dopagamentoviapix.html'));
});

// Pagamento via Cartão de Crédito
router.get('/pagamentoCartaodeCredito', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/pagamentoCartaodeCredito.html'));
});

router.get('/pagamento-cartaodecredito', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/pagamentoCartaodeCredito.html'));
});



// Perfil
router.get('/perfil', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/editar-perfil.html'));
});

// Editar perfil (rota alternativa)
router.get('/editar-perfil', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/editar-perfil.html'));
});

// Editar perfil (rota com prefixo /auth)
router.get('/auth/editar-perfil', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/editar-perfil.html'));
});

// Mensagem aceita
router.get('/mensagem-aceita', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/mensagem-aceita.html'));
});

// Agradecimento da doação
router.get('/agradecimento-doacao', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/agradecimento-doacao.html'));
});

// Login (rota direta)
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/auth/login.html'));
});

// Barra doação


// Perfil admin (na pasta pages)
router.get('/perfil-admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/perfiladm.html'));
});
 

// Notícias
router.get('/noticia01', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/noticia01.html'));
});

router.get('/noticia02', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/noticia02.html'));
});

router.get('/noticia03', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/noticia03.html'));
});

router.get('/noticia04', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/noticia04.html'));
});

router.get('/noticia05', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/noticia05.html'));
});

router.get('/noticia06', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/noticia06.html'));
});

//login
let login = []
router.get("/", (req, res) => {
    res.render("pages/login", {listaErros: null, valores:{loginEmail: '', loginPassword: ''}})
})

router.post("/login",
    body("loginEmail").isEmail().withMessage("Email inválido"),
    body("loginPassword").isLength({min:6}).withMessage("Mínimo 6 caracteres"),
    
    (req, res) => {
        const listaErros = validationResult(req)

        //receber dados do formulário
        if(listaErros.isEmpty()){
            login = []
            login.push(req.body.loginEmail)
            login.push(req.body.loginPassword)


            console.log('Novo Login:', login)
            return res.render('pages/enviologin')
                
        }else{
            res.render("pages/login", {
                listaErros: listaErros, 
                valores:{
                    loginEmail: req.body.loginEmail,
                    loginPassword: req.body.loginPassword
                }
            })
            console.log(listaErros)
        }
    }
)


//signup
const signup = []

router.get("/", (req, res) => {
    res.render("pages/login", {listaErros: null, valores:{signup_name:"", signup_email:"", signup_password:""}})
})

router.post("/signup",
    body("signup_name").isLength({min:5}).withMessage("Nome inválido"),
    body("signup_email").isEmail().withMessage("Email inválido"),
    body("signup_password").isLength({min:6}).withMessage("Mínimo 6 caracteres"),
    
    (req, res) => {
        const listaErros = validationResult(req)

        if(listaErros.isEmpty()) {

            for(let i = signup.length - 1; i >= 0 ; i--){
                signup.splice(i, 3)
            }
            if(req.body.signup_name, req.body.signup_email, req.body.signup_password){
                signup.push(req.body.signup_name)
                signup.push(req.body.signup_email)
                signup.push(req.body.signup_password)
                console.log('Novo Cadastro:', signup)
            }

            res.render('pages/enviocad')

        }else{
            res.render("pages/login", {
                listaErros: listaErros,
                valores: {
                    signup_name: req.body.signup_name,
                    signup_email: req.body.signup_email,
                    signup_password: req.body.signup_password
                }
            })
            console.log(listaErros)
        }
    }
)


// donations
const doacao = [];

router.get("/select", (req, res) => {
  res.render("pages/doacao", {
    listaErros: null,
    valores: { valorSelecionado: "", valorDigitado: "" },
  });
});

router.post(
  "/select",

  // Regra XOR: precisa ter botão OU input (não os dois, nem nenhum)
  body("valorSelecionado").custom((_, { req }) => {
    const sel = (req.body.valorSelecionado ?? "").toString().trim();
    const dig = (req.body.valorDigitado ?? "").toString().trim();

    const temSel = sel !== "";
    const temDig = dig !== "";

    if (!temSel && !temDig) {
      throw new Error("Selecione um valor ou digite um valor.");
    }
    if (temSel && temDig) {
      throw new Error("Use apenas uma opção: botão OU campo.");
    }
    return true;
  }),

  // Só valida número quando NÃO há seleção de botão
  body("valorDigitado")
    .if((value, { req }) => {
      const sel = (req.body.valorSelecionado ?? "").toString().trim();
      return sel === ""; // sem botão selecionado -> validar input
    })
    .isFloat({ gt: 0 })
    .withMessage("Digite um número válido maior que zero."),

  async (req, res) => {
    const listaErros = validationResult(req);

    if (!listaErros.isEmpty()) {
      return res.render("pages/doacao", {
        listaErros,
        valores: {
          valorSelecionado: req.body.valorSelecionado ?? "",
          valorDigitado: req.body.valorDigitado ?? "",
        },
      });
    }

    // Sucesso: pega só UM dos valores (prioriza o botão)
    const sel = (req.body.valorSelecionado ?? "").toString().trim();
    const dig = (req.body.valorDigitado ?? "").toString().trim();

    // limpa array
    doacao.length = 0;

    let valor = null;
    if (sel !== "") {
      valor = parseInt(sel, 10);
    } else if (dig !== "") {
      valor = parseFloat(dig);
    }

    if (valor !== null && !Number.isNaN(valor)) {
      doacao.push(valor);
      console.log("Valor doado:", doacao);
    }

    return res.render("pages/enviodoa");
  }
);

// Contato
let contato = []
router.get('/', (req, res) => {
    res.render('pages/contato', {
        listaErros: null,
        valores: { name: '', email: '', message: '', telephone: '' }
    });
});

router.post('/msg', 
    body('name').isLength({ min: 5}).withMessage('Nome inválido'),
    body('email').isEmail().withMessage('Email inválido'),
    body('message').isLength({ min: 10}).withMessage('Mensagem inválida'),
    body('telephone').isLength({ min: 11}).withMessage('Telefone inválido'),

    (req, res) => {
        const listaErros = validationResult(req);

        if (listaErros.isEmpty()) {
            contato = []; // limpa lista
            contato.push(req.body.name);
            contato.push(req.body.email);
            contato.push(req.body.telephone);
            contato.push(req.body.message);

            console.log('Nova Mensagem:', contato);
            return res.render('pages/enviocont');
        }else{
            // Retorna para a página com os valores preenchidos e os erros
            res.render('pages/contato', {
                listaErros: listaErros,
                valores: { 
                    name: req.body.name,
                    email: req.body.email, 
                    telephone: req.body.telephone, 
                    message: req.body.message 
                }
            });
            console.log(listaErros)
        }

    }
);

module.exports = router;