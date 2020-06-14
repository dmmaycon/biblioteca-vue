<template>
  <div class="form">
      <center>
          <h3>{{this.titulo}}</h3>
          <router-link to="/" tag="button">
              Voltar
          </router-link>
      
      </center> 
      <div class="form">
          <fieldset>
              <legend>ID</legend>
              <input type="text" v-model="acervo.id" readonly>
          </fieldset>
         <fieldset>
              <legend>Editora</legend>
              <input type="text" v-model="acervo.idEditora">
          </fieldset>
          <fieldset>
              <legend>Titulo</legend>
              <input type="text" v-model="acervo.titulo">
          </fieldset>
          <fieldset>
              <legend>Autor</legend>
              <input type="text" v-model="acervo.autor">
          </fieldset>
          <fieldset>
              <legend>Ano</legend>
              <input type="text" v-model="acervo.ano">
          </fieldset>
          <fieldset>
              <legend>Preço</legend>
              <input type="text" v-model="acervo.preco">
          </fieldset>
          <fieldset>
              <legend>Quantidade</legend>
              <input type="text" v-model="acervo.quantidade">
          </fieldset>
          <fieldset>
              <legend>Tipo</legend>
              <input type="text" v-model="acervo.tipo">
          </fieldset>
         <fieldset v-if="this.$route.name == 'Cadastrar'">
              <input type="submit" value="Cadastrar" v-on:click="cadastrar()">
          </fieldset>
         <fieldset v-if="this.$route.name == 'Editar'">
              <input type="submit" value="Editar" v-on:click="editar()">
          </fieldset>
         <fieldset v-if="this.$route.name == 'Excluir'">
              <input type="submit" value="Excluir" v-on:click="excluir()">
          </fieldset>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Formulario',
    data: function() {
        return {
            titulo: "",
            acervo: {
                id: '',
                idEditora: '',
                titulo: '',
                autor: '',
                ano: '',
                preco: '',
                quantidade: '',
                tipo: ''
            }
        }
    },
    created: function() {
        if (this.$route.name == 'Visualizar') {
            this.titulo = "Visualizar Registro";
            this.get(this.$route.params.id);
        } else if (this.$route.name == 'Excluir') {
            this.titulo = "Excluir Registro";
            this.get(this.$route.params.id);
        } else if (this.$route.name == 'Editar') {
            this.titulo = "Editar Registro";
            this.get(this.$route.params.id);
        }       
    },
    methods: {
        get: async function (id) {
            let self = this;
            await fetch(`http://exemplos.dmmaycon.com/bibli-php/acervo/${id}`, {method: 'GET'})
            .then(function(response) {
                response.json().then((data) => {
                    self.acervo = data[0];
                })
            })
            .catch((err) => console.error("Erro na requisição: ", err))
        },
        cadastrar: async function() {
            let self = this;
            let myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            let urlencoded = new URLSearchParams();
            urlencoded.append("idEditora", self.acervo.idEditora);
            urlencoded.append("titulo",  self.acervo.titulo);
            urlencoded.append("autor",  self.acervo.autor);
            urlencoded.append("ano",  self.acervo.ano);
            urlencoded.append("preco",  self.acervo.preco);
            urlencoded.append("quantidade",  self.acervo.quantidade);
            urlencoded.append("tipo",  self.acervo.tipo);

            await fetch(`http://exemplos.dmmaycon.com/bibli-php/acervo`, {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                mode: 'cors',
                redirect: 'follow'
            })
            .then(function(response) {
                if (response.status == 201) {
                    return self.$router.push({name: "Lista"});
                }
            })
            .catch((err) => console.error("Erro na requisição: ", err))
        },
        editar: async function() {
            let self = this;
            let myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            let urlencoded = new URLSearchParams();
            urlencoded.append("id", self.acervo.id);
            urlencoded.append("idEditora", self.acervo.idEditora);
            urlencoded.append("titulo",  self.acervo.titulo);
            urlencoded.append("autor",  self.acervo.autor);
            urlencoded.append("ano",  self.acervo.ano);
            urlencoded.append("preco",  self.acervo.preco);
            urlencoded.append("quantidade",  self.acervo.quantidade);
            urlencoded.append("tipo",  self.acervo.tipo);

            await fetch(`http://exemplos.dmmaycon.com/bibli-php/acervo`, {
                method: 'PUT',
                headers: myHeaders,
                body: urlencoded,
                mode: 'cors',
                redirect: 'follow'
            })
            .then(function(response) {
                if (response.status == 200) {
                    alert("Registro atualizado com sucesso!");
                    return self.$router.push({name: "Lista"});
                }
            })
            .catch((err) => console.error("Erro na requisição: ", err))
        },
        excluir: async function () {
            if (!confirm("Deseja realmente excluir este registro?")) {
                return null;
            }
            let self = this;
            let myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            let urlencoded = new URLSearchParams();
            urlencoded.append("id", self.acervo.id);

            await fetch(`http://exemplos.dmmaycon.com/bibli-php/acervo`, {
                method: 'DELETE',
                headers: myHeaders,
                body: urlencoded,
                mode: 'cors',
                redirect: 'follow'
            })
            .then(function(response) {
                if (response.status == 200) {
                    alert("Registro excluido com sucesso!");
                    return self.$router.push({name: "Lista"});
                }
            })
            .catch((err) => console.error("Erro na requisição: ", err))
        },
    }
}
</script>

<style>
.form fieldset{
    margin-left: 30%;
    margin-right: 30%;
    align-self: center;
}
.form input{
    width: 98%;
}
</style>