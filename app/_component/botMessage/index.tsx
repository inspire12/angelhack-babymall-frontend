

export function BotMessage({ message }: { message: string }) {
    return (
        <div className="mb-4 flex justify-end">
            <div className="bg-[#fff0d1] rounded-[20px] px-5 py-3 max-w-[368px]">
            <p className="text-[#4d4d4d] text-[13px] mb-2">
                {message}
            </p>
            </div>
        </div>
    )
}