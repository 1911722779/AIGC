// console.log('后端服务启动了')
// openai 可提供大模型服务
// require 关键字 首字母大写是类
const OpenAI = require('openai');
// 实例化 OpenAI 配置
const client = new OpenAI({
    // apiKey：凭证、密钥。算力收费 token
    apiKey:'sk-0icNotaB0sMgI1xQmk5wAV4iXbgHSH9NV3zmAdI1OJPxFPBQ',
    baseURL:'http://api.chatanywhere.tech/v1'
})
// 入口主函数

// main函数内部会有异步任务 async + await
async function main(){
    // 和AI LLM chat一下 从编程思维 -> AI编程思维 -> AIGC -> AGI
    // client 是 openai 对象 chat 聊天 完成
    // LLM 是在远程运行 await 
    // 字符串模板 提示词
const prompt = `
    
`

    const chatCompletion = await client.chat.completions.create({
        model:'gpt-3.5-turbo', // 适合聊天的模型
        messages: [
            {
                role:'user',
                content:prompt
            }
        ]
    })
    console.log(chatCompletion.choices);
}
main();