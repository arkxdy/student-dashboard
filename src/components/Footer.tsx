import React from "react";
import { navObject } from '../props/template'
const Footer = () => {
    
    const navigation:navObject[] = [
        { name: 'Dashboard', href: "", current: true},
        { name: 'Team', href: '#', current: false },
        { name: 'Courses', href: '#', current: false },
        { name: 'Contact us', href: '#', current: false },
    ];
    return(
        <div className="relative bg-blue-500 w-full mt-2">
            <div className="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-center">
                    <div className="text-white px-3 py-2 text-sm font-medium">ArKxdy</div>
                    <div className="inset-y-0 flex items-center">
                        <div className="bg-grey-800 p-4">
                            {navigation.map((item) => 
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={item.current?'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'}
                                >{item.name}</a>
                            )}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Footer;