import {useState, useCallback} from 'react';
import {updateCharacters, sendData} from './functions'

export const App=function(){
  const [inputTxt, setInputTxt]=useState('');
  const [todoArr, setTodoArr]=useState([]);
  const [footerVisibility, setFooterVisibility]=useState('none');
  const [characters, setCharacters]=useState(42);
  const [countClass, setCountClass]=useState('characterCountNormal');

 const createList=useCallback((e)=>
  (
  <li key={e.id}>
    <p className='listElement'>
      {e.todo}
    </p>
    <button className='clearButton' onClick={()=>{  

      //this will toggle todoArr.complete to true or false.
      e.complete?e.complete=false:e.complete=true;

      //This will create new variable where the clicked item gets spliced out and that new array (newTodos) gets updated to setTodoArr and the DOM gets refreshed.
      const newTodos=[...todoArr];
      todoArr.splice(e.id, 1);
      setTodoArr(newTodos);
    }}>
      -
    </button>
  </li>
  ),[todoArr]);

  return(
    <div id='appContainer'>
      <div className='cursor' id='header'>
        Todo App
      </div>
      <div id='inputContainer'>
        <input type='text' value={inputTxt} onChange={(event)=>{updateCharacters(event, setInputTxt, inputTxt, setCharacters, characters, setCountClass)}}/>
        <button id='addButton' onClick={()=>sendData(setTodoArr, todoArr, setInputTxt, inputTxt, setFooterVisibility, setCharacters, setCountClass)}>
          +
        </button>
      </div>
      <div className={countClass} id='characterCount'>
        Remaining characters: {characters}
      </div>
      <ul>
        {todoArr.map(element=>!element.complete?createList(element):null)}
      </ul>
      <div className='cursor' id='footer' style={{display: footerVisibility}}>
        created by <a href='https://github.com/ArturAronov' target='blank_'> Artur Aronov</a>
      </div>
    </div>
  );
};