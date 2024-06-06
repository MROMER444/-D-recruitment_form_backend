const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const joi = require("joi");
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
});
const upload = multer({ storage: storage });

router.post('/v1/information', upload.fields([{ name: 'photo', maxCount: 1 }, { name: 'resume', maxCount: 1 }]), async (req, res) => {
  try {
    const { error } = infovalidation(req.body);
    if (error) {
      return res.status(400).json({ 'error': error.details[0].message });
    }
    const { name, email, phone, Short_Introduction, age, city, field_of_study, degree, year_of_experience } = req.body;
    const photo = req.files['photo'][0].path;
    const resume = req.files['resume'][0].path;
    const information = await prisma.information.create({
      data: {
        name,
        email,
        phone,
        Short_Introduction,
        age: parseInt(age, 10),
        city,
        field_of_study,
        degree,
        year_of_experience: parseFloat(year_of_experience),
        photo,
        resume
      }
    });
    console.log(information);

    res.status(201).json({ "information": information, "success": true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



const cityEnum = [
  'Baghdad', 'Basra', 'Nineveh', 'AlAnbar', 'Sulaymaniyah', 'Erbil',
  'Diyala', 'Karbala', 'Kirkuk', 'Babil', 'Najaf', 'DhiQar', 'Maysan',
  'Muthanna', 'Qadisiyyah', 'Wasit', 'Salah_al_Din', 'Dohuk'
];

const degreeEnum = [
  'Bachelor', 'Master', 'PhD', 'Associate', 'Diploma', 'Certificate'
];




function infovalidation(user) {
  const schema = {
    name: joi.string().required(),
    email: joi.string().email().required(),
    phone: joi.string().required(),
    Short_Introduction: joi.string().required(),
    age: joi.number().integer().required(),
    city: joi.valid(cityEnum).required(),
    field_of_study: joi.string().required(),
    degree: joi.valid(degreeEnum),
    year_of_experience: joi.number().required(),
  }
  return joi.validate(user, schema);
}


module.exports = router;
