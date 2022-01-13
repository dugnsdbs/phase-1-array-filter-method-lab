// Code your solution here.

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching (array,string){
  const names = array.filter(str => str === string || str === string.toLowerCase());
  if(names){
    return names;
  }else{
    return [];
  }
}

// function fuzzyMatch(array,string){
//   let answer = [];
//   for (let item of array){
//    if(item[0] === string[0]){
//      answer.push(item)
//    }
//   }
//   return answer;
// }

function fuzzyMatch(array, string){
  let answer = array.filter(str => str[0] === string[0]);
  if(answer){
   return answer;
  }else{
    return [];
  }
}


function matchName(array,string){
    let answer = [];
     for(let key of array){
      if(key.name === string){
        answer.push(key)
      }
   }
   return answer;
   }

  //  function matchName(obj, string){
  //    let answer = obj.filter(key => key === string)
  //    console.log(answer)
  //    if(answer){
  //      return answer;
  //    }
  //  }