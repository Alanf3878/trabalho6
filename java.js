let euMesmo = [
    {
        nome:"alan",
        idade: 24,
        humana: true,
        cabelo: "preto",
        }]

        euMesmo.time = "fluminense"
        
        delete euMesmo[0].cabelo

        console.log(euMesmo) 


        let cadastro = [{
        
            nome:"goku",
            idade:24,
            telefone: 218988988,
            amigos: ["amigo1","amigo2","amigo3"]

        },
        {
            
            nome:"naruto",
            idade:24,
            telefone: 218988988,
            amigos: ["amigo1","amigo2","amigo3"]

        },
        {
            
            nome:"vegeta",
            idade:24,
            telefone: 218988988,
            amigos: ["amigo1","amigo2","amigo3"]

        },
        {
            
            nome:"itachi",
            idade:24,
            telefone: 218988988,
            amigos: ["amigo1","amigo2","amigo3"]
            
        },
        {
            
            nome:"kakashi",
            idade:24,
            telefone: 218988988,
            amigos: ["amigo1","amigo2","amigo3"]

        }]

        cadastro[0].amigos = ["amigo4","amigo5","amigo6","amigo7"]

        console.log(cadastro[0,1,2,3,4].amigos)