import { defineComponent, reactive, ref } from "vue"
import { useRoute } from "vue-router"
import { Button } from "../../components/Button"
import { FormItem, Form } from "../../components/Form"
import { Icon } from "../../components/Icon"
import { MainLayout } from "../../components/Layout/MainLayout"
import { formValidate,  } from "../../utils/formValidate"
import type { Rules } from '../../utils/formValidate'
import s from './CreateOrEdit.module.scss'

export const CreateOrEdit = defineComponent({
  setup(){
    const route = useRoute()
    const isEdit = route.params?.id

    const rules: Rules<typeof formValue> = [
      { key: 'label', required: true, message: '必填' },
      { key: 'label', pattern: /^.{1,4}$/, message: '只能填1到4个字符' },
    ]
    const formValue = reactive({
      label: '',
      category: ''
    })
    const errors = ref<{[k in keyof typeof formValue]?: string[]}>({})

    const onSubmit = (e: Event) => {
      const _errors = formValidate(formValue, rules)
      console.log(_errors)
      if (Object.keys(_errors).length) {
        errors.value = _errors
        return
      }
    }
    return () => (<MainLayout>
      {{
        title: () => isEdit ? '标签详情' : '新建标签',
        icon: () => <Icon name='arrow-left' />,
        default: () => (
          <Form onSubmit={onSubmit}>
            <FormItem
              label='标签名'
              v-model={formValue.label}
              error={errors.value?.['label']?.[0]}
              type='text' placeholder={'2到4个汉字'}
              border
            />
            <FormItem
              label={<div class={s.category}>
                <label >符号</label>
                {formValue.category && <div class={s.icon_wrapper}><Icon class={s.icon} name={formValue.category} /></div>}
              </div>}
              v-model={formValue.category}
              type='category'
              border
            />
            <FormItem>
              <p class={s.tips}>记账时长按标签即可进行编辑</p>
            </FormItem>
            <FormItem>
              <Button class={[s.button]}>{isEdit ? '保存' : '确定'}</Button>
            </FormItem>
            {isEdit && <div class={s.actions}>
              <Button class={[s.button]} color='danger'>删除标签</Button>
              <Button class={[s.button]} color='danger'>删除标签和记账</Button>
            </div>}
          </Form>
        )
      }}
    </MainLayout>)
  }
})