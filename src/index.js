module.exports = function reverse (n) {
    let k = '';
    n = Math.abs(n/10*10);
    n=n+'';
    console.log(n.length);
  for (i=n.length-1; i>=0; i--){
      k+=n[i];
  }
  
  return k;
}
