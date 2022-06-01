/*import {calcular,removerProdutos} from "./util.js";*/

import {clientes} from './clientes.js'; 


window.onload = function(){
     
    // ------------verifica se as Div estão fechadas------------
    // document.getElementById("divCliente").style.display="none";
    // document.getElementById("divProduto").style.display="none";
    // document.getElementById("divPedido").style.display="none";
    
    if (document.getElementById('mostraCliente')){
        const abrirDivCli = document.getElementById('mostraCliente');

        abrirDivCli.addEventListener('click',function(){
            document.getElementById("divCliente").style.display="block";
            document.getElementById("divProduto").style.display="none";
            document.getElementById("divPedido").style.display="none";
        })
    }

    // divProduto
   
    if (document.getElementById('mostraProduto')){
        const abrirDivCli = document.getElementById('mostraProduto');

        abrirDivCli.addEventListener('click',function(){
            document.getElementById("divProduto").style.display="block";
            document.getElementById("divCliente").style.display="none";
            document.getElementById("divPedido").style.display="none";
        })
    }

    // divPedido
    
    if (document.getElementById('mostraPedido')){
        const abrirDivCli = document.getElementById('mostraPedido');

        abrirDivCli.addEventListener('click',function(){
            document.getElementById("divPedido").style.display="block";
            document.getElementById("divCliente").style.display="none";
            document.getElementById("divProduto").style.display="none";
        })
    }

    // -------------------------------------------------

    // ---verifica se os botoes de fechar foram clicados-------

        if (document.getElementById('btnCli')){

            const btnFecharCli = document.getElementById('btnCli');

            btnFecharCli.addEventListener('click',function(){
                //alert("entrou if");
                document.getElementById("divCliente").style.display = "none";
            })
        } 
        if(document.getElementById('btnProd')) {
            const btnFecharProd = document.getElementById('btnProd');

            btnFecharProd.addEventListener('click',function(){
                //alert("entrou");
                document.getElementById("divProduto").style.display = "none";
            })
        }
        if(document.getElementById('btnPed')){
            const btnFecharPed = document.getElementById('btnPed');

            btnFecharPed.addEventListener('click',function(){
                //alert("entrou");
                document.getElementById("divPedido").style.display = "none";
            })
        }
        
        
    //--------------- termina de verficar os botoes----------
    
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
    
    // ---------- carrega os dados do cliente ------------------
    
    const txcodCliente = document.querySelector("#codCliente");
    const txnomeCliente = document.querySelector("#nomeCliente");
    const txdataCadCli = document.querySelector("#dataCadCli");
    const btnSalvar = document.querySelector("#btnSalvar");
    
    txcodCliente.addEventListener('blur', function(){ //blur -- evento disparado qndo sai do campo
        // carrega os dados na tela
       
      
    //for(let campo in clientes){
            
        for(let i=0; i< clientes.length;i++){
                //console.log(dados[campo][i]);
                let aux = (clientes[i].codCliente);
                let aux2 = (clientes[i].nomeCliente);
                let aux3 = (clientes[i].dataCadCli);

                // console.log(txcodCliente.value);
            if(aux === Number(txcodCliente.value)){
               // console.log("ok");
               //txnomeCliente.value = aux2;
               // dataCadCli.textContent = clientes[i].dataCadCli;
                i= 100;
                alert("codigo : " + aux + " ,cliente: " + aux2 + " , data cad : " +aux3);
            }  

        }
        
    //}

    })
    

        // ---primeiro vou importar para outra lista

    // const auxL = document.querySelector("#ulListaClientes"); 
    // const listaClientes = auxL;

    
    // (()=>{
        
    //     for (let auxCli of clientes){
    //         const filhosLi = document.createElement('li');

    //         for(let listaC in auxCli){
    //             listaClientes.appendChild(filhosLi).textContent = `${auxCli[listaC]}`
    //             console.log(auxCli[listaC]);
    //         }
    //     }
    // })()

    // --------------- btn salvar ------------------------------

    btnSalvar.addEventListener('click', function(){
        // esta como lista mas é um arrays

        let lista = document.createElement('li');
        lista.appendChild(lista).textContent = codCliente.value;
    })
 
    // //---------------- btn novo ------------------------------------

    btnNovo.addEventListener('click', function(){
        txcodCliente = clientes.length + 1 // retorna o tamanho do array +1
    })
    // ---------------------------- evento blur-------------------------
    
    
   
    

}