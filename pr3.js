// 1
function isPrime(num) {
    let divs = 0
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            divs++;
        }
    }
    return (divs <= 2)
}

function countPrimes(n) {
    let res = 0
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            res++;
        }
    }
    return res;
}


console.log(countPrimes(6))


// 2
class BigNumberMultiplier {
    constructor(a, b) {
        this.a = a
        this.b = b
    }

    multiply() {
        let aa = this.a.split('').reverse();
        let bb = this.b.split('').reverse();
    
        let stack = [];
    
        for (let i = 0; i < aa.length; i++) {
            for (var j = 0; j < bb.length; j++) {
                var m = aa[i] * bb[j];
                stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
            }
        }
    
        for (var i = 0; i < stack.length; i++) {
            var num = stack[i] % 10;
            var move = Math.floor(stack[i] / 10);
            stack[i] = num;
        
            if (stack[i + 1]) {
                stack[i + 1] += move;
            }
            else if (move != 0) {
                stack[i + 1] = move;
            }
        }

        return stack.reverse().join('');
    }
}

console.log(Number(new BigNumberMultiplier('113412414124', '113412414125').multiply()) === 113412414124 * 113412414125)
