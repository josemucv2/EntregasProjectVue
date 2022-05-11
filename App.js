
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

Vue.component('rest-list' ,{
    props :{
        restaurantes: {
            type: Array,
            required: true
        },
        datos: {
            type: Array,
            required: true
        }
    } ,

    template :`
      <div>

      <table class="table table-striped table-dark">
            <thead class="thead-light">
                <tr>
                    <th v-for="(restaurantes, e) in restaurantes" :key="e" scope="col">{{ restaurantes }}</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="(rest, j) in datos" :key="j">
                
               <th v-for="(datos,d) in rest" :key="d">{{datos}}</th>
            
            
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
        
        tabla2: {
            Restaurantes: ["ID", "Restaurantes", "Comida Especial", "Contacto"],
            datos: [[1, "La Pizzeria", "Pizza", "55555555"],
                    [2, "La Pasteleria", "Pastel", "44444444"],
                    [3, "La Hamburgueseria", "Hamburguesa", "66666666"],
                    [4, "La reposteria", "Pastel", "77777777"],
                    [5, "La Pepiteria", "Pepitos", "88888888"]]
        }

         
 
        
       

       
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

