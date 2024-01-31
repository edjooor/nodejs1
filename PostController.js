import Post from "./Post.js"
import PostService from "./PostService.js";

class Postcontroller {
    async create(req, res)  //function for creating post
    { 
        try{

            const post = await PostService.create(req.body, req.files.picture) 
            res.json(post)
    
        }
        catch(e){
            res.status(500).json(e)
        }

    }
    async getAll(req, res)  //function get all posts from database
    { 
        try{
            const posts = await PostService.getAll();
            return res.json(posts);
            
        }catch(e){
            res.status(500).json(e)
        }
    }
    async getOne(req, res)  //function get one post from database
    {
        try{
            
            const post = await PostService.getOne(req.params.id);
            return res.json(post);
            
        }catch(e){
            res.status(500).json(e)
        }
    }
    async update(req, res)
    {
        try{
            
            const updatedPost = await PostService.update(req.body)
            return res.json(updatedPost);
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async delete(req, res)
    {
        try{
           
            const deletedPost = await PostService.delete(req.params.id);
            return res.json(deletedPost);

        }catch(e){
            res.status(500).json(e.message)
        }
    }
}

export default new Postcontroller();