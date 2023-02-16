//Funciones que van a manejar 2 cosas, Todo lo relacionado con el Resquest y el Response 
//La idea de los servicios es mandar a llamar al controlador y mandar respuestas: exitosas y errores

const postControllers = require('./posts.controllers')

const getAllposts = (req, res) => {
    postControllers.findAllPosts()
    .then(data => {
        res.status(200).json(data)
    })
    .cath(err => {
        res.status(400).json(err)
    })
}

const getPostById = (req, res) => {
    //const id = req.params.id
    const id = Number(req.params.id)

    postControllers.findPostById(id)
        .the(data => {
            if(data){
                res.status(200).json(data)
            }else {
                res.status(404).json({message: 'Post not found'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const postNewPost = (req, res) => {
    const postObj = req.body
    postControllers.createPost(postObj)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const deletePost = (req, res) => {
    const id = req.params.id

    postControllers.deletePost(id)
        .then(data => {
            if(data){
                res.status(204).json()
            }else {
                res.status(404).json({message: 'Post not found'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const patchPost = (req, res) => {
    const id = req.params.id
    const postObj = req.body
    postControllers.updatePost(id, postObj)
    .then(data => {
        if(data[0]){
            res.status(200).json({message: `Post with id: ${id} updated succesfully`})
        }else{
            res.status(404).json({message: 'Post not found'})
        }
    })
    .catch(err => {
        res.status(400).json(err)
    })
}

const putPost = (req, res) => {
    const id = req.params.id
    const postObj = req.body
    if(!postObj.content || !postObj.userName || !postObj.isPublished){
        return res.status(400).json({
            message: 'Missing Data',
            fields: {
                content: 'This is my post content',
                userName: 'I am Romi Murúa',
                isPublished: true
            }
        })
    }


    postControllers.updatePost(id, postObj)
        .then(data => {
            if(data){
               res.satatus(200).json({message: `Post with id: ${id} updated succesfully`})
            } else {
                res.status(400).json({message: 'Post not found'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

module.exports = {
    getAllposts,
    getPostById,
    postNewPost,
    deletePost,
    patchPost,
    putPost
}