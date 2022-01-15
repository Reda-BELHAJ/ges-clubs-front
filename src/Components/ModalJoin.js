import React from 'react'

import Modal from '@mui/material/Modal';

const ModalJoin = ({ handleClose, show, club }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '24rem',
        transform: 'translate(-50%, -50%)',
        p: 4,
    };

    return (
        <Modal
            open={show}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div style={style} className="w-96 mx-auto bg-white rounded">

                <form name="student_application" id="student_application" action="">
                    <div className="py-4 px-8">

                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2">Username:</label>
                            <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                                name="student_id" id="student_id" placeholder="Enter Your username"/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2">Full Name</label>
                            <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                                name="student_name" id="student_name" placeholder="Enter Your Name"/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2">Filiere</label>
                            <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                                name="student_a" id="student_name" placeholder="enter "/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2">Année d'etude :</label>
                            <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                                name="student_b" id="student_name" placeholder="year"/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2">Raison de pour rejoindre le club</label>
                            <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                                name="student_c" id="student_name" placeholder="Why?"/>
                        </div>

                        <div className="mb-4">
                            <button 
                                className="py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </Modal>
    )
}

export default ModalJoin
