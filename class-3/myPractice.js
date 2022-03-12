function myInfo (){
    console.log("My name is Mushfiqur Rahman. I am 25 years old")
}
myInfo()

function profileInfo (name, age, job){
    console.log('My name is ' + name + ' i am '+ age + ' years old ' + 'I am a ' + job)
}
profileInfo('Mushfiq', 25, 'WebDeveloper')
profileInfo('Saquib', 35, 'Enginner')

function profileInfoF (name, age, job){
    console.log(`My name is ${name}. i am ${age} years old. I am a  ${job}`)
}
profileInfoF('Mushfiq', 25, 'WebDeveloper')
