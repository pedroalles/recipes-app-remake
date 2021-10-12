import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router';

import ReactLoading from 'react-loading';
import Header from '../components/Header';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';
import CardList from '../components/CardList';
import Footer from '../components/Footer';

import {
  getFoodCategories,
  getFoodRecipes,
} from '../redux/actions/foodActions';

import Main from './styles/Main';
import Page from './styles/Page';

const Comidas = () => {
  const [currFilter, setCurrFilter] = useState('All');
  const [displayFilter, setDisplayFilter] = useState(true);

  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const categorizedRecipes = useSelector(
    (state) => state.foodsReducer.categorizedRecipes,
  );
  const categories = useSelector((state) => state.foodsReducer.categories);
  const redirect = useSelector((state) => state.foodsReducer.redirect);

  useEffect(() => {
    if (!categorizedRecipes[currFilter]) {
      dispatch(getFoodRecipes(currFilter, setCurrFilter));
    }
  }, [currFilter, dispatch, categorizedRecipes]);

  useEffect(() => {
    if (!categories.length) dispatch(getFoodCategories());
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
            height={ 60 }
            width={ 60 }
          />
        ) }
      </Main>
      <Footer />
    </Page>
  );
};

export default Comidas;
