// import { ChangeEvent, FC, FormEvent, ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
// import { IUserForm } from "../types";

// const initalState: IUserForm = {
//   username: "",
//   password: "",
// };

const Header= () => {
  // const [count, setCount] = useState<number>(0);
  // const [data, setData] = useState<IUserForm>(initalState);
  // const [users, setUsers] = useState<IUserForm[]>([]);
  // const inc = () => {
  //   setCount((p: number): number => p + 1);
  // };

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { value, name } = event.target;
  //   setData((prev: IUserForm): IUserForm => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   setUsers((prev: IUserForm[]): IUserForm[] => [...prev, data]);
  // };

  // const userItems: ReactNode = users?.map((user: IUserForm, inx: number) => (
  //   <div key={inx}>
  //     <h3>{user.username} </h3>
  //   </div>
  // ));
  return (
    // <>
    //   <h2 className="">Header {count} </h2>
    //   <button
    //     onClick={inc}
    //     className="mb-4 py-1 px-4 bg-green-500 rounded-md text-white hover:bg-blue-500"
    //   >
    //     Increment
    //   </button>

    //   <form onSubmit={handleSubmit} action="#">
    //     <input
    //       value={data.username}
    //       onChange={handleChange}
    //       required
    //       autoFocus
    //       name="username"
    //       type="text"
    //       placeholder="username"
    //       className="mr-2 py-1 px-4 rounded-md outline-none bg-slate-100 indent-2 focus:border focus:border-indigo-500"
    //     />
    //     <input
    //       value={data.password}
    //       onChange={handleChange}
    //       name="password"
    //       required
    //       placeholder="password"
    //       type="text"
    //       className="mr-2 py-1 px-4 rounded-md outline-none bg-slate-100 indent-2 focus:border focus:border-indigo-500"
    //     />
    //     <button className="py-1 px-4 rounded-md text-white bg-blue-500">
    //       Submit
    //     </button>{" "}
    //   </form>
    //   <div>{userItems}</div>
    // </>
    <>
      <header id="header" className=" w-full h-16 shadow-md">
        <div
          className="container flex h-full items-center justify-center gap-8 text-xl
        "
        >
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/likes"}>Likes</NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
