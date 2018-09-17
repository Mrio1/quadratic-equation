module.exports = function solveEquation(equation) {
 var arr = equation.split(' ');
               var a = arr[0];
               var b = arr[4];
               var c = arr[8];
               
               if (arr[3] == '-'){
                   b = -b;
               }
               
               if (arr[7] == '-'){
                   c = -c;
               }
               
               var d = b * b - 4 * a * c;
               var x1 = Math.round(Math.sqrt(d) - b)/(2*a);
               var x2 = Math.round(-Math.sqrt(d) - b)/(2*a);
               var result = [x1,x2].sort((first,second) =>{
                   return first - second;
               });
               return (result);  
}
