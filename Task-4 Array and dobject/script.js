// QUESTION 1:
// JSON ITERATE USING FOR LOOP
 
let keys=['ayesha','nooja','sheeba','sowbia','divya']
let values=[1,2,3,4,5]
let person={}
for(let i=0; i<keys.length;i++)
{
    person[keys[i]]=values[i]
}
// console.log(person);
//output=>{ayesha: 1, nooja: 2, sheeba: 3, sowbia: 4, divya: 5}
//         ayesha:1
//         nooja:2
//         sheeba:3
//         sowbia:4
//         divya:5

//JSON ITERATE USING FOR IN

const data={
    name:'ayesha',
    age :21,
    sex :'female'
}
for(let keys in data)
{
    // console.log(keys+":" ,data[keys])
}
//output name: ayesha
//       age: 21
//        sex: female

//JSON ITERATE USING FOREACH

let fav=['video','book','java','year'];
let items=['play','reader','script',2000];
let solution={}
fav.forEach((fav,i)=>{
    solution[fav]=items[i]
});
// console.log(solution);
//output=>{video: 'play', book: 'reader', java: 'script', year: 2000}//book: "reader
//java: "script"
//video: "play"
//year: 2000

//JSON ITERAITON USING FOR OF

let cars={'ford':1,'toyota':2,'honda':3,'volkswagen':'fav'}
let k= Object.keys(cars)
for(let i of k)
{
    console.log(`${i} : ${cars[i]}`);
}
//output=>ford : 1
//        toyota : 2
//        honda : 3
//        volkswagen : fav

//QUESTION 2:

//EASY RESUME DATA IN JSON FARMAT

let resume={ 
    name         :'ayesha nooja',
    DOB          : '01.09.2000',
    gender       :'female',
    nationality  :'INDIAN',
    maried_status:'single',
    languages_known:['tamil','english','hindi','urdu'],
    degree        :'BBA BANKING',
    university_board:'Alagappa University',
    percentage_CGPA : '78%',
    year_of_passing :2020,

}
console.log(resume);
//output=>{name: 'ayesha nooja', DOB: '01.09.2000', gender: 'female', nationality: 'INDIAN', maried_status: 'single', …}
name            : "Komal Pawar"
nationality     : "INDIAN"
percentage_CGPA : "78%"
university_board: "BAMU University"
year_of_passing : 2020
DOB             : "06.12.2000"
degree          : "BBA BANKING"
gender          : "female"
languages_known : Array(4)
                 1: "english"
                 2: "hindi"
                 3: marathi
maried_status   : "married"
""