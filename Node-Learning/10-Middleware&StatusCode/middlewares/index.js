const fs=require(fs)
function logReqRes(filename){
  return(req,res,next)=>{
    fs.appendFile(
      "log.txt",
      `\n${Date.now()}:$(req.ip})`
    )
  }
}
