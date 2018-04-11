//ToolTip Class
function ToolTip(x, y, w, h){
  TextBox.call(this, x, y, w, h);
  
}

ToolTip.prototype = Object.create(TextBox.prototype);
ToolTip.prototype.constructor = TextBox;
ToolTip.prototype.isToolTip = true;
