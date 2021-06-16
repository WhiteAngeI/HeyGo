import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as withRouter, Link } from "react-router-dom";

import {SearchBoxStyle, Input, Box, Li} from "./Styles";
import styled from "styled-components";

function SearchBox() {
    const [location, setLocation] = useState([] );
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [toggle, setToggle] = useState('none');


    const handleBoxHider = (event) => {
        setQuery(event.target.value);
        if(event.target.value.length >= 1 || !setIsError)  {
            setToggle('block');
        }else {
            setToggle('none');
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
            const result = await axios(
                `https://code-challenge-backend.herokuapp.com/locations?q=${query}`,
            );
            setLocation(result.data);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [query]);

    return (
        <SearchBoxStyle>
            <withRouter>
            <Input
                type="text"
                value={query}
                onChange={handleBoxHider}/>
            {isError && <Box>Something went wrong ...</Box>}
            {isLoading ? ( <Box>Loading...</Box>) :
            <Box visibility={toggle}>{location.map(item => (
                 <StyledLink key={item.id} to={`/Location/${item.id}` } >
                    <Li key={item.id}>
                        {item.name}
                    </Li>
                 </StyledLink>
            ))}</Box>}
            </withRouter>
        </SearchBoxStyle>
    );
}

const StyledLink = styled(Link)`
    text-decoration: none;
    color: orange;
    `

export default SearchBox;





