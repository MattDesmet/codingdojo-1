var salary = 0.01;
days = 1;
for (var i = 1; i <=30 ; i++) {
    console.log(salary);
    //note to self: i put console.log(salary) before salary = salary + salary, this caused it to start salary at 0.02 on day one rather than 0.01 on day one.
    salary = salary + salary;
    console.log(days);
    days++;
}
//day 30 reward = $5368709.12
//21 days to get to $10'000