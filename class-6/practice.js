for(var i = 0; i < 10; i++) {
    console.log('Go ' + i + ' step');
}

for(var i = 0; i < 10; i++) {
    if(i === 5) {
        break;
    }
    console.log('i is now at: ' + i);
}
 
 let obj = {
   Bangladesh: 'Dhaka',
   India: 'Delhi', 
   Nepal: 'Kathmandu', 
   Afganistan: 'Kabul', 
   Thailand: 'Bangkok'
 }

 let capital = Object.values(obj)

 console.log(capital)

 Object.values(obj).map(function(capital){
     console.log('Capital is ' + capital)
 })


 var countries = Object.keys(obj)

 console.log(countries)

 countries.map(function(country) {
    console.log('Capital of ' + country + ' is: ' + obj[country]);
})

Object.keys(obj).map(country => console.log(`Capital of ${country} is: ${obj[country]}` ))
