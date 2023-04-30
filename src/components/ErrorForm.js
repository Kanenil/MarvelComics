import { useState } from "react";
import FormInput from "../elements/FormInput";

const initState = {
  fullname: "",
  email: "",
  phone: "",
  message: "",
};

export default function ErrorForm() {
  const [state, setState] = useState(initState);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const onChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form className="grid grid-cols-1 gap-y-6" onSubmit={onSubmitHandler}>
        <div>
          <FormInput
            name="fullname"
            placeholder="Full name"
            error="Full name can not be empty"
            onChangeAct={onChangeHandler}
            hasError={!state.fullname}
          />
        </div>
        <div>
          <FormInput
            name="email"
            placeholder="Email"
            type="email"
            error="Email can not be empty"
            onChangeAct={onChangeHandler}
            hasError={!state.email}
          />
        </div>
        <div>
          <FormInput
            name="phone"
            placeholder="Phone"
            type="tel"
            error="Phone can not be empty"
            onChangeAct={onChangeHandler}
            hasError={!state.phone}
          />
        </div>
        <div>
          <textarea
            name="message"
            value={state.message}
            onChange={(e) => setState({ ...state, message: e.target.value })}
            rows={4}
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
            placeholder="Message"
          />
          {!state.message && (
            <p className="mt-2 text-sm text-red-600">Message can not be empty</p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:from-red-700 hover:to-pink-700"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
