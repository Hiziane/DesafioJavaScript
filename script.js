/*import {calcular,removerProdutos} from "./util.js";*/

import {clientes} from './clientes.js'; 


window.onload = function(){

    // ---verifica se os botoes de fechar foram clicados-------

        if (document.getElementById('btnCli')){

            const btnFecharCli = document.getElementById('btnCli');

            btnFecharCli.addEventListener('click',function(){
                //alert("entrou");
                document.getElementById("divCliente").style.display = "none";
            })
        }else{
            if(document.getElementById('btnProd')) {
                const btnFecharProd = document.getElementById('btnProd');

                btnFecharProd.addEventListener('click',function(){
                    //alert("entrou");
                    document.getElementById("divProduto").style.display = "none";
                })
            }else{
                if(document.getElementById('btnPed')){
                    const btnFecharPed = document.getElementById('btnPed');

                    btnFecharPed.addEventListener('click',function(){
                        //alert("entrou");
                        document.getElementById("divPedido").style.display = "none";
                    })
                }
            }
        }
    //--------------- termina de verficar os botoes----------
    
    // verifica usuario e senha ---------------------

    function resultadoUsuarioSenha(dados){

        for(let campo in dados){
            if(document.querySelector(`#${campo}`)){
                document.querySelector(`#${campo}`).value = dados[campo];
                alert("entrou if");
            }else{
                console.log(campo);
                alert("entrou no else");
            }
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
    
    
    // var x = document.getElementById("formCliente");
    // x.addEventListener("blur",pesquisarCliente, true );
    // //console.log(x);
    // function pesquisarCliente(){
    //     alert("1111");
    //     //const codCliente = document.querySelector(`#${resultado}`);
    // }

    //codCliente
    //nomeCliente
    //dataCadCliente
    //btnSalvar

    
    // const txcodCliente = document.querySelector("#codCliente");
    // const txnomeCliente = document.querySelector("#nomeCliente");
    // const txdataCadCli = document.querySelector("#dataCadCli");
    // const btnSalvar = document.querySelector("#btnSalvar");
    

    // //primeiro vou importar para outra lista

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

    // btnSalvar.addEventListener('click', function(){
    //     // esta como lista mas é um arrays

    //     let lista = document.createElement('li');
    //     lista.appendChild(lista).textContent = codCliente.value;
    // })
 
    // //---------------- btn novo ------------------------------------

    // btnNovo
    // codCliente = clientes.length + 1 // retorna o tamanho do array +1

}