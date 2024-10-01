"use strict"

//
// console.log("Q1 (Date Types and Operators) answers:");
// console.log("1:");
// var cash= prompt("To Know the cash flow ratio enter your cash now:")
// console.log(Number(cash)/500,"Cash flow ratio");
// console.log("2:");
//  cash= prompt("To Know the net income enter your cash now:")
// console.log(Number(cash)-500,"Net income");
// console.log("3:");
//  cash= prompt("To Know the cash flow ratio enter your cash now:")
// console.log(Number(cash)+500,"Total assets");
// console.log("4:");
// var cash= prompt("To Know the cash flow ratio enter your cash now:")
// console.log(Number(cash)*500,"Net income using profit margin and sales");
// console.log("5:");
// console.log("the average of (7,9,2) is "+(7+9+2)/3);
// console.log("6:");
// console.log("the expo of 2 is "+2^3);
// console.log("7:");
// console.log("the remainder of 4 % 2"+4 % 2);

//Q2
// console.log("Q2 (Data types and operators) Answers");

// console.log("1:");
// console.log(typeof(100),"100");

// console.log("2:");
// console.log(typeof(73.9),"73.9");

// console.log("3: ");
// console.log(typeof(NaN),"NaN");

// console.log("4:");
// console.log(typeof("water"),"water");

// console.log("5:");
// console.log(typeof(False),"false");

// console.log("6:");
// console.log(typeof(9!=11),"9!=11");

// console.log("7: ");
// console.log("Orang"+"e","+ string and char");

// console.log("8:");
// console.log("orange"-"s","- string and number");

// console.log("9:");
// console.log("4"+"8","+ char and char");

// console.log("10:");
// console.log("4"- "8","- char and char");

// console.log("11:");
// console.log("name"+ 3,"+ string and number");

// console.log("12:");
// console.log("name"- 3,"- String and number");

// console.log("13:");
// console.log(82*"word","* number and string");

// console.log("14:");
// console.log(1+"hello","+ number and string");

// console.log("15:");
// console.log("hello"+1,"+ string and number");

// console.log("15:");
// console.log(1+true,"number and boolean");

// console.log("16:");
// console.log(typeof(Infinity),"infinity");

// console.log("17:");
// console.log(1=='1',"==");

// console.log("18:");
// console.log(1==='1',"===");


//Q3

// console.log("Q3 (Strings) Answers");

// console.log("1:");
// console.log("WELCOME TO ORANGE");
// console.log("2:");
// console.log("TO");
// console.log("3:");
// console.log("Hello from Orange");
// console.log("4:");
// console.log("welcome to orange");
// console.log("5:");
// console.log("17");
// console.log("6:");
// console.log("Welcome to \"Orange\" ");
// console.log("7:");
// console.log("Welcome to Orange Jordan");

// console.log("Q3 pt2");
// let word="cactus";
// let firstLetter=word[0];
// let replace= word[0]+word.slice(1).replaceAll(firstLetter,'*')
// console.log(replace,"replaced the first occurence of c after the first one with *");


//Q4 : arrays

// console.log("Q4 (Arrays) Answers:");


// console.log("1:");
// let orange=["Coding","Academy","By","Orange","Jordan"]
// console.log(orange,"whole array");
// orange.unshift("Welcome","To")
// console.log(orange,"after push");
// console.log(orange[3],orange[4],orange[5],"last three elements");
// console.log(orange[2],orange[3],orange[4],orange[5]);
// console.log(orange[2],orange[5]);


// // Q5 : Functions
// console.log("1");
// function stringToArray(text)
// {
//     return  text.split(" ")
// }
// const orange=stringToArray("Orange academy")
// console.log(orange);

// console.log("2");
// function ConvertedphoneNumber(phoneNumber)
// {
//     let phoneArray=phoneNumber.split('');
//     for(let i=0;i<=6;i++)
//  {
//     phoneArray[i]='*'
//  };
//  return phoneArray.join('');
// }
// const phone =ConvertedphoneNumber('0779883108');
// console.log(phone);

// console.log("6");
// function flipNumber(numbers) 
// {
//     let toArray= numbers.split('');
//     let lengthOfNumber=toArray.length;
//     let flip='';
//     for (let i = lengthOfNumber-1; i >= 0; i--) 
//      {
//         flip+=toArray[i]
//      }
//     return flip;
// }

//  let inputNumber=flipNumber('1233125');
//  console.log(inputNumber);
 
// console.log("7");
// function swap(num1,num2)
// {
//     let a=num1;
//     num1=num2;
//     num2=a;
//     console.log(num1+' '+num2,);
    
// }
// let a=swap(5,6);

// console.log("8");
// function removeChar(text,charNum)
// {
//    let toArray =text.split('');
//    toArray.splice(charNum,1)

//     return toArray.join('');
// }
// let word =removeChar("orange",3)
// console.log(word);
//
// console.log('9');
// function mergAndRemove(text1,text2)
// {
//    text1=text1.substring(1);
//    text2=text2.substring(1);
//    return text1.concat(text2);
// }

// let text =mergAndRemove('lora','inge');
// console.log(text);
 

// console.log('10');

// function isTheLetterThere(letter,text)
// {
//   return text.includes(letter)

// }
// console.log(isTheLetterThere('o','orange'));

// console.log('11');

// function toArray(text)
// {
//     let textToArray=text.split(' ');
//     return textToArray;
// }
// console.log(toArray("orange coding academy"));


// console.log('12');

// function reverseText(text)
// {
//     let reversetext='';
//     for(let i=text.length-1;i>=0;i--)
//     {
//         reversetext+=text[i]
//     }
//     return reversetext;
// }
// console.log(reverseText("orange"));


///////////// Conditionals 



// console.log('1');
// function isEligible(age)
// {
//  if (age>30 && age<60) 
//     {
//       console.log("youre not eligible, you may join other programs!");
//     }
//  else if (age>=18 && age<=30)
//  {
//     console.log("youre eligible, start your application");
    
//  }
//  else if(age<18)
//  {
//     console.log("you may join the kids program");
    
//  }
//  else if (age>=60)
//  {
//     console.log("you may join the seniors program");
    
//  }

// }

// let age=prompt("please enter your age!");
// isEligible(age);
//

///
// 

// console.log('2');
// function viceVersa(word) 
// {
//   let reversedWord='';
//   for (let i=0;i<=word.length-1;i++)
//   {
//     if(word[i]==word[i].toUpperCase())
//     {
//         reversedWord+=word[i].toLowerCase();
//     }
//     else if(word[i]==word[i].toLowerCase())
//     {
//         reversedWord+=word[i].toUpperCase();
//     }
//   }
//     return reversedWord;
// }
// console.log(viceVersa("HelloWorld"));


// console.log('3');
 
// function CamleCase(text) 
// {
//   let  camleCaseText=text.split(' ')
//    for(let i=0;i<=camleCaseText.length-1;i++)
//    {
//         camleCaseText[i]=camleCaseText[i][0].toUpperCase()+camleCaseText[i].slice(1).toLowerCase();
//    }
//    return camleCaseText.join('');
// }
 
// console.log(CamleCase("coding academy by orange"));

// console.log('4');

// function removeFromArray(text , removedText)
// {
//     let toArray=text.split(' ');
//     for(let i=0 ; i<toArray.length; i++ )
//     {
//         if(toArray[i]==removedText)
//         {
//             toArray.splice(i,1);
//            i--;
//         }
        
//     }
//     return toArray.join(' ');
// }
// let x=removeFromArray('coding academy by orange','by');
// console.log(x);

// console.log('5');

// function evenOdd(TheNumber) 
// {
//     if(TheNumber % 2 == 0)
//     {
//         return `${TheNumber} is an even number`
//     }
//     else
//      return `${TheNumber} is an odd number`

// }

// console.log(evenOdd(456345));
///////////////////////////////////////////
// console.log('6');


// function isNumber(input)
// {
//     if (isNaN(input))
//     {
//         return `${input} is not a number`;
//     }
//     else 
//     return `${input} is a number`;
// }

// console.log(isNumber('345'));
///////////////////////////////////////
// console.log('7');

// function largest(x,y) 
// {
//  return x>y? x : y;   
// }

// console.log(largest(345,15));

// console.log('8');

// function ThreeNumbers(x,y,z)
// {
//     if (x===y&&y==z) 
//     {
//         return 'its a equilateral traiangle';
//     }
//     else if (x === y || x === z || y === z)
//     {
//         return "Isosceles triangle";
//     }
//     else 
//     {
//         return "Scalene triangle";
//     }
// }

// console.log(ThreeNumbers(7,5,7));


console.log('9');

