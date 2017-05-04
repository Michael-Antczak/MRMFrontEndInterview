export default function test7(string){
  //Write your solution here

  String.prototype.reverse = function()
    {
        return this.split('').reverse().join('');
    }
  //
  return string.reverse();
}

