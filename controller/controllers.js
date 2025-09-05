const getAllDataController = (req,res)=>{
    res.send('hello world');
}

const toGoBlogController = (req,res)=>{
    res.send('this is blog site');
}

const toGoLoginController = (req,res)=>{
    res.send('this is login site');
} 
module.exports ={getAllDataController,toGoBlogController,toGoLoginController};