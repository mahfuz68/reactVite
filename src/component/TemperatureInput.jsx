/* eslint-disable no-unused-vars */
const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

export default function TemperatureInput({ temperature, onChangeHandler, scale }) {
    return (

        <fieldset className=" ">
            <legend className="block text-lg text-gray-700  font-bold mb-2">
                Input temperature in
                {' '}
                {scaleName[scale]}
                :
            </legend>
            <input
                className="shadow appearance-none border rounded w-38 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name=""
                id=""
                value={temperature}
                onChange={(e) => onChangeHandler(e, scale)}
            />
        </fieldset>
    );
}
