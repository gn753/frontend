import FlexBox from '@layouts/flex-box'
import {Typography, styled} from '@mui/material'
import ReviewCard from '@components/reviews/review-card'
import SkeletonCard from '@components/skeleton-card'
import ReviewListSelect from './review-list-select'

interface IfPerfumeReviewListProps {
  reviewData: any
  isLoading: boolean
  handleChangeSort: (e) => void
}

const skeletons = Array.from({length: 6}, (_, index) => index + 1)

const PerfumeReviewList = ({
  reviewData,
  isLoading,
  handleChangeSort,
}: IfPerfumeReviewListProps) => {
  return (
    <Container>
      <Wrapper>
        <ReviewListSelect
          sectionTitle={'향수 리뷰'}
          buttonText={'리뷰 작성하기'}
          handleChangeSort={handleChangeSort}
        />

        <FlexBox gap="24px" style={{marginTop: '24px', flexWrap: 'wrap'}}>
          <>
            {isLoading ? (
              skeletons.map((_, index) => <SkeletonCard key={index} />)
            ) : (
              <>
                {reviewData?.content?.length > 0 ? (
                  reviewData.content.map((item, index) => (
                    <ReviewCard
                      username={item?.user?.username}
                      shortReview={item?.shortReview}
                      thumbnails={item?.thumbnails}
                      likeNumber={item?.likeCount}
                      keywords={item?.keywords}
                      commnents={item?.commentCount}
                      key={index}
                    />
                  ))
                ) : (
                  <NotReviewText>
                    아직 리뷰가 없습니다! 리뷰를 채워주세요!
                  </NotReviewText>
                )}
              </>
            )}
          </>
        </FlexBox>
      </Wrapper>
    </Container>
  )
}

const Container = styled('div')({})

const Wrapper = styled('div')({})

const NotReviewText = styled(Typography)({
  color: ' #ABABAB',
  fontAmily: 'Pretendard',
  fontSize: ' 19.5px',
  fontWeight: 500,
  lineHeight: 'normal',
})

export default PerfumeReviewList
