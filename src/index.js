import React from 'react';
import ReactDom from 'react-dom'
const task = ['Scub bugs',"Resolve the existing issues","Make a report"];
const element = 
    <div>
        <h1>Tasks</h1>
        <ol>
            {task.map((task , index) => <li key={index} >{task}</li>)}
        </ol>
    </div>

ReactDom.render(element, document.getElementById('root'));