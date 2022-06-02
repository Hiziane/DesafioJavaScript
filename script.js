
import {clientes} from './clientes.js'; 
import {produtos} from './produtos.js';

window.onload = function(){
    
    // ------------verifica se as Div estão fechadas------------
    // document.getElementById("divCliente").style.display="none";
    // document.getElementById("divProduto").style.display="none";
    // document.getElementById("divPedido").style.display="none";

    //document.getElementById("divtela").classList.remove("divCliente");//.toggle("visible");
    // var div = document.getElementById('divTeste');
    //     div.classList.remove('divTeste');
    //     console.log(div);


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
    
    
    // ---------- carrega os dados do cliente ------------------
    
    const txcodCliente = document.querySelector("#codCliente");
    const txnomeCliente = document.querySelector("#nomeCliente");
    const txdataCadCli = document.querySelector("#dataCadCli");
    //const btnSalvar = document.querySelector("#btnSalvar");
    const controle = document.querySelectorAll('.controle');

    let index = 0;
    txcodCliente.value = clientes[index].codCliente;
    txnomeCliente.value = clientes[index].nomeCliente;
    txdataCadCli.value = clientes[index].dataCadCli;

    controle.forEach( botao => {
    
        botao.addEventListener('click',function(){
            let tamanho = clientes.length; 
            switch(botao.value){
                case '<':
                   if (index>0){ 
                        index--;
                        //console.log(index);
                        txcodCliente.value = clientes[index].codCliente;
                        txnomeCliente.value = clientes[index].nomeCliente;
                        txdataCadCli.value = clientes[index].dataCadCli; 
                   }
                break;

                case '>':
                    
                    if (index <tamanho){
                        index++;
                        //console.log("index",index);
                        txcodCliente.value = clientes[index].codCliente;
                        txnomeCliente.value = clientes[index].nomeCliente;
                        txdataCadCli.value = clientes[index].dataCadCli;   
                    }    
                break;

                case 'Novo':
                    tamanho++;
                    txcodCliente.value =  tamanho;
                    txnomeCliente.value = '';
                    let data = new Date();
                    txdataCadCli.value = data.toLocaleString('pt-BR', {year:'numeric', month:'2-digit', day:'2-digit'});
                    //let dataFormatada = data.toLocaleString('pt-BR', {year:'numeric', month:'2-digit', day:'2-digit'});
                    
                break;

                case 'Salvar':
                    if (txnomeCliente.value===""){
                        alert("Informe o nome do Cliente.");
                    }else{
                        //console.log(txnomeCliente.value);
                        clientes.push({
                        'codCliente' :txcodCliente.value, 
                        'nomeCliente':txnomeCliente.value,
                        'dataCadCli': txdataCadCli.value, 
                        });
                    }      
                break;

            }
        })
    })        

    //txcodCliente.addEventListener('blur', function(){ //blur -- evento disparado qndo sai do campo
        // carrega os dados na tela
    // console.log(txcodCliente.value);    
    // if (txcodCliente.value >0){            
    //     for(let i=0; i< clientes.length;i++){
    //            // console.log(dados[campo][i]);
    //            console.log("for");
    //             let aux = (clientes[i].codCliente);
    //             let aux2 = (clientes[i].nomeCliente);
    //             let aux3 = (clientes[i].dataCadCli);

    //             // console.log(txcodCliente.value);
    //         if(aux === Number(txcodCliente.value)){
    //            console.log("if");
    //            txnomeCliente.value = aux2;
    //            txdataCadCli.value = clientes[i].dataCadCli;
    //             i= 100;
    //             alert("codigo : " + aux + " ,cliente: " + aux2 + " , data cad : " +aux3);
    //         }  
    //     }
    // }
    //     // let index = 0;
        // txcodCliente.value = clientes[index].codCliente;
        // txnomeCliente.value =clientes[index].nomeCliente;
   // })
    

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

    // btnSalvar.addEventListener('click', function(){
    //     // esta como lista mas é um arrays

    //     let lista = document.createElement('li');
    //     lista.appendChild(lista).textContent = codCliente.value;
    // })
 
    // //---------------- btn novo ------------------------------------

    // btnNovo.addEventListener('click', function(){
    //     txcodCliente = clientes.length + 1 // retorna o tamanho do array +1
    // })
    // ---------------------------- evento blur-------------------------
    
    
   // ******************************************************************

   ///----------------------  PRODUTOS -------------------------------

//    produtos = [
//     { "codProduto"   : 1,
//       "descProduto"    : "Caneta esferográfica",
//       "precoProduto" : 0.80,  
//       "qtdEstoqueProd" : 10, }

// ---------- carrega os dados do produto ------------------
    
const txcodProduto = document.querySelector("#codProduto");
const txdescProduto = document.querySelector("#descProduto");
const txprecoProduto = document.querySelector("#precoProduto");
const txqtdEstoqueProduto = document.querySelector("#qtdEstoqueProd");
const comandos = document.querySelectorAll('.comandos');

let i = 0;
txcodProduto.value = produtos[i].codProduto;
txdescProduto.value = produtos[i].descProduto;
txprecoProduto.value = produtos[i].precoProduto;
txqtdEstoqueProduto.value = produtos[i].qtdEstoqueProd;


comandos.forEach( botao => {

    botao.addEventListener('click',function(){
        let tam = produtos.length; 
        switch(botao.value){
            case '<':
               if (i>0){ 
                    i--;
                    //console.log(i);
                    txcodProduto.value = produtos[i].codProduto;
                    txdescProduto.value = produtos[i].descProduto;
                    txprecoProduto.value = produtos[i].precoProduto;
                    txqtdEstoqueProduto.value = produtos[i].qtdEstoqueProd;
               }
            break;

            case '>':
                
                if (i <tam){
                    i++;
                    txcodProduto.value = produtos[i].codProduto;
                    txdescProduto.value = produtos[i].descProduto;
                    txprecoProduto.value = produtos[i].precoProduto;
                    txqtdEstoqueProduto.value = produtos[i].qtdEstoqueProd; 
                }    
            break;

            case 'Novo':
                tam++;
                txcodProduto.value =  tam;
                txdescProduto.value = '';
                txprecoProduto.value='';
                txqtdEstoqueProduto.value='';
            break;

            case 'Salvar':
                if (txdescProduto.value===""){
                    alert("Informe a descrição do Produto.");
                }else{
                    produtos.push({
                    'codProduto' :txcodProduto.value, 
                    'descProduto': txdescProduto.value,
                    'precoProduto': txprecoProduto.value, 
                    'qtdEstoqueProd' : txqtdEstoqueProduto.value ,
                    });
                }      
            break;

        }
    })
})        

  //****************************************************** */
  //------------------ pedido------------------
    const txcodCliPed = document.querySelector("#codCliente");
    const txnomeCliPed = document.querySelector("#nomeCliente");
    
   console.log(txcodCliPed.value); 
   
   txcodCliPed.addEventListener('blur', function(){ //blur -- evento disparado qndo sai do campo
        //carrega os dados na tela
    console.log(txcodCliPed.value);    
    if (txcodCliPed.value > 0){            
        for(let i=0; i< clientes.length;i++){
               // console.log(dados[campo][i]);
               console.log("for");
                let aux = (clientes[i].codCliente);
                let aux2 = (clientes[i].nomeCliente);
                
                // console.log(txcodCliente.value);
            if(aux === Number(txcodCliPed.value)){
               //console.log("if");
               txnomeCliPed.value = aux2;
                i= 100;
                alert("codigo : " + aux + " ,cliente: " + aux2 );
            }  
        }
    }
})
 
// -------------------- produtos -----------------

    const txcodProdPed = document.querySelector("#codProduto");
    const txdescProdPed = document.querySelector("#descProduto");
    
   console.log(txcodProdPed.value); 
   
   txcodProdPed.addEventListener('blur', function(){ //blur -- evento disparado qndo sai do campo
        //carrega os dados na tela
    //console.log(txcodProdPed.value);    
    if (txcodProdPed.value > 0){            
        for(let i=0; i< produtos.length;i++){
               // console.log(dados[campo][i]);
               console.log("for");
                let aux = (produtos[i].codProduto);
                let aux2 = (produtos[i].descProduto);
                
              
            if(aux === Number(txcodProdPed.value)){
               //console.log("if");
               txdescProdPed.value = aux2;
               txprecoProduto.value = (produtos[i].precoProduto);
               txqtdEstoqueProduto.value = (produtos[i].qtdEstoqueProd);
                i= 100;
                
            }  
        }
    }
})



}