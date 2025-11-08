

function UserMessage({ message }: { message: string }) {
  return (
    <div className="mb-4 flex justify-start">
              <div className="bg-[#ff9900] rounded-[20px] px-5 py-3 max-w-[240px]">
                <p className="text-white text-[13px]">
                  {message}
                </p>
        </div>
    </div>

  );
}

export default UserMessage;