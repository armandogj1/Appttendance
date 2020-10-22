import React, { useState, useEffect } from 'react';

const Student = ({name, students, handleAtt}) => {
  const [attendance, setAttendance] = useState('');

  useEffect(() => {
    const newStudents = {...students};
    newStudents[name] = attendance;
    handleAtt(newStudents);
  }, [attendance]);

  return (
    <form className='students' onChange={(e) => setAttendance(e.target.value)} style={{'background-color': (attendance === 'OT' ? 'green' : attendance === 'UT' ? 'yellow' : 'white')}}>
      <h5>{name}</h5>
      <label>
        On Time:
        <input key={`${name} On Time`} type='radio' name='attendance' value='OT'/>
      </label>
      <label>
        UT:
        <input key={`${name} UT`} type='radio' name='attendance' value='UT'/>
      </label>
      <label>
        ET:
        <input key={`${name} ET`} type='radio' name='attendance' value='ET'/>
      </label>
      <label>
        UA:
        <input key={`${name} UA`} type='radio' name='attendance' value='UA'/>
      </label>
      <label>
        EA:
        <input key={`${name} EA`} type='radio' name='attendance' value='EA'/>
      </label>
    </form>
  );
};

export default Student;