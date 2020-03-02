
/*{
    "typeAcquisition": { //kolla mahmud sidan
        "include":[
            "jqury"
        
        ]
    }
}
*/

function Punkt(x, y) {
    this.x = x;
    this.y = y;
}


function getDistance() {   
    let x2 = document.querySelector("#X2").value;
    let y1 = document.getElementById("Y1").value;
    let x1 = document.querySelector("#X1").value;
    let y2 = document.getElementById("Y2").value;

    let punkt1 = new Punkt(Number(x1), Number(y1));
    let punkt2 = new Punkt(Number(x2), Number(y2)); 

    result = Math.sqrt(Math.pow((punkt2.x)-(punkt1.x),2) + Math.pow((punkt2.y)-(punkt1.y),2));

    document.querySelector("#result").textContent = 
    "Distance: " + result;//.toFixed(2);

    }

    
 
    
        const button = document.querySelector("#button");
        button.addEventListener("click", getDistance);
  

    

  


