import React from 'react'
import AddDocument from './AddDocument';
import GetDocument from './GetDocument';

function HomePage() {
    const [openTab, setOpenTab] = React.useState(1);
  return (
    <React.Fragment>
         <div className='mt-7 flex justify-center'>
                <div>
                    <div className="w-[1200px] min-w-full pr-2">
                        <ul
                            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row "
                            role="tablist"
                        >
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                        (openTab === 1
                                            ? "text-white bg-blue-900"
                                            : "text-black")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(1);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist"
                                >
                                    Add Document
                                </a>
                            </li>

                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                        (openTab === 2
                                            ? "text-white bg-blue-900"
                                            : "text-black")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(2);
                                    }}
                                    data-toggle="tab"
                                    href="#link3"
                                    role="tablist"
                                >
                                    View Document
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <AddDocument/>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link3">
                                    <GetDocument/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </React.Fragment>
  )
}

export default HomePage