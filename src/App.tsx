import React from "react";
import {FC, useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {signIn} from "./store/actions/users"
import {userState} from "./store/reducers/users"

const App: FC = () => {
    const [value, setValue] = useState<string>('');
    const [value1, setValue1] = useState<string>('');
    const dispatch = useDispatch();

    const {user, token} = useSelector((state: any) => state.users);

    useEffect(() => {
        console.log(user, token)
    },[])

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
        setValue(ev.target.value)
    }
    const handleChange1: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
        setValue1(ev.target.value)
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (ev) => {
        ev.preventDefault();
        dispatch(signIn({username: value, password: value1}, (data) => {
            console.log(data.message)
        }))
    }

    return (
        <div className="App">
            <h1>hello world</h1>
            <form onSubmit={handleSubmit}>
                <input value={value} onChange={handleChange}/>
                <input value={value1} onChange={handleChange1}/>
                <button type="submit">login</button>
            </form>
        </div>
    );
}

export default App;
