// // Write your solution in this file!
// const employee = {
//     name: "Hilary",
//     streetAddress: "310 S Clay st.",
// }
// function updateEmployeeWithKeyAndValue(employee, key, value){
//     const newObj = { ...employee };
//     newObj[key]= value;
//     return newObj;
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
//     employee[key]= value;
//     return employee;
// }
// function deleteFromEmployeeByKey(employee, key){
//     const newestObj = { ...employee  };
//     delete newestObj[key];
//     return newestObj;
// }
// function destructivelyDeleteFromEmployeeByKey(employee, key){
// delete employee[key];
// return employee;
// }

const employee = {
    name: "Karyn",
    streetAddress: "1234 Lousiana blvd",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;

} 
    
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newObj = {...employee};
    delete newObj[key];
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}