import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import styles from "./TodoApp.module.css";

class Task {
  constructor(id, name, description, deadline, isDone = false) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.deadline = deadline;
    this.isDone = isDone;
  }
}

const initialData = [
  new Task(1, "Clean up the room", "Start at 18:00 sharp; sort things out for moving", new Date("2023-03-20")),
  new Task(2, "Prepare the food", "Start at 12:00 PM sharp; I still have some carrots", new Date("2023-03-20")),
  new Task(3, "KHSC Migration", "Re-visit the docs; Update the local repos", new Date("2023-03-20")),
];

let count = initialData.length + 1;

const Categories = {
  "done": Symbol("done"),
  "todos": Symbol("todos"),
};

// http://localhost:3000/dev/TodoApp
export default function TodoApp() {
  const [tasks, setTasks] = useState(initialData);
  const [doneTasks, setDoneTasks] = useState([]);
  const markTaskAsOnGoing = (task) => {
    task.isDone = !(task.isDone);
    const index = doneTasks.indexOf(task);
    const task_ = doneTasks.splice(index, 1)[0];
    task_.deadline = task.deadline;
    const tasks_ = [...tasks];
    tasks_.push(task_);
    tasks_.sort((a, b) => a.id > b.id);
    setTasks(tasks_);
  };
  const markTaskAsDone = (task) => {
    task.isDone = !(task.isDone);
    const index = tasks.indexOf(task);
    const task_ = tasks.splice(index, 1)[0];
    task_.deadline = task.deadline;
    const doneTasks_ = [...doneTasks];
    doneTasks_.push(task_);
    doneTasks_.sort((a, b) => a.id > b.id);
    setDoneTasks(doneTasks_);
  };
  return <div id={styles.root}>
    {/* Todos */}
    <TaskTable
      category={Categories.todos}
      title="Todos"
      tasks={tasks}
      markTaskAsDone={markTaskAsDone}
      markTaskAsOnGoing={markTaskAsOnGoing}
      setTasks={setTasks}
    />
    {/* Done */}
    <TaskTable
      category={Categories.done}
      title="Done"
      tasks={doneTasks}
      markTaskAsOnGoing={markTaskAsOnGoing}
    />
  </div>;
}

export function TaskTable({ category, title, tasks, markTaskAsDone, markTaskAsOnGoing, setTasks = null }) {
  const handleChange = (task) => {
    if (category === Categories.todos) {
      markTaskAsDone(task)
    } else {
      markTaskAsOnGoing(task)
    }
  }
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => { setShowModal(true) };
  return (<div>
    <h1>{title}</h1>
    <table id={styles.todos}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Deadline</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => <tr key={task.id}>
          <td>{task.id}</td>
          <td>{task.name}</td>
          <td>{task.description}</td>
          <td>{task.deadline.toString()}</td>
          <td><input
            key={`status-${task.id}`}
            type="checkbox"
            checked={task.isDone}
            onChange={() => { handleChange(task) }}
          /></td>
        </tr>)}
      </tbody>
    </table>
    {category === Categories.todos &&
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
    }
    {category === Categories.todos && 
      <AddTodoModal
      tasks={tasks}
      showModal={showModal}
      setShowModal={setShowModal} setTasks={setTasks}
      />
    }
  </div>);
}

export function AddTodoModal({ tasks = null, showModal, setShowModal, setTasks = null }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const addTodo = () => {
    if (tasks == null || setTasks == null) {
      return;
    }
    let total = tasks.length + 1;
    const task = new Task(total, name, description, new Date());
    const tasks_ = [...tasks];
    tasks_.push(task);
    setTasks(tasks_);
    setName('');
    setDescription('');
    setShowModal(false);
  }
  return (<div>
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.nameInput">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" value={name} onChange={(evt) => setName(evt.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.descriptionInput">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} value={description} onChange={(evt) => setDescription(evt.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary">Close</Button> */}
        <Button variant="primary" onClick={addTodo}>Save changes</Button>
      </Modal.Footer>
    </Modal>
  </div>);
}
