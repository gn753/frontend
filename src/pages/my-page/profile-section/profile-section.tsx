import {Avatar, Box, styled} from '@mui/material'
import {useQuery} from '@tanstack/react-query'
import {fetchCurUser, fetchMytype, fetchFollowCount} from './queryfn'
import ProfileInfo from './profile-info'
import ProfileType from './profile-type'
import {followQueryKeys, userQueryKeys} from 'src/react-query-keys/user.keys'

interface proptype {
  userId: string
}

const ProfileSection = ({userId}: proptype) => {
  const {data: curUser} = useQuery(userQueryKeys.user(userId), () =>
    fetchCurUser(userId),
  )
  const {data: followCount} = useQuery(followQueryKeys.follows(userId), () =>
    fetchFollowCount(userId),
  )
  const {data: mytype} = useQuery(userQueryKeys.user(userId), () =>
    fetchMytype(),
  )

  return (
    <Container>
      {curUser !== undefined && <ProfileAvatar src={curUser.thumbnail} />}
      {curUser !== undefined && followCount !== undefined && (
        <ProfileInfo
          userId={curUser.id}
          username={curUser.username}
          follower={followCount.followerCount}
          following={followCount.followingCount}
        />
      )}
      {mytype && <ProfileType data={mytype} />}
    </Container>
  )
}

export default ProfileSection

const Container = styled(Box)(() => ({
  width: '100%',
  borderRadius: '20px',
  border: 'solid 1px #dbdbdb',
  height: '310px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 49px 0 36px',
}))

const ProfileAvatar = styled(Avatar)(() => ({
  width: '121px',
  height: '121px',
}))
