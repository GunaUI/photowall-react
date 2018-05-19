import React from 'react';
import ReactDom from 'react-dom'
const task = ['Scub bugs',"Resolve the existing issues","Make a report"];
const element = React.createElement('ol', null , task.map(
                                                            (task, index) =>  React.createElement('li',{key: index},task)

                                                        )
                                    );

ReactDom.render(element, document.getElementById('root'));