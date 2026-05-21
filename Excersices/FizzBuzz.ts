function FizzBuzz(n: number){

    for(let i = 1; i<=n ; i++){
        if(i % 15 === 0) console.log('FizzBuzz')// % 0 if the number divided by 15, the remainder is === 0 will be FizzBuzz
        else if(i % 5 === 0) console.log('Buzz')
            else if(i % 3 === 0) console.log('Fizz')
                else console.log(i)
    }
}

FizzBuzz(15)