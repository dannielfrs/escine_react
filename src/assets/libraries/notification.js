import toast from 'react-hot-toast'

export default function notification(content, type) {

    switch (type) {
        case 'success':
            toast.success(content)
            break
        case 'error':
            toast.error(content)
            break
        case 'info':
            toast(content)
            break
        default:
            toast(content)
            break
    }
}