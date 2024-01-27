import { FaStar } from "react-icons/fa";


const TaskList = ({ tasks, handleEditTask, handleDelete,handleFavorite }) => {
    console.log(tasks);
    return (
        <div className="overflow-auto">
            <table className=" overflow-auto xl:w-full">
                <thead>
                    <tr>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]"> Title </th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-full"> Description </th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]"> Tags </th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Priority </th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Options </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => (
                            console.log(task),
                            <tr key={task.id} className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                                <td>
                                    <button
                                        onClick={() => handleFavorite(task.id)}
                                    >
                                        {task.isFavorite ? <FaStar color="yellow"></FaStar> : <FaStar color="gray"></FaStar>}
                                    </button>
                                </td>
                                <td>{task.title}</td>
                                <td className="">
                                    <div>
                                        {task.description}
                                    </div>
                                </td>
                                <td>
                                    <ul className="flex w-56 justify-center gap-1.5 flex-wrap">
                                        {
                                            task.tags.map((tag, index) => (
                                                <li key={index}>
                                                    <span
                                                        className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#FE1A1AB5] px-2.5 text-sm capitalize text-[#F4F5F6]">{tag}</span>
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </td>
                                <td className="text-center">High</td>
                                <td>
                                    <div className="flex items-center justify-center space-x-3">
                                        <button
                                            onClick={() => handleDelete(task.id)}
                                            className="text-red-500">Delete</button>
                                        <button
                                            onClick={() => handleEditTask(task)}
                                            className="text-blue-500">Edit</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
        </div>
    );
};

export default TaskList;