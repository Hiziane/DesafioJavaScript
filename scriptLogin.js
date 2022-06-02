window.onload = function(){
    
    // verifica usuario e senha ---------------------

    function resultadoUsuarioSenha(dados){

        
        let entrou =0;
        for(let campo in dados){
            
            for(let i=0; i< dados[campo].length;i++){
                    //console.log(dados[campo][i]);
                    let aux = (dados[campo][i].user);
                    
                    //console.log((usuario.value));
                if(aux === usuario.value){
                    if (dados[campo][i].pws === senha.value){
                        entrou=1;
                        window.location.href = "panel.html"
                       
                    } 
                }  
            }
            
        }
        if (entrou<1){
            alert("Usuario e/ou senha inválidos.")
        }
    }

        let dadosUsuario = async function(usuario, senha){
        const url = " usuario.json" ;
            //console.log(url);
            //console.log(usuario,senha); 
        try{
            let dadosFetch = await fetch(url);
            let dadosJson = await dadosFetch.json();
            //console.log(dadosJson);
            resultadoUsuarioSenha(dadosJson);
        } catch(error){
            alert(error);
        }
    }

    const btnEntrar = document.querySelector("#botao");
    const usuario = document.querySelector("#user");
    const senha = document.querySelector("#pws");

    //console.log(btnEntrar);
    btnEntrar.addEventListener('click',function(){
        
        dadosUsuario(user.value, pws.value);
    })

    //------------- termina de verificar usuario e senha --------------
    
}