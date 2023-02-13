<template>
    <div>
        <el-form label-width="70px" :model="formLabel" :rules="rules" ref="formRef">
            <el-form-item label="帐号" prop="name">
                <el-input v-model="formLabel.name"/>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="formLabel.password" show-password/>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue" 
import type {FormRules, ElForm} from 'element-plus'

const formRef = ref<InstanceType<typeof ElForm>>();

const formLabel = reactive({
    name: '',
    password: ''
})
const rules = reactive<FormRules>({
    name: [{
        required: true, message: '请输入用户名', trigger: 'blur'
    }],
    password: [
        {
            required: true, message: '密码不能为空', trigger: 'blur'
        },
        {
            min: 6, max: 10, message: '密码长度应在6-10位', trigger: 'blur'
        }
    ]
})

function handleLogin() {
    console.log(formLabel.name, formLabel.password);
}

defineExpose({
    handleLogin
})

</script>

<style lang="less" scoped>

</style>