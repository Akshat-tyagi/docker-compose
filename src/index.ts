import express from "express";
import prisma from "./db/prisma.js";

const app = express();

app.get("/",async(req,res)=>{
    const users = await prisma.users.findMany();
    res.json({users});
})

app.post("/",async(req,res)=>{
    await prisma.users.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString()
        }
    });
    res.json({message:"created successfully"})
})

app.listen(3000);