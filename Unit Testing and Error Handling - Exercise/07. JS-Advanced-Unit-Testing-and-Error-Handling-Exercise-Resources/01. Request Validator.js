function requestValidator(obj){


    let possibleMethods = ['GET', 'POST','DELETE','CONNECT'];
    let patter;
    let validUris = new RegExp(patter);
    let possibleVersions = ['HTTP/0.9','HTTP/1.0','HTTP/1.1','HTTP/2.0'];

    let forbidenCharacters = ['>','<','\\','&','\'','"'];


    if(!possibleMethods.includes(obj.method) || obj.method === undefined){
        throw new Error('Invalid request header: Invalid Method');
    }

    if(!possibleVersions.includes(obj.version) || obj.uri === undefined){
        throw new Error('Invalid request header: Invalid Version');
    }

    if(verifyRequestMessage(obj.message) || obj.message === undefined){
        throw new Error('Invalid request header: Invalid Message');
    }

    function verifyRequestMessage(message){
        for(let i = 0; i < message.length; i++){
            let currentChar = message[i];

            if (forbidenCharacters.includes(currentChar)) {
                return true;
            }
        }

        return false;
    }

    return obj;
}

requestValidator({
    method: 'POST',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    //message: '\'; DROP TABLE'
  }
  );