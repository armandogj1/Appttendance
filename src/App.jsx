import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Student from './Student.jsx';

const App = (props) => {
  const [students, setStudents] = useState({});
  const [day, setDay] = useState('');

  useEffect(() => {
    const newStudents = {};
    axios.get('/names')
      .then(result => {
        result.data.forEach(student => newStudents[student] = '');
        setStudents(newStudents);
      })
      .catch(err => console.log('server error'));

  }, []);

  const handleSubmit = () => {
    const attendance = {students, day};

    axios.post('/attendance', attendance)
      .then(result => console.log('submitted'))
      .catch(err => console.log('error'));
  }

  return (
    <div className='container'>
      <input key='day' type='text' onChange={(e) => setDay(e.target.value)}/>
      {
        Object.keys(students).map(student => (
          <Student key={student} name={student} handleAtt={setStudents} students={students}/>
        ))
      }
      <button key='button' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App;