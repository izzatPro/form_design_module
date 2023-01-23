// function pow(a,b){
//     let result = 1 ;
//     for(let i = 0 ; i < b ; i++){
//         result*=a;
//     }
//     return result;
// }
// console.log(pow(2,5));

// function pow(a,b){
//     if (b == 1){
//         return a;
//     }
//     if (b == 0 ){
//         return 1;
//     } else{
//         return a * pow(a , b - 1);
//     }
// }

// let students = {
//     js:[{
//         name: 'Johm',
//         progress: 100
//     }, {
//         nama: 'Ivan',
//         progress:60
//     }],

//     html:{
//         basic:[{
//             name: 'Peter',
//             progress: 20
//         },{
//             name: 'Ann',
//             progress: 18
//         }],

//         pro:[{
//             name: 'Sam',
//             progress:10
//         }],

//         medium:{
//             name: 'Sam',
//             progress:10
//         }
//     }
// }
// function total(data){
//     let total = 0;
//     let students = 0;
//     for(let course of Object.values(data)){
//         if(Array.isArray(course)){
//             students+= course.length;
//             for(let i = 0 ; i < course.length ; i++){
//                 total+= course[i].progress;
//             }
//         } else {
//             for (let subCourse of Object.values(course)){
//                 students+= subCourse.length;
//                 for(let i = 0 ; i < subCourse.length ; i++){
//                     total+= subCourse[i].progress;
//                 }
//             }
//         }
//     }
//     return total/students
// }
// console.log(total(students));



// 1. Был объект с двумя свойствами, в одном массив, в другом объект.

// 2. Проверяем являются ли исходные данные массивом. Нет, это объект. Идем в else.

// 3. Создаем массив с двумя значениями.

// 4. Задаем цикл. Обращаемся к объекту. Конкретно к значениям свойств. То есть перебираем массив, который в js и объект в html.

// 5. Создаем новую переменную, в нее вызов этой же функции, в аргументы поочередно массив и объект из пункта 4. Поочередно, потому что цикл.

// 6. Данные не знаем, функция заново запускается. В аргументы приходит массив из js. Проверяем на массив, правда. Создаем новую переменную.

// 7. Запускаем цикл и значения свойства progress приплюсовываем к новой переменной.

// 8. Возвращаем массив, в котором первое значение суммированный прогресс, второе количество значений, то есть студентов.

// 9. Эта функция завершилась. Возвращаемся к первому вызову. В переменную subDataArr помещаем массив с 160 и 2. Цикл идет дальше. Вкладываем данные массива в новый массив из блока else.

// 10. Первый шаг цикла закончился. Теперь второй. Смотрим объект из свойства html. Заново вызываем функцию, передаем этот объект.

// 11. В первом блоке условия не массив, идем дальше. Обращаемся к значениям свойств html, это basic и pro. Их значения - это массивы. Теперь они в цикле. То есть уже второй уровень цикла. Первый также идет.

// 12. Вызываем функцию, в нее вкладываем первое значение цикла - значение свойства basic - массив. Первое условие срабатывает. Функция возвращает 38 и два. Возвращаем в первую функцию и второй уровень цикла.

// 13. В subDataArr возвращается массив с 38 и 2. Следующими двумя шагами он приплюсовывается и возвращает 198 и 4.

// 14. Следующий шаг второго цикла. Помещаем в вызов функции массив из pro. Значения не знаем, значит опять вызываем функцию.

// 15. Проверяем на массив, все верно. Задаем новую переменную, в нее прогресс. Возвращаем 10 и 1.

// 16. Возвращаем в цикл. Функция вернула массив. Приплюсовываем к переменной, получаем массив с 208 и 5. Все циклы завершились, возвращаем переменную.

// 17. Помещаем вызов в новую функцию, вкладываем основной объект.

// 18. И затем делим общий прогресс на студентов.

let students = {
    js:[{
        name: 'Johm',
        progress: 100
    }, {
        nama: 'Ivan',
        progress:60
    }],

    html:{
        basic:[{
            name: 'Peter',
            progress: 20
        },{
            name: 'Ann',
            progress: 18
        }],

        pro:[{
            name: 'Sam',
            progress:10
        }],

        medium:{
            name: 'Sam',
            progress:10
        }
    }
}

function totalMark(data){
if(Array.isArray(data)){
 let total = 0;
 for(let i = 0 ; i < data.length ; i++){
    total += data[i].progress;
 }
 return [total , data.length]
}
 else{
    let total = [0,0];
    for ( let subData of Object.values(data)){
        const subDataArr = totalMark(subData);
        total[0] += subDataArr[0];
        total[1] +=subDataArr[1];
    }
    return total;
 }

}
const result = totalMark(students);
console.log(result[0]/result[1]);