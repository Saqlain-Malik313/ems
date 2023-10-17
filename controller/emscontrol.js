const express = require ('express')
const router =express.Router()
const Employe = require('../models/emp.model')





router.get("/create",(req,res)=>{
    res.render('add')

})

router.post('/addemp',(req,res)=>{
    const {email,name,pass,mobile,city,}=req.body
    let emp = new Employe()
    emp.email=email,
    emp.name=name,
    emp.pass=pass,
    emp.mobile=mobile,
    emp.city= city
    emp.save()
    .then(result=>res.redirect('/emp/list'))



}) // for add data

router.get('/list',(req,res)=>{
    Employe.find()
    .then(result=>res.render('list',{employe:result}))
}) // for show data 

router.get('/delete/:id',(req,res)=>{
    Employe.findByIdAndDelete(req.params.id,)
    .then(result=>res.redirect('/emp/list'))
}) // for delete data

router.get('/update/:id',(req,res)=>{
    Employe.findById(req.params.id)
    .then(result=>res.render('update',{emp:result}))
})

router.post('/updateemp',(req,res)=>{
    Employe.findByIdAndUpdate( {_id:req.body.id}.req.body)
    .then(result=>result)
})

module.exports=router