import React from 'react';
import './SubjectTable.css';

const SubjectTable = ({ subjects,sg }) => {

  subjects = subjects.map(item => ({
    ...item,
    credit: parseInt(item.credit, 10), // Convert credit to integer
    grade: 0 // Add grade property with value 0
  }));

  
  const requiredSG = sg;
  let totalCredits = 0;
  let assumedCG = 0.0;

  for (let key in subjects) {
    totalCredits += subjects[key].credit;
    subjects[key].grade = Math.floor(requiredSG);
    assumedCG += subjects[key].credit * subjects[key].grade;
  }

  assumedCG /= totalCredits;

  let i = 0;
  while (assumedCG < requiredSG) {
    let oldGrade = subjects[i].grade;
    subjects[i].grade++;
    assumedCG += (subjects[i].grade - oldGrade) * (subjects[i].credit / totalCredits);
    i++;
    if (i >= subjects.length) i = 0;
  }



  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Credits</th>
            <th>Expected <br />grade</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.name}</td>
              <td>{subject.credit}</td>
              <td>{subject.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default SubjectTable;
