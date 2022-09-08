interface IMessageProps {
  message: string
  error?: boolean
}
const Message = ({ message, error }: IMessageProps) => {
  return (
    <div className="center">
      <h4 className={`h4 ${error ? 'text-red-500' : 'text-purple-500'}`}>
        {message}
      </h4>
    </div>
  )
}

export default Message
