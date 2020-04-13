let padre = document.getElementById('container');
const x = "https://www.stickpng.com/assets/images/5a01bcbd7ca233f48ba627d5.png";
const o = "http://assets.stickpng.com/thumbs/5a01bbba7ca233f48ba627c1.png";
//opciones de ganar
let winMix =[{'option1' : ['id1', 'id2','id3'], 
              'option2' : ['id4', 'id5','id6'],
              'option3' : ['id7', 'id8','id9'],
              'option4' : ['id1', 'id4','id7'],
              'option5' : ['id2', 'id5','id8'],
              'option6' : ['id3', 'id6','id9'],
              'option7' : ['id1', 'id5','id9'],
              'option8' : ['id7', 'id5','id3'],
}] 
//guardar el id de la posicion del random:
var realMixMaq = [];
let positionMaquina= ['id1', 'id2','id3', 'id4', 'id5', 'id6','id7','id8','id9'];

// Turno de la maquina

setTimeout(function turnoM(){
    contM = 1;    
    var id = Math.floor(Math.random() * positionMaquina.length);
    realMixMaq.push(positionMaquina[id]);
       let xOo = document.createElement('img')         
        CapturaIdMAq =document.getElementById(`${positionMaquina[id]}`).setAttribute('onclick', 'turnoM();')
       xOo.setAttribute('class','img')
       xOo.setAttribute('src',x)
       document.getElementById(`${positionMaquina[id]}`).appendChild(xOo)
        
    
       setTimeout(
        function place1User(){
        let xOoU = document.createElement('img')
        document.getElementById('id1').setAttribute('onclick','place1User()')
            
        xOoU.setAttribute('id','img')
        xOoU.setAttribute('src',o)
        document.getElementById('id1').appendChild(xOoU);
    },2000);
    
   
    


        function finish(){
            contM++;

            
            if(contM === 4){ // 4 turnos para ganar alguno de los 2
                clearInterval(intervalo);
                //mostrar mensaje ganador de la maquina
                setTimeout(function(){
                    alert('GanA LA mAQUINA');
                    location.reload();
                }, 500);
            }

        }
       
    
    
    var intervalo = setInterval(finish, 2000);  
}, 2000);

//   -----Funciones de cada casilla para el usuario

/* setTimeout(
    function place1User(){
    let xOoU = document.createElement('img')
    document.getElementById('id1').setAttribute('onclick','place1User()')
        
    xOoU.setAttribute('id','img')
    xOoU.setAttribute('src',o)
    document.getElementById('id1').appendChild(xOoU);
},2000); */
  



setTimeout(function place2User(){
    let xOoU = document.createElement('img')
            
    xOoU.setAttribute('id','img')
    xOoU.setAttribute('src',o)
    document.getElementById('id2').appendChild(xOoU);
 
},2000);


setTimeout(function place3User(){
    let xOoU = document.createElement('img')
            
    xOoU.setAttribute('id','img')
    xOoU.setAttribute('src',o)
    document.getElementById('id3').appendChild(xOoU);
 
},2000);


setTimeout(function place4User(){
    let xOoU = document.createElement('img')
            
    xOoU.setAttribute('id','img')
    xOoU.setAttribute('src',o)
    document.getElementById('id4').appendChild(xOoU);
 
},2000);


setTimeout(function place5User(){
    let xOoU = document.createElement('img')
            
    xOoU.setAttribute('id','img')
    xOoU.setAttribute('src',o)
    document.getElementById('id5').appendChild(xOoU);
 
},2000);


setTimeout(function place6User(){
    let xOoU = document.createElement('img')
            
    xOoU.setAttribute('id','img')
    xOoU.setAttribute('src',o)
    document.getElementById('id6').appendChild(xOoU);
 
},2000);


setTimeout(function place7User(){
    let xOoU = document.createElement('img')
            
    xOoU.setAttribute('id','img')
    xOoU.setAttribute('src',o)
    document.getElementById('id7').appendChild(xOoU);
 
},2000);


setTimeout(function place8User(){
    let xOoU = document.createElement('img')
            
    xOoU.setAttribute('id','img')
    xOoU.setAttribute('src',o)
    document.getElementById('id8').appendChild(xOoU);
 
},2000);




setTimeout(function place9User(){
    let xOoU = document.createElement('img')
            
    xOoU.setAttribute('id','img')
    xOoU.setAttribute('src',o)
    document.getElementById('id9').appendChild(xOoU);
 
},2000);






// 4 turnos para ganar alguno de los 2
// en ese caso el otro jugador solo juega 3 veces
// si ninguno gana son  5 turnos del primero que jugó, el segundo solo 4 turnos


/*  opcion 2 terminada para cuando se haga click
function turno(){
          
       let xOo = document.createElement('img')
         
    
       xOo.setAttribute('id','img')
       xOo.setAttribute('src','https://www.stickpng.com/assets/images/5a01bcbd7ca233f48ba627d5.png')
       document.getElementById('id1').appendChild(xOo)
    
    } */
//Option 1 esta bien, ingresa lo que se encuentre en la var cont dentro de la caja como texto
/* function turno(){
cont=0
   let content = document.createTextNode(cont)
    
   let xOo = document.createElement('h5')
  
    cont++;

   document.getElementById('id1').appendChild(xOo)
   xOo.setAttribute('id','h5')
   document.getElementById('h5').appendChild(content)

}
 */



 


// darle una accion a cada casilla
/* switch (id) {
    case id1:
        class11.setAttribute('onclick', function(){

            xOo = document.createTextNode('txt')
            class11.appendChild(xOo);

        })
        
        break;

    case id2:
        
        break;

    case id3:
        
        break;

    case id4:
        
        break;

    case id5:
        
        break;

    case id6:
        
        break;

    case id7:
        
        break;

    case id8:
        
        break;

    case id9:
        
        break;

    default:
        break;
} */