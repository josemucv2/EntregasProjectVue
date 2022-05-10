
Vue.component('main-users', {

    props :{ 
        titulos: {
            type: Array,
            required: true
        },
        registros: {
            type: Array,
            required: true
        }
    },

    template: `
    <div>
        <table class="table table-striped table-dark">
            <thead class="thead-light">
                <tr>
                    <th v-for="(item, i) in titulos" :key="i" scope="col">{{ item }}</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="(reg, indice) in registros" :key="indice">
                
               <th v-for="(dato,d) in reg" :key="d">{{dato}}</th>
            
            
            </tr>
        
        </tbody>
        </table>
        
    
    
    </div>

    `
})


var app = new Vue({
    el: '#app',

    data:{
        menu: false,
        // listUser: [


        //     {id: 1, nombre: 'Jose', Apellido: 'Martinez', Pais: 'Venezuela'},
        //     {id: 2, nombre: 'Juan', Apellido: 'Perez', Pais: 'Colombia'},
        //     {id: 3, nombre: 'Alexander', Apellido: 'Rincon', Pais: 'Argentina'},
        //     {id: 4, nombre: 'Rocky', Apellido: 'Moncada', Pais: 'Chile'},
        //     {id: 5, nombre: 'Milton', Apellido: 'Avel', Pais: 'Peru'},
            
        // ],

        tabla1: {
            titulos: ["ID", "Nombre", "Apellido", "Pais"],
             registros: [
                [1, "Jose", "Martinez", "Venezuela"],
                [2, "Juan", "Perez", "Colombia"],
                [3, "Alexander", "Rincon", "Argentina"],
                [4, "Rocky", "Moncada", "Chile"],
                [5, "Milton", "Avel", "Peru"],
            ],
        } , 
        

         
 
        
       

       
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

        fondos(i){
            if(i%2 == 0){
                return 'numberPar'
            } else {
                return 'numberImpar'
            }
        }
        

       

       
    },

    
})

