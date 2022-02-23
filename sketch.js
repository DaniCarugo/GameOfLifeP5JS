//creiamo la tabella 
function make2DArray(col, rows){
  let arr = new Array(col);
  for(let i=0; i<col; i++){
    arr[i]=new Array(rows);
  }
  return arr;
}
//ritarda loop con func timeout
function timeout(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

let cols = 10;
let rows =10;

function setup() {
  createCanvas(700, 700);

  grid = make2DArray(cols,rows);

  //random grid filling
  for(let i=0; i<cols; i++){
    for(let j=0; j<rows; j++){
      grid[i][j] = floor(random(2));
    }
  }

}

async function draw() {
  background(220);

  //check conditions
  let next = make2DArray(cols, rows);
  for(let i=0; i<cols; i++){
    for(let j=0; j<rows; j++){
      alive=0;

      //conta i vivi attorno
        for(let xcheck=-1; xcheck<2; xcheck++){
          for(let ycheck=-1; ycheck<2; ycheck++){
            try{
              if(grid[i+xcheck][j+ycheck]==1){alive++;}
            }catch(error){console.log("qua"); continue;}
            
          };
        };

      

      if((alive<2) || (alive>3)){
        next[i][j]==0;
      }else{next[i][j]==1;}


    }
  }    
  grid=next;

  //disegna grid
  for(let i=0; i<cols; i++){
    for(let j=0; j<rows; j++){

      //check if black or white
      if(grid[i][j]==1){
        fill(30);
      }else{
        fill(255);
      }
      resol = width/cols;
      rect(i*resol,j*resol,resol,resol);
    }
  }

  await this.timeout(1000);
}
