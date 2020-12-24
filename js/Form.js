class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset')
    this.info = createElement('h2')
  //  this.game = createButton('3')
    this.next = createButton('Next')
    this.start = createButton('Start Your Story');
 
  }
   hideStuff(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Untitled Game");
    this.title.position(600, 100);

    this.input.position(450, 200);
    this.button.position(650,200);
   // this.game.mousePressed(()=>{
     // gameState = 3;
   // })
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Welcome " + player.name)
      this.greeting.position(600, 300);
      this.info.html(player.name + " is the red paddle!")

    });
    this.reset.mousePressed(()=>{
      var dbRef;
      dbRef = database.ref('players')
      dbRef.remove();
      player.resetCount();
      window.location.reload();
    });
    text("Start the story!",600,100)
    this.start.position(600,300);
    this.start.mousePressed(()=>{
      storyState+=1
    })

    this.next.mousePressed(()=>{
      storyState+=1;
      console.log(storyState)

      if(storyState===0){
        this.start.hide();
      }
  
      if(storyState===1){
        image(a,0,0,700,490);
        form.start.hide();
        form.hideStuff();
      }
  
      if(storyState===2){
        strokeWeight(0);
        fill("white")
        rect(0,0,700,490)
        image(b,0,0,700,490);
        form.start.hide();

        form.hideStuff();
        

  
      }
  
      if(storyState===3){
        strokeWeight(0);
        fill("white")
        rect(0,0,700,490)
        image(c,0,0,700,490);
        form.hideStuff();
        form.start.hide();

  
      }
  
      if(storyState===4){
        strokeWeight(0);

        fill("white")
        rect(0,0,700,490)
        image(d,0,0,446,452);
        form.hideStuff();
        form.start.hide();

      }
    })

    


   

  }
}
