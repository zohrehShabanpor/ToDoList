import styled from "@emotion/styled/macro";
import { pallet } from "common/constants";

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 90px 200px 50px 50px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  @media screen and (max-width: 1200px) {
    overflow-y: scroll;
    padding: 30px 20px;
  }
  @media screen and (max-width: 615px) {
    align-items: center;
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
`;

export const TitleContainer = styled.div`
  font-size: 20px;
  font-weight: 600;
  background-color: ${pallet.Black100};
  color: ${pallet.White100};
  border-radius: 28px;
  padding: 10px 26px;
  width: fit-content;
`;

export const MainRowContainer = styled.div`
  display: flex;
  height: 100%;
  column-gap: 50px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    row-gap: 20px;
  }
  @media screen and (max-width: 615px) {
    align-items: center;
    width: 100%;
  }
`;
