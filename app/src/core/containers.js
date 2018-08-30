

let getState = (Status) => {


  if (Status.includes("Up")) {
    return 0;
  }
  else if(Status.includes("Exited")) {
    return 1;
  }
  else {
    return -1;
  }

}

module.exports = {

   execute: function (command, callback) {
    const exec = require('child_process').exec;

    return new Promise (function(resolve,reject) {


        exec('docker ps -a --format {{.ID}},{{.Names}},{{.Status}}', (error, stdout, stderr) => {
            if (error) {
    
              reject("Error")
            }
            let ContainerArray = [];
            retval = stdout.replace(/(?:\r\n|\r|\n)/g, '|');
            const containers = retval.split("|");
            containers.forEach(container => {
              if(container !== "") {
                const details = container.split(',')
                let jsonObject = new Object();
                jsonObject.ID = details[0];
                jsonObject.Name = details[1];
                jsonObject.Status = details[2];
                jsonObject.State = getState(details[2]) // 0 => UP 1 => Exited -1 => Created/Default
                ContainerArray.push(jsonObject);
              }
             
              
            });
            resolve(ContainerArray)
           
          });

    })

   
    }

    
};

