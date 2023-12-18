// api와 통신하진 않지만 api 데이터내에 포함된 리뷰 작성자
export interface IfReviewAuthor {
  id: number
  name: string
}

// api와 통신하진 않지만 api 대이터내에 포함된 리뷰 작성자
export interface IfReviewUser{
  id: number
  username:string
  thumbnail:string
}

interface IfReviewBase {
  shortReview: string
  thumbnails: string[]
  keywords: string[]
}

interface IfReviewBaseDetail {
  fullReview: string
  dayType: string
  strength: string
  season: string
  duration: string
  perfumeId: number
}

// 리뷰 목록 조회
export interface IfReviewResponse extends IfReviewBase {
  id: number
  user: IfReviewUser
  likeCount: number
  commentCount: number
}

// 리뷰 상세보기
export interface IfReviewDetailResponse extends IfReviewBase, IfReviewBaseDetail {
  id: number
  likeCount: number
  commentCount: number
  author: IfReviewAuthor 
}

// 리뷰 생성
export interface IfReviewRequest extends IfReviewBaseDetail {
  shortReview: string
  thumbnails: number[]
  keywords: number[]
}

// 리뷰 삭제
export interface IfReviewDeleteRequest {
  id: number
}

// 댓글 생성
export interface IfCommentRequest {
  content: string
}

// 댓글 삭제
export interface IfCommentDeleteRequset {
  id: number
}

// 좋아요 표시/취소
export interface IfLikeRequest {
  id: number
}

// 리뷰 옵션
export interface IfReviewOption {
  name: string
  code: string
}
