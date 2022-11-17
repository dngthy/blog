import { NzUploadFile } from "ng-zorro-antd/upload";

export interface Post {
  title: string;
  content: string;
  attachments: NzUploadFile[],
  tags: String[],
  createAt: String
}
