function validatePIN (pin) {

    const pattern = {
      four: /^\d{4}$/ig,
      six:/^\d{6}$/ig
    }
  
    if(pin.match(pattern.four)){
      return true;
    }
    else if(pin.match(pattern.six)){
      return true;
    }
    else {
      return false;
    }
  }