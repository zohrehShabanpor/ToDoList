import styled from "@emotion/styled/macro";
import { pallet } from "common/constants";

export const Container = styled.div`
  background-color: ${pallet.Black100};
  width: 26px;
  height: 26px;
  border: 1px solid ${pallet.Black80};
  border-radius: 50%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-grow: 0;
`;

export const Fill = styled.div`
  background-color: ${pallet.Black80};
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
