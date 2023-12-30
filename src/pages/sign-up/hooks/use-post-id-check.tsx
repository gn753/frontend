import {
  postSignUpEmailDuplicationCheck,
  postSignUpIdDuplicationCheck,
} from 'src/store/server/auth/mutations'
import useMutation from 'src/store/server/use-mutation'

interface IfProps {
  success: string
  failed: string
}

const usePostIdCheck = ({success, failed}: IfProps) => {
  const {mutate: mutateCheckUserId} = useMutation({
    mutationFn: postSignUpIdDuplicationCheck,
    mutationKey: ['userIdCheck'],
    options: {
      onSuccess: () => alert(success),
      onError: () => alert(failed),
    },
  })

  const {mutate: checkEmailMutate, data: emailRes} = useMutation({
    mutationFn: postSignUpEmailDuplicationCheck,
    mutationKey: ['email'],
  })

  return {mutateCheckUserId, checkEmailMutate, emailRes}
}

export default usePostIdCheck
