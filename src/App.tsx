import React from "react";
import {FC, useState} from "react";

const App: FC = () => {
    const [value, setValue] = useState<string>('');
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
        setValue(ev.target.value)
        console.log(ev.target.value)
    }

    return (
        <div className="App">
            <h1>hello world</h1>
            <input value={value} onChange={handleChange}/>
        </div>
    );
}

export default App;
