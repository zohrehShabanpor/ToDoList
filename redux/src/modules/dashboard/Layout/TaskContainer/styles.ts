import styled from "@emotion/styled/macro";
import { pallet } from "common/constants";

export const TaskContainer = styled.div`
  background-color: ${pallet.Black100};
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 50%;
  min-width: 350px;
  @media screen and (max-width: 1200px) {
    width: 100%;
    min-width: 0;
  }
`;

export const TaskContainer2 = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 16px 12px;
`;

export const AddTaskContainer = styled.div`
  background-color: ${pallet.Black95};
  padding: 10px 18px;
  border-radius: 0 0 20px 20px;
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

export const Input = styled.input`
  flex-grow: 1;
  background-color: ${pallet.Black90};
  border-radius: 25px;
  height: 50px;
  border: none;
  outline: none;
  padding: 0 12px;
  font-size: 18px;
  color: ${pallet.White90};
`;

export const TaskAddButton = styled.button`
  background-color: ${pallet.Black90};
  border-radius: 50%;
  height: 50px;
  width: 50px;
  border: none;
  outline: none;

  & svg {
    transform: rotate(90deg);
    width: 20px;
    height: 20px;
    margin-top: 6px;

    & path {
      stroke: ${pallet.White100};
      fill: ${pallet.White100};
    }
  }

  :hover {
    background-color: ${pallet.Blue90};
  }
`;
