export const updateCharacters=function(event, setInputTxt, inputTxt, setCharacters, characters, setCountClass){
  const inputLength=event.target.value.length;
  const textLength=inputTxt.length;
  const difference=inputLength-textLength;

  /* This statement verifies if input length is smaller or equal to 42, if true, the input gets updated to setInputTxt*/
  if(inputLength<=42){
    setInputTxt(event.target.value)
  };
  
  if(inputLength<=42&&textLength<inputLength){
    /* This statement will verify if text input increases, meaning characters get added into input form, meaning the remaining character count goes down  */
    setCharacters(characters-difference);
  } else if(textLength>inputLength&&difference>1){
    /* This statement will verify if entire text is highlighted and deleted at once, so that the character counts sets to default 42  */
    setCharacters(characters+difference);
  } else if(textLength>inputLength&&difference<1){
    /* This statement will verify if entire text is highlighted and deleted at once, so that the character counts sets to default 42  */
    setCharacters(characters-difference);
  }else if(textLength>inputLength){
    /* This statement will verify if text input decreases, meaning characters get deleted, meaning the remaining character count goes up  */
    setCharacters(characters+difference);
  } 

  inputLength>=42?setCountClass('characterCountWarning'):setCountClass('characterCountNormal');
};


export const sendData=function(setTodoArr, todoArr, setInputTxt, inputTxt, setFooterVisibility, setCharacters, setCountClass){
  //This function will send data from the input field into the todoArr.
  const pushIntoArr=function(){
      setTodoArr([...todoArr, {
      //This will take the last number in the object and increment it by one. since elements in this app will be added and removed by user, the array length will be changing accordingly, therefore indexing id's is not suitable in this occasion by simply taking the array length.
      id: todoArr.length<1?0:todoArr[todoArr.length-1].id+1,
      todo: inputTxt,
      complete: false
    }])
    setFooterVisibility('');
  };
  setInputTxt('');
  setCharacters(42);
  setCountClass('characterCountNormal');
  //This ternary conditional statement verifies if empty string is passed int the input, that will not push anything into todoArr, only if string length is larger than 0, it gets pushed into the todoArr.
  return inputTxt.trim().length>0?pushIntoArr():null;  
};

