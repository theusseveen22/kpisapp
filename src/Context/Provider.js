import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { db } from '../services/firebaseConection'
import { collection, getDocs } from '@firebase/firestore';

function Provider({ children }) {
  const [dataActions, setDataActions] = useState([])
  const [dataEmployer, setData] = useState([])
  const [dataNivel, setDataNivel] = useState([])
  const [nivelValue, setNivelValue] = useState(0)
  const [quantEmployer, setQuantEmployer] = useState("")

  console.log('data do provider', dataActions)

    const reponseEmployers = collection(db, "numeroempregados")
    const reponseNivel = collection(db, "satisfaction")
    const actions = collection(db, "actions")

    useEffect(() => {
        const getResponses = async () => {
            const { docs } = await getDocs(reponseEmployers)
            setData(docs.map((doc) => ({...doc.data(), id: doc.id }))) }
        
        const getNivel = async () => {
            const { docs } = await getDocs(reponseNivel);
            setDataNivel(docs.map((doc) => ({...doc.data(), id: doc.id }))) };
        
        const getActions = async () => {
            const { docs } = await getDocs(actions);
            setDataActions(docs.map((doc) => ({...doc.data(), id: doc.id }))) };
            
            getResponses();
            getNivel();
            getActions();
    }, [])

  const states = {
    dataEmployer,
    dataNivel,
    setNivelValue,
    nivelValue,
    quantEmployer, 
    setQuantEmployer,
    dataActions,
    setDataActions
  };

  return (
    <Context.Provider value={ states }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;