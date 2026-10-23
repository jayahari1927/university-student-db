// use university DB;
db.students.insertOne({
    students_id: "STU001",
    name:"Alice Johnson",
    major:"Computer Science",
    course:[
        { course_code:"CSS101",
           course_name:"Intro to Programming",
           grade:"B"
        }
    ]
});
db.students.insertOne({
    student_id:"STU002",
    name:"Bob Smith",
    major:"Data Science",
    course:[
        { course_code:"CS101",
          course_name:"Intro to Programming",
          grade:"A"
    }]
});
db.students.find({ student_id: "STU001"}).pretty();
db.students.updateOne(
    { 
    student_id:"STU001",
    course_code:S101
    },
    {
        $set:{courses,
            $grade:"A"}
    }
);
db.students.deleteOne({student_id:"STU002"});