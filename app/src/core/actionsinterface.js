export function getContainer(Status) {
    console.log(Status)
    if (Status.includes("Up")) {
     
      return true;
      }
      else if(Status.includes("Exited")) {
        return false;
      }
      else {
        return false;
      }

}
