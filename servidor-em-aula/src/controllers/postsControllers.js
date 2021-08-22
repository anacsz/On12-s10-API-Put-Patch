const postsJson = require("../models/posts.json");

const getAll = (req, res) => {
    res.statu(200).send(postsJson);
};

const getById = (req, res) => {
    let requestedId = req.params.id;
    let postFrombody = req.body;

    let filteredPost = postsJson.find(post => post.id == requestedId);

    res.status(200).send(filteredPost);
};

const createPost = (req, res) => {
    let requestedTitle = req.body.titulo
    let requestedContent = req.body.conteudo
    let requestedLabels = req.body.etiquetas

    let newPost = {
        "id" : Math.random().toString(32).substr(),
        "dataCriacao": new Date(),
        "titulo": requestedTitle,
        "conteudo": requestedContent,
        "etiquetas":requestedLabels
    };

    postsJson.push(newPost);

    res.status(201).send({
        "mensagem": "post criado com suceso",

        newPost
    });

}

const replacePost = (req, rest) =>{
    let requestedId = req.params.id;

    let filteredPost = postsJson.find(post => post.id == requestedId);

    const indice = postsJson.indexOf(filteredPost);

    postsJson.splice(indice, 1, postFrombody);

    res.status(200).send({
        "mensagem": "Post substituido com sucesso",
        postFrombody
    })
}

module.exports = {getAll,getById, createPost, replacePost}