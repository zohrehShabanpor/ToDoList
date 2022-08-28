import styled from "@emotion/styled/macro";
import { pallet } from "common/constants";

export const Task = styled.div`
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 10px;
  user-select: none;
  font-size: 20px;

  :hover {
    background-color: ${pallet.Black90};
  }
`;
