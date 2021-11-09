import {
  Wrapper,
  CommentsWrapper,
  CommnetsInput,
  CommentsBnt,
  CommnetsWriteInput
} from "./CommnetsWrite.styles";
export default function CommentsWriteUI(props:any) {
  return (
    <Wrapper>
      {/* <CommentsWrapper>
        <CommnetsInput placeholder="답글을 등록해주세요" readOnly />
        <CommentsBnt>등록</CommentsBnt>
      </CommentsWrapper> */}
      {props.isOpen && (
        <CommnetsWriteInput
          placeholder="아름다운 인터넷 문화를 만들어주세요"
          maxLength={100}
          autoFocus
        />
      )}
      <CommentsWrapper>
        <CommnetsInput
          placeholder={props.isOpen ? "0/100" : "답글을 달아주세요"}
          readOnly
          onClick={props.onClickOpen}
        />
        <CommentsBnt onClick={props.onClickClose}>등록</CommentsBnt>
      </CommentsWrapper>
    </Wrapper>
  );
}
