var express = require('express');
var router = express.Router();

const { v4: uuidv4 } = require('uuid');
console.log(uuidv4());

console.log(new Date());
let tasks = [
  {
    id: uuidv4(),
    createdAt: new Date(),
    title: "pizza",
    description: "21 people...",
  },
];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { tasks:tasks})
});

/* post / save page. */
router.post('/save', function(req, res) {
  // let title =req.body.title;
  // let description= req.body.description;
  let {title, description } = req.body;
  let newTask = {
    id: uuidv4(),
    createdAt: new Date(),
    title,
    description,
  };
  tasks.push(newTask);
  res.redirect("/");
  // res.send (req.body);
});

/* get / more/:id page. */
router.get('/more/:id', function(req, res) {
  var filteredTasks= tasks.filter(function (task){
    return req.params.id === task.id;
  });
  res.render("more", {task: filteredTasks[0]});
  // console.log(filteredTask);
});

/* post / update/:id page. */
router.post('/update/:id', function(req, res) {
const {id} = req.params;
const idx = tasks.findIndex(function (task){
    return id === task.id;
});
tasks[idx] = {...tasks[idx],...req.body};
res.redirect("/")
});
/* get / delete/:id page. */
router.get('/delete/:id', function(req, res) {
  var filteredTasks= tasks.filter(function (task){
    return req.params.id !== task.id;
  });
  tasks= filteredTasks;
  res.redirect("/")
  });
module.exports = router;
