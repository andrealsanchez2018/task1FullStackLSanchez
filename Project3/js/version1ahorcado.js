let padre = document.getElementById('container');
//opciones de ganar
let winMix =[{'option1' : ['id1', 'id2','id3'],  'option2' : ['id4', 'id5','id6'],  'option3' : ['id7', 'id8','id9'],'option4' : ['id1', 'id4','id7'], 'option5' : ['id2', 'id5','id8'],'option6' : ['id3', 'id6','id9'],'option7' : ['id1', 'id5','id9'], 'option8' : ['id7', 'id5','id3'],
}] //guardar el id de la posicion del random:
var realMixMaq = [];
let positionMaquina= ['id1', 'id2','id3', 'id4', 'id5', 'id6','id7','id8','id9'];
setTimeout(function turnoM(){
    contM = 1;    
    var id = Math.floor(Math.random() * positionMaquina.length);
    realMixMaq.push(positionMaquina[id]);
       let xOo = document.createElement('img')         
        CapturaIdMAq =document.getElementById(`${positionMaquina[id]}`).setAttribute('onclick', 'turnoM();')
       xOo.setAttribute('class','img')
       xOo.setAttribute('src','https://www.stickpng.com/assets/images/5a01bcbd7ca233f48ba627d5.png')
       document.getElementById(`${positionMaquina[id]}`).appendChild(xOo)
  // inicio funcion turno Usuario
        padre.addEventListener('onclick', function turnoU(){
            let xOoU = document.createElement('img')
            xOoU.setAttribute('id','img')
            xOoU.setAttribute('src','http://assets.stickpng.com/thumbs/5a01bbba7ca233f48ba627c1.png')
            document.getElementById(`que poner aca?`).appendChild(xOoU)
        })        
        function finish(){
            contM++;            
            if(contM === 4){ // 4 turnos para ganar alguno de los 2
                clearInterval(intervalo);
                setTimeout(function(){
                    alert('GanA LA mAQUINA');
                    location.reload();
                }, 500);
            }
        }
      var intervalo = setInterval(finish, 2000);  
}, 2000);