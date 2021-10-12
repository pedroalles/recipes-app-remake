import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router';

import ReactLoading from 'react-loading';
import Header from '../components/Header';
import CardList from '../components/CardList';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';
import Footer from '../components/Footer';

import {
  getDrinkCategories,
  getDrinkRecipes,
} from '../redux/actions/drinkActions';

import Main from './styles/Main';
import Page from './styles/Page';

const Bebidas = () => {
  const [currFilter, setCurrFilter] = useState('All');
  const [displayFilter, setDisplayFilter] = useState(true);

  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const categorizedRecipes = useSelector(
    (state) => state.drinksReducer.categorizedRecipes,
  );
  const categories = useSelector((state) => state.drinksReducer.categories);
  const redirect = useSelector((state) => state.drinksReducer.redirect);

  useEffect(() => {
    if (!categorizedRecipes[currFilter]) {
      dispatch(getDrinkRecipes(currFilter, setCurrFilter));
    }
  }, [currFilter, dispatch, categorizedRecipes]);

  useEffect(() => {
    if (!categories.length) dispatch(getDrinkCategories());
  }, [dispatch, categories]);

  const handleFilter = (name) => {
    if (name === currFilter && !name.includes('-')) return setCurrFilter('All');
    setCurrFilter(name);
  };

  const handleRedirect = () => {
    history.push(`${location.pathname}/${redirect.id}`);
  };

  return (
    <Page>
      <Header toggleFilter={ setDisplayFilter } />
      <Main>
        { redirect.status && handleRedirect() }
        { displayFilter ? (
          categories.length > 0 && (
            <CategoryList
              categories={ categories }
              handleFilter={ handleFilter }
              curr={ currFilter }
            />
          )
        ) : (
          <Search
            toggleFilter={ setDisplayFilter }
            handleFilter={ handleFilter }
          />
        ) }

        { categorizedRecipes[currFilter] ? (
          <CardList recipes={ categorizedRecipes[currFilter] } />
        ) : (
          <ReactLoading
            className="loadingRecipes"
            type="spinningBubbles"
            color="#161616"
            height={ 50 }
            width={ 50 }
          />
        ) }
      </Main>
      <Footer />
    </Page>
  );
};

export default Bebidas;
