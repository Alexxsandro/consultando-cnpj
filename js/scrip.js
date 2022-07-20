let 
menuMobile,
containerMobile,
btnConsulta,
tabela,
input,
container_info,
btnVolta,
imgCarregando,
qntd,
menuMobileNone,
msgAlerta;

menuMobile = document.getElementById('menu_mobile_block')
containerMobile = document.querySelector('.mobile_container');
btnConsulta = document.getElementById('btnConsulta');
tabela = document.querySelector('.table');
input = document.getElementById('input')
container_info = document.querySelector('.container_info');
btnVolta = document.querySelector(".img_x")
imgCarregando = document.getElementById("img_load");
qntd = 0;
menuMobileNone = document.getElementById('menu_mobie_none')
msgAlerta = document.querySelector('.alerta_inpuVazio');

btnVolta.addEventListener("click", () => {
    container_info.style.display = 'none';
})

input.focus()
btnConsulta.addEventListener("click", () => {
    if (input.value !== '' && input.value !== null && input.value !== undefined && qntd <= 0) {
        if (input.value.length > 10) {
 
            imgCarregando.style.display = 'block';
           
            let cpnjValido = input.value.replace(/[^0-9]/g, "");

            msgAlerta.style.display = 'none';
            container_info.style.display = 'block'
          
            fetch(`http://localhost:3000/cnpj`, {
                method: "POST",
                headers: {
                     'Accept': 'application/json',
                      'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "cnpj" : cpnjValido
                })

            })

             const recebi = async ()  => {
                await fetch(`http://localhost:3000/`,{
                method: "GET"
            })
                .then(function (resp) {
                    resp.json()
                        .then(function (data) {
                            
                            if(data.msg.status === 400){
                                imgCarregando.style.display = 'none';
                                return tabela.innerHTML = `
                                <tr>
                                <td><strong>CNPJ</strong</td>
                                <td>Erro - CNPJ não encontrado</td>
                            </tr>`
                            }
                            let dadosCnpj = data.msg;
                            

                            imgCarregando.style.display = 'none';
                            
                        tabela.innerHTML = `
                            <tr>
                            <td><strong>CNPJ</strong</td>
                            <td>${dadosCnpj.estabelecimento.cnpj}</td>
                        </tr>
                        <tr>
                            <td><strong>Razão social</strong</td>
                            <td>${dadosCnpj.razao_social}</td>
                        </tr>
                        <tr>
                            <td><strong>Atividade principal</strong</td>
                            <td>${dadosCnpj.estabelecimento.atividade_principal.descricao}</td>
                        </tr>
                        <tr>
                            <td><strong>Situação cadastral</strong></td>
                            <td class="st_cadastral"><strong>${dadosCnpj.estabelecimento.situacao_cadastral}</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Nome fantasia</strong></td>
                            <td>${dadosCnpj.estabelecimento.nome_fantasia}</td>
                        </tr>
                        <tr>
                        <td><strong>Porte</strong></td>
                        <td>${dadosCnpj.porte.descricao}</td>
                    </tr>
                        <tr>
                            <td><strong>E-mail</strong></td>
                            <td>${dadosCnpj.estabelecimento.email}</td>
                        </tr>
                        <tr>
                            <td><strong>Cep</strong></td>
                            <td>${dadosCnpj.estabelecimento.cep}</td>
                        </tr>
                        <tr>
                            <td><strong>Estado</strong></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><strong>Bairro</strong></td>
                            <td>${dadosCnpj.estabelecimento.bairro}</td>
                        </tr>
                        <tr>
                            <td><strong>Cidade</strong></td>
                            <td>${dadosCnpj.estabelecimento.cidade}</td>
                        </tr>
                        <tr>
                            <td><strong>Tipo</strong></td>
                            <td>${dadosCnpj.estabelecimento.tipo}</td>
                        </tr>
                        <tr>
                            <td><strong>Telefone</strong></td>
                            <td>${dadosCnpj.estabelecimento.telefone1}</td>
                        </tr>
                        <tr>
                            <td><strong>Data inicio da atividade</strong></td>
                            <td>${dadosCnpj.estabelecimento.data_inicio_atividade}</td>
                        </tr>
                        <tr>
                            <td><strong>Data situação cadastral</strong></td>
                            <td>${dadosCnpj.estabelecimento.data_situacao_cadastral}</td>
                        </tr>
                        <tr>
                            <td><strong>Capital social</strong></td>
                            <td>${dadosCnpj.capital_social}</td>
                        </tr>
                        
                        
                        
                        `
                        let st_cadastral = document.querySelector('.st_cadastral');
                    
                            if(dadosCnpj.estabelecimento.situacao_cadastral === "Ativa"){
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
        setTimeout(() => {
            recebi()
        },500);
    }
    }else{
        msgAlerta.style.display = 'block';

        setTimeout(() => {
            msgAlerta.style.display = 'none';

        },5000)
    }
})
menuMobile.addEventListener("click", () => {
    containerMobile.style.display = 'block';

})

menuMobileNone.addEventListener("click", () => {
    containerMobile.style.display = 'none';

})





