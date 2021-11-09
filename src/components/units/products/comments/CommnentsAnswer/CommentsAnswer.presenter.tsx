import {
  CommentsBox,
  CommentsProfile,
  CommnetsNiname,
  CommentsProfileBox,
  Comments,
  CommentsDate,
  CommnetsEdit,
  CommentsWrpper,
} from "./CommentsAnswer.styles";

export default function CommentsAnswerUI() {
  return (
    <>
      <CommentsBox>
        <CommentsProfile />
        <CommentsProfileBox>
          <CommnetsNiname>뭉치</CommnetsNiname>
          <Comments>
            인터넷으로 산거라 잘 모르겠어요ㅠㅠ 다음에 정보 알게되면
            알려드릴게요!
          </Comments>
          <CommentsDate>2021.11.09</CommentsDate>
          <CommentsWrpper>
            <CommnetsEdit>수정</CommnetsEdit>
            <CommnetsEdit>삭제</CommnetsEdit>
          </CommentsWrpper>
        </CommentsProfileBox>
      </CommentsBox>
    </>
  );
}
