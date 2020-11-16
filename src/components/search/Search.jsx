import React, { useMemo } from "react";

import queryString from "query-string";
import { useLocation } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import { getByHeroeName } from "../../selectors/getByNames";

export const Search = ({ history }) => {
 const location = useLocation();
 const { q = "" } = queryString.parse(location.search);
 const [valueForm, handleChangeInput] = useForm({
  search: q,
 });

 const { search } = valueForm;

 const handlerSearch = (e) => {
  e.preventDefault();
  const { search } = valueForm;
  history.push(`?q=${search}`);
 };

 const heroesFilter = useMemo(() => getByHeroeName(q), [q]);
 return (
  <div>
   <h1>Search Screen</h1>
   <hr />
   <div className="row">
    <div className="col-5">
     <h4>Search Form</h4>
     <hr />
     <form onSubmit={handlerSearch}>
      <input
       type="text"
       name="search"
       autoComplete="off"
       value={search}
       onChange={handleChangeInput}
       placeholder="Find your hero"
       className="form-control"
      />
      <button className="btn m-1 btn-block btn-outline-info">Search</button>
     </form>
    </div>
    <div className="col-7">
     {q === "" && (
      <div className="alert alert-info">Debe colocar una busqueda correcta</div>
     )}
     {q !== "" && heroesFilter.length === 0 && (
      <div className="alert alert-danger">
       No hay Heroes con la busqueda: {q}
      </div>
     )}
     {heroesFilter.map((hero) => (
      <HeroCard key={hero.id} {...hero} />
     ))}
    </div>
   </div>
  </div>
 );
};
