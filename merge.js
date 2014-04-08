function deepMerge(){
  var o = {};
  for(var i in arguments){
    if(typeof arguments[i] != "object") continue;
    for(var k in arguments[i]){
      if(k in o){
        if(Array.isArray(o[k]) && Array.isArray(arguments[i][k])){
          var l = o[k].length;
          for(var n in arguments[i][k]) o[k][l+n]=arguments[i][k][n];
        } else if(typeof o[k] == "object" && typeof arguments[i][k] == "object")
          o[k] = deepMerge(o[k], arguments[i][k]);
        else o[k]=arguments[i][k];
      } else o[k]=arguments[i][k];
    }
  }
  return o;
}

function extend(){
  var o = {};
  for(var i in arguments) for(var k in arguments[i]) o[k] = arguments[i][k];
  return o;
};

extend.prototype.deep = deepMerge;

module.exports = deepMerge;