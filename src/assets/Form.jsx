import React, { useEffect, useState } from 'react';

function Form() {
  const data = { name: '', email: '', password: '' };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {}, [flag]);

  function handleDat(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert('All fields are required');
    } else {
      setFlag(true);
    }
  }

  return (
    <>
      <pre>
        {flag ? (
          <h2 className="ui-define">
            Hello <span>{inputData.name}</span>! You have registered successfully.
          </h2>
        ) : (
          ''
        )}
      </pre>

      <div className="main">
        <form className="container" onSubmit={handleSubmit}>
          <div className="header">
            <h2>Registration Form</h2>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={inputData.name}
              onChange={handleDat}
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Your Email"
              name="email"
              value={inputData.email}
              onChange={handleDat}
            ></input>
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={inputData.password}
              onChange={handleDat}
            ></input>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;