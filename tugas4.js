var tinggi1 = 180
var tinggi2 = 155
var tinggi3 = 170

console.log("Tinggi Siswa 1 adalah ", tinggi1)
console.log("Tinggi Siswa 2 adalah ", tinggi2)
console.log("Tinggi Siswa 3 adalah ", tinggi3)

					
if(tinggi1 > tinggi2){
	if(tinggi1 > tinggi3){
		console.log("Paling tinggi adalah ", tinggi1)
		if(tinggi3 > tinggi2){
			console.log("Urutan Tinggi adalah ", tinggi1, ", ", tinggi3, ", ", tinggi2)
		}		
	}else{
		console.log("Paling tinggi adalah ", tinggi3)
		console.log("Urutan Tinggi adalah ", tinggi3, ", ", tinggi1, ", ", tinggi2)
	}
}else{
	if(tinggi2>tinggi3){
		console.log("Paling tinggi adalah ", tinggi2)
		if(tinggi3>tinggi1){
			console.log("Urutan Tinggi adalah ", tinggi2, ", ", tinggi3, ", ", tinggi1)	
		}else{
			console.log("Urutan Tinggi adalah ", tinggi2, ", ", tinggi1, ", ", tinggi3)
		}
	}else{
		console.log("Paling tinggi adalah ", tinggi3)
		console.log("Urutan Tinggi adalah ", tinggi3, ", ", tinggi2, ", ", tinggi1)
	}
}