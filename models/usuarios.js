const db = require("./db")

const usuarios = db.sequelize.define("usuarios", {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    senha: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    tipo: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    matricula: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    created_at: {
        type: db.Sequelize.DATE,
        allowNull: true
    }
}, {
    timestamps: false
});

module.exports = usuarios;