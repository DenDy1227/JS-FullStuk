let deleteFunc = function (delArr, arrNum) {
    delArr.splice(arrNum, 1);
}
//**task2 HW6 */

let objectKey = function (obj) {
    return Object.keys(obj);
}
//**task3 HW6 */

let objectValues = function (obj) {
    return Object.values(obj);
}
// **task4 HW6//

let funcObjPlus = function (obj1, id) {
    studentArr.splice(0, id, obj1)
}

//**task5 HW6  */
class Condidate {
    constructor(arr) {
        this.condidate = arr;
    }
    state() {
        let arrCondidate = this.condidate.address.split(',');

        console.log(arrCondidate[1])
    }
}

//**task6 HW6 */
let firmPlus = function (arr, company = 'company') {
    let arrCompany = [];
    for (let i = 0; i < arr.length; i++) {
        arrCompany.push(arr[i][company])
    }
    console.log(arrCompany);
}

//**task7 HW6 */----------failed
let yearFunc = function (year) {
    let arrYear = [];
    for (let i = 0; i <= condidateArr.length; i++) {
        let str = condidateArr[i]['registered']
        if (str.startsWith(year)) {
            return arrYear.push(condidateArr[i]['_id']);
        } console.log(arrYear);

    } console.log(arrYear);

}

//**task 8 HW6 */
let funkFilterMesseng = function (num) {
    let arrMesseng = [];
    for (let i = 0; i < condidateArr.length; i++) {
        if (condidateArr[i]["greeting"].split(" ")[5] == num) {
            arrMesseng.push(condidateArr[i])
        }
        console.log(arrMesseng)
    }
}

//**task 9 HW6 */
let funkGender = function (gen) {
    let arrGender = [];
    for (let i = 0; i < condidateArr.length; i++) {
        if (condidateArr[i]["gender"] == gen) {
            arrGender.push(condidateArr[i])
        }
        console.log(arrGender)
    }
}

//**task 10 HW6 */