import styled from "@emotion/styled/macro";
import { pallet } from "common/constants";

export const SidebarContainer = styled.div`
  width: 300px;
  height: 100vh;
  flex-shrink: 0;
  background-color: ${pallet.Black100};
  padding: 35px 30px 0 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  z-index: 2;

  @media screen and (max-width: 750px) {
    width: 200px;
  }
  @media screen and (max-width: 615px) {
    display: none;
  }
`;
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;

  @media screen and (max-width: 750px) {
    column-gap: 10px;
  }
`;

export const ProfileName = styled.span`
  font-weight: 600;
`;

export const ProfilePhoto = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

export const CreateButton = styled.button`
  outline: none;
  border: none;
  background-color: ${pallet.Blue90};
  color: ${pallet.White100};
  padding: 10px 0;
  border-radius: 24px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  margin-top: 50px;
`;

export const ListTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
`;

export const ListItem = styled.div<{ active: boolean }>`
  font-size: 18px;
  cursor: pointer;
  color: ${({ active }) => (active ? pallet.Blue100 : pallet.White100)};
  display: flex;
  align-items: center;
`;

export const ListActive = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${pallet.Blue100};
  margin-left: 6px;
`;
