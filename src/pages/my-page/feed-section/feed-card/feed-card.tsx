import {Box, Divider, Typography, styled} from '@mui/material'
import FeedTag from './feed-tag'
import FeedFooterContent from './feed-footer-content'
import CustomIcons from '../../../../assets/icons/custom-Icons'
import {IfReviewResponse} from 'types/review.interface'

interface proptype {
  data: IfReviewResponse
}

const FeedCard = ({data}: proptype) => {
  return (
    <FeedCardContainer>
      <FeedImg src={data.thumbnails[0]} alt="thumnail" />
      <FeedContent variant="body2">{data.shortReview}</FeedContent>
      <FeedTag tags={data.keywords} />
      <Divider />
      <FeedFooterContainer>
        <FeedFooterContent
          title="좋아요"
          value={data.likeCount}
          icon={<HeartIcon/>}
        />
        <FeedFooterContent
          title="댓글"
          value={data.commentCount}
          icon={<CommentIcon size="15px"/>}
        />
      </FeedFooterContainer>
    </FeedCardContainer>
  )
}

export default FeedCard

const FeedCardContainer = styled(Box)(() => ({
  width: '384px',
  height: '286px',
  padding: '17px 18px 0 18px',
  borderRadius: '12px',
  border: 'solid 1px #ededed',
  backgroundColor: '#fff',
}))

const FeedImg = styled('img')(() => ({
  width: '348px',
  height: '138px',
  borderRadius: '12px',
}))

const FeedContent = styled(Typography)(({theme}) => ({
  fontSize: theme.typography.body4.fontSize,
  lineHeight: 1.5,
  textAlign: 'left',
  color: '#000',
  minHeight: '36px',
  marginTop: '12px',
  marginBottom: '8px',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  WebkitLineClamp: 2,
  textOverflow: 'ellipsis',
}))

const FeedFooterContainer = styled(Box)(() => ({
  display: 'flex',
  
}))

const HeartIcon = styled(CustomIcons.HeartIcon)(()=>({
  width: '15px',
  height: '15px',
}))

const CommentIcon = styled(CustomIcons.CommentIcon2)(()=>({
}))