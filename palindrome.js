let x = 1221;
let y = x.toString()
function Pali(a){
  let bag ="";
  for (i=a.length-1;i>=0;i--){
    bag = bag+a[i];
  }
  if (bag == a){
    return true
  }
  else {
   return false
  }
}
Pali(y)