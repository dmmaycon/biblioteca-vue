<template>
    <div class="lista">
        <center>
            <h3>Listagem do Acervo</h3>
            <router-link to="/Cadastrar" tag="button">
                Novo Registro
            </router-link>
        </center>
        <form class="pesquisa">
            Buscar Titulo: <input type="text" name="buscar" v-model="pesquisaTitulo">
        </form>
        <table class="mytable">
            <thead>
                <th>Id</th>
                <th>Titulo</th>
                <th>Autor</th>
                <th>Ações</th>
            </thead>
            <tbody>
                <tr v-for="acervo in filtraAcervos" v-bind:key="acervo.id">
                    <td>{{acervo.id}}</td>
                    <td>{{acervo.titulo}}</td>
                    <td>{{acervo.autor}}</td>
                    <td>
                        <router-link :to="{name: 'Visualizar', params: {id: acervo.id}}">
                            <button> Visualizar </button>
                        </router-link>
                        <router-link :to="{name: 'Editar', params: {id: acervo.id}}">
                            <button> Editar </button>
                        </router-link>
                        <router-link :to="{name: 'Excluir', params: {id: acervo.id}}">
                            <button> Excluir </button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    name: 'Lista',
    data: function() {
        return {
            acervos: [],
            pesquisaTitulo: ''
        }
    },
    created: function() {
        this.all();
    },
    computed: {
        filtraAcervos() {
            if (this.pesquisaTitulo.length > 0) {
                let busca = this.pesquisaTitulo;
                return this.acervos.filter(function(acervo) {
                    if (acervo.titulo.toLowerCase().includes(busca.toLowerCase())) {
                        return true;
                    }
                });
            }
            return this.acervos;
        }
    },
    methods: {
        all: async function () {
            let self = this;
            await fetch("http://exemplos.dmmaycon.com/bibli-php/acervo", {method: 'GET'})
            .then(function(response) {
                response.json().then((data) => {
                    self.acervos = data;
                })
            })
            .catch((err) => console.error("Erro na requisição: ", err))
        }
    }

}
</script>

<style>
.mytable, th, td{
    border: 1px solid black;
    text-align: center;
    padding: 5px;
}
.mytable {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
}
.pesquisa {
    margin-left: 5%;
    margin-bottom: 3px;
}
</style>