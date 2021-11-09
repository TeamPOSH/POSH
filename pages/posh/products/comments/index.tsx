import Comments from '../../../../src/components/units/products/comments/Comments.container'
import CommnetsList from '../../../../src/components/units/products/comments/commentsList/CommentsList.container';
import CommentsWrite from '../../../../src/components/units/products/comments/commentsWrite/CommentsWrite.container'
export default function CommentsPage() {
  
  return (
    <>
      <Comments />
      <CommnetsList />
      <CommentsWrite />
    </>
  );
}