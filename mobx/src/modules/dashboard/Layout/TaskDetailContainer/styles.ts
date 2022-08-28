import styled from "@emotion/styled/macro";
import { pallet } from "common/constants";

export const Container = styled.div`
  width: 50%;
  background-color: ${pallet.Black100};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 0 0 10px;
  min-width: 350px;
  @media screen and (max-width: 1200px) {
    width: 100%;
    min-width: 0;
  }
`;

export const Header = styled.div`
  background-color: ${pallet.Black95};
  padding: 28px 30px;
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  column-gap: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;

  & span {
    cursor: pointer;
    user-select: none;
    color: ${pallet.Blue100};
    font-size: 16px;
    display: flex;
    column-gap: 5px;
    align-items: center;
  }
`;

export const Title = styled.input`
  font-size: 28px;
  font-weight: 700;
  background-color: ${pallet.Black100};
  color: ${pallet.White100};
  border: none;
  outline: none;
`;

export const Label = styled.span`
  padding-top: 20px;
  color: ${pallet.Black70};
`;

export const DataContainer = styled.div`
  padding: 36px 24px 10px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  flex-grow: 1;
`;

export const TextArea = styled.textarea`
  border-radius: 8px;
  border: none;
  outline: none;
  height: 300px;
  max-height: 300px;
  min-height: 300px;
  background-color: ${pallet.Black90};
  font-size: 18px;
  padding: 14px 8px;
  color: ${pallet.White90};
`;

export const SubmitButton = styled.button`
  border: none;
  outline: none;
  background-color: ${pallet.Blue90};
  color: ${pallet.White100};
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 20px;
  font-weight: 600;
  width: fit-content;
  margin-left: 20px;

  :hover {
    background-color: ${pallet.Blue100};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

export const DeleteButton = styled.button`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${pallet.Black80};
  border: none;
  outline: none;

  &:hover {
    background-color: ${pallet.Black70};
  }

  & svg {
    & path {
      fill: ${pallet.Black90};
    }
  }
`;
