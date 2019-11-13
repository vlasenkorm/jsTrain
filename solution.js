'use strict'

const s = 'SMS messages are really short';
const k = 12;

console.log(solution(s, k))

function solution(s, k) {

    let countMessage = 0;
    let arrMessage = [''];
    let check = 0;
    let fail = false;
    const message = s.split(' ');


    message.map((item) => {

        if (item.length > k) fail = true;  //check fail
        
        check += item.length;

        if (check < k) {
            arrMessage[countMessage] += ' ' + item;
            check += 1;
        } else {
            countMessage++;
            arrMessage.push(item);
            check = item.length;
        }
    }

    )

    //console.log(arrMessage.map((i) => console.log( [i, i.length])));
    if (fail) {
        return -1;
    } else {
        return countMessage + 1;
    }

}
