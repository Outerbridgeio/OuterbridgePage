import axios from "axios"

export const SendMail = async (recipientMail, name, senderMail, content) => {
    const data = {
        recipientMail,
        name,
        senderMail,
        content
    }

    try {
        const res = await axios({
            method: "post",
            url: "/api/contact",
            headers: {
                "Content-Type": "application/json"
            },
            data
        })
        return res

    } catch (error) {
        return error
    }
}
//[1]