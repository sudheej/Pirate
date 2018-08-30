

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

   getImages: function (command, callback) {
    const exec = require('child_process').exec;

    return new Promise (function(resolve,reject) {


        exec('docker images --format {{.ID}},{{.Repository}},{{.Tag}},{{.Size}}', (error, stdout, stderr) => {
            if (error) {
    
              reject("Error")
            }
            let ImagesArray = [];
            retval = stdout.replace(/(?:\r\n|\r|\n)/g, '|');
            const images = retval.split("|");
            images.forEach(image => {
              if(image !== "") {
                const details = image.split(',')
                let jsonObject = new Object();
                jsonObject.ID = details[0];
                jsonObject.Repository = details[1];
                jsonObject.Tag = details[2];
                jsonObject.Size = details[3]
                ImagesArray.push(jsonObject);
              }
             
              
            });
            resolve(ImagesArray)
           
          });

    })

   
    }

    
};

