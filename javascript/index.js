function addNumbers(){
       var num1 = Number(document.getElementById('first').value)
       var num2 = Number(document.getElementById('second').value)
       console.log(num1 + num2)
       var sum = num1 + num2
       alert(sum)
document.getElementById('message').innerHTML = 'The sum is : ' + sum
}





//console.log('hi from external js file')
