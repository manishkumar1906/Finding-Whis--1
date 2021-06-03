var GrandPriest
var Whis
var Zeno
var follower1,follower2,follower3

var gameState = 4

function preload(){
  //load all images
  bg_image1 = loadImage("images/BG1.jpg")
  bg_image2 = loadImage("images/BG2.jpg")
  
  scroll_img =loadImage("images/ThreatNote.png")

  zeno_img = loadImage("images/Zeno.png")
  whis_img = loadImage("images/Whis.png")
  follower1_img = loadImage("images/Zarama.png")
  follower2_img = loadImage("images/Belmod.png")
  follower3_img = loadImage("images/Beerus.png")
  grandPriest_img1 = loadImage("images/GrandPriest1.png")
  grandPriest_img2 = loadImage("images/GrandPriest2.png")
  grandPriest_img3 = loadImage("images/GrandPriest3.png")
  grandPriest_img4 = loadImage("images/GrandPriest4.jpg")

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  //grandPriest
  grandPriest =createSprite(170,400,10,10)
  grandPriest.addImage(grandPriest_img1)
  grandPriest.scale = 0.5
  //grandPriest.visible = false
  
  //Zeno
  zeno = createSprite(340,400,10,10)
  zeno.addImage(zeno_img)
  zeno.scale = 0.5
  //zeno.visible = false
  
  //follower1
  follower1 = createSprite(550,400,10,10)
  follower1.addImage(follower1_img)
  follower1.scale = 0.5
  //follower1.visible = false

  //follower2
  follower2 = createSprite(740,400,10,10)
  follower2.addImage(follower2_img)
  follower2.scale = 0.7
  //follower2.visible = false

  follower3 = createSprite(960,400,10,10)
  follower3.addImage(follower3_img)
  follower3.scale=0.4
  //follower3.visible = false
  
  //whis
  whis = createSprite(1150,400,10,10)
  whis.addImage(whis_img)
  whis.scale = 0.7
  //whis.visible = false

  button = createButton("next")
  button.position(600,550)
  button.size(100,50)

}

function draw() {
 
  textSize(40)
  fill("white")
  
  if(gameState === 0){
    background(bg_image1);  
    text ("Finding Whis",600,50)
    button.mouseClicked(()=>{
      gameState =1
    })
  }
  else if(gameState === 1){
    //story
    background(bg_image2);  
    
    text ("Finding Whis",600,50)
    text ("The Grand Priest is an Angel.He is the father of \nMartinu, Vados, Whis,Marcarita and Kusu.\nGrand Priest is the Most Powerfull in all the multiverse.\nHis favourite son is Whis, who is the weekest angle of all\nWhis has been kidnapped by Zeno. \nZeno is the enemy, has kidnapped Whis because he wants to take \nall the powers of Grand Priest \nto become the most powerful in the multiverse.",100,200)
    button.mouseClicked(()=>{
      gameState =2
    })
  }
  else if(gameState === 2){
    background(bg_image2);  
    grandPriest.visible = false
    zeno.visible = false
    follower1.visible = false
    follower2.visible = false
    follower3.visible = false
    whis.visible = false
    whis.visible = false
    text ("Finding Whis",600,50)
//write about each character

    button.mouseClicked(()=>{
      gameState =3
    })
  }
  else if(gameState === 3){
    //Your TAsks
    background(bg_image2);  
    grandPriest.visible = false
    zeno.visible = false
    follower1.visible = false
    follower2.visible = false
    follower3.visible = false
    whis.visible = false
    whis.visible = false
    text ("Finding Whis",600,50)
    text("Your Tasks: \n 1. find clues to locate Whis in the multiverse\n 2. fight the followers of Zeno\n 3. travel through the multiverse and stay away from \ntraps and obstacles\n 4. rescue Whis by defeating Zeno",200,100)
    button.mouseClicked(()=>{
      gameState =4
    })
  }
  else if(gameState === 4){
    //searching clues
    grandPriest.visible = false
    zeno.visible = false
    follower1.visible = false
    follower2.visible = false
    follower3.visible = false
    whis.visible = false
    whis.visible = false
    background(0)
    image(scroll_img,100,50,1200,600)
    tint(255,190)
    image(follower1_img,900,150,250,400)
    fill("brown")
    strokeWeight(6)
    stroke("black")
    text ("This is King Zeno's follower,Zarama.\n We have captured Whis.\n If you want to save your son then \n come to the palace of Zeno-Sama.\n We will be waiting for you. \n Or find your son's body in the void. ",240,200)
    button.mouseClicked(()=>{
      gameState = 5
    })
  }
  else if(gameState === 5){
    //battel b/w followers and grand priest
    
  }
  else if(gameState === 6){
    
  }


  drawSprites();
}