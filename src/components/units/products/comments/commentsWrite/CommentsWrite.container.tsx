import { useState } from "react";
import CommentsWriteUI from "./CommentsWrite.presenter";

export default function CommentsWrite() {
  const [isOpen, setIsOpen] = useState(false);

  //댓글 등록창 오픈 함수
  const onClickOpen = () => {
    setIsOpen(true);
  };
  const onClickClose = () => {
    setIsOpen(false)
  }


  return (
    <CommentsWriteUI
      onClickOpen={onClickOpen}
      isOpen={isOpen}
      onClickClose={onClickClose}
    />
  );
}
