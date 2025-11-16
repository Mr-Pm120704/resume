const express=require('express'); const router=express.Router(); const Subscriber=require('../models/Subscriber');
router.post('/subscribe', async (req,res)=>{ try{ const {email}=req.body; if(!email) return res.status(400).json({error:'email required'}); const ex=await Subscriber.findOne({email}); if(ex) return res.json({success:true,already:true}); await new Subscriber({email}).save(); res.json({success:true}); }catch(e){console.error(e);res.status(500).json({error:'server'})} });
module.exports=router;
