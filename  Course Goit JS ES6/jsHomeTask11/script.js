/*
Написать приложение для работы с REST сервисом, все функции делают запрос и возвращают Promise с которым потом можно работать. Реализовать следующий функционал:

функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
функция getUserById(id) - должна вернуть пользователя с переданным id.
функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
функция removeUser(id) - должна удалять из БД юзера по указанному id.
функция updateUser(id, user) - должна обновлять данные пользователя по id. user это объект с новыми полями name и age.
Документацию по бэкенду и пример использования прочитайте здесь .

Сделать минимальный графический интерфейс в виде панели с полями и кнопками. А так же панелью для вывода результатов операций с бэкендом.*/
const btnAll = document.querySelector('#js-btn-all');
const btnAdd = document.querySelector('#js-btn-add');
const btnUpdate = document.querySelector('#js-btn-update');
const btnRe = document.querySelector('#js-btn-re');
const btnId = document.querySelector('#js-btn-id');
const outputAll = document.querySelector("#js-output-text");
 

btnAll.addEventListener('click', getAllUsers);
btnAdd.addEventListener('click', addUser);
btnRe.addEventListener('click', removeUser);
btnUpdate.addEventListener('click',updateUser);
btnId.addEventListener('click',getUserById);

/*get input user ID*/
function getInfo(id){
    let acc ='';
    let test = document.querySelectorAll(id);
    test.forEach(el  =>{
        acc += el.value;  
    })
  return acc;
}

function cleanInfo(id){
    let test = document.querySelectorAll(id);
    test.forEach(el  =>{
        el.value = ''; 
    })
};



function outputData(myObgect){ 
        
for (key in myObgect) {
    console.log(myObgect[key].id, myObgect[key].name ,myObgect[key].age);
   let p = document.createElement('div');
        p.textContent = `|  Name : ${myObgect[key].name} |   Age : ${myObgect[key].age} | ID : ${myObgect[key].id}  `;
        
        outputAll.insertAdjacentElement("beforeEnd", p);
         console.log(p); 
        };
};


function outputDataOne(obje){ 
        
        console.log(obje.id, obje.name ,obje.age);
       let p = document.createElement('div');
            p.textContent = `|  Name : ${obje.name} |   Age : ${obje.age} | ID : ${obje.id}  `;
            
            outputAll.insertAdjacentElement("beforeEnd", p);
             console.log(p); 
            };

//функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
function getAllUsers(){
    
fetch('https://test-users-api.herokuapp.com/users')
    
    .then(response => {     
        if (response.ok) return response.json();        
        throw new Error("Error fetching data");   
     }) 

     .then(data => {         
        console.log("data inside then: ", data);    
        outputAll.textContent = '';   
        outputData(data.data);
        
}) 

        .catch(error => {      // catch обрабатывает возможную ошибку запроса      
        console.error("Error: ", error);    
        });
       
        };
        

       
        //функция getUserById(id) - должна вернуть пользователя с переданным id.
        function getUserById(){
//let userId = prompt('userID','5cdd99664b83e200144cb4f2');
       let userIdd = getInfo('.usersInputID');

fetch(`https://test-users-api.herokuapp.com/users/${userIdd}`)
    
    .then(response => {     
        if (response.ok) return response.json();        
        throw new Error("Error fetching data");   
     }) 

     .then(data => {         
        console.log("data inside then: ", data);    
        
        outputAll.textContent = 'Get User';   
        outputDataOne(data.data);
        cleanInfo('.usersInputID');
        
        //console.log(data);
        }) 
        .catch(error => {      // catch обрабатывает возможную ошибку запроса      
        console.error("Error: ", error);    
        });
        };
       
        
        
        //функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
       function addUser(){
            let user_name = getInfo('.usersInputName');
            let user_age = getInfo('.usersInputAge');

        fetch('https://test-users-api.herokuapp.com/users',{
            method :'Post',
            body : JSON.stringify({ name : user_name, age : user_age}),
            headers : {
                'Content-type' : 'application/json'
            }
        })
        .then(response => {     
            if (response.ok) return response.json();        
            throw new Error("Error fetching data");   
         }) 
    
         .then(data => {         
            outputAll.textContent = 'Add';   
        outputDataOne(data.data);   
            }) 
            .catch(error => {      // catch обрабатывает возможную ошибку запроса      
            console.error("Error: ", error);    
            });
            cleanInfo('.usersInputName');
            cleanInfo('.usersInputAge');
            };

       // функция removeUser(id) - должна удалять из БД юзера по указанному id.

       function removeUser(){
           //let userIDRe = prompt('userID','5cdd99664b83e200144cb4f2');
           let userId = getInfo('.usersInputID');

        fetch(`https://test-users-api.herokuapp.com/users/${userId}`,{method :'delete'})
    .then(response => {     
        if (response.ok) return response.json();        
        throw new Error("Error fetching data");   
     }) 

     .then(data => {         
        outputAll.textContent = 'Remove';   
        outputDataOne(data.data);
        }) 
        

        .catch(error => {      // catch обрабатывает возможную ошибку запроса      
        console.error("Error: ", error);    
        });
        cleanInfo('.usersInputID');
        };
       
        //функция updateUser(id, user) - должна обновлять данные пользователя по id. user это объект с новыми полями name и age.
        
        function updateUser(){
            
            //let userId = prompt('userID','5cdd99664b83e200144cb4f2');
            let userId = getInfo('.usersInputID');
            let user_name = getInfo('.usersInputName');
            let user_age = getInfo('.usersInputAge'); 
           
            fetch(`https://test-users-api.herokuapp.com/users/${userId}`,{
                method :'Put',
                body : JSON.stringify({ name : user_name, age : user_age}),
                headers : {
                    'Content-type' : 'application/json'
                }
            })
        .then(response => {     
            if (response.ok) return response.json();        
            throw new Error("Error fetching data");   
         }) 
    
         .then(data => {         
            outputAll.textContent = 'Update';   
        outputDataOne(data.data);
            }) 
    
            .catch(error => {      // catch обрабатывает возможную ошибку запроса      
            console.error("Error: ", error);    
            });
            cleanInfo('.usersInputID');
            cleanInfo('.usersInputName');
            cleanInfo('.usersInputAge');
            };