import Button from "../ads/Button";
import Bg from "../img/deli.jpg";
// import React from "react";
// import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Label from "../ads/Label";
import Input from "../ads/Input";
import Form from "../ads/Form";
// import Button from "../ads/Button";
// import { useAuth } from "../context/auth";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
import axios from "../api/Axios";

function Home() {
  const [input, setInput] = useState("");
  const [datas, setDatas] = useState([]);
  const [loaded, setLoaded] = useState(null);
  const [edit, setEdit] = useState("");

  useEffect(() => {
    const Taskall = async () => {
      const info = await axios.get("api/task").then((res) => {
        const tasks = res.data;
        setDatas(tasks);
        // console.log(JSON.parse(JSON.stringify(tasks)));
      });
    };

    Taskall();
  }, [input, loaded]);

  useEffect(() => {
    if (edit) {
      setInput(edit.name);
    } else {
      setInput("");
    }
  }, [setInput, edit]);
  // console.log(datas);

  //*input input
  const handleInput = (e) => {
    const Task = e.target.value;
    // console.log(value);

    setInput(Task);
    // console.log(input);
  };
  //*end input

  //*On submit post api
  const onsubmit = async (e) => {
    e.preventDefault();

    if (!edit) {
      try {
        const response = await axios.post("api/task", { name: input });
        // console.log(response.data);
      } catch (error) {}
      setInput("");
      return console.log(input);
    } else {
      try {
        const response = await axios.put(`api/task/${edit.id}`, {
          name: input,
        });
        // console.log(response.data);
      } catch (error) {}
      setInput("");
      setEdit("");
      return console.log(input);
    }
    // return console.log("missing input");
  };
  //*end Onsubmit

  const updateT = (Eid) => {
    const newE = datas.find((data) => {
      return data.id === Eid;
    });
    setEdit(newE);
    return console.log();
  };

  //*delete api
  const del = async (id) => {
    setLoaded(false);

    try {
      if (id) {
        const response = await axios.delete(`api/delete/${id}`);
      }
      setLoaded(true);
    } catch (error) {}
  };
  //*end delete

  //todo  turn to todo component
  const word = datas.map((data) => {
    console.log(data.id);
    return (
      <li key={data.id} className="p-2">
        {data.name}
        <span
          className="p-2 mx-5 my-5 bg-green-200 rounded-lg cursor-pointer"
          onClick={() => updateT(data.id)}
        >
          edit
        </span>
        <span
          className="p-2 mx-5 my-5 bg-red-200 rounded-lg cursor-pointer"
          onClick={() => del(data.id)}
        >
          delete
        </span>
      </li>
    );
  });
  // todo close

  return (
    <>
      <h1 className="p-3 text-3xl font-bold text-center text-gray-800">
        CRUD APP
      </h1>
      <div className="max-w-md p-4 px-6 mx-auto bg-white border border-gray-400 rounded-lg shadow-md flex-grow-1">
        <Form onSubmit={onsubmit}>
          <Label for="task">Task</Label>
          <Input
            id="task"
            name="task"
            onChange={handleInput}
            value={input}
            required
          />

          <button
            type="submit"
            className="inline-flex px-3 py-2 text-gray-100 bg-gray-700 rounded-md shadow-md"
          >
            {edit ? "Ok" : "Create Task"}
          </button>
        </Form>
      </div>
      <div className="h-10 max-w-md pt-5 mx-auto rounded-lg">
        <ul className="text-center bg-gray-300">{word}</ul>
      </div>
    </>
  );
}

export default Home;
