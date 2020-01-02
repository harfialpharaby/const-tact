'use strict'

const {Contact} = require('../models');

class ContactController {
    static getAllContacts(req, res, next) {
        Contact.findAll()
            .then((contacts) => {
                const sendData = {
                    status: 200,
                    message: 'OK',
                    Data: contacts
                };
                res.status(200).json(sendData);
            }).catch((err) => {
                res.json(err);
            });
    }

    static getContactById(req, res, next) {
        const options = {
            where: {
                id: req.params.id
            }
        };
        let sendData;

        Contact.findOne(options)
            .then((contact) => {
                if (!contact) {
                    sendData = {
                        status: 404,
                        name: 'Not Found', 
                        message: 'Contact Not Found'
                    };
                    throw sendData;
                }

                sendData = {
                    status: 200,
                    message: 'OK',
                    Data: contact
                };
                res.status(200).json(sendData);
            }).catch((err) => {
                res.json(err);
            });
    }

    static addNewContact(req, res, next) {
        const values = {
            fullName: req.body.fullName,
            phone: req.body.phone
        };
        const options = {
            where: values
        };
        let sendData;

        Contact.findOne(options)
            .then((duplicateContact) => {
                if (duplicateContact) {
                    sendData = {
                        status: 409,
                        name: 'Conflict', 
                        message: 'Contact Already Exist'
                    };
                    throw sendData;
                }

                return Contact.create(values);
            }).then((done) => {
                sendData = {
                    status: 201,
                    message: 'Contact Added Successfully',
                    Data: values
                };
                res.status(201).json(sendData);
            }).catch((err) => {
                res.json(err);
            });
    }

    static editContact(req, res, next) {
        const values = req.body;
        const options = {
            where: {
                id: req.params.id
            }
        };
        let sendData;

        Contact.findOne({where: values})
            .then((duplicateContact) => {
                if (duplicateContact) {
                    sendData = {
                        status: 409,
                        name: 'Conflict',
                        message: 'Contact Already Exist'
                    };
                    throw sendData;
                }

                return Contact.update(values, options);
            }).then((result) => {
                sendData = {
                    status: 201,
                    message: 'Contact Updated Successfully',
                    Data: values
                };
                res.status(200).json(sendData);
            }).catch((err) => {
                res.json(err);
            });
    }

    static deleteContact(req, res, next) {
        const options = {
            where: {
                id: req.params.id
            }
        };
        let sendData;

        Contact.destroy(options)
            .then((result) => {
                if (!result) {
                    sendData = {
                        status: 404,
                        name: 'Not Found',
                        message: 'Contact Not Found'
                    }
                    throw sendData;
                }
                
                sendData = {
                    status: 200,
                    message: 'Contact Deleted Successfully',
                    Data: values
                }
                res.status(200).json(sendData);
            }).catch((err) => {
                res.json(err);
            });
    }
}

module.exports = {
    ContactController
};
