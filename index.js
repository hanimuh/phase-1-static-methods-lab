class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(str) {
    return str.replace( /[^A-Za-z0-9 '-]/g, '' );
  }
  static titleize(str) {
    let excep= ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
      if (i===0){
        arr[i] = this.capitalize(arr[i]);
      }else if (excep.includes(arr[i])) {
        arr[i] = arr[i].toLowerCase();
      }else{
        arr[i] = this.capitalize(arr[i]);
      }
    }
    return arr.join(' ');
  }
}
console.log (Formatter.titleize("a tale of two cities"));