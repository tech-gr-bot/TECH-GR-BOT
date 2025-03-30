let handler = m => m

handler.all = async function (m, { isBotAdmin }) {
//جب کوئی پیغام ہو جسے ڈیسک ٹاپ پر نہیں دیکھا جا سکتا ہے تو خودکار حذف
if (m.messageStubType === 68) {
let log = {
key: m.key,
content: m.msg,
sender: m.sender
}
await this.modifyChat(m.chat, 'clear', {
includeStarred: false
}).catch(console.log)
}}
export default handler
