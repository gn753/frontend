import {UseFormReset} from 'react-hook-form'
import {FormDataType} from '../type'
import {useMutation} from '@tanstack/react-query'
import {patchPassword} from '@pages/account/queryfn'
import {IfPasswordPatch} from 'types/auth.interface'

const usePostPw = (reset: UseFormReset<FormDataType>) => {
  const patchPw = useMutation((d: IfPasswordPatch) => patchPassword(d), {
    onSuccess: () => {
      alert('비밀번호 변경 성공')
    },
    onError: () => {
      alert('비밀변호 변경 오류')
    },
    useErrorBoundary: false,
  })

  const onSubmit = (data: FormDataType) => {
    if (data.newPassword !== data.confirmPassword) {
      alert('새 비밀번호와 새 비밀번호 확인이 다릅니다.')
    } else {
      patchPw.mutate({
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      })
    }
    reset()
  }

  return {onSubmit}
}

export default usePostPw
