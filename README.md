# 工研院計畫上鏈率測試

* 實驗方法：透過實際操作BC Tracker 與 Cloud Server 進行物流實測，其中BC Tracker所存的資料是原始的感測器資料;Cloud Server則是鏈上所取下來的資料。
    > eventOutput.txt 為Cloud Server 資料；sensorData2019-01-21.csv 則是BC Tracker 原始資料。

* **上鏈率為100%**

* 測試程式碼如下：
```javascript=

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
				console.log(eventSplitData[j]+"\t"+sensorSplitData[4]);
				errorLine+=`${i},i`;
			}	
			if(j ==3 && eventSplitData[j] !=sensorSplitData[5]){
				console.log(eventSplitData[j]+"\t"+sensorSplitData[5]);
				errorLine+=`${i},i`;
			}
			if(j ==4 && eventSplitData[j] !=sensorSplitData[2]){
				console.log(eventSplitData[j]+"\t"+sensorSplitData[2]);
				errorLine+=`${i},i`;
			}
			if(j ==5 && eventSplitData[j] !=sensorSplitData[3]){
				console.log(eventSplitData[j]+"\t"+sensorSplitData[3]);
				errorLine+=`${i},i`;
			}
		}
	}
}
console.log(`error Line : ${errorLine}`);
```
