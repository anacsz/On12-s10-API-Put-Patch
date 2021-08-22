# documentação

## demandas de negocio
- devo conseguir ver todos os post
- devo conseguir um post especifico
- devo conseguir deletar post
- devo conseguir criar um post
- devo conseguir atualizar post
- devo conseguir atualizar titulo do post
- devo conseguir atualizar qualquer parte do post separadamente

## rotas

{GET}/posts
const getAll que retorna todos os posts

{GET}/posts/:id
const getByid para ver um post especifico

{DELETE}/posts/:id
cont deletePost para deletar um post

{POST}/posts/create
const creatPost para criar um post

{PUT}/posts/:id
atualizar replacePost para atualizar post

{PATCH}/posts/updateTitle/:id
const updateTitle para atualizar o titulo do post

{PATCH}/posts/update/:id
const updateAnything para atualizar qualquer parte do post separadamente



