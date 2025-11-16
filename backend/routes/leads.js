const express=require('express'); const router=express.Router(); const Lead=require('../models/Lead');
router.post('/', async (req,res)=>{ try{ const {firstName,lastName,email,country,phone,budget,message}=req.body; if(!email) return res.status(400).json({error:'email required'}); await new Lead({firstName,lastName,email,country,phone,budget,message}).save(); res.status(201).json({success:true}); }catch(e){console.error(e);res.status(500).json({error:'server'})} });
module.exports=router;
