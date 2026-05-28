const express = require('express');
const path = require('path');
const router = express.Router();

// Painel admin
router.get('/painel', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/admin/paineladm.html'));
});

// ONGs
router.get('/painel', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/admin/paineladm.html'));
});

// ONGs
router.get('/ongs', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/admin/ongs.html'));
});

// Perfil admin
router.get('/perfil', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/admin/perfiladm.html'));
});

// Suporte
router.get('/suporte', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/admin/suporte.html'));
});

// Usuários
router.get('/usuarios', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/admin/usuario.html'));
});

module.exports = router;