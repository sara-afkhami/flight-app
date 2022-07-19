import styled from "styled-components";

export const List = styled.li`
  list-style: none;
  button {
    border: none;
    background: none;
   
  }

  &&.active {
    border-bottom: 6px solid red;
    margin-bottom: -3px;

  }
`;

export const Lists = styled.ul`
  display: flex;
`;

export const ContentStyle = styled.div`
background-color: white;
height: 200px;
  &&.show {
    display: block;
  }

  &&.hidden {
    display: none;
  }
  border-radius: 0 0 15px 15px;
`;
