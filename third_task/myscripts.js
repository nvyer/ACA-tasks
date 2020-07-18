//problem1

let n1=15
if( n1 %2 === 0 ) console.log('even');
else console.log('odd');

//problem2

let a=5, sum=0
for(let i=1 ; i<=a ; i=i+2 ){
    sum=sum+i
}
 console.log(sum);

 //prblem 3

let t1=10, t2=20, t3=15
if ( t1 < t2 )
if( t3>t1 && t2>t3 ) console.log('in bounds')
else{console.log('out of bounds')}
if( t3>t1 && t3>t2 ) console.log('out of bounds');

//problem 4

let b=10, c=20 ,d=30
if(b+c>=d , d+c>=b, b+d>=c ) console.log('yes');
else {console.log('no');}

