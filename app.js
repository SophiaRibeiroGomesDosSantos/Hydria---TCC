const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'aplicativo/vistas'));

// Configurações para servir arquivos estáticos
app.use('/css', express.static(path.join(__dirname, 'aplicativo/público/css')));
app.use('/images', express.static(path.join(__dirname, 'aplicativo/público/images')));
app.use('/js', express.static(path.join(__dirname, 'aplicativo/público/js')));
app.use('/partial', express.static(path.join(__dirname, 'aplicativo/vistas/partial')));

// Middlewares
app.use(express.static(path.join(__dirname, 'aplicativo/público')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Importar rotas
const pagesRoutes = require('./aplicativo/rotas/pages');
const authRoutes = require('./aplicativo/rotas/auth');
const adminRoutes = require('./aplicativo/rotas/admin');

// Usar rotas
app.use('/', pagesRoutes);
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);

// Rota de teste para login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'aplicativo/vistas/auth/login.html'));
});

app.get('/auth/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'aplicativo/vistas/auth/cadastro.html'));
});

app.get('/auth/editar-perfil', (req, res) => {
    res.sendFile(path.join(__dirname, 'aplicativo/vistas/pages/editar-perfil.html'));
});

app.get('/mensagemEnviada', (req, res) => {
    res.sendFile(path.join(__dirname, 'aplicativo/vistas/pages/mensagemEnviada.html'));
});

app.get('/mensagem-enviada', (req, res) => {
    res.sendFile(path.join(__dirname, 'aplicativo/vistas/pages/mensagemEnviada.html'));
});

// Rotas diretas para auth
app.get('/recuperar-senha', (req, res) => {
    res.sendFile(path.join(__dirname, 'aplicativo/vistas/auth/recuperar-senha.html'));
});

app.get('/verificacao', (req, res) => {
    res.sendFile(path.join(__dirname, 'aplicativo/vistas/auth/verificacao.html'));
});

app.get('/nova-senha', (req, res) => {
    res.sendFile(path.join(__dirname, 'aplicativo/vistas/auth/novasenha.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});