const express = require('express');
const path = require('path');
const router = express.Router();

// Login
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/auth/login.html'));
});

// Cadastro
router.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/auth/cadastro.html'));
});

// Nova senha
router.get('/nova-senha', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/auth/novasenha.html'));
});

// Editar perfil
router.get('/editar-perfil', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/pages/editar-perfil.html'));
});

// Recuperar senha
router.get('/recuperar-senha', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/auth/recuperar-senha.html'));
});

// VerificaÃ§Ã£o
router.get('/verificacao', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/auth/verificacao.html'));
});

// POST para Verificação (temporário - durante desenvolvimento)
router.post('/verificacao', (req, res) => {
    // TODO: Validar código de verificação
    res.redirect('/auth/nova-senha');
});

module.exports = router;