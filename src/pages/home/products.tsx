import {SectionSubTitle, SectionTitle} from './index.style.js'
import styled from '@emotion/styled'
import FlexBox from '@layouts/flex-box.js'
import {Pagination, PaginationItem, Skeleton, Typography} from '@mui/material'
import PerfumeCharacteristics from './perfume-characteristics.js'
import {useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import instance from '@api/instance.js'
import {useQuery} from '@tanstack/react-query'

type Product = {
  id: number
  name: string
  thumbnail: string | null
  brandName: string
  strength: string
  duration: string
}

const getPerfumesByFavorite = async () => {
  const res = await instance.get(
    '/perfumes?sort=favorite&lastPerfumeId=8&pageSize=8',
  )
  return res.data
}

const Products = () => {
  const navigate = useNavigate()
  const [page, setPage] = useState<number>(0)
  const [perfumes, setPerfumes] = useState<Product[]>([])

  const {data, isLoading} = useQuery(['perfumes'], getPerfumesByFavorite)

  useEffect(() => {
    if (data && Array.isArray(data.content)) {
      setPerfumes(data.content)
    }
  }, [data])

  const handlePage = (_, page: number) => {
    setPage(page)
  }

  return (
    <ProductsContainer>
      <SectionTitle>사람들이 많이 찾은 향수</SectionTitle>
      <SectionSubTitle>
        사람들이 많이 검색한 향수 위주로 모아봤어요
      </SectionSubTitle>
      <ProductBox>
        {!isLoading &&
          perfumes.map(item => (
            <FlexBox
              key={item.id}
              direction="column"
              gap="24px"
              onClick={() => navigate(`/perfume/${item.id}`)}
            >
              <GridItem width={'282px'}>
                <Product>
                  <ProductImage src={item.thumbnail || 'images/perfume.png'} />
                  <FlexBox direction="column" alignItems="center" gap="8px">
                    <BrandName>{item.brandName}</BrandName>
                    <ProductName>{item.name}</ProductName>
                  </FlexBox>
                </Product>
              </GridItem>
              <PerfumeCharacteristics
                width={'282px'}
                firstValue={item.strength}
                secondValue={item.duration}
              />
            </FlexBox>
          ))}
        {(isLoading || !perfumes) &&
          perfumes.map(item => {
            return (
              <Skeleton
                key={item.id}
                sx={{borderRadius: 4, animationDuration: '1.2s'}}
                variant="rectangular"
                width={'282px'}
                height={'100%'}
              />
            )
          })}
      </ProductBox>
      <FlexBox justifyContent="center">
        <Pagination
          page={page}
          count={Math.ceil(perfumes.length / 6)}
          onChange={handlePage}
          variant="outlined"
          shape="rounded"
          size="large"
          hidePrevButton
          hideNextButton
          renderItem={item => <Item {...item} />}
          sx={{
            marginTop: 20,
            marginBottom: 20,
            '& .Mui-selected': {
              backgroundColor: '#D9D9D9',
            },
          }}
        />
      </FlexBox>
    </ProductsContainer>
  )
}

export default Products

const ProductsContainer = styled.div({
  marginTop: 136,
})

const ProductBox = styled.div({
  display: 'grid',
  gridTemplateColumns: `repeat(4, 1fr)`,
  gridTemplateRows: `repeat(2, 1fr))`,
  rowGap: '88px',
  columnGap: '24px',
})

const GridItem = styled.div<{width: string}>(({width}) => ({
  width: width,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const Product = styled.div({
  height: '426px',
  borderRadius: 16,
  border: '1px solid #EDEDED',
})

const ProductImage = styled.img({
  height: '341px',
  width: '100%',
  objectFit: 'cover',
})

const BrandName = styled(Typography)({
  fontSize: 14,
  color: '#131313',
})

const ProductName = styled(Typography)({
  fontSize: 18,
  fontWeight: '600',
  color: '#131313',
})

const Item = styled(PaginationItem)({
  backgroundColor: '#F1F1F5',
  outline: 'none',
  border: 'none',
  fontSize: 16,
  fontWeight: '500',
  marginRight: 10,
})
