let fs=require('fs');

let eventOutput=fs.readFileSync('eventOutput.txt','utf8'); 
let sensorData=fs.readFileSync('sensorData2019-01-21.csv','utf8');

let eventData=eventOutput.split('\n');
sensorData=sensorData.split('\n');
let errorLine="";
for(let i = 0 ; i< eventData.length ; i++){
	let eventSplitData=eventData[i].split(',');
	let sensorSplitData=sensorData[i].split(',');
	for(let j=0;j< eventSplitData.length ; j++){
				
		if(eventSplitData[j] != sensorSplitData[j]){
			if(j ==2 && eventSplitData[j] !=sensorSplitData[4]){
				console.log(eventSplitData[j]+"\t"+sensorSplitData[4])
			}	
			if(j ==3 && eventSplitData[j] !=sensorSplitData[5]){
				console.log(eventSplitData[j]+"\t"+sensorSplitData[5])
			}
			if(j ==4 && eventSplitData[j] !=sensorSplitData[2]){
				console.log(eventSplitData[j]+"\t"+sensorSplitData[2])
			}
			if(j ==5 && eventSplitData[j] !=sensorSplitData[3]){
				console.log(eventSplitData[j]+"\t"+sensorSplitData[3])
			}
		}
	}
}
console.log(`error Line : ${errorLine}`);
