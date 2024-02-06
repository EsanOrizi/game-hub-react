import React from 'react';
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/all";

const SearchInput = () => {
    return (
        <InputGroup>
            <InputLeftElement children={<BsSearch />}></InputLeftElement>
      <Input borderRadius={20} placeholder='Search Games...' variant='filled'></Input>
        </InputGroup>
    );
};

export default SearchInput;