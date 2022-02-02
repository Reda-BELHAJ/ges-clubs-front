import React from 'react';

// import NavbarAuth from '../Components/NavbarAuth'
import WidgetAdmin from "../Components/AdminComponents/WidgetAdmin"
import AdminLines from "../Components/AdminComponents/AdminLines"
import AdminCards from "../Components/AdminComponents/AdminCards"
import LayoutTables from '../Components/AdminComponents/LayoutTables';

const Admin = () => {
    return (
        <div className='flex flex-col min-h-screen overflow-hidden'>
            {/* <NavbarAuth /> */}
            <main>
                <div className="w-full lg:grid lg:grid-cols-7 gap-2 max-w-6xl mx-auto px-5 sm:px-6">
                    <div className='lg:col-span-2 hidden lg:block'>
                        <WidgetAdmin recomState={true} />
                    </div>
                    
                    <div className='lg:col-span-5 h-auto mt-20'>
                        <AdminLines />
                        <div className='mt-2 lg:grid lg:grid-cols-3 lg:gap-2'>
                            <AdminCards />
                            <AdminCards />
                            <AdminCards />
                        </div>

                        <LayoutTables />
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Admin