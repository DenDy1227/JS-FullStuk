class Student {
    static listOfStudenst = [];
    constructor(enrolee) {
        this.id = Student.listOfStudenst.length + 1;
        this.name = enrolee.name;
        this.surname = enrolee.surname;
        this.ratingPoint = enrolee.ratingPoint;
        this.schoolPoint = enrolee.schoolPoint;
        Student.listOfStudenst.push(this);
        this.isSelfPayment = this.isSelfPayment();
    }


    isSelfPayment() {
        const campare = function (a, b) {
            if (a.ratingPoint > b.ratingPoint)
                return -1;
            if (a.ratingPoint < b.ratingPoint)
                return 1;
            if (a.ratingPoint = b.ratingPoint)
                return function comp(a, b) {
                    if (a.schoolPoint > b.schoolPoint)
                        return -1;
                    if (a.schoolPoint < b.schoolPoint)
                        return 1;
                    if (a.schoolPoint = b.schoolPoint)
                        return 0;
                }
        }
        let sorted = Student.listOfStudenst.sort(campare).slice(0, 5);
            Student.listOfStudenst.forEach(stud => {if(sorted.includes(stud)){
                return false;
            }
            return true;
        })
    }


 }
const studentArr = [{
    name: 'Сергей',
    surname: 'Войлов',
    ratingPoint: 1000,
    schoolPoint: 1000,
    course: 2,
},
{
    name: 'Татьяна',
    surname: 'Коваленко',
    ratingPoint: 880,
    schoolPoint: 700,
    course: 1,
},
{
    name: 'Анна',
    surname: 'Кугир',
    ratingPoint: 1430,
    schoolPoint: 1200,
    course: 3,
},
{
    name: 'Станислав',
    surname: 'Щелоков',
    ratingPoint: 1130,
    schoolPoint: 1060,
    course: 2,
},
{
    name: 'Денис',
    surname: 'Хрущ',
    ratingPoint: 1000,
    schoolPoint: 990,
    course: 4,
},
{
    name: 'Татьяна',
    surname: 'Капустник',
    ratingPoint: 650,
    schoolPoint: 500,
    course: 3,
},
{
    name: 'Максим',
    surname: 'Меженский',
    ratingPoint: 990,
    schoolPoint: 1100,
    course: 1,
},
{
    name: 'Денис',
    surname: 'Марченко',
    ratingPoint: 570,
    schoolPoint: 1300,
    course: 4,
},
{
    name: 'Антон',
    surname: 'Завадский',
    ratingPoint: 1090,
    schoolPoint: 1010,
    course: 3
},
{
    name: 'Игорь',
    surname: 'Куштым',
    ratingPoint: 870,
    schoolPoint: 790,
    course: 1,
},
{
    name: 'Инна',
    surname: 'Скакунова',
    ratingPoint: 1560,
    schoolPoint: 200,
    course: 2,
},
]


//new Student(studentArr[6]);
//console.log(Student.listOfStudenst);
let st1 = new Student(studentArr[1])
let st2 = new Student(studentArr[2])
let st3 = new Student(studentArr[3])
let st4 = new Student(studentArr[4])
let st5 = new Student(studentArr[5])
let st6 = new Student(studentArr[6])
let st7 = new Student(studentArr[7])
let st8 = new Student(studentArr[8])
let st9 = new Student(studentArr[9])
let st10 = new Student(studentArr[10])
let st12 = new Student(studentArr[0])


// /////
// //class CustomString
// //
// //{
// //    constructor()
// //    reverse(){
// //        this.reverse();
// //    }
// //}
// //
class CustomString {

    constructor(str) {
        this.str = str;
    }
    reverse() {
        let arr = Array.from(str).reverse();

        return arr.join("");
    }
    ucFirst() {
        let arr = Array.from(str);
        let arr2 = arr.slice(1).join("");
        console.log(arr[0].toUpperCase() + arr2);
    }
    ucWords() {
        let arr3 = this.str.split(" ");
        let resultStr = '';
        for (let i = 0; i < arr3.length; i++) {
            resultStr += arr3[i][0].toUpperCase() + arr3[i].slice(1) + " "
        } console.log(resultStr)
    }
}
class validator {
    constructor(string) {
        this.str = string;
    }
    checkIsEmail() {
        let adres = this.str.endsWith('@gmail.com')
        console.log(adres);
    }

    checkIsDomain() {
        let domen = this.str.endsWith('.com' || '.net' || '.org' || '.biz' || '.info' || '.ua' || '.ru' || '.me')
        console.log(domen);
    }
    checkDate() {
        let dateTest = this.str;
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        let dateFunc2 = function (dateTest) {
            let arrTest = dateTest.split('.' || '-')
            console.log(arrTest);
            if (arrTest[0] > 31) {
                return false;
            }
            else if (arrTest[1] > 12) {
                console.log(arrTest[0])
                return false
            }
            else if (arrTest[2] > 2050) {
                return false
            }
            return true;
        }
    }
    checkIsPhone() {
        let strPhone = this.str;
        let funPhone = function (strPhone) {
            let arrPhone = strPhone.split(' ' || '-');
            console.log(arrPhone);
            if (arrPhone === '+38') {
                return true;
            }
            return false;
        }
    }
}