function Container(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.tabs = [];
  this.activeTab = null;

  this.party = null;
}

Container.prototype.display = function() {
  this.displayBorder();

  //Display all Tabs
  for (i=0; i<this.tabs.length; i++) {
    this.tabs[i].display();
  }

  //Display Active Tab's Objects
  this.displayActiveTab();
}

Container.prototype.displayBorder = function() {
  strokeWeight(2);
  stroke(0);
  fill(255);
  rect(this.x, this.y, this.w, this.h);
}

Container.prototype.add = function(obj) {
  this.tabs[0].objs.push(obj);
}

Container.prototype.setActiveTab = function(tab) {

  //Put a try catch here if index out of this.tabs range
  this.activeTab = tab;  //this.tabs[index];

  for (i=0; i<this.tabs.length; i++) {
    if (this.tabs[i] != this.activeTab) {
      //Set INACTIVE Tabs component InActive
      for (j=0; j<this.tabs[i].objs.length; j++) {
        
        //Disable Buttons
        if (this.tabs[i].objs[j].isButton) {
          this.tabs[i].objs[j].isHidden = true;
        }
        
        
      }
    } else {
      //Set ACTIVE Tabs component Active
      for (j=0; j<this.tabs[i].objs.length; j++) {
        
        
        if (this.tabs[i].objs[j].isButton) {
          this.tabs[i].objs[j].isHidden = false;
        }
        
        
      }
    }
  }
}

Container.prototype.reSize = function(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}

Container.prototype.displayActiveTab = function() {
  for (i=0; i<this.activeTab.objs.length; i++) {
    this.activeTab.objs[i].display();
  }
}

function PartyContainer(x, y, w, h) {
  Container.call(this, x, y, w, h);

  this.party = null;
}

PartyContainer.prototype = Object.create(Container.prototype);
PartyContainer.prototype.constructor = Container;
PartyContainer.prototype.isPartyContainer = true;

PartyContainer.prototype.display = function() { 
  this.displayBorder();

  if (this.party != null) {
    this.party.display(this.x, this.y, this.w, this.h);
  } else {
    console.warn("Tried to display null party.");
  }
}
