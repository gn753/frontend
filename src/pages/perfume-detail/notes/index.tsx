import {useState} from 'react'

import FlexBox from '@layouts/flex-box'
import {Box, Tab, Tabs, Typography, styled} from '@mui/material'
import NoteCarouselItem from './Note-carousel-item'

interface NotesProps {
  topNotes: notesType[]
  middleNotes: notesType[]
  baseNotes: notesType[]
}

export type notesType = {
  id: number
  name: string
  thumbnailUrl: string
}

type CategoryType = '탑노트' | '미들노트' | '베이스노트'

const CATEGORIES: CategoryType[] = ['탑노트', '미들노트', '베이스노트']

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const Notes = ({topNotes, middleNotes, baseNotes}: NotesProps) => {
  const [activeTab, setActiveTab] = useState<string>('탑노트')
  const [value, setValue] = useState<number>(0)

  const handleTabsChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(() => {
      setActiveTab(CATEGORIES[newValue])
      return newValue
    })
  }

  return (
    <>
      <NotesHeader>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <FlexBox gap="21px">
            <StyledTabs
              value={value}
              onChange={handleTabsChange}
              aria-label="basic tabs example"
            >
              {CATEGORIES?.map((category, index) => (
                <StyledTab label={category} {...a11yProps(index)} key={index} />
              ))}
            </StyledTabs>
          </FlexBox>
        </Box>
      </NotesHeader>

      <Wrapper>
        <FlexBox
          direction=""
          justifyContent="space-around"
          alignItems="center"
          style={{
            position: 'relative',
          }}
        >
          {activeTab === '탑노트' &&
            (topNotes?.length <= 4 ? (
              topNotes?.map(note => (
                <FlexBox
                  direction="column"
                  alignItems="center"
                  style={{
                    textAlign: 'center',
                    width: '100%',
                  }}
                  key={note?.name}
                >
                  <img src="/images/perfume-detail/자몽.png" alt="note-img" />
                  <NotesName>{note?.name}</NotesName>
                </FlexBox>
              ))
            ) : (
              <NoteCarouselItem notes={topNotes} />
            ))}

          {activeTab === '미들노트' &&
            (middleNotes?.length <= 4 ? (
              middleNotes?.map(note => (
                <FlexBox
                  direction="column"
                  alignItems="center"
                  style={{
                    textAlign: 'center',
                  }}
                  key={note?.name}
                >
                  <img src="/images/perfume-detail/자몽.png" alt="note-img" />
                  <NotesName>{note?.name}</NotesName>
                </FlexBox>
              ))
            ) : (
              <NoteCarouselItem notes={middleNotes} />
            ))}

          {activeTab === '베이스노트' &&
            (baseNotes?.length <= 4 ? (
              baseNotes?.map(note => (
                <FlexBox
                  direction="column"
                  alignItems="center"
                  style={{
                    textAlign: 'center',
                  }}
                  key={note?.name}
                >
                  <img src="/images/perfume-detail/자몽.png" alt="note-img" />
                  <NotesName>{note?.name}</NotesName>
                </FlexBox>
              ))
            ) : (
              <NoteCarouselItem notes={baseNotes} />
            ))}
        </FlexBox>
      </Wrapper>
    </>
  )
}

const NotesHeader = styled('div')({
  fontSize: '12px',
})

const StyledTabs = styled(Tabs)({
  '& .css-1i6dhku-MuiTabs-indicator': {
    backgroundColor: '#191919',
  },
})

const StyledTab = styled(Tab)({
  color: '#191919',
  fontWeight: '500',

  '&.Mui-selected': {
    color: '#191919',
    fontWeight: '600',
  },
})

const Wrapper = styled('div')({
  marginTop: '21.38px',
  marginBottom: '31.9px',

  '& img': {
    width: '50px',
    borderRadius: '50%',
  },
})

const NotesName = styled(Typography)({
  fontFamily: 'AritaBuri !important',
  fontWeight: '500',
  fontSize: '12px',
  color: '#000',
  marginTop: '13px',
  width: '100px',
})

export default Notes
