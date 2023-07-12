function decimalToBinary(num) {
  //Write you code here

	let rem = -1; 
	let bi = "";

	while(num > 0){
	rem = num % 2;
	num =Math.floor(num /2);
	bi = rem+bi;	
	}
	
  return bi;
}

window.decimalToBinary = decimalToBinary;
