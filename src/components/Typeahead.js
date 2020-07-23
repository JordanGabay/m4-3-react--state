import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  color: white;
  background-color: #5227C9;
  padding: 8px;
  border-radius: 4px;
  border: none;
  margin-left: 10px;
  
`;
const Input = styled.input`
  border-radius: 4px;
  padding: 8px;
  border: 1px solid grey;
  margin: 5px;
`;

const Suggestion = styled.li`
  padding: 5px;
  &:hover {
    background-color: lightyellow;
  }
`;

const Wrapper = styled.div`
display: flex;
flex-direction:column;
align-items: center;
`

const SuggestionBox = styled.ul`
width: 600px;
border-radius: 5px;
margin-top: 5px;
margin-left: 10px;
box-shadow: 2px 2px 2px 2px lightgrey;
`

const InputWrapper = styled.div`
width: 600px;
`

const Typeahead = ({suggestions, handleSelect }) => {
    const [value, setValue] = React.useState('');
    const matchedSuggestions = suggestions.filter(({title}) => title.toLowerCase().includes(value.toLowerCase()))

  
    return (
      <>
      <Wrapper>
      <InputWrapper>
        <Input
          type='text'
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
          onKeyDown={(ev) => {
            if (ev.key === 'Enter') {
              handleSelect(ev.target.value);
            }
          }}
        />
  
        <Button onClick={() => setValue('')}>Clear</Button>
        </InputWrapper>
        {
            (matchedSuggestions.length > 0 && value !== '') &&
            <SuggestionBox>
                {
        matchedSuggestions.map((suggestion) => {
          return (
              <Suggestion
            key={suggestion.id}
            onClick={() => handleSelect(suggestion.title)}
            >
            {suggestion.title}
              </Suggestion>
          );
        })}
      </SuggestionBox>
}
      </Wrapper>
       
      </>
    );
  };

  export default Typeahead;