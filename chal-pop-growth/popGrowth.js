let p = 1200
let p0 = 1000
let per = .02
let grow = 50
let objPop = (p0*per) + grow
let yrs = 0

const nbYear = objPop =>{
  if (objPop <= p){
    yrs++
  } else return yrs
}
console.log(nbYear())

console.log('========================')

// Solution:
function nbYear(p0, percent, aug, p) {    
    for (var i=0; p0 < p; i++){
      p0 = p0 * (1 + percent/100) + aug;     
      return i
    }
  }        
  nbYear(1000, 2, 50, 1200)