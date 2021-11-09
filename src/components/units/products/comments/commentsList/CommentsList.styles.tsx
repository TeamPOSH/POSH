import styled from "@emotion/styled";
import { stubArray } from "lodash";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
`

export const CommentsBox = styled.div`
  width: 358px;
  display: flex;
  padding: 12px 12px 0px 12px;
  /* background-color: gray; */
`;
export const CommentsProfile = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  margin-right: 10px;
  background-color: #8915a6;
`;
export const CommentsProfileBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CommnetsNiname = styled.div`
  font-size: 14px;
  font-family: "NotoSansKRmedium";
  margin-right: 5px;
`;
export const Comments = styled.div`
  width: 287px;
  font-size: 14px;
  font-family: "NotoSansKRregular";
`;
export const CommentsDate = styled.div`
  font-size: 12px;
  font-family: "NotoSansKRregular";
  color: #C4C4C4;
`;
export const CommnetsEdit = styled.div`
  width: 28px;
  height: 28px;
  font-size: 12px;
  font-family: "NotoSansKRregular";
  color: #c4c4c4;
  /* background-color: gray; */
`;