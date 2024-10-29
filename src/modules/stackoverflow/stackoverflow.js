import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setText, getDataFromApi, setFilter } from "./stackoverflow.actions";

const StackoverflowSection = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const data = useSelector((state) => state.data);
  const text = useSelector((state) => state.text);
  return (
    <section>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => {
          dispatch(setText(e.target.value));
          dispatch(getDataFromApi(e.target.value, filter));
        }}
        value={text}
      />
      <select
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      >
        <option value="creation">creation</option>
        <option value="votes">votes</option>
      </select>

      <ul>
        {data.map((item) => (
          <li>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default StackoverflowSection;
