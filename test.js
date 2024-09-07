let days = ['Thursday', 'Friday', 'Saturday', 'Sunday'];
let hours = [5,6,7,8]

let reply = '';
for (let day of days) {
    for (let hour of hours) {
        reply += '**' + day + ' ' + hour + ' PM**\n';
        reply += '-# @uglyelephant' + '\n';
        reply += '\n';
    }
}

console.log(reply);