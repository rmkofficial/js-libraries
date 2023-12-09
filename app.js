const customers = ['John', 'Mark', 'Thomas', 'Peter', 'Mary'];

const activeCustomers = ['John', 'Mary'];

const inactiveCustomers = _.difference(customers, activeCustomers);

console.log(inactiveCustomers);