
Vue.component('main-users', {

    props :[
        'listUser',
        'addClass',
        
    ],

    template: `
    <table class="table style-table">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Pais</th>
        </tr>
    </thead>

  <tbody>
    <tr v-for="( item, index ) in listUser" :key="index" :class="addClass">
      <th scope="row">{{item.id}}</th>
      <td>{{item.nombre}}</td>
      <td>{{item.Apellido}}</td>
      <td>{{item.Pais}}</td>
    </tr>
    </tbody>
</table>
    
    `
})


var app = new Vue({
    el: '#app',

    data:{
        menu: false,
        listUser: [
            {id: 1, nombre: 'Jose', Apellido: 'Martinez', Pais: 'Venezuela'},
            {id: 2, nombre: 'Juan', Apellido: 'Perez', Pais: 'Colombia'},
            {id: 3, nombre: 'Alexander', Apellido: 'Rincon', Pais: 'Argentina'},
            {id: 4, nombre: 'Rocky', Apellido: 'Moncada', Pais: 'Chile'},
            {id: 5, nombre: 'Milton', Apellido: 'Avel', Pais: 'Peru'},
        ],

         
 
        
       

       
    },
    
    methods: {
        sideNav(){
            if (!this.menu) {
                this.menu = true;
            } else {
                this.menu = false;
            }
            return false
        },

        

        

       

       
    },

    
})

