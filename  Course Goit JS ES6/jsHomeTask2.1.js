 /* Есть три курорта: taba, sharm или hurgada.

    Необходимо через prompt попросить ввести число, от 1 до 3-х.

    В тексте prompt необходимо написать какое число соотвествует
    какому курорту, на ваш выбор.

    После этого вывести сообщение о том, что пользователь
    выбрал такой-то курорт или сообщение о том, что введено
    число, варианта курорта для которого не было.*/

    //Task2.1
let ansverUser = prompt(`Сhoose a resort:
1 - taba
2 - sharm
3 - hurgada`, 1);

/*  if (ansverUser == '1') {
    alert('Choose taba');
} else if (ansverUser == '2'){
    alert('Choose sharm');
} else if (ansverUser == '3'){
    alert('Choose hurgada');
} else {
    alert('Numbers do not exist');
}*/


switch (ansverUser) {
  case '1':
    alert( 'Choose taba' );
    break;
  case '2':
    alert( 'Choose sharm' );
    break;
  case '3':
    alert( 'Choose hurgada' );
    break;
  default:
    alert( 'Numbers do not exist' );
}

/*Задание повышенной сложности

        Пользователь через prompt вводит число участников группы.
    Необходимо проверить является ли введенные данные целым
    положительным числом. Вывести alert в случае ошибочного ввода.

    Всего имеется три группы sharm, hurgada и taba.
    В группах ограничено кол-во свободных мест:
    sharm - 15
    hurgada - 25
    taba - 6

    Если количество мест позволяет, то вывести пользователю
    сообщение через confirm что есть место в группе такой-то,
    согласен ли пользоваетель быть в этой группе?

    Если ответ ok, уменьшаем число свободных мест на  число участников группы.
    Если ответ нет, предлагаем следующую группу со свободными местами.

    Если мест нигде нет, выводим сообщение alert('Мест нет!')*/
    
    //Task2.2
    let sizeGroupSharm = 15;
    let sizeGroupHurgada = 25;
    let sizeGroupTaba = 6;
    var choice = false;
    let v = 1;
  
    
  
  
  while(v != 0) {
  v = 0;
  
  var ansverUser = prompt('Enter the number of group members', 1);
  
  if (ansverUser <= 0){
  alert('Numbers are not positive ');
  v++;
  }
  if ((+ansverUser ^ 0) !== +ansverUser){
    alert('Number are not integer');
    v++;
  }  
    
            
  }        
   
  
  if (sizeGroupSharm >= +ansverUser){
    choice = confirm('Group Sharm have free place, does the user agree to be in this group?');
    //alert(choice);
    if (choice === true){
        sizeGroupSharm = sizeGroupSharm - +ansverUser;
    }
  } 
    
  if ((choice === false) && (sizeGroupHurgada >= +ansverUser)){
    choice =  confirm('Group Hurgada have free place, does the user agree to be in this group?');
    //alert(choice);
    if (choice === true){
        sizeGroupHurgada = sizeGroupHurgada - +ansverUser;
    }
  }    
    
  if ((choice === false) && (sizeGroupTaba >= +ansverUser)){
    choice =  confirm('Group Taba have free place, does the user agree to be in this group?');
    //alert(choice);
    if (choice === true){
        sizeGroupTaba = sizeGroupTaba - +ansverUser;
    }
  }
  
  if (choice === false){
    alert (`There are no places`);
  }
  alert (`Shaba = ${sizeGroupSharm} 
  Hurgada = ${sizeGroupHurgada}
  Taba = ${sizeGroupTaba}`);