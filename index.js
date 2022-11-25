const express=require("express")
const app=express()
const port=3000;
const cors=require("cors")
const bodyParser=require("body-parser")


app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())

app.get("/",(req,res)=>{
	res.send("starting the bad days")

})

app.post("/newData",(req,res)=>{
	//const name=req.body.name,age=req.body.age
	const {name,password}=req.body;
	console.log(name,password)
	res.send("added")
})




app.listen(port,()=>console.log("server is running on port 3000"))