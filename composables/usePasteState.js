export const usePasteState = () => {
  const textInput = useState('textInput', () => '')
  const pasteContent = useState('pasteContent', () => ({
    id: '',
    content: '',
    is_owner: false,
    is_url: false,
  }))
  const isEdit = useState('isEdit', () => false)

  return {
    textInput,
    pasteContent,
    isEdit,
  }
}
