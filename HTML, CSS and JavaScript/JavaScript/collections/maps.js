const getAdmins = (map) => {
    let admins = [];
    for ([key, value] of map) {
        if (value == 'Admin') admins.push(key);
    }
    return admins;
}

const roles = new Map();

roles.set('Isaac', 'User');
roles.set('Darwin', 'User');
roles.set('Steve', 'Admin');
roles.set('Ada', 'User');
roles.set('Jane', 'Admin');

console.log(getAdmins(roles));