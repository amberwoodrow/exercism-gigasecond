function Gigasecond(birthday) {
  this.birthday = new Date(birthday);
}

Gigasecond.prototype.date = function() {
  b = new Date(this.birthday.setSeconds(this.birthday.getSeconds() + 1000000000 ));
  return new Date(b.getFullYear(), b.getMonth(), b.getDate());
};

module.exports = Gigasecond;