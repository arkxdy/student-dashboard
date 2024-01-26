import { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
    const [length, setLength] = useState<number>(8);
    const [numberAllowed, setNumberAllowed] = useState<boolean>(true);
    const [symbolAllowed, setSymbolAllowd] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    
    const passwordRef = useRef<any>(null);
    
    const copyFunc = () => {
        window.navigator.clipboard.writeText(password);
        passwordRef.current?.select();
    }

    const generatePassword = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghkjlmnopqrstuvwxyz";

        if(numberAllowed) str+="0123456789";
        if(symbolAllowed) str+="!@#$%^&*()_+";
        
        for(let i=0;i < length;i++){
            pass+=str.charAt(Math.floor(Math.random()*str.length))
        }
        setPassword(pass);

    }, [length, numberAllowed, setSymbolAllowd])

    useEffect(() => {
        generatePassword()
    }, [length, numberAllowed, symbolAllowed])

    return(
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
            <p className="text-white text-center my-3">Password generator</p>
            <div className="flex shadow rounded-lg overflow-hidden">
                <input
                type="text"
                value={password}
                placeholder="Password"
                readOnly
                ref={passwordRef}
                className="outline-none w-full py-1 px-3"
                />
                <button
                className="outline-none bg-blue-700 text-white px-3"
                onClick={copyFunc}
                >copy
                </button>
            </div>
            
            <div className="flex text-sm gap-x-2 text-orange-400">
                <input
                type="range"
                className="cursor-pointer"
                min={6}
                max={100}
                value={length}
                onChange={(e) =>  setLength(parseInt(e.target.value))}
                ></input>
                <label
                htmlFor="length">Length : {length}</label>
                <input type="checkbox" value="Number"
                defaultChecked={numberAllowed}
                onChange={(e) => setNumberAllowed(e.target.checked)}
                />Number
                <input type="checkbox" value="Symbol" 
                defaultChecked={symbolAllowed}
                onChange={() => setSymbolAllowd((prev) => !prev)}
                />Symbol
            </div>
        </div>
    );
}

export default PasswordGenerator;