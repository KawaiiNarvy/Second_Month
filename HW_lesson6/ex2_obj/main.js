// 2: создать объект у которого есть 5 ключей после создать новый объект и распаковав в новый объект 
// дополнить 3 ключами
const obj = {
    first: "key1",
    second: "key2",
    third: "key3",
    fourth: "key4",
    fifth: "key5"
}

const total = {
    ...obj,
    new_first: "key1",
    new_asecond: "key2",
    new_third: "key3"
}

console.log(total);