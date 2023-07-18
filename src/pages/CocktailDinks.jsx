import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";

export default function CocktailDinks() {
  const { drinkList, setDrinkList } = useContext(UserContext);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then((resp) => resp.json())
      .then((data) => {
        setDrinkList(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  //   console.log(drinkList);

  return (
    <div>
      <div className="row m-2 algin-items-center">
        <div className="col-9">
          <h2>Cocktails Drinks</h2>
        </div>

        <div className="col-3 ">
          <p className="ms-auto mb-0" style={{ width: "80%" }}>
            Search your drink here{" "}
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
          </p>
          {drinkList.drinks === null && (
            <p
              className="ms-auto my-auto"
              style={{ width: "80%", color: "red" }}
            >
              No data found..
            </p>
          )}
        </div>
      </div>
      {(drinkList?.drinks || []).map((value) => {
        const {
          idDrink,
          strDrinkThumb,
          strDrink,
          strCategory,
          strInstructions,
        } = value;

        return (
          <div
            className="card mb-3 m-3 p-2"
            style={{ maxWidth: "100%" }}
            key={idDrink}
          >
            <div className="row g-0">
              <div className="col-md-3">
                <img
                  width="400px"
                  src={strDrinkThumb}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{strDrink}</h5>
                  <p className="card-text">
                    <strong>Drink id :</strong> {idDrink}
                  </p>
                  <p className="card-text">
                    <strong>Category</strong> : {strCategory}
                  </p>
                  <p className="card-text">
                    <strong>Instructions</strong> : {strInstructions}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
