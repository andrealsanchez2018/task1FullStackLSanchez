


/* Cinco cajeros realizan su jornada laboral de 8 horas diarias. Al trabajar 80 días el
supermercado desea hacerles saber lo siguiente:
1 Total de ventas de todos los cajeros
2 Quién fue el cajero que vendió más (total de ventas de un solo cajero)
3 En qué día se vendió más y quién fue el cajero responsable de ese día
4 Mostrar el cajero que menos ventas hizo el día 60
5 Mostrar el mejor y el peor cajero del día 30 */

let totalHoursWorkTotal = [];
let hSaleTotal = [];
let salesD60Total = [];
let salesD30Total = [];

// First Cashier
cashier1.addEventListener('click', function(){
    let Cashier1Data = {};
    let totalHoursWork = (Math.floor(Math.random()*8)+1)*80; // hours of work from a person , 8 hours per day * 80 days--Q2 & 1
    let hSale = (Math.floor(Math.random()*10)+1)*8; //  sale per hour * 8 hours(workday)
    let salesD60 = (Math.floor(Math.random()*10)+1)*8; //  sales day 60 ----Q 4
    let salesD30 = (Math.floor(Math.random()*10)+1)*8 //  sales day 30  ----question 5
     

    Cashier1Data.totalHoursWork = totalHoursWork;
    Cashier1Data.hSale = hSale;
    Cashier1Data.salesD60 = salesD60;
    Cashier1Data.salesD30 = salesD30;

    localStorage.setItem('cashierOneData', JSON.stringify(Cashier1Data));
    console.log(Cashier1Data);

    // Obtenerdato de localStorage
    let dataCashier1 = JSON.parse(localStorage.getItem('cashierOneData'));

    let totalHoursWork1 = dataCashier1.totalHoursWork;
    console.log(totalHoursWork1)
    totalHoursWorkTotal.push(totalHoursWork1)

    let hSale1 = dataCashier1.hSale;
    console.log(hSale1)
    hSaleTotal.push(hSale1)

    let salesD601 = dataCashier1.salesD60;
    console.log(salesD601)
    salesD60Total.push(salesD601)

    let salesD301 = dataCashier1.salesD30;
    console.log(salesD301)
    salesD30Total.push(salesD301)

  //  console.log(typeof(salesD301))

})

 // Second Cashier
cashier2.addEventListener('click', function(){
    let Cashier2Data = {};
    let totalHoursWorkx2 = (Math.floor(Math.random()*8)+1)*80; // hours of work from a person , 8 hours per day * 80 days--Q2 & 1
    let hSalex2 = (Math.floor(Math.random()*10)+1)*8; //  sale per hour * 8 hours(workday)
    let salesD60x2 = (Math.floor(Math.random()*10)+1)*8; //  sales day 60 ----Q 4
    let salesD30x2 = (Math.floor(Math.random()*10)+1)*8 //  sales day 30  ----question 5
     

    Cashier2Data.totalHoursWorkx2 = totalHoursWorkx2;
    Cashier2Data.hSalex2 = hSalex2;
    Cashier2Data.salesD60x2 = salesD60x2;
    Cashier2Data.salesD30x2 = salesD30x2;

    localStorage.setItem('cashierTwoData', JSON.stringify(Cashier2Data));
    console.log(Cashier2Data);


     // Obtenerdato de localStorage
     let dataCashier2 = JSON.parse(localStorage.getItem('cashierTwoData'));

     let totalHoursWork2 = dataCashier2.totalHoursWorkx2;
     console.log(totalHoursWork2)
     totalHoursWorkTotal.push(totalHoursWork2)

     let hSale2 = dataCashier2.hSalex2;
     console.log(hSale2)
     hSaleTotal.push(hSale2)

     let salesD602 = dataCashier2.salesD60x2;
     console.log(salesD602)
     salesD60Total.push(salesD602)

     let salesD302 = dataCashier2.salesD30x2;
     console.log(salesD302)
     salesD30Total.push(salesD302)

})

// Third Cashier
cashier3.addEventListener('click', function(){
    let Cashier3Data = {};
    let totalHoursWorkx3 = (Math.floor(Math.random()*8)+1)*80; // hours of work from a person , 8 hours per day * 80 days--Q2 & 1
    let hSalex3 = (Math.floor(Math.random()*10)+1)*8; //  sale per hour * 8 hours(workday)
    let salesD60x3 = (Math.floor(Math.random()*10)+1)*8; //  sales day 60 ----Q 4
    let salesD30x3 = (Math.floor(Math.random()*10)+1)*8 //  sales day 30  ----question 5
     

    Cashier3Data.totalHoursWorkx3 = totalHoursWorkx3;
    Cashier3Data.hSalex3 = hSalex3;
    Cashier3Data.salesD60x3 = salesD60x3;
    Cashier3Data.salesD30x3 = salesD30x3;

    localStorage.setItem('cashierThreeData', JSON.stringify(Cashier3Data));
    console.log(Cashier3Data);

     // Obtenerdato de localStorage
     let dataCashier3 = JSON.parse(localStorage.getItem('cashierThreeData'));

     let totalHoursWork3 = dataCashier3.totalHoursWorkx3;
     console.log(totalHoursWork3)
     totalHoursWorkTotal.push(totalHoursWork3)

     let hSale3 = dataCashier3.hSalex3;
     console.log(hSale3)
     hSaleTotal.push(hSale3)

     let salesD603 = dataCashier3.salesD60x3;
     console.log(salesD603)
     salesD60Total.push(salesD603)

     let salesD303 = dataCashier3.salesD30x3;
     console.log(salesD303)
     salesD30Total.push(salesD303)

})

// fourth Cashier
cashier4.addEventListener('click', function(){
    let Cashier4Data = {};
    let totalHoursWorkx4 = (Math.floor(Math.random()*8)+1)*80; // hours of work from a person , 8 hours per day * 80 days--Q2 & 1
    let hSalex4 = (Math.floor(Math.random()*10)+1)*8; //  sale per hour * 8 hours(workday)
    let salesD60x4 = (Math.floor(Math.random()*10)+1)*8; //  sales day 60 ----Q 4
    let salesD30x4 = (Math.floor(Math.random()*10)+1)*8 //  sales day 30  ----question 5
     

    Cashier4Data.totalHoursWorkx4 = totalHoursWorkx4;
    Cashier4Data.hSalex4 = hSalex4;
    Cashier4Data.salesD60x4 = salesD60x4;
    Cashier4Data.salesD30x4 = salesD30x4;

    localStorage.setItem('cashierFourData', JSON.stringify(Cashier4Data));
    console.log(Cashier4Data);


     // Obtenerdato de localStorage
     let dataCashier4 = JSON.parse(localStorage.getItem('cashierFourData'));

     let totalHoursWork4 = dataCashier4.totalHoursWorkx4;
     console.log(totalHoursWork4)
     totalHoursWorkTotal.push(totalHoursWork4)

     let hSale4 = dataCashier4.hSalex4;
     console.log(hSale4)
     hSaleTotal.push(hSale4)

     let salesD604 = dataCashier4.salesD60x4;
     console.log(salesD604)
     salesD60Total.push(salesD604)

     let salesD304 = dataCashier4.salesD30x4;
     console.log(salesD304)
     salesD30Total.push(salesD304)

})

// Fifth Cashier
cashier5.addEventListener('click', function(){
    let Cashier5Data = {};
    let totalHoursWorkx5 = (Math.floor(Math.random()*8)+1)*80; // hours of work from a person , 8 hours per day * 80 days--Q2 & 1
    let hSalex5 = (Math.floor(Math.random()*10)+1)*8; //  sale per hour * 8 hours(workday)
    let salesD60x5 = (Math.floor(Math.random()*10)+1)*8; //  sales day 60 ----Q 4
    let salesD30x5 = (Math.floor(Math.random()*10)+1)*8 //  sales day 30  ----question 5
     

    Cashier5Data.totalHoursWorkx5 = totalHoursWorkx5;
    Cashier5Data.hSalex5 = hSalex5;
    Cashier5Data.salesD60x5 = salesD60x5;
    Cashier5Data.salesD30x5 = salesD30x5;

    localStorage.setItem('cashierFiveData', JSON.stringify(Cashier5Data));
    console.log(Cashier5Data);


    // Obtenerdato de localStorage
    let dataCashier5 = JSON.parse(localStorage.getItem('cashierFiveData'));

    let totalHoursWork5 = dataCashier5.totalHoursWorkx5;
    console.log(totalHoursWork5)
    totalHoursWorkTotal.push(totalHoursWork5)

    let hSale5 = dataCashier5.hSalex5;
    console.log(hSale5)
    hSaleTotal.push(hSale5)

    let salesD605 = dataCashier5.salesD60x5;
    console.log(salesD605)
    salesD60Total.push(salesD605)

    let salesD305 = dataCashier5.salesD30x5;
    console.log(salesD305)
    salesD30Total.push(salesD305)

    
})


//Instance Comparison

//total sales

function totalSales(){
    let totalSalesVar =0;
   

for(var i = 0; i <= hSaleTotal.length-1; i++){
    
    totalSalesVar += hSaleTotal[i];
    console.log(totalSalesVar)

}

document.getElementById('prueba').innerHTML= `Total Sales were: ${totalSalesVar} <br>`;


}



// arrays Organization
// document.write('Ordenado de mayor a menor es ' + totalHoursWorkTotal.sort(higherToLess)+'\n');


function organHoursWork (){
    let HoursWorkOr=totalHoursWorkTotal.sort(higherToLess)
   // (5) [560, 480, 400, 320, 160]
    HoursWorkOr.slice(0,2)
   // (2) [560, 480]
    
    if(HoursWorkOr[0]==HoursWorkOr[1]){
    document.getElementById('prueba2').innerHTML= "Los 2 son el mismo valor " + HoursWorkOr.slice(0,2)
    } else{
        document.getElementById('prueba2').innerHTML= "The person who worked more than others , he or she worked " + HoursWorkOr[0] +" hours" + "<br>"
    }
  //  VM1095:4 El mayor es560

}

//q2
function organSaleTotal(){
    let SaleTotalOr=hSaleTotal.sort(higherToLess)
   // (5) [560, 480, 400, 320, 160]
   SaleTotalOr.slice(0,2)
   // (2) [560, 480]
    
    if(SaleTotalOr[0]==SaleTotalOr[1]){
    document.getElementById('prueba3').innerHTML= "Los 2 vendieron lo mismo " + SaleTotalOr.slice(0,2)
    } else{
        document.getElementById('prueba3').innerHTML= "The person who sold more than others , he or she sold " + SaleTotalOr[0] +" items" + "<br>"
    }
  //  VM1095:4 El mayor es560

}

//q4
function salesD60TotalF(){
    let salesD60Or=salesD60Total.sort(higherToLess)
   // (5) [560, 480, 400, 320, 160]
   salesD60Or.slice(-1)
   // (2) [560, 480]
    
    if(salesD60Or[4]==salesD60Or[5]){
    document.getElementById('prueba4').innerHTML= "Los 2 vendieron lo mismo " + salesD60Or.slice(-1)
    } else{
        document.getElementById('prueba4').innerHTML= "The person who sold less than others on 60 day, he or she sold " + salesD60Or[0] +" items" + "<br>"
    }
  //  VM1095:4 El mayor es560

}


//q4
function salesD30TotalF(){
    let salesD30Or=salesD30Total.sort(higherToLess)
   // (5) [560, 480, 400, 320, 160]

   // (2) [560, 480]
    
   document.getElementById('prueba5').innerHTML= "The person who sold less than others on 30 day, he or she sold " + salesD30Or[4] +" items" + "<br>"

    document.getElementById('prueba6').innerHTML= "The person who sold more than others on 30 day, he or she sold " + salesD30Or[0] +" items" + "<br>"
    
  //  VM1095:4 El mayor es560

}

//general sort
function higherToLess(elem1, elem2) {return elem2-elem1;}

//totalHoursWorkTotal.sort();
/* let hSaleOr = hSaleTotal.sort();
let salesD60Or = salesD60Total.sort();
let salesD30Or = salesD30Total.sort(); */

/*
1 Total de ventas de todos los cajeros
2 Quién fue el cajero que vendió más (total de ventas de un solo cajero)
3 En qué día se vendió más y quién fue el cajero responsable de ese día
4 Mostrar el cajero que menos ventas hizo el día 60
5 Mostrar el mejor y el peor cajero del día 30 */

/* var mejor_vendedor = HoursWorkOr.slice(-2)
//compararlos y si son igusles se publican los 2
console.log(mejor_vendedor); */