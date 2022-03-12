function profileInfo(name, age, job, decription) {
  return `I am ${name} and ${age} years old. I am a  ${job}. I love ${decription}.`;
}
let info = profileInfo("Mushfiq", 25, "WebDeveloper", '"javascript"');

console.log(info);

let movieArr = [
  {
    id: 1,
    name: "SpiderMan home Comming",
    category: "action",
    rating: 9.5,
  },
  {
    id: 2,
    name: "IronMan",
    category: "action",
    rating: 8.8,
  }
];

function movies(movieArr){
    let movieIndex =  movieArr[1];
    return `Movie ${movieIndex.name} got IMDB Rating ${movieIndex.rating}. Which was ${movieIndex.category} Category`
}

const data = movies(movieArr)

console.log(data)
