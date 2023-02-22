// let p = 1200
// let p0 = 1000
// let per = .02
// let grow = 50
// let objPop = (p0*per) + grow
// let yrs = 0

// const nbYear = objPop =>{
//   if (objPop <= p){
//     yrs++
//   } else return yrs
// }
// console.log(nbYear())

console.log('========================')

// Solution:
function nbYear(p0, percent, aug, p) {    
    for (var i=0; p0 < p; i++){
      p0 = p0 * (1 + percent/100) + aug;     
      return i
    }
  }        
  console.log(nbYear(1000, 2, 50, 1500))

  console.log('=========================')

  const popGrowth = (p0, percent, aug, goal) =>{
    let years = 0
    percent /= 100
    while (p0 < goal){
        p0 = p0 + (p0 * percent) + aug
        years++
    }
    return years
  }
  console.log(popGrowth(1500, 5, 100, 5000))