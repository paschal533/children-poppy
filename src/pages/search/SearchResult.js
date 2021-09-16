import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from '../../components/posts/Posts';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import { Result, Button } from 'antd';
import NavAppBar from '../../components/header/Nav';
import { Link } from "react-router-dom";
import './search.css';

const { Title } = Typography;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

function SearchResult(props) {
  const PF = "https://ze567aacb-z7f7eee04-gtw.qovery.io/images/";
    const classes = useStyles();
    const [results, setResults] = useState([]);
    const [show, setShow] = useState(false);
    const query =  props.match.params.query; 

    useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get("https://ze567aacb-z7f7eee04-gtw.qovery.io/api/posts/search/" + query, {
            params: { name: query }
          });
          setResults(res.data);
          console.log(res.data)
          setShow(true);
        };
        fetchPosts();
      }, [query]);
    

    return (
        <div className="App">
          <NavAppBar />
            <div> 
             <div style={{width: '85%', margin: '1rem auto', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}} >
                <h2 style={{ color: 'black'}} level={2}>Results for {query} </h2>
                <hr />
                    {show ?  results?.length !== 0 ? results?.map((result) => (
                       <div className="posts">
                        ` <div className="post">
                          <Link to={`/post/${result._id}`} className="link">
                            {result.photo && <img className="postImg" src={PF + result.photo} alt="" />}
                          </Link>
                            <div className="postInfo">
                              <div className="postCats">
                                {result.categories.map((c) => (
                                  <span className="postCat">{c.name}</span>
                                ))}
                              </div>
                              <Link to={`/post/${result._id}`} className="link">
                                <span className="postTitle">{result.title}</span>
                              </Link>
                              <hr />
                              <span className="postDate">
                                {new Date(result.createdAt).toDateString()}
                              </span>
                            </div>
                            <p className="postDesc">{result.desc}</p>
                          </div>`
                        </div>
                    )): <div style={{ color: 'black', marginTop: '20px', height: '80vh' }}><Result
                    status="404"
                    title="404"
                    color="success "
                    subTitle="Sorry, No article with such title found"
                    extra={<a href="/"><Button className='blue-btn' type="primary">Back Home</Button></a>}
                  />
                     </div>
                          : <div className="spinnerdiv"> 
                            <div className="spinner" >
                                 <div className={classes.root}>
                                     <CircularProgress />
                                </div>
                            </div>
                        </div>}  
            </div>
           </div>
        </div>
    )
}

export default SearchResult;
