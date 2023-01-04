import { defineComponent, reactive, ref } from "vue";
import { Button } from "../../components/Button";
import { Form, FormItem } from "../../components/Form";
import { Icon } from "../../components/Icon";
import { MainLayout } from "../../components/Layout/MainLayout";
import { formValidate } from "../../utils/formValidate";
import type { Rules, FData } from '../../utils/formValidate'
import s from './index.module.scss'
import { login, sendvalidationCode } from "../../service/modules/login";
import { useBool } from "../../hooks/useBool";
import { useRoute, useRouter } from "vue-router";

export const Login = defineComponent({
  setup() {
    const router = useRouter()
    const route = useRoute()
    const formData = reactive<FData>({ email: '', code: '' })
    const errors = ref<{[k in keyof typeof formData]?: string[]}>({})
    const refValidationCode = ref()
    const { value: disableSendBtn, on, off } = useBool(false)
    const rules: Rules<typeof formData> = [
      { key: 'email', required: true, message: '邮箱地址不能为空' },
      { key: 'email', pattern: /.+@.+/, message: '邮箱地址格式不正确' },
      { key: 'code', required: true, message: '验证码不能为空' },
      { key: 'code', pattern: /[0-9]{6}/, message: '必须是6位数字' }
    ]

    const handleSendValidationCode = async() => {
      on()
      console.log(isValid({ email: formData.email }))
      if (!isValid({ email: formData.email })) return
      refValidationCode.value.startCountDown()
      await sendvalidationCode({ email: formData.email })
        .catch((error) => {
          handleError(error)
          // 调用失败
          throw error
        }).finally(off)
    }

    const handleError = (error: any) => {
      if (error.response.status === 422) {
        Object.assign(errors.value, error.response.data.errors)
      }
    }

    const hanldeSubmit = async () => {
      if (!isValid(formData)) return
      const response = await login(formData).catch(error => {
        handleError(error)
        // 调用失败
        throw error
      })
      localStorage.setItem('jwt', response.data.jwt)
      const redirectTo = route.query.redirectTo as string
      router.push(redirectTo || '/')
    }

    const isValid = (data: FData, validateSingleField = false) => {
      const _errors = formValidate(data, rules)
      Object.assign(errors.value, _errors)
      if (Object.keys(_errors).length) {
        Object.keys(errors.value).map(key => {
          if (_errors[key]) {
            errors.value[key] = _errors[key]
          } else {
            delete errors.value[key]
          }
        })
        return false
      }
      errors.value = {}
      return true
    }

    return () => <MainLayout>
      {{
        title: () => '登录',
        icon: () => <Icon name='arrow-left' />,
        default: () => <>
          <header class={s.logo}>
            <Icon class={s.icon} name='mangosteen' />
            <h1 class={s.text}>乐事记账</h1>
          </header>
          <Form onSubmit={hanldeSubmit}>
            <FormItem
              v-model={formData.email}
              type="text"
              error={errors.value.email?.[0]}
              label='邮箱地址'
              onBlur={() => isValid({ email: formData.email })}
              border
              placeholder="请输入邮箱，然后点击验证码"
            />
            <FormItem
              v-model={formData.code}
              ref={refValidationCode}
              type='validationCode'
              disabled={disableSendBtn}
              label='验证码'
              onBlur={() => isValid({ code: formData.code })}
              onClick={handleSendValidationCode}
              error={errors.value.code?.[0]}
              placeholder="六位数字"
            />
            <FormItem style={{ paddingTop: '96px' }}>
              <Button type='submit'>登录</Button>
            </FormItem>
          </Form>
        </>
      }}
    </MainLayout>
  }
})