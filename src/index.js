// let numOrStr = prompt('input number or string');
// console.log(numOrStr)

// if(numOrStr === null) {
// console.log('ви скасували')
// } else if( numOrStr.trim() === '' ) {
// console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
// console.log(' number is Ba_NaN')
// } else {
// console.log('OK!')
// };
// let numOrStr = prompt('input number or string');
// console.log(numOrStr)


// switch (numOrStr) {
//    case null:
//       console.log('ви скасували');
  
//    case numOrStr.trim() === '':
//       console.log('Empty String'); 
//    case ( isNaN( +numOrStr )): 
//       console.log(' number is Ba_NaN')
//    default: 
//       console.log('OK!')  
// break; 

// };



let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (numOrStr) {
   case null:
      console.log('ви скасували');     
   break;
   case isNaN: 
      console.log(' number is Ba_NaN')
   break;
   case '':
      console.log('Empty String'); 
   break;
   default: 
      console.log('OK!') 
}


// switch (( isNaN( +numOrStr ))) {
//    case false:
//       console.log(' number is Ba_NaN')  
//    break;
// }
// switch (numOrStr.trim()) {
//    case '':
//       console.log('Empty String'); 
//    break;
// }






// switch (( isNaN( +numOrStr ))) {
//    case false:
//       console.log(' number is Ba_NaN')  
//    break;
// }
// switch (numOrStr.trim()) {
//    case '':
//       console.log('Empty String'); 
//    break;
// }
// switch (numOrStr, ( isNaN( +numOrStr ))) {
//    case null:
//    console.log('ви скасували');     
//    break;
// }

// switch (numOrStr.trim()) {
//    case '':
//       console.log('Empty String'); 
//       break;  
// }