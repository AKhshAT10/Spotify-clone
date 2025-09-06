import { Router } from "express";

const router = Router();

router.get("/",(req,res)=>{
    res.send("auth route with get property");
});

export default router;