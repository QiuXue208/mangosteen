import { defineComponent, reactive, ref } from "vue";
import { Button } from "../../components/Button";
import { Form, FormItem } from "../../components/Form";
import { Icon } from "../../components/Icon";
import { MainLayout } from "../../components/Layout/MainLayout";
import { formValidate } from "../../utils/formValidate";
import type { Rules } from '../../utils/formValidate'
import s from './index.module.scss'

export const Login = defineComponent({
  setup() {
    const formData = reactive({ email: '', code: '' })
    const errors = ref<{[k in keyof typeof formData]?: string[]}>({})
    const rules: Rules<typeof formData> = [
      { key: 'email', required: true, message: '必填' },
      { key: 'email', pattern: /.+@.+/, message: '必须是邮箱地址' },
      { key: 'code', required: true, message: '必填' },
      { key: 'code', pattern: /[0-9]{6}/, message: '必须是6位数字' }
    ]

    const hanldeSubmit = () => {
      console.log(1)
      const _errors = formValidate(formData, rules)
      errors.value = _errors
      if (Object.keys(_errors).length) return
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
              border
              placeholder="请输入邮箱，然后点击验证码"
            />
            <FormItem
              v-model={formData.code}
              type='validationCode'
              label='验证码'
              error={errors.value.code?.[0]}
              placeholder="六位数字"
            />
            <FormItem style={{ paddingTop: '96px' }}>
              <Button>登录</Button>
            </FormItem>
          </Form>
        </>
      }}
    </MainLayout>
  }
})