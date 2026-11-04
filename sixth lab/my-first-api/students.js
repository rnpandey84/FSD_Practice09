const express = require('express');
const app = express();

app.use(express.json());

let students =  [
    {id : 1, name : "Aarav", marks : 85},
    {id : 2, name : "Priya", marks : 92},
    {id : 3, name : "rahul", marks : 78}
];

app.listen(3001, () => {
    console.log('server running on port 3001');

});

//! GET all students

app.get("/students", (req, res) => {
    res.json(students);

});

//GET one student by 10
app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: 'student not found' })
    }

    res.json(student);
});

// POST - create new student

app.post('/students', (req, res) => {
    const { name, marks } = req.body;

    const newStudent = {
        id: students.length + 1,
        name: name,
        marks: marks
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
});

//PUT - updat eentrie student
app.put('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const {name, marks } = req.body;

    const student = students.find( s => s.id === id);

    if(!student) {
        return res.status(404).json({message : 'student not found'});
    }   
    student.name = name;
    student.marks = marks;

    res.json(student);
});

// PATCH - update only some fields

app.patch('/students/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }

    if (req.body.name !== undefined) {
        student.name = req.body.name;
    }

    if (req.body.marks !== undefined) {
        student.marks = req.body.marks;
    }

    res.json(student);

});

// DELETE - remove a student

app.delete('/students/:id', (req, res) => {

    const id = parseInt(req.params.id);

    // Find the index of the student
    const index = students.findIndex(s => s.id === id);

    // Student not found
    if (index === -1) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }

    // Remove student from array
    const deletedStudent = students.splice(index, 1)[0];

    // Send response
    res.json({
        message: 'Student deleted',
        deleted: deletedStudent
    });

});