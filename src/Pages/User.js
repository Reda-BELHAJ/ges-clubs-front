
import Recommendations from "../Components/Recommendations"
import Feed from "../Components/Feed"
import NavbarAuth from '../Components/NavbarAuth'
import Widgets from "../Components/Widgets"

const User = () => {
    return (
        <div className='flex flex-col min-h-screen overflow-hidden'>
            <NavbarAuth />
            <main>
                <div className="w-full lg:grid lg:grid-cols-7 gap-2 max-w-6xl mx-auto px-5 sm:px-6">
                    <div className='lg:col-span-2 hidden lg:block'>
                        <Widgets state={true} recomState={true} />
                        
                        <Recommendations 
                            header="Which Club To Follow"
                            recomState={true}
                        />

                        <Recommendations 
                            header="Clubs You Follow"
                            recomState={false}
                        />
                        
                    </div>
                    
                    <Feed state = {true} recomState={true}/>
                </div>

            </main>
        </div>
    )

}

export default User