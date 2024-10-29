import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setLogin, getReposFromApi, setFilterInput } from "./github.actions";

const GithubRepos = () => {
  const dispatch = useDispatch();
  const filterInput = useSelector((state) => state.filterInput);
  const repos = useSelector((state) => state.repos);
  const login = useSelector((state) => state.login);
  return (
    <section>
      <input
        type="text"
        placeholder="login"
        onChange={(e) => {
          dispatch(setLogin(e.target.value));
          dispatch(getReposFromApi(e.target.value));
        }}
        value={login}
      />
      <input
        type="text"
        placeholder="filter"
        onChange={(e) => {
          dispatch(setFilterInput(e.target.value));
        }}
      />
      <ul>
        {repos
          .filter((repo) => repo.name.includes(filterInput))
          .map((rep) => (
            <li>
              <a href={rep.html_url}>{rep.name}</a>
            </li>
          ))}
      </ul>
    </section>
  );
};
export default GithubRepos;
