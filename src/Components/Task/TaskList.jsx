
const TaskList = () => {
    return (
        <div className="overflow-auto">
            <table className="table-fixed overflow-auto xl:w-full">
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
                    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                        <td><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="24"
                            height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="yellow" fill="yellow"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                        </svg></td>
                        <td>Integration API</td>
                        <td>
                            <div>
                                Connect an existing API to a third-party database using
                                secure methods and handle data exchange efficiently.
                            </div>
                        </td>
                        <td>
                            <ul className="flex justify-center gap-1.5 flex-wrap">
                                <li>
                                    <span
                                        className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">Web</span>
                                </li>
                                <li>
                                    <span
                                        className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#1C92FFB0] px-2.5 text-sm capitalize text-[#F4F5F6]">Python</span>
                                </li>
                                <li>
                                    <span
                                        className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#FE1A1AB5] px-2.5 text-sm capitalize text-[#F4F5F6]">API</span>
                                </li>
                            </ul>
                        </td>
                        <td className="text-center">High</td>
                        <td>
                            <div className="flex items-center justify-center space-x-3">
                                <button className="text-red-500">Delete</button>
                                <button className="text-blue-500">Edit</button>
                            </div>
                        </td>
                    </tr>
                    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                        <td><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="24"
                            height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                        </svg></td>
                        <td>API Data Synchronization with Python</td>
                        <td>
                            <div>
                                Implement a Python solution to synchronize data between an
                                API and a third-party database securely, optimizing data
                                exchange.
                            </div>
                        </td>
                        <td>
                            <ul className="flex justify-center gap-1.5 flex-wrap">
                                <li>
                                    <span
                                        className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">Python</span>
                                </li>
                                <li>
                                    <span
                                        className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#FE1A1AB5] px-2.5 text-sm capitalize text-[#F4F5F6]">API</span>
                                </li>
                                <li>
                                    <span
                                        className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#BD560BB2] px-2.5 text-sm capitalize text-[#F4F5F6]">Data
                                        Synchronization</span>
                                </li>
                            </ul>
                        </td>
                        <td className="text-center">High</td>
                        <td>
                            <div className="flex items-center justify-center space-x-3">
                                <button className="text-red-500">Delete</button>
                                <button className="text-blue-500">Edit</button>
                            </div>
                        </td>
                    </tr>
                    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                        <td><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="24"
                            height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                        </svg></td>
                        <td>Efficient Web API Connectivity in Python</td>
                        <td>
                            <div>
                                Develop a Python-based solution for connecting an API to a
                                third-party database securely, focusing on efficient data
                                handling and exchange.
                            </div>
                        </td>
                        <td>
                            <ul className="flex justify-center gap-1.5 flex-wrap">
                                <li>
                                    <span
                                        className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00B2D9CC] px-2.5 text-sm capitalize text-[#F4F5F6]">Web</span>
                                </li>
                                <li>
                                    <span
                                        className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#8407E6A8] px-2.5 text-sm capitalize text-[#F4F5F6]">Python</span>
                                </li>
                                <li>
                                    <span
                                        className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#07AC67D6] px-2.5 text-sm capitalize text-[#F4F5F6]">API</span>
                                </li>
                            </ul>
                        </td>
                        <td className="text-center">High</td>
                        <td>
                            <div className="flex items-center justify-center space-x-3">
                                <button className="text-red-500">Delete</button>
                                <button className="text-blue-500">Edit</button>
                            </div>
                        </td>
                    </tr>
                    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                        <td><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="24"
                            height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                        </svg></td>
                        <td>Data Handling</td>
                        <td>
                            <div>
                                Integrate a web API with a third-party database using
                                secure methods, focusing on seamless data exchange and
                                data integrity.
                            </div>
                        </td>
                        <td>
                            <ul className="flex justify-center gap-1.5 flex-wrap">
                                <li>
                                    <span
                                        className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#2F43F8BF] px-2.5 text-sm capitalize text-[#F4F5F6]">Web</span>
                                </li>
                                <li>
                                    <span
                                        className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#AE6D0BDB] px-2.5 text-sm capitalize text-[#F4F5F6]">Python</span>
                                </li>
                                <li>
                                    <span
                                        className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#10FBEDB2] px-2.5 text-sm capitalize text-[#F4F5F6]">Security</span>
                                </li>
                            </ul>
                        </td>
                        <td className="text-center">High</td>
                        <td>
                            <div className="flex items-center justify-center space-x-3">
                                <button className="text-red-500">Delete</button>
                                <button className="text-blue-500">Edit</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;