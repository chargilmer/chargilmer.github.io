const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
const insertX = ["Goose the white dog","The Easter Bunny", "Ralphie"] ;
const insertY = ["Atlas Building","Folsom Field","Gates of Heaven"];
const insertZ = ["turned to goop","found a penny","licked a popsicle"];


randomize.addEventListener('click', result);
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    
    newStory = newStory.replace(/:insertx:/g,xItem);
    newStory = newStory.replace(/:inserty:/g,yItem);
    newStory = newStory.replace(/:insertz:/g,zItem);

function result() {

  if(customName.value !== '') {
    newStory = newStory.replace("Bob", customName.value);
    const name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * .071429) + " stones";
    const temperature =  Math.round((94 - 32) * 5 / 9) + "centigrade";
    newStory = newStory.replace("94°F", temperature);
    newStory = newStory.replace("300 pounds", weight);

  }



  story.textContent = newStory;
  story.style.visibility = 'visible';
  
}


