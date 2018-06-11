function removeNoise(str){
	
    let noNoise = /[%$&/#·@|º\\ª]/gi
    
    const filtered = str.replace(noNoise, '');
    
    return filtered;
  }