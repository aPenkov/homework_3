export function Gamer(name,id) {
  this.score = 0;
  this.name = name;
  this.id = id;

  this.getScore = () =>{
    return this.score;
  }

  this.setScore = (score) => {
    this.score += score;
    return this.score;
  }
  this.resetScore = () => {
    this.score = 0
  }
}
