const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route GET /api/contacts
//@access private

const getContacts = asyncHandler( async (req,res)=>{
    const contacts = await Contact.find();
    res.status(200).json({contacts})
});

//2 for create contact.
//@desc Create contact
//@route POST /api/contacts
//@access private

const createContact = asyncHandler( async (req,res)=>{
    console.log("The request body is",req.body)

    const { name, age, phone, email } = req.body;
    if (!name || !age|| !phone|| !email ) {
        res.status(400);
        throw new Error("All fields are mandatory dude!");
    }
    const contact = await Contact.create({
        name,
        age,
        phone,
        email
    })

    res.status(201).json(contact)
});


//3 for get a contact.
//@desc Get contact
//@route GET /api/contacts/:id
//@access private

const getContact = asyncHandler( async (req,res)=>{
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
        res.status(404);
        throw new Error("Contact Not Found!");
        }
        // res.status(200).json({message:`Get contact of ${req.params.id} `})
        res.status(200).json(contact)
    });


//for update contact.
//@desc Get contact
//@route POST /api/contacts/:id
//@access private

const updateContact = asyncHandler( async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
        if (!contact) {
            res.status(404);
        throw new Error("Contact not found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
    
      res.status(200).json(updatedContact);
    
});
//for update contact.
//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access private

const deleteContact = asyncHandler( async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
    throw new Error("Contact not found");
    }

    await Contact.remove()

    // res.send("Contact Has Been Deleted Successfully");
    res.status(200).json(contact);
});





module.exports = {getContacts,createContact, getContact, updateContact,deleteContact }