import {
    get,
    getDatabase, onValue, orderByKey, push, query, ref, set
} from 'firebase/database';
import React, {
    useEffect, useRef, useState
} from 'react';
import { NavLink } from 'react-router-dom';
import './firebase';

function Database() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);
    const [todo, setTodo] = useState({
        name: '',
        age: '',
        timestamp: 0
    });
    const timestamp = new Date().getTime();
    const [getTodo, setGetTodo] = useState([]);

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
        async function fetchVideos() {
            const db = getDatabase();
            const todoReference = ref(db, 'todo');
            const videoReference = ref(db, 'videos');
            const todoQuarry = query(todoReference, orderByKey());
            const videoQuarry = query(videoReference, orderByKey(videoReference));
            // console.log(videos);
            try {
                setError(false);
                setLoading(true);
                // request firebase database for data
                const snapshot = await get(todoQuarry);
                const videoSnapshot = await get(videoQuarry);
                // console.log(Object.values(videoSnapshot.val()));
                setLoading(false);
                if (videoSnapshot.exists()) {
                    // console.log(snapshot.val());
                    setVideos((prev) => [...prev, ...Object.values(snapshot.val())]);
                    // console.log(getTodo);
                } else {
                    console.log('data cant fetch');
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }

        fetchVideos();
    }, []);

    if (!loading) {
        console.log(videos);
        videos.map((video) => {
            console.log(video);
            return video;
        });
    }
    console.log('rendered database');
    const { name, age } = todo;
    async function setupTodo(names, ages, timestamps) {
        console.log('rendered setup todo function');
        const db = getDatabase();
        const todoReference = push(ref(db, 'todo'));

        try {
            const setValue = await set(todoReference, {
                name: names,
                age: ages,
                timestamp: timestamps
            });
            onValue(setValue, (snapshot) => console.log(snapshot.val()));
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div className="text-center">
                <NavLink to="/dashboard">
                    Header
                </NavLink>

            </div>
            <div className="flex justify-center">

                <label className=" block mb-2 text-md font-medium text-gray-900 dark:text-gray-300 m-4" htmlFor="Name">
                    Input Your name
                    <input
                        ref={inputRef}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mt-4 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="name"
                        id=""
                        value={name}
                        onChange={(e) => setTodo({
                            ...todo,
                            name: e.target.value
                        })}
                    />
                </label>
            </div>

            <div className="flex justify-center">
                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300 m-4" htmlFor="age">
                    Input Your Age
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mt-4 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="age"
                        value={age}
                        onChange={(e) => setTodo({
                            ...todo,
                            age: e.target.value
                        })}
                    />
                </label>
            </div>
            <div className="flex justify-center mt-4 ">
                <button
                    className="border-blue-600 bg-red-200 px-2 active:border-2 py-1 rounded-md"
                    type="submit"
                    onClick={() => name && age && setupTodo(name, age, timestamp)}
                >
                    Submit Data

                </button>
            </div>

            <div>
                {loading && <div>Loading...</div>}
            </div>
            <div>
                <p>{}</p>
                <p className="text-center">{}</p>
            </div>
        </div>
    );
}
export default Database;
