const asyncHandler = require("express-async-handler");
//@desc Get all contacts
//@route GET /api/contacts
//@access private

const getContacts = asyncHandler( async (req,res)=>{
    res.status(200).json({message:"Get all contacts"})
});

//2 for create contact.
//@desc Create contact
//@route POST /api/contacts
//@access private

const createContact = asyncHandler( async (req,res)=>{
    console.log("The request body is",req.body)

    const { name, age } = req.body;
    if (!name || !age ) {
        res.status(400);
        throw new Error("All fields are mandatory dude!");
    }

    res.status(201).json({message:"Create contact"})
});


//3 for get a contact.
//@desc Get contact
//@route GET /api/contacts/:id
//@access private

const getContact = asyncHandler( async (req,res)=>{
        res.status(200).json({message:`Get contact of ${req.params.id} `})
    });
//for update contact.
//@desc Get contact
//@route POST /api/contacts/:id
//@access private

const updateContact = asyncHandler( async (req,res)=>{
    res.status(200).json({message:`Update contact of ${req.params.id} `})
});
//for update contact.
//@desc Delete contact
//@route POST /api/contacts/:id
//@access private

const deleteContact = asyncHandler( async (req,res)=>{
    res.status(200).json({message:`Delete contact of ${req.params.id} `})
});





module.exports = {getContacts,createContact, getContact, updateContact,deleteContact }