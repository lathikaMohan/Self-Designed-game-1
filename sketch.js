var title;
var mentalAbility;


function setup() {
  createCanvas(400,600);
  
  title = createElement('h2')
  title.html("Your Brain Lab ");
  title.position(510, 100);

  mentalAbility = createButton('Mental Ability');
  mentalAbility.position(530, 230);




}

function draw() {
  background("lightpink");  
  drawSprites();
}