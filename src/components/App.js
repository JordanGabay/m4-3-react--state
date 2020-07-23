import React from 'react';

import GlobalStyles from './GlobalStyles';
import Typeahead from './Typeahead';
import data from '../data';
import styled from 'styled-components';

const Wrapper = styled.div``

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      {/* TODO */}
      <Wrapper>
        <Typeahead
        suggestions={data.books}
        handleSelect={(suggestions) => {
          window.alert(suggestions);
        }}
        />
      </Wrapper>
    </>
  );
};

export default App;