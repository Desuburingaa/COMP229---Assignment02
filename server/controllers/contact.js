let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model

let Contact = require('../models/contact');


module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, ContactList) => {
        if(err){
            return console.error(err);
        }else{

            res.render('contact/list',
             {title: 'Contacts List',
              ContactList: ContactList,
              displayName: req.user ? req.user.displayName : ''});
        }
    }).sort({'name': 1});
    //sort this data set by name (descending)
}


module.exports.displayAddPage = (req, res, next) => {
    res.render('contact/add', {title: 'Add Contact',
    displayName: req.user ? req.user.displayName : ''});

}

module.exports.processAddPage = (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Contact.create(newContact, (err, Contact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);

        }else{
            //refresh
            res.redirect('/contact-list');
        }
    })
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, editedContact) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            //show edit view
            res.render('contact/edit', {title:'Edit Contact',
             contact: editedContact,
             displayName: req.user ? req.user.displayName : ''});
        }
    })

}

module.exports.processEditPage = (req, res, next) => {

    let id = req.params.id;

    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err){
            console.log(err);
            res.end(err); 
        }
        else{
            res.redirect('/contact-list');
        }
    })
}

module.exports.processDelete = (req, res, next) => {

    let id = req.params.id;

    Contact.remove({_id: id}, (err) =>{
        if(err){
            console.log(err);
            res.end(err); 
        }else{
            //refresh
            res.redirect('/contact-list');
        }
    })
}