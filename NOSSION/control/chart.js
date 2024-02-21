const column1 = document.querySelector(".ccw-1 .column-1");
const column2 = document.querySelector(".ccw-1 .column-2");
const column3 = document.querySelector(".ccw-2 .column-1");
const column4 = document.querySelector(".ccw-2 .column-2");
const column5 = document.querySelector(".ccw-3 .column-1");
const column6 = document.querySelector(".ccw-3 .column-2");
const column7 = document.querySelector(".ccw-4 .column-1");
const column8 = document.querySelector(".ccw-4 .column-2");
const column9 = document.querySelector(".ccw-5 .column-1");
const column10 = document.querySelector(".ccw-5 .column-2");

const pie = document.querySelector(".pie-chart");

window.onscroll = function() {
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 1900){
        column1.style.height = "95%";
        column2.style.height = "63%";
        column3.style.height = "75%";
        column4.style.height = "20%";
        column5.style.height = "51%";
        column6.style.height = "20%";
        column7.style.height = "84%";
        column8.style.height = "8.5%";
        column9.style.height = "40%";
        column10.style.height = "8.5%";
        pie.style.marginLeft = "0";
        pie.style.opacity = "1";
    }
   
 
}