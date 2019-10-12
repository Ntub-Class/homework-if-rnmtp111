// 請介紹兩個字串方法跟數字方法

let s1 = "1234567890";
console.log(s1.search("5"));     //search 找尋字串中所要找的文字所在的位置

console.log("*".repeat(50));
let s2 = "abbcccdddd"
console.log(s2.toLocaleUpperCase());    //toLocaleUpperCase 將字串中的小寫變成大寫

console.log("*".repeat(50));
let s3 = 3.1415926;
console.log(s3.toFixed());
console.log(s3.toFixed(2));      //toFixed 保留小數點後多少個位數，若未輸入則為0

console.log("*".repeat(50));
let s4 = 789.123;
console.log(s4.toPrecision());
console.log(s4.toPrecision(3));    //toPrecision 把數字依照指定長度顯示
console.log(s4.toPrecision(5));

console.log("*".repeat(50));
// 錢錢大於一個值，叫乾爹
let money = 40000;
let limit = 500000; // 限制值

if (money > 30000) {
    console.log("叫乾爹")
} else {
    console.log("好窮喔")
}

