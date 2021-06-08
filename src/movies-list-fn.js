import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { ThemeContext, LanguageContext } from "./App";
import Loader from 'react-loader-spinner';


const Text = ({description,status})=>{
  const [personajes, setPersonajes] = useState([]);
  const{director,producer,opening_crawl,characters} = description;

  let getCharacters = characters.map((url) => {
    return axios.get(url);
  });

  useEffect(()=>{
  Promise.all(getCharacters)
    .then((response)=>{
    const gistsDescriptions =  response.map( el => el.data.name );
    return gistsDescriptions})
    .then(data=>setPersonajes(data))
    .catch((err) => {
    console.log(err)
  });
},[])

  return(
    <div>
      <p className="description">DIRECTOR: {director}</p>
      <p className="description">PRODUCER: {producer}</p>
      <p className="description">DESCRIPTION: {opening_crawl}</p>
      <p className="description">PERSONAJES</p>

      {personajes.map((item,index)=><p key={index} className="description">{item}</p>)}
    </div>
  )
}

function MoviesList({ additionalMovies }) {
  const [state, setState] = useState({
    movies: [],
    loading: false
  });
  const [displayTitle, setDisplayTitle] = useState("");
  const[displayDescription,setDisplayDescription] = useState({
    status:false,
    index:null
  });

  const theme = useContext(ThemeContext);
  const language = useContext(LanguageContext);
  //console.log("language ", language);

  useEffect(() => {
    /// serviceX.subscribe(user);
    setState({ ...state, loading: true });
    axios.get("https://swapi.dev/api/films/").then(({ data: { results } }) => {
     // console.log("movies data", results);
      setState({ movies: results, loading: false });
    });
    return () => {
      /// serviceX.unsubscribe(user);
    };
  }, []);

  useEffect(() => {
    const newMovie = additionalMovies.length
      ? additionalMovies[additionalMovies.length - 1]
      : null;
    if (newMovie !== null) {
      setState({
        ...state,
        movies: [...state.movies, newMovie]
      });
    }
  }, [additionalMovies]);

  useEffect(() => {
    const newDisplayTitle =
      language === "en/us" ? "Star War movies" : "Peliculas de Star Wars";
    setDisplayTitle(newDisplayTitle);
  }, [language]);
  const textStyle = {
    color: theme.foreground
  };

  const handleClick = (index)=> {
    setDisplayDescription({status: displayDescription.status? false:true,
                            index:index})
  }

  return (
    <React.Fragment>
      <h4>{displayTitle}</h4>
      <Grid container spacing={3}>
        {state.movies.map((movie,index) => {
          return (
            <Grid item xs={4} key={movie.episode_id}>
              <Card style={{ backgroundColor: theme.background }}>
                <CardHeader style={textStyle} title={movie.title} />
                <CardContent>
                  <button onClick={()=>handleClick(index)}> See details</button>
                  { 
                    displayDescription.status && index ===displayDescription.index? <Text description={movie} status={displayDescription.status} /> : null
                  }
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
}

MoviesList.propTypes = {
  additionalMovies: PropTypes.array
};

MoviesList.propTypes = {
  additionalMovies: []
};

export default MoviesList;