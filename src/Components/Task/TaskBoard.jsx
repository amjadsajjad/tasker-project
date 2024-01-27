import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import NoTaskFound from "./NoTaskFound";

const TaskBoard = () => {
    const defaultTask = {
        id: crypto.randomUUID(),
        title: 'Integration Python',
        description: 'Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.',
        tags: ['Python', 'Java', 'Javascript'],
        priority: 'High',
        isFavorite: true
    }

    const [tasks, setTasks] = useState([defaultTask])
    const [showModal, setShowModal] = useState(false)
    const [updatedTask, setUpdatedTask] = useState(null)

    const handleAddOrEditTask = (newOrEditedTask, isAdd) => {

        if (isAdd) {
            setTasks([...tasks, newOrEditedTask])
        }
        else {
            setTasks(
                tasks.map(task => {
                    if (task.id === newOrEditedTask.id) {
                        return newOrEditedTask;
                    }
                    return task;

                }))
            setUpdatedTask(null)
        }


        setShowModal(false)

    }
    const handleEditTask = (EditedTask) => {
        setUpdatedTask(EditedTask)
        setShowModal(true)

    }

    const handleCloseClick = () => {
        setShowModal(false);
        setUpdatedTask(null)
    }

    const handleDelete = (taskId) => {
        const tasksAfterDelete = tasks.filter(task => task.id !== taskId)
        setTasks(tasksAfterDelete)

    }
    const handleAllDelete = () => {
        tasks.length = 0;
        setTasks([...tasks])
    }

    const handleFavorite = (taskId) => {

        /*
        const favouriteTaskIndex = tasks.findIndex(task => task.id === taskId)

        const newTasks = [...tasks]
        newTasks[favouriteTaskIndex].isFavorite = !newTasks[favouriteTaskIndex].isFavorite;
        setTasks(newTasks)
        */
        // this above code is okay but isn't perfect, because here is tasks are shallow copy as the tasks array having integrated objects, which is a mistake. So we have to make deep copy of the array of object. Thus the perfect way to code this programme is given below:

        const newTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, isFavorite: !task.isFavorite }
            }
            else {
                return task
            }
        })

        setTasks(newTasks)



    }

    const handleSearch = (searchText) => {
        const fileterTasks = tasks.filter(task => task.title.toLowerCase().includes(searchText.toLowerCase()))
        setTasks([...fileterTasks])
    }


    return (
        <section className="mb-20" id="tasks">
            {
                showModal && <AddTaskModal
                    updatedTask={updatedTask}
                    handleAddTask={handleAddOrEditTask}
                    handleCloseClick={handleCloseClick}
                ></AddTaskModal>
            }

            <div className="container">

                <div className="p-2 flex justify-end">
                    <SearchTask
                        handleSearch={handleSearch}
                    ></SearchTask>
                </div>
                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskAction
                        handleAddTask={() => setShowModal(true)}
                        handleAllDelete={handleAllDelete}
                    ></TaskAction>
                    {
                        tasks.length > 0 ? (<TaskList
                            tasks={tasks}
                            handleEditTask={handleEditTask}
                            handleDelete={handleDelete}
                            handleFavorite={handleFavorite}
                        ></TaskList>) : (<NoTaskFound></NoTaskFound>)
                    }
                </div>
            </div>
        </section>
    );
};

export default TaskBoard;