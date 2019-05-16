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

//функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
function getAllUsers(){
    fetch('https://test-users-api.herokuapp.com/users')
    
    .then(response => {     
        if (response.ok) return response.json();        
        throw new Error("Error fetching data");   
     }) 

     .then(data => {         
        console.log("data inside then: ", data);    
        
        outputAll.textContent = JSON.stringify(data);    
        console.log(data);
        }) 

        .catch(error => {      // catch обрабатывает возможную ошибку запроса      
        console.error("Error: ", error);    
        });
        };
        

       
        //функция getUserById(id) - должна вернуть пользователя с переданным id.
        function getUserById(){
let userId = prompt('userID','5cdd99664b83e200144cb4f2');
            fetch(`https://test-users-api.herokuapp.com/users/${userId}`)
    
    .then(response => {     
        if (response.ok) return response.json();        
        throw new Error("Error fetching data");   
     }) 

     .then(data => {         
        console.log("data inside then: ", data);    
        
        //data.forEach(element => {
        outputAll.textContent = JSON.stringify(data);    
        console.log(data);
        }) 
        .catch(error => {      // catch обрабатывает возможную ошибку запроса      
        console.error("Error: ", error);    
        });
        };
       
        
        
        //функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
       function addUser(){
            let user_name = prompt('Name','Roman');
            let user_age = prompt('Age','44');

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
            console.log("data inside then: ", data);    
            outputAll.textContent = JSON.stringify(data);    
            }) 
            .catch(error => {      // catch обрабатывает возможную ошибку запроса      
            console.error("Error: ", error);    
            });
            };

       // функция removeUser(id) - должна удалять из БД юзера по указанному id.

       function removeUser(){
           let userIDRe = prompt('userID','5cdd99664b83e200144cb4f2');
        fetch(`https://test-users-api.herokuapp.com/users/${userIDRe}`,{method :'delete'})
    .then(response => {     
        if (response.ok) return response.json();        
        throw new Error("Error fetching data");   
     }) 

     .then(data => {         
        console.log("data inside then: ", data);    
        
        outputAll.textContent = JSON.stringify(data);    
        console.log(data);
        }) 

        .catch(error => {      // catch обрабатывает возможную ошибку запроса      
        console.error("Error: ", error);    
        });
        };
       
        //функция updateUser(id, user) - должна обновлять данные пользователя по id. user это объект с новыми полями name и age.
        
        function updateUser(){
            
            let userId = prompt('userID','5cdd99664b83e200144cb4f2');
            let user_name = prompt('Name','Roman');
            let user_age = prompt('Age','44'); 
           
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
            console.log("data inside then: ", data);    
            
            outputAll.textContent = JSON.stringify(data);    
            console.log(data);
            }) 
    
            .catch(error => {      // catch обрабатывает возможную ошибку запроса      
            console.error("Error: ", error);    
            });
            };