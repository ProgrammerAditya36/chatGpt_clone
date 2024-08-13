function App() {
    return (
        <>
            <div className="app flex bg-[#343541]">
                <section className="side-bar flex h-screen w-[244px] flex-col justify-between bg-[#202123]">
                    <button className="m-[10px] rounded-[5px] border-[0.5px] border-[rgba(255,255,255,0.5)] bg-transparent p-[10px]">
                        + New Chat
                    </button>
                    <ul className="history m-[10px] h-full p-[10px]">
                        <li className="cursor-pointer px-0 py-[15px]">
                            Sample
                        </li>
                    </ul>
                    <nav className="m-[10px] border-t-[0.5px] border-[rgba(255,255,255,0.5)] p-[10px]">
                        <p>Made by Aditya</p>
                    </nav>
                </section>
                <section className="main flex h-screen w-full flex-col items-center justify-between text-center">
                    <h1>My GPT</h1>
                    <ul className="feed"></ul>
                    <div className="bottom-section flex w-full flex-col items-center justify-center">
                        <div className="input-container relative w-full max-w-[650px]">
                            <input
                                type="text"
                                className="relative w-full rounded-[5px] border-none bg-[rgba(255,255,255,0.05)] px-[15px] py-3 text-[20px] text-[rgba(255,255,255,0.5)] focus:outline-none"
                                style={{
                                    boxShadow:
                                        "rgba(0,0,0,0.05) 0 54px 55px, rgba(0,0,0,0.05) 0 -12px 30px, rgba(0,0,0,0.05) 0 4px 6px, rgba(0,0,0,0.05) 0 12px 3px, rgba(0,0,0,0.05) 0 -3px 1px, rgba(0,0,0,0.05) 0 8px 1px, rgba(0,0,0,0.05) 0 -3px 5px",
                                }}
                            />
                            <div
                                id="submit"
                                className="absolute bottom-[15px] right-[20px] cursor-pointer"
                            >
                                ➢
                            </div>
                        </div>
                        <p className="info p-[10px] text-[11px] text-[rgba(255,255,255,0.5)]">
                            ChatGPT Mar14 Version 1.0.0
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}

export default App;
