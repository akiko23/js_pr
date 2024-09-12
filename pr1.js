//1
function isPrime(num) {
  for (let i = 2; i < Math.round(num / 2); i++) {
      if (num % i === 0) {
        return false;
      }
  }
  return true
}


for (let i = 2; i < 21; i++) {
  console.log(isPrime(i))
}


// 2
let arr = []
for (let i = 5; i < 15; i++) {
  arr.push(Math.round(Math.random() * i))
}

function findMinMax(a) {
  let [max, min] = [0, 9999];
  for (const el of a) {
    if (el > max) {
      max = el;
    }
    if (el < min) {
      min = el;
    }
  }
  return {min: min, max: max}
}

console.log(findMinMax(arr))


// 3
let user = {
  name: 'Vasya',
  age: 15,
  email: 'vasya228@gmail.com',
}

function displayUserInfo(user) {
  console.log(`Имя: ${user.name}, Возраст: ${user.age}, Email: ${user.email}`)
}


// 4
let studentNames = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"];
studentNames.forEach((name, ind) => {
  console.log(`Студент ${name}, ваш порядковый номер: ${ind}`)
})

function findLongestName(names) {
  let longestName = '';
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > longestName.length) {
      longestName = names[i];
    }
  }
  return longestName
}

console.log(findLongestName(studentNames))



//5
function formatDate(dt) {
    let hm = dt.toISOString().split('T')[1].split('.')[0]
    hm = [hm.split(':')[0], hm.split(':')[1]].join(':')
    
    let ymd = dt.toISOString().split('T')[0]
    ymd = ymd.split('-').join('.')
    return ymd + ' ' + hm
}

function dateDiff(d1, d2) {
    var t2 = d1.getTime();
    var t1 = d2.getTime();

    return Math.floor((t2-t1)/(24*3600*1000));
}

let date = new Date(Date.now())
console.log(formatDate(date))

const date2 = new Date('2024-09-10T03:24:00');
console.log(dateDiff(date, date2))


// extra1
function reverseString(string) {
    let res = '';
    for (let i = string.length - 1; i > -1; i--) {
        res = res + string[i]
    }
    return res;
}

console.log(reverseString('blabla'))


//extra2
function removeVowels(string) {
    let stArr = string.split('')
    for (let i = 0; i < stArr.length; i++) {
        if (['a', 'e', 'i', 'o'].some((el) => el === stArr[i])) {
            stArr[i] = ''
        }
    }
    return stArr.join('')
}
console.log(removeVowels('aabbiihop'))

