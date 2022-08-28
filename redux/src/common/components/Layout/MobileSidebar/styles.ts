import styled from "@emotion/styled/macro";
import { pallet } from "common/constants";

export const SidebarContainer = styled.div`
  display: none;

  .offcanvas {
    background-color: ${pallet.Black100};
  }

  @media screen and (max-width: 615px) {
    display: block;
    z-index: 1000;
    & svg {
      position: absolute;
      top: 40px;
      left: 20px;
    }
  }
`;

export const ListItem = styled.div`
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 20px 10px;
`;
