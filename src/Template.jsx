import React from 'react';

const Template = ({name, attendance}) => {
  const email =
    attendance >= 260 ?
      (
        <div className='templates'>
          <p>
            {`Hey ${name},`}
          </p>
          <p>
            Today's absence places your attendance at 2.7/3. If you are tardy again during the remainder of the program, your attendance record will be under review for dismissal from the program.
          </p>
          <p>
            Let me know if you want to troubleshoot your commute/schedule.
          </p>
          <p>
            Best,
          </p>
        </div>
      ) :
    attendance < 260 ?

        (<div className='templates'>
          <p>{`Hi ${name},`}</p>
          <p>
            'I hope your morning is going well. I noticed that you arrived late this morning and wanted to write you a quick email to acknowledge the importance of arriving on-time.'
          </p>
          <p>
            At HR, we care deeply about making sure we're holding you accountable. As such, the HR attendance agreement provides for a tip-top max of nine (9) tardies/missed events or three (3) missed days, with three (3) tardies/missed events counting as the equivalent of one absence. In the event that you meet or exceed this limit, we may ask that you leave the HR program.
          </p>

          <p>
            If you're ever running late again in the future, please send an email to nyc.communication@hackreactor.com to let us know when to expect your arrival.  It never hurts to send an "I may be late" email!
          </p>
          <p>
            {`Your attendance tally is ${attendance/100}/3.`}
          </p>
          <p>
            Warmly,
            Your Hack Reactor NYC Team
          </p>
        </div> ):
      'nothing to email';

  return (
    <>
      {email}
    </>
  );
}

export default Template;