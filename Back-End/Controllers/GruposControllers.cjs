const grupos = require('../Models/grupo.cjs');

module.exports ={
    // Function To List All Grupos
    async ListGrupos(req, res){
     try{
        await grupos.findAll({}).then((grupo)=>{
          return res.status(200).json(grupo);
        })
    }catch(error){
          res.status(500).json({
          Error: error,
          Message:`Erro ao localizar lista de grupos`
        })
    }
  },// Function To List One Produto
    async ListOneGrupo(req, res){
    const id = req.params.id;
    await grupos.findOne({ atributes:[ 'idGrupo'],
        where:{
        idGrupo: id
    }}).then((grupo) => {
      return res.json(grupo);
  }).catch((erro) => {
      return res.status(400).json({
          error: true,
          message: (`Nenhum Grupo encontrado!`+ erro)
      })
  })
},//Function To Add Produto
    async AddGrupos(req, res){ 
      const Dados = req.body
      if(!Dados){
        return res.status(400).json({Error:"Os dados informados não foram encontrados!"})
    }try{
      await grupos.create(Dados);
       res.status(201).json({mensage:"produto cacdastrado!"});
    }catch(error){
        console.log("Erro ao cadastrar Produto");
        res.status(400).json({Error:error.mensage})
    }
  },//Function To Edit One Register
   async atualizar(req, res){
   const Dados = req.body
   id = req.params.id
   const grupos = await grupos.updateOne({ idGrupo:id}, Dados, (err) => {

    if(err) return res.status(400).json({
        error: true,
        message: "Error: Grupo não foi editado com sucesso!"
    });
    return res.json({
        error: false,
        message: "Grupo editado com sucesso!"
    });
  });

},// Function To Delete Product
   async DeleteGrupo(req, res){
    const id = req.params.id;
    await grupos.deleteOne({idGrupo:id})
        .then(()=>{
          return res.json({
            Erro: false,
            Message: "Produto Excluído com sucesso"
          });
        }).catch((err)=>{
            res.status(400).json({
              Erro:true,
              Message: ("Produto não pode ser deletatdo"+ err) 
            })
        })
}
}