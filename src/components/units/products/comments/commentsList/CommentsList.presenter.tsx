import {
  CommentsBox,
  CommentsProfile,
  CommnetsNiname,
  CommentsProfileBox,
  Comments,
  Wrapper,
  CommentsDate,
  CommnetsEdit,
} from "./CommentsList.styles";
import CommentsAnswer from '../CommnentsAnswer/CommentsAnswer.container'
export default function CommentsListUI() {
  return (
    <Wrapper>
      {/* 더미1 */}
      <CommentsBox>
        <CommentsProfile />
        <CommentsProfileBox>
          <CommnetsNiname>꿀호떡</CommnetsNiname>
          <Comments>
            셔츠 너무 멋있어요 ㅠㅠ 저 사고싶dddddddd어여dddddd
          </Comments>
          <CommentsDate>2021.11.09</CommentsDate>
          <CommnetsEdit>답글</CommnetsEdit>
        </CommentsProfileBox>
      </CommentsBox>
      {/* 더미2 */}
      <CommentsBox>
        <CommentsProfile />
        <CommentsProfileBox>
          <CommnetsNiname>주주</CommnetsNiname>
          <Comments>셔츠 정보 공유 부탁드려용</Comments>
          <CommentsDate>2021.11.09</CommentsDate>
          <CommnetsEdit>답글</CommnetsEdit>
        </CommentsProfileBox>
      </CommentsBox>
      <CommentsAnswer />
      {/* 더미3 */}
      <CommentsBox>
        <CommentsProfile />
        <CommentsProfileBox>
          <CommnetsNiname>토네이도</CommnetsNiname>
          <Comments>셔츠 품절이네요..</Comments>
          <CommentsDate>2021.11.09</CommentsDate>
          <CommnetsEdit>답글</CommnetsEdit>
        </CommentsProfileBox>
      </CommentsBox>
    </Wrapper>
  );
}
