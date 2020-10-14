const skills = [
  {'end': 'Front', 'skill': 'HTML'},
  {'end': 'Front', 'skill': 'CSS'},
  {'end': 'Front', 'skill': 'JavaScript'},
  {'end': 'Back', 'skill': 'Express'}
]

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  editOne,
  update
}

function getAll() {
  return skills;
}

function getOne(id) {
  return skills[id];
}

function create(skill) {
  skills.push(skill);
}

function deleteOne(skill) {
  const idx = skills.findIndex(s => s.skill === skill);
  skills.splice(idx,1);
}

function editOne(skill) {
  return skills.find(s => s.skill === skill);
}

function update(skill) {
  const idx = skills.findIndex(s => s.skill === skill.skill);
  skills.splice(idx,1,skill);
}