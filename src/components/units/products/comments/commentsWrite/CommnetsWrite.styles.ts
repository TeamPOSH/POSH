import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CommnetsWriteInput = styled.textarea`
  width: 358px;
  height: 150px;
  padding: 12px 12px 0px 12px;
  border: #D3D3D3 1px solid;
  font-family: "NotoSansKRregular";
  ::placeholder{
    color: #D3D3D3;
    position: absolute;
    font-family: "NotoSansKRregular";
  }
`
export const CommentsWrapper = styled.div`
  width: 358px;
  height: 42px;
  display: flex;
  position: fixed;
  bottom: 0;
  /* margin-top: 299px; */
`
export const CommnetsInput = styled.input`
  width: 297px;
  height: 42px;
  background-color: #F3F3F3;
  border: none;
  padding-left: 12px;
`
export const CommentsBnt = styled.div`
  width: 79px;
  height: 42px;
  background-color: #8915A6;
  font-family: "NotoSansKRregular";
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 42px;
`

