let menu_mobie_block = document.getElementById('menu_mobile_block')
let mobile_container = document.querySelector('.mobile_container');
let btnConsulta = document.getElementById('btnConsulta');
let table = document.querySelector('.table');
let input = document.getElementById('input')
let container_info = document.querySelector('.container_info');
let img_x = document.querySelector(".img_x")
let img_load = document.getElementById("img_load");
let qntd = 0;
let menu_mobie_none = document.getElementById('menu_mobie_none')
let alerta_inpuVazio = document.querySelector('.alerta_inpuVazio');

img_x.addEventListener("click", () => {
    container_info.style.display = 'none';
})

input.focus()
btnConsulta.addEventListener("click", () => {
    if (input.value !== '' && input.value !== null && input.value !== undefined && qntd <= 0) {
        if (input.value.length > 10) {
 
            img_load.style.display = 'block';
           
            let cpnjValido = input.value.replace(/[^0-9]/g, "");

            alerta_inpuVazio.style.display = 'none';
            container_info.style.display = 'block'
          
            fetch(`https://publica.cnpj.ws/cnpj/${cpnjValido}`, {
                method: "GET",
                headers: {
                    "content-type": "aplication/json"
                },

            })
                .then(function (resp) {
                    resp.json()
                        .then(function (data) {
                            

                            img_load.style.display = 'none';
                            
                        table.innerHTML = `
                            <tr>
                            <td><strong>CNPJ</strong</td>
                            <td>${data.estabelecimento.cnpj}</td>
                        </tr>
                        <tr>
                            <td><strong>Razão social</strong</td>
                            <td>${data.razao_social}</td>
                        </tr>
                        <tr>
                            <td><strong>Atividade principal</strong</td>
                            <td>${data.estabelecimento.atividade_principal.descricao}</td>
                        </tr>
                        <tr>
                            <td><strong>Situação cadastral</strong></td>
                            <td class="st_cadastral"><strong>${data.estabelecimento.situacao_cadastral}</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Nome fantasia</strong></td>
                            <td>${data.estabelecimento.nome_fantasia}</td>
                        </tr>
                        <tr>
                        <td><strong>Porte</strong></td>
                        <td>${data.porte.descricao}</td>
                    </tr>
                        <tr>
                            <td><strong>E-mail</strong></td>
                            <td>${data.estabelecimento.email}</td>
                        </tr>
                        <tr>
                            <td><strong>Cep</strong></td>
                            <td>${data.estabelecimento.cep}</td>
                        </tr>
                        <tr>
                            <td><strong>Estado</strong></td>
                            <td>${data.estabelecimento.estado.nome}</td>
                        </tr>
                        <tr>
                            <td><strong>Bairro</strong></td>
                            <td>${data.estabelecimento.bairro}</td>
                        </tr>
                        <tr>
                            <td><strong>Cidade</strong></td>
                            <td>${data.estabelecimento.cidade.nome}</td>
                        </tr>
                        <tr>
                            <td><strong>Tipo</strong></td>
                            <td>${data.estabelecimento.tipo}</td>
                        </tr>
                        <tr>
                            <td><strong>Telefone</strong></td>
                            <td>${data.estabelecimento.telefone1}</td>
                        </tr>
                        <tr>
                            <td><strong>Data inicio da atividade</strong></td>
                            <td>${data.estabelecimento.data_inicio_atividade}</td>
                        </tr>
                        <tr>
                            <td><strong>Data situação cadastral</strong></td>
                            <td>${data.estabelecimento.data_situacao_cadastral}</td>
                        </tr>
                        <tr>
                            <td><strong>Capital social</strong></td>
                            <td>${data.capital_social}</td>
                        </tr>
                        
                        
                        
                        `
                        let st_cadastral = document.querySelector('.st_cadastral');
                    
                            if(data.estabelecimento.situacao_cadastral === "Ativa"){
                                 st_cadastral.style.color = '#43a843';
                            }else{
                                st_cadastral.style.color =  'red';
                            }

                        })
                })

            qntd++
           

            setTimeout(() => {
                qntd = 0;
            }, 10000)
        }
    }else{
        alerta_inpuVazio.style.display = 'block';

        setTimeout(() => {
            alerta_inpuVazio.style.display = 'none';

        },5000)
    }
})
menu_mobie_block.addEventListener("click", () => {
    mobile_container.style.display = 'block';

})

menu_mobie_none.addEventListener("click", () => {
    mobile_container.style.display = 'none';

})





