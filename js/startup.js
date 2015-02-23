// add remove method in Array.prototype
if (!Array.prototype.remove) {
  Array.prototype.remove = function(val) {
    var i = this.indexOf(val);
         return i>-1 ? this.splice(i, 1) : [];
  };
}

// add exist method in Array.prototype
if (!Array.prototype.exists) {
  Array.prototype.exists = function(val) {
    var i = this.indexOf(val);
         return i != -1;
  };
}
