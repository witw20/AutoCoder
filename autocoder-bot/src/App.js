import React from 'react';
import Form from './components/Form';
import Button from './components/Button';

function App() {
 return (
 <div className='App'>
 <h1>Production-Ready Application</h1>
 <Form />
 <Button onClick={() => alert('Button clicked!')}>Click me</Button>
 </div>
 );
}

export default App;
