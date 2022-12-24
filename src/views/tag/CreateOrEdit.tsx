import { defineComponent } from "vue"
import { useRoute } from "vue-router"
import { Button } from "../../components/Button"
import { FormItem, Form } from "../../components/Form"
import { Icon } from "../../components/Icon"
import { MainLayout } from "../../components/Layout/MainLayout"
import s from './CreateOrEdit.module.scss'

export const CreateOrEdit = defineComponent({
  setup(){
    const route = useRoute()
    const isEdit = route.params?.id
    return () => (<MainLayout>
      {{
        title: () => isEdit ? '标签详情' : '新建标签',
        icon: () => <Icon name='arrow-left' />,
        default: () => (
          <Form>
            <FormItem label='标签名' type='text' placeholder={'2到4个汉字'} border />
            <FormItem label='符号' type='category' border />
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